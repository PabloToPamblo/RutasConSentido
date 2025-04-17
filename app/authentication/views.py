from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from google.oauth2 import id_token
from google.auth.transport import requests as google_requests
from django.contrib.auth import get_user_model
from google.auth.exceptions import GoogleAuthError
from rest_framework_simplejwt.tokens import RefreshToken
import requests
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

User = get_user_model()

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

class GoogleAuthView(APIView):
    def post(self, request):
        id_token_value = request.data.get('id_token')

        if not id_token_value:
            return Response({'error': 'ID token is required.'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            idinfo = id_token.verify_oauth2_token(id_token_value, google_requests.Request())

            email = idinfo.get('email')
            name = idinfo.get('name')
            sub = idinfo.get('sub')  # Google user ID

            user, created = User.objects.get_or_create(email=email, defaults={'username': name})

            refresh = RefreshToken.for_user(user)

            return Response({
                'tokens': {
                    'access': str(refresh.access_token),
                    'refresh': str(refresh),
                }
            })

        except ValueError as e:
            return Response({'error': 'Invalid ID token'}, status=status.HTTP_400_BAD_REQUEST)
        
YOUTUBE_API_URL = "https://youtube.googleapis.com/youtube/v3/subscriptions"
CHANNEL_ID = "UCUwYRTZxMKQQb56aXAMGu7Q" 

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def check_youtube_subscription(request):
    access_token = request.data.get("access_token")
    headers = {"Authorization": f"Bearer {access_token}"}
    params = {
        "part": "snippet",
        "mine": "true",
        "maxResults": 50
    }

    yt_response = requests.get(YOUTUBE_API_URL, headers=headers, params=params)

    if yt_response.status_code == 200:
        data = yt_response.json()
        for item in data.get("items", []):
            subscribed_channel_id = item["snippet"]["resourceId"]["channelId"]
            if subscribed_channel_id == CHANNEL_ID:
                user = request.user
                user.profile.points += 1
                user.profile.save()

                return Response({"subscribed": True, "points_added": 1})

        return Response({"subscribed": False})

    return Response({
        "error": "YouTube API error",
        "status_code": yt_response.status_code,
        "message": yt_response.text
    }, status=yt_response.status_code)
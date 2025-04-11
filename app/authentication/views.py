from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from google.oauth2 import id_token
from google.auth.transport import requests
from django.contrib.auth import get_user_model
from google.auth.exceptions import GoogleAuthError
from rest_framework_simplejwt.tokens import RefreshToken

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
            idinfo = id_token.verify_oauth2_token(id_token_value, requests.Request())

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
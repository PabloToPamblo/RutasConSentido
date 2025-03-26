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
        token = request.data.get("id_token")

        if not token:
            return Response({"detail": "Missing id_token"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            idinfo = id_token.verify_oauth2_token(token, requests.Request())

            # Extraer datos desde Google
            email = idinfo["email"]
            username = idinfo.get("name", email.split("@")[0])
            avatar = idinfo.get("picture", "")
            google_id = idinfo.get("sub")

            # Buscar o crear el usuario
            user, created = User.objects.get_or_create(email=email, defaults={
                "username": username,
                "avatar_url": avatar,
                "google_id": google_id,
            })

            # Actualizar avatar si ha cambiado
            if not created and user.avatar_url != avatar:
                user.avatar_url = avatar
                user.save()

            tokens = get_tokens_for_user(user)

            return Response({
                "message": "User authenticated",
                "username": user.username,
                "email": user.email,
                "avatar": user.avatar_url,
                "google_id": user.google_id,
                "tokens": tokens
                }, status=status.HTTP_200_OK)

        except (ValueError, GoogleAuthError):
            return Response({"error": "Invalid token"}, status=400)
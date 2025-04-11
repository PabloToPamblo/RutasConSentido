from django.urls import path
from .views import GoogleAuthView
from rest_framework_simplejwt.views import (
    TokenRefreshView,  
)

urlpatterns = [
    path('google/', GoogleAuthView.as_view(), name='google-auth'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # REFRESH TOKEN
]
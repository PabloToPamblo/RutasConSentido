from django.urls import path
from .views import GoogleAuthView, check_youtube_subscription
from rest_framework_simplejwt.views import (
    TokenRefreshView,  
)

urlpatterns = [
    path('google/', GoogleAuthView.as_view(), name='google-auth'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # REFRESH TOKEN
    path('youtube/check-subscription/', check_youtube_subscription),
]
from django.urls import path
from .views import AchievementListAPIView

urlpatterns = [
    path('', AchievementListAPIView.as_view(), name='achievement-list'),
]
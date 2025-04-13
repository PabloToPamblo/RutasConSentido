from rest_framework import generics
from .models import Achievement
from .serializers import AchievementSerializer

class AchievementListAPIView(generics.ListAPIView):
    queryset = Achievement.objects.all()
    serializer_class = AchievementSerializer
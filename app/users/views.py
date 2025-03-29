from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .serializers import UserProfileSerializer, UserProfileUpdateSerializer, UserListSerializer, AchievementSerializer
from rest_framework import status
from .models import UserProfile, Achievement

class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserProfileSerializer(request.user)
        return Response(serializer.data)

class UserProfileUpdateView(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request):
        serializer = UserProfileUpdateSerializer(request.user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class UserListView(APIView):
    permission_classes = [IsAdminUser]

    def get(self, request):
        users = UserProfile.objects.all()
        serializer = UserListSerializer(users, many=True)
        return Response(serializer.data)
    
class AchievementListView(ListAPIView):
    queryset = Achievement.objects.all()
    serializer_class = AchievementSerializer
    permission_classes = []  # Pública
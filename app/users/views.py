from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .serializers import UserProfileSerializer, UserProfileUpdateSerializer, UserListSerializer, AchievementSerializer, VideoActionSerializer, VideoSerializer
from rest_framework import status
from .models import UserProfile, Achievement, VideoAction, Video, UserVideoAction
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404


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

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def listar_videos_con_acciones(request):
    videos = Video.objects.all().order_by('-created_at')
    serializer = VideoSerializer(videos, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def realizar_accion(request, video_id):
    action_id = request.data.get("action_id")
    if not action_id:
        return Response({"error": "Action ID is required."}, status=400)

    action = get_object_or_404(VideoAction, id=action_id, video_id=video_id)

    already_done = UserVideoAction.objects.filter(user=request.user, video_action=action).exists()
    if already_done:
        return Response({"error": "Action already completed."}, status=400)

    UserVideoAction.objects.create(user=request.user, video_action=action)
    print("Usuario:", request.user)
    print("Tipo:", type(request.user))
    print("Puntos actuales:", request.user.points)
    request.user.points += action.points
    request.user.save()

    return Response({
        "success": True,
        "points": action.points,
        "message": f"{action.action_name} registrada y {action.points} puntos sumados."
    })
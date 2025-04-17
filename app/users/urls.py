from django.urls import path
from .views import UserProfileView, UserProfileUpdateView, UserListView, AchievementListView, realizar_accion, listar_videos_con_acciones

urlpatterns = [
    path('profile/', UserProfileView.as_view(), name='user-profile'),
    path('update/', UserProfileUpdateView.as_view(), name='user-update'),
    path('list/', UserListView.as_view(), name='user-list'),
    path("achievements/", AchievementListView.as_view(), name="achievement-list"),
    path('videos/', listar_videos_con_acciones, name='listar_videos'),
    path('videos/<int:video_id>/acciones/', realizar_accion, name='realizar_accion'),
]
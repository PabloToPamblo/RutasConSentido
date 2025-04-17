from django.contrib.auth.models import AbstractUser
from django.db import models

class UserProfile(AbstractUser):
    points = models.IntegerField(default=0)
    bio = models.TextField(blank=True, null=True)
    avatar_url = models.URLField(blank=True, null=True)
    google_id = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.username
    
    class Meta:
        app_label = 'users'  # 👈 esto es la clave

class Achievement(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    points_required = models.IntegerField()
    image_url = models.URLField()

    def __str__(self):
        return self.name
    
class UserAchievement(models.Model):
    user = models.ForeignKey("UserProfile", on_delete=models.CASCADE, related_name="user_achievements")
    achievement = models.ForeignKey("Achievement", on_delete=models.CASCADE)
    unlocked_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ("user", "achievement")

    def __str__(self):
        return f"{self.user.username} - {self.achievement.name}"

class Video(models.Model):
    title = models.CharField(max_length=255)
    youtube_url = models.URLField()
    thumbnail_url = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class VideoAction(models.Model):
    video = models.ForeignKey(Video, on_delete=models.CASCADE)
    action_name = models.CharField(max_length=255)  # Ej: "He dado like"
    points = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"{self.action_name} - {self.video.title}"

class UserVideoAction(models.Model):
    user = models.ForeignKey("users.UserProfile", on_delete=models.CASCADE)
    video_action = models.ForeignKey(VideoAction, on_delete=models.CASCADE)
    completed_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'video_action')

    def __str__(self):
        return f"{self.user.username} - {self.video_action.action_name} ({self.video_action.video.title})"
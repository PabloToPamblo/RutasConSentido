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
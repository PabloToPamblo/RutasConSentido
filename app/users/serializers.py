from rest_framework import serializers
from .models import UserProfile, UserAchievement, Achievement

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['id', 'username', 'email', 'points', 'bio', 'avatar_url', 'google_id']
        read_only_fields = ['id', 'points', 'google_id']

class UserProfileUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['bio', 'avatar_url']

class UserListSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['id', 'username', 'email', 'points']

class UserAchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAchievement
        fields = ['achievement', 'unlocked_at']

class UserProfileSerializer(serializers.ModelSerializer):
    achievements = serializers.SerializerMethodField()

    class Meta:
        model = UserProfile
        fields = ['username', 'email', 'points', 'achievements']

    def get_achievements(self, obj):
        return [
            {
                "title": ua.achievement.title,
                "description": ua.achievement.description,
                "image_url": ua.achievement.image_url,
                "unlocked_at": ua.unlocked_at
            }
            for ua in obj.user_achievements.all()
        ]
    
class AchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievement
        fields = ['id', 'title', 'description', 'points', 'image']


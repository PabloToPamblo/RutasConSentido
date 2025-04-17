from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Video, VideoAction, UserVideoAction, UserProfile

@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    list_display = ('title', 'youtube_url', 'created_at')
    search_fields = ('title',)


@admin.register(VideoAction)
class VideoActionAdmin(admin.ModelAdmin):
    list_display = ('video', 'action_name', 'points')
    search_fields = ('video__title', 'action_name')
    list_filter = ('video',)


@admin.register(UserVideoAction)
class UserVideoActionAdmin(admin.ModelAdmin):
    list_display = ('user', 'video_action', 'completed_at')
    search_fields = ('user__username', 'video_action__action_name')
    list_filter = ('video_action__video',)


@admin.register(UserProfile)
class CustomUserAdmin(admin.ModelAdmin):
    model = UserProfile
    list_display = ('username', 'email', 'points', 'is_staff', 'is_active')
    list_filter = ('is_staff', 'is_active', 'points')
    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('points', 'bio', 'avatar_url', 'google_id')}),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        (None, {'fields': ('points', 'bio', 'avatar_url', 'google_id')}),
    )
    search_fields = ('username', 'email', 'google_id')
    ordering = ('username',)
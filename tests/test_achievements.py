"""
import pytest
from django.utils.timezone import now
from rest_framework.test import APIClient
from app.users.models import Achievement, UserProfile, UserAchievement

@pytest.mark.django_db
def test_create_achievement():
    achievement = Achievement.objects.create(
        name="First Like",
        description="Given when the user likes their first YouTube video.",
        points_required=10,
        image_url="https://example.com/badges/first-like.png"
    )

    assert achievement.name == "First Like"
    assert achievement.points_required == 10
    assert "likes their first" in achievement.description

@pytest.mark.django_db
def test_user_can_unlock_achievement():
    user = UserProfile.objects.create_user(username="achiever", email="achiever@test.com", password="123456")
    achievement = Achievement.objects.create(
        name="First Share",
        description="Shared a video for the first time.",
        points_required=5,
        image_url="https://example.com/badges/share.png"
    )

    unlock = UserAchievement.objects.create(user=user, achievement=achievement)

    assert unlock.user == user
    assert unlock.achievement == achievement
    assert unlock.unlocked_at is not None
"""
"""
@pytest.mark.django_db
def test_list_all_achievements():
    client = APIClient()

    Achievement.objects.create(
        title="Super Like",
        description="Given for liking 5 videos",
        points=20,
        image="https://example.com/badge/superlike.png"
    )

    Achievement.objects.create(
        title="Helpful Hero",
        description="Shared your first video",
        points=10,
        image="https://example.com/badge/helper.png",
    )

    response = client.get("/api/users/achievements/")

    assert response.status_code == 200
    assert len(response.data) == 2
    assert response.data[0]["title"] in ["Super Like", "Helpful Hero"]

"""

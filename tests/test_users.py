import pytest
from rest_framework.test import APIClient
from django.contrib.auth import get_user_model
from django.db import IntegrityError
from app.users.models import UserProfile , Achievement, UserAchievement

User = get_user_model()

# CREATING USER
@pytest.mark.django_db
def test_create_user():
    user = User.objects.create_user(username="testuser", password="testpass123")
    assert user.username == "testuser"
    assert user.check_password("testpass123")
    assert str(user) == "testuser"

# TESTING ABOUT GOOGLE ACCOUNTS AND PROFILES
@pytest.mark.django_db
def test_create_user_from_google_payload():
    payload = {
        "username": "pablitogoogle",
        "email": "pablo@gmail.com",
        "avatar_url": "https://img.googleusercontent.com/avatar123",
        "google_id": "google-oauth2|11223344"
    }

    user = User.objects.create_user(
        username=payload["username"],
        email=payload["email"],
        password="external123"
    )

    # Falla porque estos campos aún no existen
    user.avatar_url = payload["avatar_url"]
    user.google_id = payload["google_id"]
    user.save()

    user.refresh_from_db()

    assert user.email == payload["email"]
    assert user.username == payload["username"]
    assert user.avatar_url == payload["avatar_url"]
    assert user.google_id == payload["google_id"]

@pytest.mark.django_db
def test_authenticated_user_can_get_profile():
    client = APIClient()
    user = User.objects.create_user(username="pablito", email="pablo@test.com", password="123456")
    client.force_authenticate(user=user)

    response = client.get("/api/users/profile/")

    assert response.status_code == 200
    assert response.data["username"] == "pablito"
    assert response.data["email"] == "pablo@test.com"

@pytest.mark.django_db
def test_user_can_update_profile():
    client = APIClient()
    user = User.objects.create_user(username="updateuser", email="up@test.com", password="123456")
    client.force_authenticate(user=user)

    payload = {
        "bio": "I love DevSecOps!",
        "avatar_url": "https://avatars.example.com/pablito.jpg"
    }

    response = client.put("/api/users/update/", payload)

    assert response.status_code == 200
    assert response.data["bio"] == "I love DevSecOps!"
    assert response.data["avatar_url"] == "https://avatars.example.com/pablito.jpg"

# TESTING FOR ADMIN PANNEL
@pytest.mark.django_db
def test_admin_can_see_all_users():
    client = APIClient()

    admin = User.objects.create_superuser(username="admin", email="admin@test.com", password="admin123")
    User.objects.create_user(username="user1", email="u1@test.com", password="123")
    User.objects.create_user(username="user2", email="u2@test.com", password="123")

    client.force_authenticate(user=admin)
    response = client.get("/api/users/list/")

    assert response.status_code == 200
    assert len(response.data) == 3  # incluye admin + 2 users

@pytest.mark.django_db
def test_normal_user_cannot_see_all_users():
    client = APIClient()

    user = User.objects.create_user(username="normal", email="n@test.com", password="123")
    client.force_authenticate(user=user)
    response = client.get("/api/users/list/")

    assert response.status_code == 403

# TESTING ABOUT POINTS IN DJANGO USERS

@pytest.mark.django_db
def test_user_starts_with_zero_points():
    user = User.objects.create_user(username="pablito", password="rutas123")
    assert user.points == 0  # <- Este test puede fallar si el modelo no tiene 'points'

@pytest.mark.django_db
def test_user_can_gain_points():
    user = UserProfile.objects.create_user(username="pointsuser2", email="p2@test.com", password="1234")
    user.points += 10
    user.save()
    updated = UserProfile.objects.get(pk=user.pk)
    assert updated.points == 10

# Testing User Workflow Properly
"""
@pytest.mark.django_db
def test_profile_response_includes_points_and_achievements():
    client = APIClient()

    user = UserProfile.objects.create_user(username="logro", email="logro@test.com", password="123")
    user.points = 50
    user.save()

    ach = Achievement.objects.create(name="Starter", description="Starter badge", points_required=10, image_url="img")
    UserAchievement.objects.create(user=user, achievement=ach)

    client.force_authenticate(user=user)
    response = client.get("/api/users/profile/")

    assert response.status_code == 200
    assert response.data["points"] == 50
    assert len(response.data["achievements"]) == 1
    assert response.data["achievements"][0]["name"] == "Starter"

"""
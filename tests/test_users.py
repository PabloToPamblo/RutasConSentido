import pytest
from django.contrib.auth import get_user_model
from django.db import IntegrityError

User = get_user_model()

@pytest.mark.django_db
def test_create_user():
    user = User.objects.create_user(username="testuser", password="testpass123")
    assert user.username == "testuser"
    assert user.check_password("testpass123")
    assert str(user) == "testuser"

@pytest.mark.django_db
def test_user_starts_with_zero_points():
    user = User.objects.create_user(username="pablito", password="rutas123")
    assert user.points == 0  # <- Este test puede fallar si el modelo no tiene 'points'

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
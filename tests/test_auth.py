import pytest
from rest_framework.test import APIClient
from django.contrib.auth import get_user_model
from unittest import mock
from google.auth.exceptions import GoogleAuthError

User = get_user_model()

@pytest.mark.django_db
@mock.patch("app.authentication.views.id_token.verify_oauth2_token")
def test_google_login_creates_user(mock_verify):
    client = APIClient()

    # Simulamos lo que devolvería Google
    mock_verify.return_value = {
        "email": "testuser@gmail.com",
        "name": "Test User",
        "picture": "https://example.com/avatar.jpg",
        "sub": "google-oauth2|123456789"
    }

    payload = {
        "id_token": "fake-token"
    }

    response = client.post("/api/auth/google/", data=payload)

    assert response.status_code == 200
    assert response.data["email"] == "testuser@gmail.com"
    assert User.objects.filter(email="testuser@gmail.com").exists()

import pytest
from rest_framework.test import APIClient
from unittest import mock
from google.auth.exceptions import GoogleAuthError

@mock.patch("app.authentication.views.id_token.verify_oauth2_token")
def test_google_login_invalid_token_returns_400(mock_verify, client):
    mock_verify.side_effect = GoogleAuthError("Invalid token")  # Simula el error

    payload = {"id_token": "fake-invalid-token"}
    response = client.post("/api/auth/google/", data=payload, content_type="application/json")

    assert response.status_code == 400
    assert response.json()["error"] == "Invalid token"

@pytest.mark.django_db
@mock.patch("app.authentication.views.id_token.verify_oauth2_token")
def test_google_login_returns_jwt_tokens(mock_verify):
    client = APIClient()

    # Simular respuesta de Google
    mock_verify.return_value = {
        "email": "tokenuser@gmail.com",
        "name": "Token User",
        "picture": "https://avatars.com/token.jpg",
        "sub": "google-oauth2|987654321"
    }

    payload = {
        "id_token": "fake-google-token"
    }

    response = client.post("/api/auth/google/", data=payload)

    assert response.status_code == 200
    data = response.data

    # Validar datos de usuario
    assert data["email"] == "tokenuser@gmail.com"
    assert data["username"] == "Token User"
    assert "tokens" in data
    assert "access" in data["tokens"]
    assert "refresh" in data["tokens"]

    # Validar formato JWT (tienen 3 partes separadas por puntos)
    assert data["tokens"]["access"].count(".") == 2
    assert data["tokens"]["refresh"].count(".") == 2
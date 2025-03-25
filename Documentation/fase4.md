# ✅ FASE 4 – Google OAuth2 Authentication

## 🎯 Objective

Implement a **real authentication system using Google Login**, allowing users to log in with their Google account, and automatically create or retrieve their user profile in the database.

---

## 🔐 What We Did

### 🔸 Integrated `google.oauth2.id_token` to validate Google-issued tokens
- No need for third-party OAuth libraries — we verify tokens directly with Google
- Uses the official `google-auth` library
- Validates `id_token` received from frontend via Google Sign-In

### 🔸 Created a backend view to handle `/api/auth/google/`
- Receives `POST` requests with a JSON body containing `id_token`
- Validates the token with Google
- Extracts user data: `email`, `name`, `picture`, `sub (google_id)`
- Creates or retrieves a `UserProfile` in the database
- Updates avatar if it has changed
- Returns JSON response with basic user data

### 🔸 Connected everything to a real Google OAuth Client
- Google Cloud Console → Created project + OAuth 2.0 Client ID
- Whitelisted authorized domain (localhost)
- Backend validates token with Google’s public signing key

---

## 🧪 Test-Driven Development (TDD)

### ✅ Test: successful login with valid `id_token`
- Uses `unittest.mock` to **simulate Google’s response**
- Verifies:
  - User is created if not exists
  - Proper response data is returned
  - No real call to Google is made during test

### ✅ Test: invalid token returns 400 error
- Simulates Google throwing an exception
- Verifies:
  - No user is created
  - Error response is handled gracefully

---

## 🧠 Key Concepts Learned

| Concept | Description |
|--------|-------------|
| `mock.patch` | Used to simulate external services (Google) |
| `side_effect` | Simulates exceptions like `GoogleAuthError` |
| `id_token.verify_oauth2_token` | Core function to validate token against Google |
| Secure handling | No sensitive data stored — all tokens are validated, not saved |
| Minimalist design | No dependencies on external Django packages for auth |

---

## 📦 Tech Stack Used

- Django + Django REST Framework  
- PostgreSQL  
- Docker + Docker Compose  
- Google Cloud OAuth2  
- `google-auth` Python library  
- `pytest`, `mock` for test coverage  
- Modular view architecture

---

## 🔍 Example cURL Request

```bash
curl -X POST http://localhost:8000/api/auth/google/ \
-H "Content-Type: application/json" \
-d '{"id_token": "PASTE_YOUR_GOOGLE_ID_TOKEN_HERE"}'

# ✅ FASE 5 – Autenticación con JWT después de Google Login

## 🎯 Objetivo

Una vez que Google valida al usuario con su `id_token`, nuestro backend genera un par de **tokens JWT** (`access_token` y `refresh_token`) para mantener la sesión activa de forma segura y profesional.

---

## 🔐 ¿Qué se implementó?

- Instalación y configuración de `djangorestframework-simplejwt`
- Añadida autenticación por defecto en `REST_FRAMEWORK`
- Configurado tiempo de vida de los tokens (`access`: 15 min, `refresh`: 7 días)
- Generación de tokens en la vista `GoogleAuthView` al validar correctamente el token de Google
- Retorno de ambos tokens en la respuesta JSON junto a los datos del usuario

---

## ⚙️ Tecnologías utilizadas

- Django + Django REST Framework
- PostgreSQL
- Docker + Docker Compose
- Google Cloud OAuth2
- `google-auth` (validación de ID tokens)
- `djangorestframework-simplejwt`
- Pytest + Mock (para validación de lógica sin conexión real)

---

## 🧪 Testing con TDD + Mock

### ✅ Test: generación de JWT con token válido
- Simula una respuesta válida de Google con `mock`
- Verifica que el usuario se crea correctamente
- Asegura que la respuesta contiene los tokens

### ✅ Validaciones:
- Tokens presentes en `response.data["tokens"]`
- Verifica formato correcto (`.count(".") == 2` para JWT estándar)

---

## 📦 Detalles de implementación

- `RefreshToken.for_user(user)` para generar tokens JWT
- Tokens embebidos en la respuesta junto al perfil del usuario
- No se guarda contraseña ni sesión de Google: todo fluye con JWT

---

## 🔍 Resultado de ejemplo

```json
{
  "message": "User authenticated",
  "username": "Pablo Dev",
  "email": "pablo@gmail.com",
  "avatar": "https://googleusercontent.com/avatar.jpg",
  "google_id": "1122334455",
  "tokens": {
    "access": "eyJhbGciOiJIUzI1NiIsInR...",
    "refresh": "eyJhbGciOiJIUzI1NiIsInR..."
  }
}
```

---

## ✅ Estado actual

- Autenticación completa con Google
- Sesión persistente controlada por JWT
- Seguridad moderna aplicada
- Preparado para proteger rutas, asociar puntos y logros

---

## 🧠 Lecciones aprendidas

- Diferencia entre OAuth2 (identidad externa) y JWT (sesión interna)
- Cómo separar la lógica de autenticación de la de autorización
- Uso profesional de `mock` para validar sin depender de APIs externas
- Buenas prácticas para devolver tokens seguros en APIs RESTful

---

## 🔚 Fase 5 completada:

Login + Sesión JWT funcionando como en entornos de producción ✔️

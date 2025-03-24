# ✅ FASE 3 – API Endpoints + TDD + Seguridad

## 🎯 Objetivo de la fase

Diseñar e implementar los primeros endpoints del backend para gestionar usuarios, aplicando **TDD (Test-Driven Development)** desde el inicio y asegurando que las vistas estén **protegidas por permisos adecuados**.

---

## 🧪 ¿Qué hicimos?

### 🔹 Endpoint: `/api/users/profile/`
- Tipo: `GET`
- Devuelve los datos del usuario autenticado
- Protegido con `IsAuthenticated`
- **Test TDD implementado antes de la vista**

### 🔹 Endpoint: `/api/users/update/`
- Tipo: `PUT`
- Permite editar el perfil del usuario autenticado (`bio`, `avatar_url`)
- Protegido con `IsAuthenticated`
- Validación con serializer + tests

### 🔹 Endpoint: `/api/users/list/` (opcional para admin)
- Tipo: `GET`
- Devuelve lista de todos los usuarios
- Protegido con `IsAdminUser`
- Test negativo incluido para usuarios normales (403)

---

## 📦 Serializers implementados

- `UserProfileSerializer`: para mostrar el perfil completo
- `UserProfileUpdateSerializer`: para actualizar solo ciertos campos
- `UserListSerializer`: para mostrar datos básicos de todos los usuarios (admin)

---

## ✅ Tests automatizados con Pytest

| Test | Objetivo |
|------|----------|
| `test_authenticated_user_can_get_profile` | Valida que el usuario autenticado puede ver su perfil |
| `test_user_can_update_profile` | Valida que puede actualizar `bio` y `avatar_url` |
| `test_admin_can_see_all_users` | Admin puede ver el listado de usuarios |
| `test_normal_user_cannot_see_all_users` | Usuario normal NO puede ver la lista (403) |

---

## 🛡️ Seguridad aplicada

- Protección por `IsAuthenticated` y `IsAdminUser`
- Solo usuarios autenticados pueden modificar o ver sus datos
- Endpoints correctamente limitados por roles
- Validación controlada desde el serializer (campos editables)

---

## 🧠 Lecciones aprendidas

- Integrar TDD en endpoints reales
- Controlar acceso mediante permisos de DRF
- Simular autenticación con `APIClient.force_authenticate`
- Mantener código modular: tests, serializers, views, urls bien separados
- Preparar el sistema para autenticación con Google en siguientes fases

---

## 📌 Estado actual

✅ Backend con endpoints funcionales  
✅ Tests en cobertura completa  
✅ Preparado para escalar con sistema de puntos y logros en próximas fases  
✅ Documentación lista para entrevistas y revisión técnica

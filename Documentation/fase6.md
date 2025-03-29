# ✅ FASE 6 – Sistema de Puntos y Logros

## 🎯 Objetivo

Gamificar la experiencia de usuario permitiendo acumular puntos a través de acciones clave, y desbloquear logros visibles en su perfil. Esta fase convierte la plataforma en un entorno dinámico y motivacional, donde cada interacción tiene un impacto positivo.

---

## 🔐 ¿Qué se implementó?

### 1. Modelo `Achievement`
- Representa logros posibles en el sistema.
- Contiene: nombre, descripción, puntos requeridos, imagen.

### 2. Modelo `UserAchievement`
- Relación entre usuarios y logros desbloqueados.
- Incluye fecha de desbloqueo (`unlocked_at`).
- Se evita duplicación de logros con `unique_together`.

### 3. Campo `points` en `UserProfile`
- Cada usuario ahora tiene una puntuación acumulada.
- Se inicializa en 0 y se puede modificar.

### 4. Endpoint `/api/users/profile/`
- Devuelve datos del usuario + puntos acumulados + logros desbloqueados.
- Estructura limpia y testeada.
- Preparado para integrarse con el frontend de React.

### 5. Endpoint público `/api/users/achievements/`
- Devuelve todos los logros posibles del sistema.
- Ideal para que el frontend muestre cuáles faltan por desbloquear.

---

## ⚙️ Tecnologías utilizadas

- Django + Django REST Framework
- PostgreSQL
- Docker + Docker Compose
- Pytest + Mock
- JWT (previa Fase 5)

---

## 🧪 Tests realizados (TDD)

- ✅ Crear y listar logros
- ✅ Asociar logros a usuarios
- ✅ Consultar puntos
- ✅ Comprobar que los logros aparecen correctamente en el perfil
- ✅ Consultar lista completa de logros en endpoint público

---

## 🔍 Ejemplo de `/api/users/profile/`

```json
{
  "username": "logro",
  "email": "logro@test.com",
  "points": 50,
  "achievements": [
    {
      "name": "Starter",
      "description": "Starter badge",
      "image_url": "img",
      "unlocked_at": "2025-03-26T10:45:00Z"
    }
  ]
}
```

---

## ✅ Estado actual

- Sistema de logros y puntos funcional
- Información accesible vía endpoints
- Backend listo para que el frontend muestre progreso del usuario

---

## 🧠 Lecciones aprendidas

- Diseño de modelos relacionados (`UserAchievement`) con integridad
- Lógica gamificada en backend profesional
- TDD para desarrollo confiable de funcionalidades
- Endpoints preparados para apps frontend modernas

---

## 🔚 Fase 6 completada:

✅ Backend gamificado con logros, puntos y progreso visible. Listo para ser conectado con la experiencia del usuario en el frontend.
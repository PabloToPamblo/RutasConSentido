# ✅ FASE 2 – Test-Driven Development (TDD) y Modelo de Usuario

## 🎯 Objetivo de esta fase

Implementar TDD como metodología base del proyecto, empezando por el modelo de usuario personalizado (`UserProfile`) y sus reglas de negocio.  
Preparar el modelo para integrarse con autenticación externa (Google OAuth) y validar su funcionamiento desde pruebas automatizadas.

---

## 🧪 ¿Qué es TDD?

**Test-Driven Development** (TDD) es una metodología de desarrollo donde se escriben **tests antes del código funcional**.  
Se basa en el ciclo:  
1. **Red** – El test falla porque la funcionalidad no existe  
2. **Green** – Se escribe el código mínimo para pasar el test  
3. **Refactor** – Se mejora el código sin romper los tests

---

## ✅ ¿Qué se implementó?

### 📦 Preparación del entorno TDD
- Instalación y configuración de `pytest`, `pytest-django` y `coverage`
- Archivo `pytest.ini` para apuntar a la configuración de Django
- Primera prueba de “smoke test” validando la integración de tests

### 👤 Modelo de usuario personalizado (`UserProfile`)
- Extiende `AbstractUser`
- Campos añadidos:
  - `points` (por defecto en 0)
  - `bio`
  - `avatar_url`
  - `google_id`

### 🧪 Pruebas implementadas

| Test | Descripción |
|------|-------------|
| `test_basic()` | Test de conexión general del entorno de pruebas |
| `test_create_user()` | Validación de la creación de un usuario con nombre y contraseña |
| `test_user_starts_with_zero_points()` | Valida que todo usuario empiece con 0 puntos |
| `test_create_user_from_google_payload()` | Simula un registro por Google con datos externos |

---

## 🛠️ Herramientas utilizadas
- `pytest`
- `pytest-django`
- `django.contrib.auth.get_user_model`
- `@pytest.mark.django_db` para tests con base de datos
- Ciclo completo Red → Green → Refactor aplicado a cada caso

---

## 📚 Lecciones aprendidas

- Configurar `pytest` correctamente en un entorno Dockerizado
- Comprender y aplicar el flujo de TDD real
- Simular payloads externos (como Google OAuth) para pruebas
- Controlar errores de migraciones y modelos personalizados
- Preparar el backend para integraciones futuras de autenticación

---

## 📌 Estado actual de la fase

✅ Modelo de usuario funcional  
✅ Tests implementados y pasando  
✅ Preparado para crear endpoints y continuar con la API en Fase 3  
✅ Documentación completa

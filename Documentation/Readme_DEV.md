# 🛠️ RutasConSentido - Entorno de Desarrollo (README_DEV.md)

Este documento explica cómo trabajar correctamente con el entorno de desarrollo en Docker para el proyecto **RutasConSentido**, incluyendo comandos clave para Django, pruebas con `pytest`, gestión de migraciones, y flujo recomendado.

---

## 📁 Estructura del proyecto

```
RutasConSentido/
├── app/                  # Código fuente Django
│   ├── users/            # App de usuarios personalizada
│   ├── settings.py       # Configuración principal
├── manage.py             # Entry point de Django
├── requirements.txt      # Dependencias
├── docker-compose.yml
├── Dockerfile
```

---

## 🐳 Comandos útiles con Docker

### 🔄 Levantar entorno con rebuild
```bash
docker-compose up --build
```

### 🛑 Parar contenedores
```bash
docker-compose down
```

### 🖥️ Entrar al contenedor como terminal interactiva
```bash
docker-compose exec web bash
```

---

## ⚙️ Django desde Docker

### 📦 Instalar nuevas dependencias (dentro del contenedor)
```bash
pip install <paquete>
```

### 🧊 Guardar dependencias
```bash
pip freeze > requirements.txt
```

### 🧱 Migraciones
```bash
docker-compose exec web python manage.py makemigrations

docker-compose exec web python manage.py migrate
```

### 🧪 Ejecutar tests con pytest
```bash
docker-compose exec web pytest
```

> Si usás `pytest-cov`, asegurate de instalarlo:
>
> ```bash
> docker-compose exec web pip install pytest-cov
> ```
>
> Y podés ejecutar con cobertura:
>
> ```bash
> docker-compose exec web pytest --cov=. --cov-report=term-missing
> ```

---

## 🧠 Buenas prácticas

### ✅ Usar el entorno Docker en todo momento para:
- Pruebas (`pytest`)
- Migraciones (`makemigrations`, `migrate`)
- Instalar dependencias (`pip install`)

### ❌ Evitar correr `manage.py` o `pytest` en local si estás trabajando dentro de Docker, para no generar inconsistencias (por ejemplo, migraciones en local que no se ven en el contenedor).

### 📂 La carpeta `app/users/` debe tener un `Meta.app_label = 'users'` en el modelo si se encuentra dentro de una subcarpeta, y el `INSTALLED_APPS` debe incluir `'app.users'`.

```python
class UserProfile(AbstractUser):
    ...
    class Meta:
        app_label = 'users'
```

Y en `settings.py`:
```python
AUTH_USER_MODEL = 'users.UserProfile'
INSTALLED_APPS = [
    'app.users',
    ...
]
```

---

## 🧪 Pro Tip para tests de modelos personalizados

Usá siempre:
```python
from django.contrib.auth import get_user_model
User = get_user_model()
```

Y validá los datos con:
```python
user.refresh_from_db()
```
Para asegurarte de que estás verificando lo que hay realmente en la base de datos.

---

## ✅ Aliases recomendados para trabajar más rápido

Agregá estos en tu `.bashrc` o `.zshrc` local:

```bash
alias dj="docker-compose exec web python manage.py"
alias dpytest="docker-compose exec web pytest"
alias dsh="docker-compose exec web bash"
alias dfreeze="docker-compose exec web pip freeze > requirements.txt"
```

---

## ✅ Resumen final

| Acción                        | Comando                                                      |
|-----------------------------|--------------------------------------------------------------|
| Levantar entorno            | `docker-compose up --build`                                  |
| Parar contenedores          | `docker-compose down`                                        |
| Acceder al contenedor       | `docker-compose exec web bash`                               |
| Migraciones Django          | `dj makemigrations` + `dj migrate`                           |
| Ejecutar tests              | `dpytest`                                                    |
| Ver cobertura de código     | `dpytest --cov=. --cov-report=term-missing`                  |
| Ver archivo de modelos      | `dsh` + `cat app/users/models.py`                            |

---

¡Este entorno está listo para desarrollo profesional, CI/CD y entrevistas técnicas! 🚀



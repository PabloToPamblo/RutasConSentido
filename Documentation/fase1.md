# ✅ FASE 1 – Configuración Inicial del Proyecto

## 🎯 Objetivo de esta fase

Establecer la estructura base del proyecto **RutasConSentido** utilizando Django y PostgreSQL, con todo el entorno **dockerizado** y versionado desde el inicio con GitHub.  
Esta fase sienta las bases para una aplicación segura, escalable y automatizada, preparada para CI/CD y futuras integraciones.

---

## 🧱 Tecnologías utilizadas

- Python 3.10  
- Django + Django REST Framework  
- PostgreSQL  
- Docker + Docker Compose  
- Git + GitHub  
- Entorno virtual (`venv`)  
- Gestión de variables de entorno con `.env`

---

## 🗂️ Estructura del proyecto

```
rutasconsentido-backend/
├── app/                     # Proyecto Django principal
├── Dockerfile              # Imagen para el backend
├── docker-compose.yml      # Orquestación de servicios
├── .env                    # Variables de entorno (no versionadas)
├── requirements.txt        # Dependencias del proyecto
├── .gitignore              # Exclusiones de Git
└── README.md               # Documentación principal
```

---

## 🚀 Pasos realizados

### 🔹 Inicialización del repositorio

```bash
git init
echo "venv/" >> .gitignore
echo "__pycache__/" >> .gitignore
echo ".env" >> .gitignore
```

### 🔹 Conexión con GitHub

```bash
git remote add origin https://github.com/PabloToPamblo/RutasConSentido.git
git branch -M main
git push -u origin main
```

### 🔹 Creación del entorno virtual y proyecto Django

```bash
python3 -m venv venv
source venv/bin/activate
pip install django djangorestframework psycopg2-binary
django-admin startproject app .
```

### 🔹 Dockerización del entorno

- Se creó un `Dockerfile` para definir la imagen del backend  
- Se configuró `docker-compose.yml` para levantar Django + PostgreSQL  
- Se usó `.env` para ocultar credenciales sensibles

### 🔹 Primer levantamiento del entorno

```bash
docker-compose up --build
docker-compose exec web python manage.py migrate
```

✅ Acceso exitoso a `http://localhost:8000`

---

## ✅ Estado actual del proyecto

- Proyecto versionado en GitHub  
- Docker y PostgreSQL funcionando correctamente  
- Entorno de desarrollo conectado  
- Preparado para iniciar TDD en la siguiente fase

---

## 🧠 Lecciones aprendidas

- Importancia del control de versiones desde el inicio  
- Ventajas de Docker para replicar entornos entre equipos  
- Separación clara entre código y configuración de infraestructura  
- Uso seguro de variables mediante `.env`

---

## 🔚 Conclusión

✅ **Fase 1 completada:**  
Base de proyecto sólida, dockerizada, conectada a GitHub y lista para crecer. ✔️

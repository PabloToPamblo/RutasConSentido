📝 Documentación – FASE 1: Configuración Inicial del Proyecto

🎯 Objetivo de esta fase

Crear la estructura base del proyecto RutasConSentido con Django y PostgreSQL, dockerizado y con control de versiones en GitHub. Esta configuración sirve como base sólida para construir una aplicación escalable, segura y automatizada.

⸻

🧱 Tecnologías utilizadas
	•	Python 3.10
	•	Django + Django REST Framework
	•	PostgreSQL
	•	Docker + Docker Compose
	•	Git + GitHub
	•	Entorno virtual local (venv)
	•	Variables de entorno gestionadas con .env

⸻

🗂️ Estructura del proyecto

helppeople-backend/
├── app/                  # Proyecto Django
├── Dockerfile            # Imagen para entorno backend
├── docker-compose.yml    # Orquestación de servicios
├── .env                  # Variables de entorno seguras
├── requirements.txt      # Dependencias del proyecto
├── .gitignore            # Exclusiones de git
└── README.md             # Documentación principal



⸻

🚀 Pasos realizados

1. Inicialización del repositorio

git init
echo "venv/" >> .gitignore
echo "__pycache__/" >> .gitignore
echo ".env" >> .gitignore

2. Conexión con GitHub

git remote add origin https://github.com/PabloToPamblo/RutasConSentido.git
git branch -M main
git push -u origin main

3. Creación del entorno virtual y proyecto Django

python3 -m venv venv
source venv/bin/activate
pip install django djangorestframework psycopg2-binary
django-admin startproject app .

4. Dockerización del entorno
	•	Se creó un Dockerfile para definir la imagen del backend
	•	Se configuró docker-compose.yml para levantar Django y PostgreSQL juntos
	•	Se gestionaron credenciales mediante un archivo .env

5. Primer levantamiento del entorno

docker-compose up --build
docker-compose exec web python manage.py migrate

✅ Acceso exitoso a http://localhost:8000 desde el navegador

⸻

✅ Estado actual del proyecto
	•	Proyecto en GitHub versionado
	•	Docker configurado y funcionando
	•	PostgreSQL operativo y enlazado con Django
	•	Preparado para comenzar con TDD (Test Driven Development) en la siguiente fase

⸻

🧠 Lecciones aprendidas
	•	Importancia de controlar versiones desde el minuto 0
	•	Ventajas de Docker para replicar entornos portables
	•	Separar la lógica de infraestructura (docker-compose) del código
	•	Uso de .env para proteger datos sensibles

⸻

✅ Fase 1 completada: Configuración inicial + Docker + PostgreSQL ✔️

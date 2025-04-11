# Usa una imagen oficial de Python como base
FROM python:3.10-slim

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo de dependencias
COPY requirements.txt .

# Instala las dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Copia el resto del proyecto al contenedor
COPY . .

# Expone el puerto en el que correrá Django
EXPOSE 8000

# Comando por defecto para iniciar el servidor (usamos Gunicorn en producción normalmente)
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
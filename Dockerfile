FROM jenkins/jenkins:lts

USER root

# Instalar Docker dentro del contenedor
RUN apt-get update && apt-get install -y docker.io docker-compose

USER jenkins
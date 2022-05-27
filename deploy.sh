#!/bin/bash

echo "Limpando todas as instancias do docker, por favor, aceite."
sudo docker system prune -a --volumes

clear

echo "Instalando o maven e as dependencias."
mvn install

clear

echo "Iniciando o docker."
cd docker

docker run --name ucb_linux --network=host -e MYSQL_ROOT_PASSWORD=secret -e MYSQL_DATABASE=MY_DB -e MYSQL_USER=user -e MYSQL_PASSWORD=user -v :/var/lib/postgresql/data -d mysql:latest

docker build -t ucb_spring .
docker run -d --network=host ucb_spring 

echo "Database iniciado com sucesso."

sudo docker ps

echo "Instalando dependencias frontend."
npm install yarn --global

cd ../frontend && yarn && yarn start

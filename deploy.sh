#!/bin/bash


echo "Limpando todas as instancias do docker, por favor, aceite."
sudo docker system prune -a --volumes

clear

echo "Instalando o maven e as dependencias."
mvn clean install

clear

echo "Iniciando o docker."
cd docker

sudo docker build -t ucb .

sudo docker-compose up -d --build 

echo "Database iniciado com sucesso."

docker ps


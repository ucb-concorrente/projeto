#!/bin/bash


echo "Limpando todas as instancias do docker, por favor, aceite."
docker system prune -a --volumes

clear

echo "Instalando o maven e as dependencias."
mvn clean install

clear

echo "Iniciando o docker."
cd docker

docker build -t ucb .

docker-compose up -d --build 

echo "Database iniciado com sucesso."
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
docker ps
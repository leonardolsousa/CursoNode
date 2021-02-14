## ----POSTGRES

docker run \
    --name postgres \
    -e POSTGRES_USER=leonardolsousa \
    -e POSTGRES_PASSWORD=minhasenhasecreta \
    -e POSTGRES_DB=heroes \
    -p 5432:5432 \
    -d \
    postgres

docker ps

docker exec -it postgres /bin/bash

docker run \
    --name adminer \
    -p 8080:8080 \
    --link postgres:postgres \
    -d \
    adminer



## ----MONGODB

docker run \
    --name mongodb \
    -p 27018:27018 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=senhaadmin \
    -d \
    mongo:4

docker run \
    --name mongoclient1 \
    -p 3000:3000 \
    --link mongodb:mongodb \
    -d \
    mongoclient/mongoclient

docker exec -it mongodb \
    mongo --host localhost -u admin -p senhaadmin --authenticationDatabase admin \
    --eval "db.getSiblingDB('heroes').createUser({user: 'leonardolsousa', pwd: 'minhasenhasecreta', roles: [{role: 'readWrite', db: 'heroes' }]})" 

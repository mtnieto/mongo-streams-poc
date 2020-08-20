# Mongo streams producer and consumer

To init mongo with docker in replicaset mode:

docker run --name mongodb -p 27017:27017 mongo mongod --replSet "rs"

docker exec -ti mongodb bash

mongo

rs.initiate();
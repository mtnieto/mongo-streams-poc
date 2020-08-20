docker run --name mongodb -p 27017:27017 mongo mongod --replSet "rs"

docker exec -ti mongodb bash
mongo
rs.initiate();
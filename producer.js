const { ReplSet } = require('mongodb-topology-manager');
const mongodb = require('mongodb');
const sleep = require('sleep');
const { SSL_OP_EPHEMERAL_RSA } = require('constants');
const { exit } = require('process');
run().catch(error => console.error(error));

async function run() {
    console.log(new Date(), 'start');


    // Connect to the replica set
    const uri = "mongodb://127.0.0.1:27017/demo";
    const client = await mongodb.MongoClient.connect(uri);
    const db = client.db('demo');

    // Insert a doc, will trigger the change stream handler above
    console.log(new Date(), 'Inserting doc');
    for (let i = 0; i < 10; i++) {
        await db.collection('Person').insertOne({ name: 'Axl Rose', time: Date.now() });
        console.log(new Date(), 'Inserted doc');
        sleep.sleep(2)
    }
    exit(1)

}
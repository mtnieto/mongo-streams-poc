const { ReplSet } = require('mongodb-topology-manager');
const mongodb = require('mongodb');


run().catch(error => console.error(error));

async function run() {
    console.log(new Date(), 'start');


    // Connect to the replica set
    const uri = "mongodb://127.0.0.1:27017/demo";
    const client = await mongodb.MongoClient.connect(uri);
    const db = client.db('demo');

    // Create a change stream. The 'change' event gets emitted when there's a
    // change in the database


    db.collection('Person').watch().
    on('change', data => {
        console.log(new Date(), data)
            // Check if it's persistent in the database
        const cursor = db.collection('Person').find({})
        cursor.each(function(err, doc) {
            console.log(doc)
        })

    });
}
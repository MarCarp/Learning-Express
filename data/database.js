const mongo = require('mongodb');

const MongoClient = mongo.MongoClient();

let database;

async function connexionToDb() {
    const client = await MongoClient.connect('mongodb://localhost:27017');
    database = client.db('auth-demo');
}

function getDb() {
    return database;
}

module.exports = {
    connectDb: connexionToDb,
    getDb: getDb
}
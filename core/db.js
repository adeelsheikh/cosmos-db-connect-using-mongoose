var mongoose = require('mongoose');
var dotenv = require('dotenv');

dotenv.load();

function connect() {
    mongoose.connect(process.env.COSMOSDB_CONNSTR + "?ssl=true&replicaSet=globaldb", {
        useCreateIndex: true,
        useNewUrlParser: true,
        auth: {
            user: process.env.COSMODDB_USER,
            password: process.env.COSMOSDB_PASSWORD
        }
    })
    .then(() => console.log('Connection to CosmosDB successful'))
    .catch((err) => console.error(err));
}

module.exports = {
    connect
};
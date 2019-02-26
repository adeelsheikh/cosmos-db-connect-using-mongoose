const mongoose = require('mongoose');

const baseConfig = {
    discriminatorKey: "_type", //If you've got a lot of different data types, you could also consider setting up a secondary index here.
    collection: "Collection"
};

const model = mongoose.model('Common', new mongoose.Schema({}, baseConfig));

module.exports = {
    baseConfig,
    model
};
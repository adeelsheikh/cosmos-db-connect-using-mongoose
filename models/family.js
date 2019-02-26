const mongoose = require('mongoose');
const common = require('./common');

const modelName = 'Family';
const modelSchema = new mongoose.Schema({
    lastName: String,
    parents: [{
        familyName: String,
        firstName: String,
        gender: String
    }],
    children: [{
        familyName: String,
        firstName: String,
        gender: String,
        grade: Number
    }],
    pets:[{
        givenName: String
    }],
    address: {
        country: String,
        state: String,
        city: String
    }
});

const Family = common.model.discriminator(modelName, modelSchema, common.baseConfig);

module.exports = Family;
const mongoose = require('mongoose');
const common = require('./common');

const modelSchema = new mongoose.Schema({
    name: String,
    country: String
});

const VacationDestinations = common.model.discriminator('VacationDestinations', modelSchema, common.baseConfig);

module.exports = VacationDestinations;
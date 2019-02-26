const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    name: String,
    country: String
});

const VacationDestinations = mongoose.model('VacationDestinations', modelSchema);

module.exports = VacationDestinations;
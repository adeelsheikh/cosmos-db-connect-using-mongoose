const Family = require('../models/family');

function post(family) {
    family.save((err, response) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log(JSON.stringify(response));
    });
}

function getAll() {
    Family.find({}, function (err, foundFamily) {
        foundFamily.forEach(fam => console.log("Found Family: " + JSON.stringify(fam)));
    });
}

module.exports = {
    getAll,
    post
};
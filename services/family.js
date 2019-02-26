function post(family) {
    family.save((err, response) => {
        if (err) {
            console.error(err);
            return;
        }
        
        console.log(JSON.stringify(response));
    });
}

module.exports = {
    post
};
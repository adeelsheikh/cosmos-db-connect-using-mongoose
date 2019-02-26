function post(vacation) {
    vacation.save((err, response) => {
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
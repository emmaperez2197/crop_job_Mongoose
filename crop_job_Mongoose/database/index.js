const mongoose = require('mongoose');

const { MONGO_URI } = require('../config');


class Mongo {
    constructor(){};

    static async connect(){

    await    mongoose.connect(MONGO_URI, {useNewUrlParser: true});
    }
};


module.exports = Mongo;



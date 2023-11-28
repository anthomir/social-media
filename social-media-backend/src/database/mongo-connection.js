const mongoose = require('mongoose');
const mongoConfig = require('../config/mongo-config');

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(mongoConfig.mongoURI, {
            dbName: mongoConfig.dbName,
            ...mongoConfig.options,
        });

        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        throw new Error('Unable to connect to MongoDB.');
    }
};

module.exports = connectToMongoDB;

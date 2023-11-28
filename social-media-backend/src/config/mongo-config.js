const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const config = {
    dbName: process.env.DB_NAME || 'test',
    mongoURI: process.env.MONGODB_URI || 'mongodb+srv://sa:dkMquHp5F38s0Nw4@cluster0.nd9kaft.mongodb.net/',
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
};

module.exports = config;

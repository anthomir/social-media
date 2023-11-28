const express = require('express');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const connectToMongoDB = require('./database/mongo-connection');
const usersRouter = require('./routes/users');

const app = express();

connectToMongoDB()
    .then(() => {
        app.use(logger('dev'));
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
        app.use(cookieParser());
        app.use(express.static(path.join(__dirname, 'public')));

        app.use('/users', usersRouter);
        app.use('/posts', usersRouter);

        app.use((req, res, next) => {
            next(createError(404));
        });

        app.use((err, req, res, next) => {
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === 'development' ? err : {};

            res.status(err.status || 500);
            res.render('error');
        });

        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error(error.message);
    });

module.exports = app;

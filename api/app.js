const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors');
const cors = require('cors');

const port = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("combined"));

const db = require('./util/db');

const authRoute = require('./routes/Auth.route');
const { verifyAccessToken } = require('./util/jwt_helper');

app.use('/auth', authRoute);

app.get ('/protected', verifyAccessToken, (req, res) => res.json({ message: "Procted route!" }));

app.use('/', (req, res) => res.json({ message: "Home route!" }));

app.use(async (req, res, next) => {
    next(createError.NotFound());
});

app.use((err, req, res, next) => {
    res.status = err.status || 500;
    res.json({
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
});

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
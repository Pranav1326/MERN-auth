const JWT = require('jsonwebtoken');
const createError = require('http-errors');

module.exports = {
    signAccessToken: (userId) => {
        return new Promise((resolve, reject) => {
            const payload = { };
            const secret = process.env.ACCESS_TOKEN_KEY;
            const options = { expiresIn: '1h', audience: userId };
            JWT.sign(payload, secret, options, (err, token) => {
                if(err){
                    console.log(err);
                    reject(createError.InternalServerError("Something went wrong!"));
                }
                resolve(token);
            });
        });
    }
};
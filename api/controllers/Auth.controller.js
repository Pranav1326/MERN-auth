const bcrypt = require('bcrypt');
const createError = require('http-errors');

const User = require('../models/User.model');
const { authSchema, loginAuthSchema } = require('../util/validation_schema');
const { signAccessToken, signRefreshToken, verifyRefreshToken } = require('../util/jwt_helper');

exports.register = async (req, res, next) => {
    try{
        const result = await authSchema.validateAsync(req.body);
        
        const userExists = await User.findOne({ email: result.email });
        if(userExists)
            throw createError.Conflict("Email already registered!");
        else{
            const user = User(result);
            const newUser = await user.save();
            const accessToken = await signAccessToken(newUser.id);
            const refreshToken = await signRefreshToken(newUser.id);
            res.json({ accessToken, refreshToken });
        }
    } catch(err){
        if(err.isJoi) err.status = 422;
        next(err);
    }
};

exports.login = async (req, res, next) => {
    try {
        const result = await loginAuthSchema.validateAsync(req.body);

        const user = await User.findOne({ email: result.email });
        if(!user) throw createError.NotFound("User not registered!");
        
        const isMatch = await user.isValidPassword(result.password);
        if(!isMatch) throw createError.Unauthorized("Username/Password not valid!");

        const accessToken = await signAccessToken(user.id);
        const refreshToken = await signRefreshToken(user.id);
        
        res.json({ accessToken, refreshToken });
    } catch (err) {
        if(err.isJoi) return next(createError.BadRequest("Invalid Username or Password!"));
        next(err);
    }
};

exports.refreshToken = async (req, res, next) => {
    try {
        const refToken = req.body.refreshToken;
        if(!refToken) throw createError.BadRequest();

        const verifiedUser = await verifyRefreshToken(refToken);
        const accessToken = await signAccessToken(verifiedUser);
        const refreshToken = await signRefreshToken(verifiedUser);

        res.json({ accessToken, refreshToken });
    } catch (err) {
        next(err);
    }
};

exports.logout = async (req, res, next) => {
    res.json("Logout route.");
};
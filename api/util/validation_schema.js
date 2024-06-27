const Joi = require('joi');

const authSchema = Joi.object({
    name: Joi.string(),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().required()
});

const loginAuthSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().required()
});

module.exports = { authSchema, loginAuthSchema };
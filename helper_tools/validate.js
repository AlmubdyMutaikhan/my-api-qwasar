const Joi = require('@hapi/joi')

// validating user data on registering 
const userValidationSchema = Joi.object({
    name : Joi
        .string()
        .min(2)
        .max(30)
        .alphanum(),
    email : Joi
        .string()
        .email()
        .max(100)
        .min(6),
    password : Joi
        .string()
        .min(7)
        .max(1024)
})

const newUserValidation = (params) => {
    return userValidationSchema.validate(params)
}

module.exports = { newUserValidation }
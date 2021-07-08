const Joi = require('@hapi/joi')
const User = require('../model/User')

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

const newUserValidation = async (params) => {
    const emailexist = await User.findOne({email : params.email})
    let { error } = userValidationSchema.validate(params)
    let res_error = (error) ? error.details[0].message  : ""
  
    if(emailexist) { 
        res_error += "\nthis email already exists"
    }    
    return res_error
}

module.exports = { newUserValidation }
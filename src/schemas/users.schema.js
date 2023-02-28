import Joi from "joi";

export const userSignUpSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi
            .string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'br'] } })
            .required(),
    password: Joi.string().required(),
    confirmPassword: Joi.ref('password')
});

export const userSignInSchema = Joi.object({
    email: Joi
            .string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'br'] } })
            .required(),
    password: Joi.string().required()
});
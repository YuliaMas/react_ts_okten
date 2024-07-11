import Joi from "joi";

const userValidator =
    Joi.object({
        username: Joi.string().pattern(/^[a-zA-Z]\w{1,19}$/).required().messages({
            'string.pattern.base': 'First letter, then letters, digits or "_" min 2 max 30 characters'
        }),
        name: Joi.string().pattern(/^[a-zA-Z]\w{1,19}$/).required().messages({
            'string.pattern.base': 'First letter, then letters, min 2 max 30 characters'
        }),
        password: Joi.string().pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/).required().messages({
            'string.pattern.base': 'Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter,' +
                ' one special character, no space, and it must be 8-16 characters long.'
        }),
        age: Joi.number().min(1).max(132).required().messages({
            "number.min": "min age is 1",
            "number.max": "max age is 132",
        }),
        email: Joi.string().pattern(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).required().messages({
            'string.pattern.base': 'First letter, then letters, min 2 max 30 characters'
        }),
    })


export default userValidator;
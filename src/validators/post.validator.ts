import Joi from "joi";

const postValidator =
    Joi.object({
        title: Joi.string().pattern(/^[A-Za-z]\w{1,36}/).required().messages({
            'string.pattern.base': 'First letter, min 2 max 36 characters'
        }),
        body: Joi.string().pattern(/^[A-Za-z]\w{1,266}/).required().messages({
            'string.pattern.base': 'First letter , min 2 max 266 characters'
        }),
        userId: Joi.number().min(1).max(1000).required().messages({
            "number.min": "min id is 1",
            "number.max": "max id is 1000",
        })
    })


export default postValidator;
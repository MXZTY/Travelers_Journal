const Joi = require('joi');

module.exports = {
    validateBody: (schema) => {
        return (req, res, next) => {
            const result = Joi.validate(req.body, schema);
            if (result.error) {
                return res.status(400).json(result.error);
            }

            if (!req.value) { req.value = {}; }
            req.value['body'] = result.value;
            next();
        }
    },

    schemas: {
        authSchema: Joi.object().keys({
            firstname: Joi.string().required(),
            lastname: Joi.string().required(),
            city: Joi.string().required(),
            country: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required()
        }),
        loginSchema: Joi.object().keys({
            email: Joi.string().email().required(),
            password: Joi.string().required()
        }),
        imageSchema: Joi.object().keys({
            title: Joi.string().required(),
            description: Joi.string().required(),
            iso: Joi.string().required(),
            country: Joi.string().required(),
            city: Joi.string().required(),
            cityCode: Joi.number().required(),
            continent: Joi.string().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            userid: Joi.number().required(),
            large: Joi.string().required(),
            thumbnail: Joi.string().required(),
            firstname: Joi.string().required(),
            lastname: Joi.string().required(),
            make: Joi.string().required(),
            model: Joi.string().required(),
            exposure_time: Joi.string().required(),
            aperture: Joi.string().required(),
            focal_length: Joi.string().required(),
            filename: Joi.string().required(),

        })
    }

}
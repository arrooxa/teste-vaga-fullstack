import Joi from "joi";

const getUsers = {
    query: Joi.object().keys({
        take: Joi.number().integer(),
        skip: Joi.number().integer(),
    }),
};

export { getUsers };

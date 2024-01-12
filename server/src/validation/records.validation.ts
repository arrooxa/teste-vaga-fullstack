import Joi from "joi";

const getUsers = {
    query: Joi.object().keys({
        take: Joi.number().integer(),
        page: Joi.number().integer(),
    }),
};

export { getUsers };

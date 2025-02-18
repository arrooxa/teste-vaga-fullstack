import { NextFunction, Request, Response } from "express";

import Joi from "joi";
import pick from "../utils/pick";

const validate = (schema) => (req: Request, res: Response, next: NextFunction) => {
    const validSchema = pick(schema, ["params", "query", "body"]);

    const object = pick(req, Object.keys(validSchema));

    const { value, error } = Joi.compile(validSchema)
        .prefs({ errors: { label: "key" }, abortEarly: false })
        .validate(object);

    if (error) {
        return res.status(422).json({ error: "Invalid Parameters" });
    }

    Object.assign(req, value);
    return next();
};

export default validate;

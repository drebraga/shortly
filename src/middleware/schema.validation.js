const schemaValidate = (schema) => {
    return async (req, res, next) => {
        try {

            await schema.validateAsync(req.body, { abortEarly: false });

            next();

        } catch (err) {
            return res.status(422).send(err.message);
        }
    }
};

export default schemaValidate;
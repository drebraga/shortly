const schemaValidate = (schema) => {
    return async (req, res, next) => {
        try {

            await schema.validateAsync(req.body, { abortEarly: false });

            next();

        } catch (err) {
            console.log(err);
            return res.sendStatus(422);
        }
    }
};

export default schemaValidate;
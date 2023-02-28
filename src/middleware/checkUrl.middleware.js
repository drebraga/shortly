const checkURL = (schema) => {
    return async (req, res, next) => {
        try {

            const { url } = req.body;

            new URL(url);

            next();

        } catch (err) {
            return res.sendStatus(402);
        }
    }
};

export default checkURL;
const checkURL = () => {
    return async (req, res, next) => {
        try {

            const { url } = req.body;

            new URL(url);

            next();

        } catch (err) {
            return res.status(422).send(err.message);
        }
    }
};

export default checkURL;
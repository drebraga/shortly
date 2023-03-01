import db from "../database/database.connection.js";

const checkToken = () => {
    return async (req, res, next) => {
        try {
            const { authorization } = req.headers;
            const token = authorization?.replace("Bearer ", "");

            if (!token) return res.sendStatus(401);

            const { rows: user, rowCount: userExists } = await db.query(`
                SELECT * 
                FROM sessions
                WHERE token = $1
            `, [token]);

            if (userExists === 0) return res.sendStatus(401);

            res.locals.user = user[0];

            next();

        } catch (error) {
            return res.status(500).send(error.message);
        }
    };
};

export default checkToken;
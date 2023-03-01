import db from "../database/database.connection.js";

const checkUser = (type) => {
    return async (req, res, next) => {
        try {

            const { email } = req.body

            const { rowCount: userExists } = await db.query(`
                SELECT email 
                FROM users
                WHERE email = $1
            `, [email]);

            if (userExists !== 0 && type === "singup") return res.sendStatus(409);
            if (userExists === 0 && type === "singin") return res.sendStatus(401);

            next();

        } catch (error) {
            return res.status(500).send(error.message);
        }
    };
};

export default checkUser;
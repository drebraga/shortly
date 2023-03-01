import db from "../database/database.connection.js";

const checkShort = () => {
    return async (req, res, next) => {
        try {

            const id = req.params.id;
            const user = res.locals.user;

            const { rows: short, rowCount: shortExists } = await db.query(`
                SELECT "userId"
                FROM urls
                WHERE id = $1
            `, [id]);

            if (shortExists === 0) return res.sendStatus(404);
            if (short[0].userId !== user.userId) return res.sendStatus(401);

            next();

        } catch (error) {
            return res.status(500).send(error.message);
        }
    };
};

export default checkShort;
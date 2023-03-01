import db from "../database/database.connection.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

export const singIn = async (req, res) => {

    const { email, password } = req.body;
    const token = uuid();

    try {

        const { rows: user } = await db.query(`
            SELECT * FROM users
            WHERE email = $1
        `, [email]);

        const { id, password: hash } = user[0];

        const isCorrect = bcrypt.compareSync(password, hash);

        console.log(isCorrect)

        if (!isCorrect) return res.sendStatus(401);

        const { rowCount: checkSession } = await db.query(`
                SELECT id FROM sessions WHERE "userId" = $1
            `, [id]);

        checkSession > 0 ?
            await db.query(`
                        UPDATE sessions SET token = $1 WHERE "userId" = $2
                    `, [token, id]) :
            await db.query(`
                        INSERT INTO sessions("userId", token)
                        VALUES ($1, $2)
                    `, [id, token]);

        return res.send({ token });

    } catch (error) {
        return res.status(500).send(error.message)
    }
};

export const singUp = async (req, res) => {

    const { name, email, password } = req.body
    const saltRounds = 10;

    try {

        const hash = bcrypt.hashSync(password, saltRounds);

        await db.query(`
                INSERT INTO users (
                    name, email, password
                ) 
                VALUES ($1, $2, $3)
        `, [name, email, hash]);

        return res.sendStatus(201);

    } catch (error) {
        return res.status(500).send(error.message);
    }
};

export const getUser = async (req, res) => {

    const { userId } = res.locals.user;
    let totalVisits = 0;

    try {

        const { rows: name } = await db.query(`
            SELECT name
            FROM users
            WHERE id = $1
        `, [userId]);

        const { rows: urls } = await db.query(`
            SELECT *
            FROM urls
            WHERE "userId" = $1
        `, [userId]);


        urls.map(e => totalVisits = totalVisits + e.visitCount);


        const response = {
            id: userId,
            name: name[0].name,
            visitCount: totalVisits,
            shortenedUrls: urls
        }

        return res.send(response);

    } catch (error) {
        return res.status(500).send(error.message)
    }
};

export const getRanking = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).send(error.message)
    }
};
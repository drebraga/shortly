import db from "../database/database.connection.js";
import { customAlphabet } from "nanoid";

export const urlShorter = async (req, res) => {

    const nanoid = customAlphabet("abcdefghijklmnopqrstuvxywz1234567890", 8);
    const shortUrl = nanoid();
    const { url } = req.body;
    const { userId } = res.locals.user;

    try {

        await db.query(`
            INSERT INTO urls(
                "userId", "shortUrl", url
            ) VALUES
                ($1, $2, $3)
        `, [userId, shortUrl, url]);

        const { rows: response } = await db.query(`
            SELECT id, "shortUrl"
            FROM urls
            WHERE "shortUrl" = $1
        `, [shortUrl]);

        return res.status(201).send(response[0]);

    } catch (error) {
        return res.status(500).send(error.message)
    }
};

export const getUrlById = async (req, res) => {

    const id = req.params.id;

    try {

        const { rows: response, rowCount: exists } = await db.query(`
            SELECT id, "shortUrl", url
            FROM urls
            WHERE id = $1
        `, [id]);

        if (exists > 0) {
            return res.send(response[0]);
        } else {
            return res.sendStatus(404);
        }

    } catch (error) {
        return res.status(500).send(error.message)
    }
};

export const openUrlByShorter = async (req, res) => {
    try {

        const short = req.params.shortUrl

        const { rows: url, rowCount } = await db.query(`
            SELECT url
            FROM urls
            WHERE "shortUrl" = $1
        `, [short]);

        if (rowCount === 0) return res.sendStatus(404);

        return res.redirect(url[0].url)

    } catch (error) {
        return res.status(500).send(error.message)
    }
};

export const deleteUrlById = async (req, res) => {

    const id = req.params.id;

    try {

        await db.query(`
            DELETE
            FROM urls
            WHERE id = $1
        `, [id]);

        return res.sendStatus(204);

    } catch (error) {
        return res.status(500).send(error.message)
    }
};
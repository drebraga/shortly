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
    try {

    } catch (error) {
        return res.status(500).send(error.message)
    }
};

export const openUrlByShorter = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).send(error.message)
    }
};

export const deleteUrlById = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).send(error.message)
    }
};
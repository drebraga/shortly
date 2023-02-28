import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import userRouter from "./routes/users.routes.js"

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use([userRouter]);

app.listen(process.env.PORT, () => {
    console.log(`Servidor aberto na porta ${process.env.PORT}`);
});
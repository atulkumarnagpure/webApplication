import express, { Request, Response, json } from "express";
import dotenv from 'dotenv'

dotenv.config();
const app = express()

app.use(json());


app.listen(1000, () => {
    console.log(`Server is running on http://localhost:1000`);
});
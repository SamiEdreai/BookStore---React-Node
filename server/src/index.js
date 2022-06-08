import express from 'express';
import dotenv from "dotenv";
import enviroments from '../config/enviroments.js';
import cors from "cors";
import connectMongoose from './databases/moongose.db.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = enviroments.PORT
app.listen(enviroments.PORT, async () => {
    console.log(`server is runing on port: ${PORT}`);
    await connectMongoose();
});
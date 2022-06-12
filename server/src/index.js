import express from 'express';
import dotenv from "dotenv";
import enviroments from '../config/enviroments.js';
import cors from "cors";
import connectMongoose from './databases/moongose.db.js';
//import bookRouter from './routers/book.router.js';

dotenv.config();
const PORT = enviroments.PORT
const app = express();

app.use(express.json());
app.use(cors());

//app.use(bookRouter);





app.listen(enviroments.PORT, async () => {
    console.log(`server is runing on port: ${PORT}`);
    await connectMongoose();
});
import express from 'express';
import dotenv from "dotenv";
import environments from '../config/environments.js';
import cors from "cors";
import connectMongoose from './databases/moongose.db.js';
import bookRouter from './routers/book.router.js';
import userRouter from './routers/user.router.js';
import cartRouter from './routers/cart.router.js';

dotenv.config();
const PORT = environments.PORT
const app = express();

app.use(express.json());
app.use(cors());

app.use(bookRouter);
app.use(userRouter);
app.use(cartRouter);





app.listen(environments.PORT, async () => {
    console.log(`server is runing on port: ${PORT}`);
    await connectMongoose();
});
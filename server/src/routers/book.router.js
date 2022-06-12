import express from "express";
import * as bookControllers from '../controllers/body.controller.js'

const router = new express.Router();

router.get('/books', bookControllers);
router.get('/books/:booksID', bookControllers);


export default router;
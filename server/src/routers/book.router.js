import express from "express";
import * as bookControllers from '../controllers/book.controller.js'

const router = new express.Router();

router.get('/books', bookControllers.getbooks);
router.get('/books/:id', bookControllers.getBook);
router.post('/books/new', bookControllers.createBook);

export default router;
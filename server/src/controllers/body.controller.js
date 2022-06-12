import Book from '../models/book.model.js';

export const createBook = async (req, res) => {
    const bookData = req.body;

    const book = new Book(bookData)
    try {
        const books = await books

        await book.save();

        res.status(200).send({
            status: 200,
            statusText: 'ok',
            data: books,
            massage: ''
        })

    } catch (err) {

    }
}
import Book from '../models/book.model.js';


export const createBook = async (req, res) => {
    const bookData = req.body;


    try {
        const book = new Book(bookData);

        await book.save();

        res.status(201).send({
            status: 201,
            statusText: 'ok',
            data: {
                book: book.title,
                id: book._id
            },
            message: 'The book created'
        })

    } catch (err) {
        console.log(err.message);

    }
}

export const getbooks = async (req, res) => {

    try {
        const myBooks = await Book.find();

        res.send({
            status: 200,
            statusText: 'Ok',
            data: { books: myBooks },
            message: '',
        });

    } catch (err) {
        console.log(err.message);
        res.status(500).send({
            status: 500,
            statusText: ' server error',
            massage: '',
        });
    }

}

export const getBook = async (req, res) => {
    const bookID = req.params.id
    if (!bookID) {
        return res.status(400).send({
            status: 400,
            statusText: 'bad request',
            message: '',
        })
    }
    try {
        const book = await Book.findById(bookID)
        if (!book) {
            throw new Error();
        }
        res.send({
            status: 200,
            statusText: 'Ok',
            data: { book: book },
            message: '',
        });

    } catch (err) {
        console.log(err.message);
        res.status(500).send({
            status: 500,
            statusText: 'Server Error',
            massage: ''
        })


    }


};
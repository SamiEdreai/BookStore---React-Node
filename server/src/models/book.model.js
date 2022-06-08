import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import environments from '../../config/environments.js';

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            lowercase: true,
            required: [true, 'Title is required'],
        },
        author: {
            type: String,
            trim: true,
            lowercase: true,
            required: [true, 'author is required'],
        },
        bookCover: {
            type: String,
            trim: true,
            lowercase: true,
            required: [true, 'bookCover image is required'],
        },
        description: {
            type: String,
            trim: true,
            lowercase: true,
            required: [true, 'description is required'],
        },
        pages: {
            type: Number,
            trim: true,
            lowercase: true,
            required: [true, 'pages is required'],
        },
        price: {
            type: Number,
            trim: true,
            lowercase: true,
            required: [true, 'price is required'],
        }
    }
);
const Book = mongoose.model('Book', bookSchema);

export default Book;
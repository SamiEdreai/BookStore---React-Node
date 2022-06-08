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
            default: 'no title',
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
            minlength: 10,
            maxlength: 1000,
            
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
            validate(value) {
                if (value === 0){
                    throw new Error('The price cannot be 0$')
                }
            }
        }
    }
);
bookSchema.methods.toJSON = function () {
const book = this;

const bookObj = book.toObject();
return bookObj;
}

const Book = mongoose.model('Book', bookSchema);

export default Book;
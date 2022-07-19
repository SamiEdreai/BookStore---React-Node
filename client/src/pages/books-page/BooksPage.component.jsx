import React, { useState, useEffect } from "react";
import './booksPage.style.css';
import Book from "./Book/Book.component";

const BooksPage = () => {

    const [books, setBooks] = useState([])
    useEffect(() => {
        const getBooks = async () => {
            const respones = await fetch('http://localhost:3002/books', {
                headers: { 'ContentType': 'application/json' }
            })
            const resObj = await respones.json()
            setBooks(resObj.data.books);
        };
        getBooks()
    }, []
    )
    return (
        <main className="book-page">
            <div className="book-details">{
                books.map((book) => {

                    return <Book title={book.title} bookCover={book.bookCover} author={book.author} />
                })
            }</div>
        </main>
    )

}
export default BooksPage;
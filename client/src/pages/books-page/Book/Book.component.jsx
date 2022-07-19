import React from "react";
import './book.style.css'

const Book = (props) => {

    return <div className="book-container">
        <div>{props.title}</div>
        <img src={props.bookCover} alt={props.title} />
        <div> {props.author} </div>
    </div>

}
export default Book;
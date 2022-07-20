import React from "react";
import './book.style.css'

const Book = (props) => {

    return <div className="book-container">
        <h3>{props.title}</h3>
        <img src={props.bookCover} alt={props.title} />
        <h4> {props.author} </h4>
    </div >

}
export default Book;
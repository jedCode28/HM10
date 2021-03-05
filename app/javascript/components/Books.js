import React from 'react'
import Book from "./Book"

const Books = (props) => {
  const {books, deleteBook} = props

  const renderBooks = () => {
    if(books.length == 0) {
      return <h1>No Books, you idiot.</h1>
    }
    return books.map((book) => {
      return <Book key={book.id} deleteBook={deleteBook} {...book} />
    })
  }
  return (
    <div className="books-container">
      <h1>Books Component {books.length} books</h1>
      {renderBooks()}
    </div>
  );

}

export default Books;
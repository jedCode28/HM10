import axios from "axios";
import React, { useState } from "react";

const Book = (props) => {

  const { title, author, id , deleteBook} = props;

  // const [showForm, setShowForm] = useState(false)
  
  const deleteHandler = async (id) => {
    let res = await axios.delete(`/books/${id}`)
    deleteBook(res.data.id)
  }

  const editHandler = async () => {
    console.log('edit button was pushed')
  }
 
  return (
    <div className="book-container">
      <h1>
        {id}- Title: {title}
        <p>
        <button onClick={() => deleteHandler(id)}>delete</button>
        <button onClick={() => editHandler(id)}>edit</button>
        </p>
      </h1>
      <p>Author: {author}</p>
    </div>
  );
};
export default Book;
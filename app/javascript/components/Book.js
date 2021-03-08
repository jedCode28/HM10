import axios from "axios";
import React, { useState } from "react";
import NewForm from './NewForm'

const Book = (props) => {
  const { title, author, id , deleteBook, updateBook} = props;
  const [showForm, setShowForm] = useState(false)
  
  const deleteHandler = async (id) => {
    let res = await axios.delete(`/books/${id}`)
    deleteBook(res.data.id)
  }

  const editHandler = async () => {
    let res = await axios.get(`/books/${id}/edit`)
    console.log('edit button was pushed')
  }
 
  const renderBook =() => {
    return(
      <>
        <div className="book-container">
          <h1>{id}- Title: {title}</h1>
          <p>Author: {author}</p>
          <div>
            <button onClick={() => deleteHandler(id)}>delete</button>        {/*DIFFERENT THAN LECTURE*/}
            <button onClick={() => setShowForm(!showForm)}>edit</button>     {/*DIFFERENT THAN LECTURE*/}
          </div>
        </div>
      </>
    )
  }

  return (
    
    <div>
      {!showForm && renderBook() }
      {showForm && <NewForm updateBook={updateBook} id={id} setShowForm={setShowForm} title={title} author={author}/>}
    </div>
  );
};
export default Book;
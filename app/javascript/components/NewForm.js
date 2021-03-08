import React, { useState } from 'react'
import axios from 'axios'


const NewForm = (props) => {
  const { addBook, id, title: titleInit , author: authorInit, setShowForm, updateBook } = props
  const [title, setTitle] = useState(titleInit ? titleInit : '')
  const [author, setAuthor] = useState(authorInit ? authorInit : '')
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(id) {
      updateBook( {title, author}, id )
      setShowForm(false)
    } else {
    addBook({ title, author})
    }
    setTitle('')
    setAuthor('')
  }

  return(
    <form className="book-form" onSubmit={handleSubmit}>
      <h2>{id ? `Editing ${id}` : "Add Book"}</h2>
      <p>title</p>
      <input value={title} onChange={(e) => setTitle(e.target.value)}/>
      <p>author</p>
      <input value={author} onChange={(e) => setAuthor(e.target.value)}/>
      <button type='submit'>{id ? `Edit` : `Add`}</button>
      {setShowForm && <div onClick={()=> setShowForm(false)}>cancel</div>}
    </form>
  )
}

export default NewForm;
import React, { useState } from 'react'
import axios from 'axios'


const NewForm = (props) => {
  const { addBook, id, title: titleInit , author: authorInit } = props
  const [title, setTitle] = useState(titleInit ? titleInit : '')
  const [author, setAuthor] = useState(authorInit ? authorInit : '')
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formObj = {title, author}
    let res = await axios.post('/books', formObj)
    addBook(res.data)
    setTitle('')
    setAuthor('')
    console.log(res.data);
  }

  return(
    <form className="item-form" onSubmit={handleSubmit}>
      <p>title</p>
      <input value={title} onChange={(e) => setTitle(e.target.value)}/>
      <p>author</p>
      <input value={author} onChange={(e) => setAuthor(e.target.value)}/>
      <button type='submit'>add</button>
    </form>
  )
}

export default NewForm;
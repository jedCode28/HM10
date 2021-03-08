import React, { useState } from 'react';
import Books from './Books';
import axios from "axios";
import NewForm from './NewForm';

const App = (props) => {
  const handleError = (error) => {
    console.log(error)
    alert('Check the Console!!')
  }

    const [books, setBooks] = useState([])
    
    const getBooks = async () => {
      let res = await axios.get('/books')
       console.log(res) 
       console.log(res.data)
       setBooks(res.data)
    }

    const getBook = () => {
      console.log("Please Work!")
    }

    const addBook = async (obj) => {   
      console.log(obj)
      try{
        let res = await axios.post(`/books`, {...obj})
        setBooks([...books, res.data])
      } catch(err){
        handleError(err)
      }     
    }

    const updateBook = async (bookObj, id) => {
      try{
      let res = await axios.put(`/books/${id}`, bookObj)
      } catch(err){
        let updateBooks = books.map(book => {
          if(book.id !== id) {
            return book
          } else {
            return {...book,...bookObj}
          }

        })
        setBooks(updateBooks)
      }
    }

    const deleteBook = (id) => {                       // CHANGE TO ASYNC ? Nah, its just state mem...
      const filteredBooks = books.filter( book => {
        return book.id !== id 
      })
      setBooks(filteredBooks)
    }

    return (
      <div className ="app-container">
        <h1>App Page</h1>
        <button onClick={getBooks}>Get Books From DataBase</button>
        <NewForm addBook={addBook} />
        <Books updateBook={updateBook} books={books} deleteBook={deleteBook} />
      </div>
    );
}

export default App;


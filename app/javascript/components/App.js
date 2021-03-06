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
   
    // const addBook = async (book) => {
    //   console.log(book)
    //   try{
    //     let res = await axios.post('/items', {...book})
    //     setBooks([response.data, ...books])
    //   } catch(err){
    //       handleError(err)
    //   }
      
    // }

    const addBook = (book) => {        
      setBooks([...books, book])
    }

    const deleteBook = (id) => {                       // CHANGE TO ASYNC !
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
        <Books books={books} deleteBook={deleteBook} />
      </div>
    );
}

export default App;

// THIS IS A COMMENT FOR GITTT
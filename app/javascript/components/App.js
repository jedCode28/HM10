import React, { useState } from 'react';
import Books from './Books';
import axios from "axios";
import NewForm from './NewForm';

const App = (props) => {
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
   
    const addBook = (book) => {
      setBooks([...books, book])
    }

    return (
      <div className ="app-container">
        <h1>App Page</h1>
        <button onClick={getBooks}>Get Books From DataBase</button>
        <NewForm addBook={addBook} />
        <Books books={books} />
      </div>
    );
}

export default App;
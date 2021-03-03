import React, { useState } from 'react';
import Books from './Books'
import axios from "axios";

const App = (props) => {
    const [books, setBooks] = useState([])
    
    const getBooks = async () => {
      let res = await axios.get('/books')
       console.log(res) 
       console.log(res.data)
       setBooks(res.data)
    }
   
    return (
      <div className ="app-container">
        <h1>App Page</h1>
        <button onClick={getBooks}>Get Books From DataBase</button>
        <Books books={books} />
      </div>
    );

}

export default App;
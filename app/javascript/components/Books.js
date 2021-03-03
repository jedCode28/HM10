import React, { useState } from 'react';
import Books from './Books'

const App = (props) => {
    const [books, setBooks] = useState([])
    
    const getBooks = () => {
       console.log('clicked, TODO: make this work') 
    }
   
    return (
      <div>
        <h1>App Page</h1>
        <button onClick={getBook()}>Get Books From DataBase</button>
        <Books books={books} />
      </div>
    );

}

export default App;
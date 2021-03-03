import React from "react";

const Book = (props) => {

  const { title, author } = props;
 
  return (
    <div className="book-container">
      <h1>
        {id}- {title}
      </h1>
    </div>
  );
};
export default Book;
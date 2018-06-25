import React from 'react';
import './Book.css';

const book = (props) =>{

  let authors = null;
  if(props.authors) {
     authors = props.authors.map((author, index) => {
      return <li  key={index}>{author}</li>
    });
  }

    return (
    <div className="Book">
      <h1 className="title">{props.title}</h1>
      <div className="authors">
        <span className="by">by:</span>
        <ul>
          {authors}
        </ul>
      </div>

      <div className="published">published: {props.published}</div>
    </div>
  );
};

export default book;
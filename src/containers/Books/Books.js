import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AllBooks from './AllBooks/AllBooks';
import FullBook from './FullBook/FullBook';

import './Books.css';

class Books extends Component {

  render () {
    return (
      <div className="Books">
        <Route  path="/" exact component={AllBooks}/>
        <Route  path="/:id" exact component={FullBook}/>
      </div>
    );
  }
}

export default Books;
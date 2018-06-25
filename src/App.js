import React, {Component} from 'react';
import './App.css';
import Books from './containers/Books/Books'
import {BrowserRouter} from 'react-router-dom'
import axios from "axios/index";
import {connect} from 'react-redux';

class App extends Component {

  componentDidMount() {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=3shape')
      .then(response => {
        this.props.onBooksLoaded(response.data.items);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
         <Books/>
        </div>
      </BrowserRouter>
    );
  }
}

const mpaDispatchToProps = dispatch => {
  return {
    onBooksLoaded: (books) => dispatch({type: 'LOAD_BOOKS', val: books})
  };
};

export default connect(null, mpaDispatchToProps)(App);

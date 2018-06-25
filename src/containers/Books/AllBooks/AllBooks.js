import React, { Component } from 'react';
import Book from '../../../components/Book/Book'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class AllBooks extends Component {


  render () {
      const books = this.props.books.map(book => {
        return (
          <Link className="AllBooks" to={'/' + book.id} key={book.id}>
            <Book
              title={book.volumeInfo.title}
              authors={book.volumeInfo.authors}
              published={book.volumeInfo.publishedDate}/>
          </Link>
        )
      });

    return (
        <section>
          {books}
        </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  };
};


export default connect(mapStateToProps )(AllBooks);
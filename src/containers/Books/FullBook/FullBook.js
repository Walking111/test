import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './FullBook.css'

class FullBook extends Component {


  render () {
    const chosenBook = this.props.books.filter(b => b.id === this.props.match.params.id);
    let authors = null;
    if (chosenBook[0] && chosenBook[0].volumeInfo.authors ) {
        authors = chosenBook[0].volumeInfo.authors.map((author, index) => {
            return <li key={index}>{author}</li>
        });
    }
    return (
      <div className="FullBook">
        <div className="back"><Link to="/">Back</Link></div>
        <div className="bookInfoWrap">
          <div className="imgWrapper">
            <img src={chosenBook[0] && chosenBook[0].volumeInfo.imageLinks ? chosenBook[0].volumeInfo.imageLinks.thumbnail : ''} alt=""/>
          </div>
          <div className="infoWrapper">
            <div className="title">{chosenBook[0] ? chosenBook[0].volumeInfo.title : null}</div>
            <div className="authors">
              <span className="by">by:</span>
              <ul>
                {authors}
              </ul>
            </div>
            <div className="subTitle">{chosenBook[0] ? chosenBook[0].volumeInfo.subtitle : null}</div>
            <div className="description">{chosenBook[0] ? chosenBook[0].volumeInfo.description : null}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        books: state.books
    };
};

export default connect(mapStateToProps)(FullBook);
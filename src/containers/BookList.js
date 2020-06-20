import React, { Component } from 'react';
import axios from 'axios';

const API = 'http://localhost:8080/books';


class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [
   {
      "id":4,
      "name":"A Guide to the Bodhisattva Way of Life",
      "author":"Santideva",
      "price":15.41
   },
   {
      "id":5,
      "name":"The Life-Changing Magic of Tidying Up",
      "author":"Marie Kondo",
      "price":9.69
   },
   {
      "id":6,
      "name":"Refactoring: Improving the Design of Existing Code",
      "author":"Martin Fowler",
      "price":47.99
   }
],
      isLoading: false,
      error: null,
      cart: [
{id: 35, item: 'jumper', color: 'red', size: 'medium', price: 20},
{id: 42, item: 'shirt', color: 'blue', size: 'medium', price: 15},
{id: 71, item: 'socks', color: 'black', size: 'all', price: 5},
]
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    axios.get(API)
      .then(result => this.setState({
        books: result.data,
        isLoading: false
      }))
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
  }


  render() {
    this.items = this.state.books.map((item, key) =>
    <li key={item.id}>{item.id}, {item.name} </li>
);
      return (
          <div>
          <h> Load books from Rest API</h>
          <ul>
            {this.items}
          </ul>
          </div>
      )
  }

}

export default BookList;

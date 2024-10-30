import React, { Component } from 'react';
import Book from './Book';

class BookList extends Component {
    state = {
        books: [
            {
                title: 'Avatar',
                isbn: 'abc123'
            },
            {
                title: 'Kis herceg',
                isbn: 'abc123456'
            },
            {
                title: 'Béke',
                isbn: 'abc1244433'
            }
        ]
    }

    constructor() {
        super()
        console.log(1);
    }
    componentWillUnmount() {
        console.log(2);
    }

    componentDidMount() {
        console.log(4)
    }

    render() {
        console.log(3)
        return (
            <div>
                 {this.state.books.map((book, index) => <Book book={book}  key={index}/>)}
             </div>
        );
    }
}

export default BookList;
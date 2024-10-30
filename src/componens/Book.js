import React, { Component } from 'react';

class Book extends Component {

    state={
        a1:true,
        a2: [],
        selected:null
    }

onClickHandler= (title)=>{
    this.setState(
        {
            selected: title
        },()=>{
            console.log(this.state.selected)
        }
    );
   
}

onClickGandler2(){
    this.setState(
        {
            selected: ''
        },()=>{
            console.log(this.state.selected)
        }
    );
    console.log('fff');
    console.log('ggg')
}

    constructor(props) {
        super(props)
        console.log(this.props.book)

    }

    render() {

        const { title, isbn } = this.props.book;
        return (
            <div>
                <h2 onClick={()=> this.onClickHandler(title)}>{title}</h2>
                <p>{isbn}</p>
            </div>
        )
    }

}

export default Book;
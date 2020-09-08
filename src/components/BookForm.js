import React, {useContext, useState}from 'react';
import { BookContext } from '../contexts/BookContext';
const BookForm = () => {
    const {dispatch} = useContext(BookContext);
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const handleInputTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleInputAuthor = (event) => {
        setAuthor(event.target.value)
    }

    const handleSumbit = ( event) => {
        event.preventDefault();
        dispatch ({type:'ADD_BOOK', book:{title, author}});
        setTitle('')
        setAuthor('')
    }
    return (
        <form onSubmit={handleSumbit} >
            <input type='text' placeholder= 'book title' value = {title} onChange={handleInputTitle}/>
            <input type='text' placeholder= 'author' value = {author} onChange={handleInputAuthor}/>
            <input className='btn' type='submit' value = 'add book'/>
        </form>
    );
};

export default BookForm;
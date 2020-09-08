import React from 'react';
import BookContextProvider from './contexts/BookContext';
import BookList from './components/BookList';
import NavBar from './components/NavBar';
import BookForm from './components/BookForm';
function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar/>
        <BookList/>
        <BookForm/>
      </BookContextProvider>
    </div>
  );
}

export default App;

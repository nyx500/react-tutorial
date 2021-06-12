import React from 'react'
import ReactDom from 'react-dom'
import './styles.css'
import { books } from './books'
// This is a default export, so you don't have to call the import Book. Instead, it's possible to name it whatever you want
import SpecificBook from './book'
import { greeting, message } from './testing/test'

console.log(greeting, message)

// Returns a stateless functional component
// Always return JSX
// props is short for properties
// can put in props into the component whenever you use it
// use .map() inside the section you are returning to get the list of components based on an object
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>
      })}
    </section>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))

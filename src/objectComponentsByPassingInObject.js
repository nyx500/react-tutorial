import React from 'react'
import ReactDom from 'react-dom'
import './styles.css'

const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg',
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth',
    price: '$1.25',
  },
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/41D3enj6JVS._SX324_BO1,204,203,200_.jpg',
    title:
      'The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma',
    author: 'Bessel van der Kolk',
    price: '$11.99',
  },
]

// Returns a stateless functional component
// Always return JSX
// props is short for properties
// can put in props into the component whenever you use it
// use .map() inside the section you are returning to get the list of components based on an object
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book id={book.id} key={book.id} book={book}></Book>
      })}
    </section>
  )
}

const Book = ({ book: { img, title, author, price } }) => {
  return (
    <article className='book'>
      <img src={img} alt='book' />
      <h1>{title}</h1>
      <h3>{author}</h3>
      <h5
        style={{
          color: '#617d98',
          fontSize: '0.75rem',
          margin: '0.25rem',
          letterSpacing: '0.5px',
        }}
      >
        <b>Price:</b>
        {price}
      </h5>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))

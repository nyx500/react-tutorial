import React from 'react'
import ReactDom from 'react-dom'
import './styles.css'

// An array of book objects
const books = [
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg',
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth',
    price: '$1.25',
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/41D3enj6JVS._SX324_BO1,204,203,200_.jpg',
    title:
      'The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma',
    author: 'Bessel van der Kolk',
    price: '$11.99',
  },
]

// Map over books and use the object to return JSX for every iteration
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        const { img, title, author, price } = book
        return (
          <div>
            <img src={img}></img>
            <h3>{title}</h3>
            <h3>{author}</h3>
            <h5>{price}</h5>
          </div>
        )
      })}
    </section>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))

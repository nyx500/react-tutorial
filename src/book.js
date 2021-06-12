// Default export

import React from 'react'

const Book = ({ id, img, title, author, illustrator, price }) => {
  // Function which takes an event parameter
  const clickHandler = (e) => {
    console.log(e.target)
  }

  const complexFunction = (id) => {
    const articleArray = [...document.getElementsByTagName('article')]
    let thisArticle = articleArray.find((article) => {
      return Number(article.id) === id
    })
    thisArticle.style.display = 'none'
  }

  return (
    <article id={id} className='book'>
      <img src={img} alt='book' />
      <h1>{title}</h1>
      <h3>{author}</h3>
      <h3>{illustrator}</h3>
      <h5
        style={{
          color: '#617d98',
          fontSize: '0.75rem',
          margin: '0.25rem',
          letterSpacing: '0.5px',
        }}
        onMouseOver={() => {
          const articles = [...document.getElementsByTagName('article')]
          articles.forEach((article) => {
            if (article.style.backgroundColor !== 'green') {
              article.style.backgroundColor = 'green'
            } else {
              article.style.backgroundColor = 'lightskyblue'
            }
          })
        }}
      >
        <b>Price:</b>
        {price}
      </h5>
      <button type='button' onClick={clickHandler}>
        Click!
      </button>
      <button type='button' onClick={() => complexFunction(id)}>
        Complex Example
      </button>
    </article>
  )
}

export default Book

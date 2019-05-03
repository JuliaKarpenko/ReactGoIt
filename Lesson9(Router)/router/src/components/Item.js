import React from 'react';

const Item = ({ imageUrl, title, author, body, category, onClick }) => (
    <article>
        <h2>{title}</h2>
        <img src={imageUrl} alt={title}/>
        <p>Author: {author}</p>
        <p>category: {category}</p>
        <p>{body}</p>
        <button onClick={onClick}>Back to article</button>
    </article>
)

export default Item;
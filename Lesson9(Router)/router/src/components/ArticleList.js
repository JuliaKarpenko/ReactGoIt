import React from 'react';
import { Link } from 'react-router-dom';

const ArticleList = ({articles, match, location}) => (
    <ul>
        {articles.map(articles => ( 
            <li key={articles.id}>
                <Link to={{
                    pathname: `${match.url}/${articles.id}`, 
                    state: {from: location }
                }}>
                    {articles.title}
                </Link>
            </li>
        ))}
    </ul>
)

export default ArticleList;
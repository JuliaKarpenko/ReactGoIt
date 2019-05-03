import React from 'react';
import './Card.css';
import Toggle from '../toggle/Toggle'
import Form from '../form/Form'


// const Card = () => {
//     const infoObj = {
//         title: 'Что такое Lorem Ipsum?',
//         article: 'Lorem Ipsum - это текст-"рыба"',
//         underArticle: 'Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
//         text: 'В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.',
//         price: '$399.00'
//     }
//     return ( 
//         <div className="wrapper-text">
//             <h3>{infoObj.title}</h3>
//             <h1>{infoObj.article}</h1>
//             <h4>{infoObj.underArticle}</h4>
//             <p>{infoObj.text}</p>
//             <div className="wrapper-price">
//                 <h2>{infoObj.price}</h2>
//                 <Button/>
//             </div>

//         </div>
//     )
// }



const Card = ({infoObj}) =>  ( 
    <div className="wrapper-text">
        <p>{infoObj.title}</p>
        <h1>{infoObj.article}</h1>
        <span>{infoObj.text}</span>
        <div className="wrapper-price">
            <h2>{infoObj.price}</h2>
            <Toggle>
                <Form/>
            </Toggle>
        </div>

    </div>
)

export default Card;
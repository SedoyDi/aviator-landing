import React from 'react';
import './Item.css';

function Item({ number, text }) {
    return (
        <li className='item'>
            <span>{number}</span>
            <p>{text}</p>
        </li>
    )
}

export default Item

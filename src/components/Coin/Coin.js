import React from 'react';
import './Coin.css';

function Coin({ img, left, duration, width }) {
    return (
        <img src={img} className='coin' alt='coin' style={{ left: left, animationDuration: duration, width: width }} />
    )
}

export default Coin

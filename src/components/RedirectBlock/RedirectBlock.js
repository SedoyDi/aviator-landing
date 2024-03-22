import React from 'react';
import './RedirectBlock.css';
import Item from './Item/Item';

function RedirectBlock() {
    return (
        <div className='redirect-block'>
            <ol className='redirect-block__list'>
                <Item number='1' text='Register' />
                <Item number='2' text='Make a deposit' />
                <Item number='3' text='Earn from 60,000 rupees in Aviator per day!' />
            </ol>
            <button
                type='button'
                className='redirect-block__button'
                onClick={() => console.log('Redirect')}>let’s earn money</button>
        </div>
    )
}

export default RedirectBlock

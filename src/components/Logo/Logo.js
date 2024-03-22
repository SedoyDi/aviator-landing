import React from 'react';
import logoImg from '../../images/logo/aviator.svg';
import './Logo.css';

function Logo() {
    return (
        <img className="logo" src={logoImg} alt="logo" />
    )
}

export default Logo

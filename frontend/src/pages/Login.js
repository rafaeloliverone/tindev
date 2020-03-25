import React from 'react';

import logo from '../assets/logo.svg';
import './Login.css';

export default function Login() {
    return (
        <div className="login-container"> 
            <form>
                <img src={logo} alt="Tindev" />
                <input placeholder="Digite seu usuário do github" />
                <button type="submit"> Entrar </button>
            </form>
        </div>
    );
}

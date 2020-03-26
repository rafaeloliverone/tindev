import React from 'react';
import './Main.css';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

export default function Main({ match }) {
    return (
        <div className="main-container">
            <img src={logo} alt="Tindev"/>

            <ul>
                <li>
                    <img 
                        src="https://avatars0.githubusercontent.com/u/4248081?v=4" 
                        alt="Profile" 
                    />
                    <footer>
                        <strong>Rafael Oliveira</strong>
                        <p>Programador e cantor nas horas vagas.</p>
                    </footer>

                    <div className="buttons">
                        <button type="submit">
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="submit">
                            <img src={like} alt="Like"/>
                        </button>
                    </div>
                </li>

                <li>
                    <img 
                        src="https://avatars0.githubusercontent.com/u/4248081?v=4" 
                        alt="Profile" 
                    />
                    <footer>
                        <strong>Rafael Oliveira</strong>
                        <p>Programador e cantor nas horas vagas.</p>
                    </footer>

                    <div className="buttons">
                        <button type="submit">
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="submit">
                            <img src={like} alt="Like"/>
                        </button>
                    </div>
                </li>

                <li>
                    <img 
                        src="https://avatars0.githubusercontent.com/u/4248081?v=4" 
                        alt="Profile" 
                    />
                    <footer>
                        <strong>Rafael Oliveira</strong>
                        <p>Programador e cantor nas horas vagas.</p>
                    </footer>

                    <div className="buttons">
                        <button type="submit">
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="submit">
                            <img src={like} alt="Like"/>
                        </button>
                    </div>
                </li>

                <li>
                    <img 
                        src="https://avatars0.githubusercontent.com/u/4248081?v=4" 
                        alt="Profile" 
                    />
                    <footer>
                        <strong>Rafael Oliveira</strong>
                        <p>Programador e cantor nas horas vagas.</p>
                    </footer>

                    <div className="buttons">
                        <button type="submit">
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="submit">
                            <img src={like} alt="Like"/>
                        </button>
                    </div>
                </li>
            </ul>

        </div>
    
        // <h2>{match.params.id}</h2>   
    );
}
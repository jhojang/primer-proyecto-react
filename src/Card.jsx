import React from 'react';
import './Card.css';
import ReactImg from './REACTjs.jpg';
import avatarImg from './avatar-img.jpg';

function Card() {
    return (
        <div className="card">
            <div className="img-container">
                <img src={ReactImg} alt=""/>
            </div>
            <div className="card-description">
                <h3>Aquí va el título de la card</h3>
                <div className="autor-content">
                    <img src={avatarImg} alt=""/>
                    <span>Nombre del autor</span>
                </div>
                <div className="link">
                    <a href="">Iniciar</a>
                </div>
            </div>
        </div>
    )
}

export default Card;
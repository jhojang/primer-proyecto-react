import React from 'react';
import './Card.css';
import PropTypes from "prop-types"

function Card({imagen, titulo, autor, avatar, boton}) {
    return (
        <div className="card">
            <div className="img-container">
                <img src={imagen} alt=""/>
            </div>
            <div className="card-description">
                <h3>{titulo}</h3>
                <div className="autor-content">
                    <img src={avatar} alt=""/>
                    <span>{autor}</span>
                </div>
                <div className="link">
                    <a href="">{boton}</a>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    imagen: PropTypes.string,
    titulo: PropTypes.string,
    avatar: PropTypes.string,
    autor: PropTypes.string,
    boton: PropTypes.string
}

Card.defaultProps = {
    imagen: "https://farm5.staticflickr.com/4363/36346283311_1dec5bb2c2.jpg",
    titulo: "---",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmItPhy3D1zdB1ufVECWplIEtUTQ_XPvtoTw&usqp=CAU",
    autor: "---",
    boton: "$0"
}

export default Card;
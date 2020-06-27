import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card.jsx';

const cards = [
  {

  },
  {
    imagen: "https://programacion.net/files/article/article_01934_.png",
    avatar: "https://img.pngio.com/avatar-icon-png-105-images-in-collection-page-3-avatarpng-512_512.png",
    titulo: "Título de card número 1",
    autor: "Alexis Jaramillo",
    boton: "$25"
  },
  {
    imagen: "https://postparaprogramadores.com/wp-content/uploads/2020/04/44-min.png",
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    titulo:"Título de card número 2",
    autor: "Alexis Jaramillo",
    boton: "$30"
  },
  {
    imagen: "https://codigoonclick.com/wp-content/uploads/2018/03/Conoce-Angular-1080x630.jpg",
    avatar: "https://monteirolobato.com.br/public/assets/admin/images/avatars/avatar2_big.png",
    titulo:"Título de card número 2",
    autor: "Roberto Lopez",
    boton: "$50"
  }
];

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hola mundo con React JS
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <div className="card-container">
        {
          /*cards.map(function(card) {
            return <Card
                    imagen = {card.imagen}
                    avatar = {card.avatar}
                    titulo = {card.titulo}
                    autor = {card.autor}
                    boton = {card.boton}
                  />
          })*/

          cards.map(card => <Card 
                              imagen = {card.imagen}
                              avatar = {card.avatar}
                              titulo = {card.titulo}
                              autor = {card.autor}
                              boton = {card.boton}
                            />)
        }
      </div>
    </>
  );
}


export default App;

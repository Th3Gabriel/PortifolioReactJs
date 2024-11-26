import React from 'react';
import './Hero.css';
import perfil from '../../assets/eu.jpeg';

function Hero() {
  return (
    <div className="neutralc-bg">
      <div className="container hero-container">
        <div className="text-container">
          <h2>Gabriel Martins Paz</h2>
          <p>Desenvolvedor</p>
        </div>
        <div className="image-container">
          <img 
            src={perfil} 
            className="perfil" 
            alt="Perfil"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

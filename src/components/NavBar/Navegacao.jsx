import React, { useState } from 'react';
import Logo from '../../assets/logo.svg';
import './Navegacao.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="neutral-bg">
        <div className="container">
          <div className="al-center d-flex jc-space-between">
            <a href="#home">
              <img src={Logo} alt="Logo" />
            </a>

            <button 
              className="mobile-menu" 
              onClick={toggleMenu} 
              aria-label="Toggle menu"
            >
              ☰
            </button>

            <nav className={`nav ${menuOpen ? 'show' : ''}`}>
              <ul className="d-flex">
                <li>
                  <a href="#sobre-mim">SOBRE MIM</a>
                </li>
                <li>
                  <a href="#tecnologias">TECNOLOGIAS</a>
                </li>
                <li>
                  <a href="#projetos">PROJETOS</a>
                </li>
                <li>
                  <a href="#contato">CONTATO</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;

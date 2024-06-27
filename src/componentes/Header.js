import Logo from './calizo.svg'
import './Header.css'
import Menu from './Iconmenu.png'
import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <div className="containerheader">
        <div className="logo-container">
          <img src={Logo} alt="Logo" style={{ width: '120px' }} />
        </div>
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
          <button className="register-btn">Registro</button>
        </nav>
        <div className="menu-icon" onClick={toggleMenu}>
          <img src={Menu} alt="Menú" />
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from 'react';
import './Footer.css'; 

function Footer  () {
  return (
    <footer className="footer">
      <div className="containerfooter">
        <div className="row">
          <div className="col">
            <h5>Contacto</h5>
            <p>Teléfono: (123) 456-7890</p>
            <p>Email: Calizo@gmail.com</p>
          </div>
          <div className="col">
            <h5>Redes Sociales</h5>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>&copy; {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

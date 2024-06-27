import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alfarera from './Productor1.jpg';
import Vidriero from './Productor2.jpg';
import Artista from './Productor3.jpg';
import Tejedor from './Productor4.jpg';
import Calderero from './Productor5.jpg';
import Ebanista from './Productor6.jpg';
import vajillera from './Productor7.jpg';
import Velera from './Productor8.jpg';
import floreros from './Recientes1.jpg';
import Espejos from './Recientes2.jpg';
import Plantas from './Recientes3.jpg';
import Cocina from './Recientes4.jpg';
import cortinas from './Recientes5.jpg';
import Marcos from './Recientes6.jpg';
import iluminacion from './Recientes7.jpg';
import Buró from './Recientes8.jpg';
import './Body.css'

const Body = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index === selectedCard ? null : index);
  };

  return (
    <div className="Body">

      {/* Secciones*/}
    
      <div className="Secciones">
        <ul className="navsecciones">
          <li className="nav-item">
            <a href="#articulos" className="nav-link">Artículos</a>
          </li>
          <li className="nav-item">
            <a href="#recientes" className="nav-link">Recientes</a>
          </li>
          <li className="nav-item">
            <a href="#comunidad" className="nav-link">Comunidad</a>
          </li>
        </ul>
      </div>

      {/* Galeriarecientes*/}

      <div className="galeriarecientes">
        <div className="containergaleria">
          <div className="Row">
            <div className="col-lg-2 col-sm-3">
              <a href="#">
                <img src={floreros} alt="Floreros" />
                <h1>El toque floral</h1>
                <div className="division"></div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-5">
              <a href="#">
                <img src={Espejos} alt="Espejos" />
                <h1>Reflejos de estilo</h1>
                <div className="division"></div>
              </a>
            </div>
            <div className="col-lg-3 col-md-4 ">
              <a href="#">
                <img src={Plantas} alt="Plantas" />
                <h1>El Poder del Verde</h1>
                <div className="division"></div>
              </a>
            </div>
            <div className="col-lg-3 col-md-5">
              <a href="#">
                <img src={Cocina} alt="Cocina" />
                <h1>Cocina con orden</h1>
                <div className="division"></div>
              </a>
            </div>
            <div className="col-lg-3 col-md-5">
              <a href="#">
                <img src={cortinas} alt="Cortinas" />
                <h1>Entre telas y ventanas</h1>
                <div className="division"></div>
              </a>
            </div>
            
            <div className="col-lg-2 col-md-3">
              <a href="#">
                <img src={iluminacion} alt="Iluminación" />
                <h1>Guía de iluminación</h1>
                <div className="division"></div>
              </a>
            </div>
            <div className="col-lg-4 col-md-5">
              <a href="#">
                <img src={Marcos} alt="Marcos" />
                <h1>El arte de colgar marcos</h1>
                <div className="division"></div>
              </a>
            </div>
            <div className="col-lg-3 col-md-4">
              <a href="#">
                <img src={Buró} alt="Buró" />
                <h1>Dale vida a tu buró</h1>
                <div className="division"></div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Productores */}
     <div className="Productores">
  <h1 className="text-center mb-4">Productores</h1>
  <Carousel indicators={false} nextLabel="⇨" prevLabel="⇦" interval={null} className="mb-4">
    <Carousel.Item>
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
          <Card onClick={() => handleCardClick(0)} className={`card ${selectedCard === 0 ? 'selected' : ''}`}>
            <Card.Img variant="top" src={Alfarera} />
            <Card.Body>
              <Card.Title>Manos de Barro</Card.Title>
              <Card.Text>Alfareros productores de piezas en arcilla</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
          <Card onClick={() => handleCardClick(1)} className={`card ${selectedCard === 1 ? 'selected' : ''}`}>
            <Card.Img variant="top" src={Vidriero} />
            <Card.Body>
              <Card.Title>Vista de Cielo</Card.Title>
              <Card.Text>Fabricante artesanal de piezas en vidrio</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
          <Card onClick={() => handleCardClick(2)} className={`card ${selectedCard === 2 ? 'selected' : ''}`}>
            <Card.Img variant="top" src={Artista} />
            <Card.Body>
              <Card.Title>ArtePigmento</Card.Title>
              <Card.Text>Artista creador de pinturas decorativas</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
          <Card onClick={() => handleCardClick(3)} className={`card ${selectedCard === 3 ? 'selected' : ''}`}>
            <Card.Img variant="top" src={Tejedor} />
            <Card.Body>
              <Card.Title>Telares del Alma</Card.Title>
              <Card.Text>Artesanos tejedores de piezas decorativas</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
          <Card onClick={() => handleCardClick(4)} className={`card ${selectedCard === 4 ? 'selected' : ''}`}>
            <Card.Img variant="top" src={Calderero} />
            <Card.Body>
              <Card.Title>Cobre-arte</Card.Title>
              <Card.Text>Artistas en metalurgia de piezas decorativas.</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
          <Card onClick={() => handleCardClick(5)} className={`card ${selectedCard === 5 ? 'selected' : ''}`}>
            <Card.Img variant="top" src={Ebanista} />
            <Card.Body>
              <Card.Title>Los Robles</Card.Title>
              <Card.Text>Taller de ebanistas, tradición familiar.</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
          <Card onClick={() => handleCardClick(6)} className={`card ${selectedCard === 6 ? 'selected' : ''}`}>
            <Card.Img variant="top" src={vajillera} />
            <Card.Body>
              <Card.Title>Vistalinda</Card.Title>
              <Card.Text>Artista decoradora de vajillas y más.</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
          <Card onClick={() => handleCardClick(7)} className={`card ${selectedCard === 7 ? 'selected' : ''}`}>
            <Card.Img variant="top" src={Velera} />
            <Card.Body>
              <Card.Title>Aromaluz</Card.Title>
              <Card.Text>Fabricante de velas aromáticas.</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Carousel.Item>
  </Carousel>
</div>


    </div>
  );
};

export default Body;

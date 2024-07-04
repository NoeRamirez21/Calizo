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
import Jarrones from './Artículo1.jpg'
import Tapete from './Artículo2.jpg'
import Setup from './Artículo3.jpg'
import Baño from './Artículo4.jpg'
import Closet from './Artículo5.jpg'
import Cama from './Artículo6.jpg'
import Tendencias from './Artículo7.jpg'
import Sala from './Artículo8.jpg'
import Navidad from './Artículo9.jpg'
import Macetas from './Comunidad1.jpg'
import Mudanza from './Comunidad2.jpg'
import Fundas from './Comunidad3.jpg'
import Mesa from './Comunidad4.jpg'
import Setup1 from './Comunidad5.jpg'
import Salach from './Comunidad6.jpg'
import Setup2 from './Comunidad7.jpg'
import Buróverde from './Comunidad8.jpg'
import Navidaddeco from './Comunidad9.jpg'







import './Body.css'

const Body = () => {
  const [activeSection, setActiveSection] = useState('articulos');
  const [selectedCard, setSelectedCard] = useState(null);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setSelectedCard(null); //
  };

  const handleCardClick = (index) => {
    setSelectedCard(index === selectedCard ? null : index);
  };

  return (
    <div className="Body">

      {/* Secciones*/}
    
  <div className="Secciones">
        <ul className="navsecciones">
          <li className="nav-item">
            <a href="#articulos" className={`nav-link ${activeSection === 'articulos' ? 'active' : ''}`} onClick={() => handleNavClick('articulos')}>
              Artículos
            </a>
          </li>
          <li className="nav-item">
            <a href="#recientes" className={`nav-link ${activeSection === 'recientes' ? 'active' : ''}`} onClick={() => handleNavClick('recientes')}>
              Recientes
            </a>
          </li>
          <li className="nav-item">
            <a href="#comunidad" className={`nav-link ${activeSection === 'comunidad' ? 'active' : ''}`} onClick={() => handleNavClick('comunidad')}>
              Comunidad
            </a>
          </li>
        </ul>
      </div>


      {activeSection === 'articulos' && (

      <div className= "Artículos">
              
              <div className= "Tarjetas">
                  <div className= "containertarjetas">

                      <div className="row">
                <div className= "col-lg-4 col-md-6 col-sm-12">
                 <div className="card">
                     <img className="card-img-top" src= {Jarrones} />
                     <div className="card-body">
                        <h5 className="card-title">Jarrones y Floreros</h5>
                        <p>En el vasto mundo del diseño de interiores, los jarrones y floreros decorativos... </p>
                    </div>
                </div>
              </div>  

              <div className= "col-lg-4 col-md-6 col-sm-12">
                 <div className="card">
                     <img className="card-img-top" src= {Tapete} />
                     <div className="card-body">
                        <h5 className="card-title">Tapetes</h5>
                        <p>Los tapetes, tesoro ancestral del mundo del diseño de interiores, continúan...</p>
                    </div>
                </div>
              </div>  
              <div className= "col-lg-4 col-md-6 col-sm-12">
                 <div className="card">
                     <img className="card-img-top" src= {Setup}/>
                     <div className="card-body">
                        <h5 className="card-title">Home office</h5>
                        <p>Los espacios de trabajo y su diseño desempeñan un papel fundamental en... </p>
                    </div>
                </div>
              </div>  <div className= "col-lg-4 col-md-6 col-sm-12">
                 <div className="card">
                     <img className="card-img-top" src= {Baño} />
                     <div className="card-body">
                        <h5 className="card-title">Baños pequeños</h5>
                        <p>En un espacio donde la funcionalidad se combina con el diseño, los baños... </p>
                    </div>
                </div>
              </div>  
              <div className= "col-lg-4 col-md-6 col-sm-12">
                 <div className="card">
                     <img className="card-img-top" src= {Closet}  />
                     <div className="card-body">
                        <h5 className="card-title">Organiza tu closet</h5>
                        <p>En la búsqueda de un hogar bien organizado, el closet juega un papel...</p>
                    </div>
                </div>
              </div>  
              <div className= "col-lg-4 col-md-6 col-sm-12">
                 <div className="card">
                     <img className="card-img-top" src= {Cama}  />
                     <div className="card-body">
                        <h5 className="card-title">Viste tu recamara</h5>
                        <p>El dormitorio se convierte en un santuario de confort y estilo con las últimas...</p>
                    </div>
                </div>
              </div>  
              <div className= "col-lg-4 col-md-6 col-sm-12">
                 <div className="card">
                     <img className="card-img-top" src= {Tendencias}  />
                     <div className="card-body">
                        <h5 className="card-title">Tendencias de color 2024</h5>
                        <p>En el lienzo de nuestros hogares, el color cobra vida con audacia y elegancia en el...</p>
                    </div>
                </div>
              </div>  
              <div className= "col-lg-4 col-md-6 col-sm-12">
                 <div className="card">
                     <img className="card-img-top" src= {Sala}/>
                     <div className="card-body">
                        <h5 className="card-title">Complemeta tu sala</h5>
                        <p>En el corazón de nuestros hogares, las salas de estar se transforman en escenarios de... </p>
                    </div>
                </div>
              </div>  
              <div className= "col-lg-4 col-md-6 col-sm-12">
                 <div className="card">
                     <img className="card-img-top" src= {Navidad}/>
                     <div className="card-body">
                        <h5 className="card-title">Decoración Navideña</h5>
                        <p>En esta temporada festiva, nuestros hogares se transforman en escenarios de magia... </p>
                    </div>
                </div>
              </div>  
         </div>



                  </div>
              </div>

      </div>

       )}




    {activeSection === 'recientes' && (  

    <div className= "Recientes">

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
    )}

      {activeSection === 'comunidad' && (
      <div className= "Comunidad">

        <div className= "containercomunidad">

           <div className="row">
                <div className= "col-lg-4 col-md-6 col-sm-12">
                 <div className="card">
                     <img className="card-img-top" src= {Macetas} />
                     <div className="card-body">
                        <h5 className="card-title">Macetas nuevas</h5>
                        <p>Buen día comunidad les comparto las nuevas macetas que compré... </p>
                    </div>
                </div>
              </div>  

              <div className= "col-lg-4 col-md-6 col-sm-12">
                 <div className="card">
                     <img className="card-img-top" src= {Mudanza} />
                     <div className="card-body">
                        <h5 className="card-title">Mudanza</h5>
                        <p>Comunidad calizo, les quiero compartir mi proceso de decoración en mi nuevo...</p>
                    </div>
                </div>
              </div>  
              <div className= "col-lg-4 col-md-6 col-sm-12">
                 <div className="card">
                     <img className="card-img-top" src= {Fundas}/>
                     <div className="card-body">
                        <h5 className="card-title">Mis fundas</h5>
                        <p>Hola comunidad les quiero enseñar las fundas que realize para mi sala con... </p>
                    </div>
                </div>
              </div>  <div className= "col-lg-4 col-md-6 col-sm-12">
                 <div className="card">
                     <img className="card-img-top" src= {Mesa} />
                     <div className="card-body">
                        <h5 className="card-title">Mi comedor</h5>
                        <p>Amigos de calizo, en esta oportunidad les comparto que un comedor pequeño... </p>
                    </div>
                </div>
              </div>  
              <div className= "col-lg-4 col-md-6 col-sm-12">
                 <div className="card">
                     <img className="card-img-top" src= {Setup1}  />
                     <div className="card-body">
                        <h5 className="card-title">Mi espacio de trabajo</h5>
                        <p>Hace unos dias leí el articulo que corresponde a el home office y me propuse...</p>
                    </div>
                </div>
              </div>  
              <div className= "col-lg-4 col-md-6 col-sm-12">
                 <div className="card">
                     <img className="card-img-top" src= {Salach}  />
                     <div className="card-body">
                        <h5 className="card-title">Estrenando sala</h5>
                        <p>Hace unos dias remodele mi espacio de la sala, y aplique algunos de los puntos...</p>
                    </div>
                </div>
              </div>  
              <div className= "col-lg-4 col-md-6 col-sm-12">
                 <div className="card">
                     <img className="card-img-top" src= {Setup2}  />
                     <div className="card-body">
                        <h5 className="card-title">Mi setup de home-office</h5>
                        <p>Les quiero compartir los cambios que he hecho en mi espacio de trabajo retomando...</p>
                    </div>
                </div>
              </div>  
              <div className= "col-lg-4 col-md-6 col-sm-12">
                 <div className="card">
                     <img className="card-img-top" src= {Buróverde}/>
                     <div className="card-body">
                        <h5 className="card-title">Segunda vida</h5>
                        <p>Hola a todos los lectores de la plataforma, les quiero compartir un proyecto que... </p>
                    </div>
                </div>
              </div>  
              <div className= "col-lg-4 col-md-6 col-sm-12">
                 <div className="card">
                     <img className="card-img-top" src= {Navidaddeco}/>
                     <div className="card-body">
                        <h5 className="card-title">Decoración Navideña</h5>
                        <p>Hola a todos, quiero mostrarles algunas decoraciones que yo misma hice para... </p>
                    </div>
                </div>
              </div>  
         </div>





        </div>
      </div>

      )}





    </div>
  );
};

export default Body;
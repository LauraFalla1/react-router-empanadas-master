import carrusel1 from '../img/carrusel3.jpg'
import Nosotros from './Nosotros';
import Contacto from './Contacto';
import {NavLink} from 'react-router-dom';
import pastel1 from '../img/pastel1.jpg'
import pastel2 from '../img/pastel2.png'
import carrusel2 from '../img/empanada3.jpg'
import empanada1 from '../img/empanada1.jpg'
import empanada2 from '../img/empanada2.jpg'
import empanada3 from '../img/empanada3.jpg'

function Inicio(){
  return (    
    <div className="App">
    
        <div className="carousel">
            <div className="container-fluid">
                <div className="owl-carousel">
                    <div className="carousel-item">
                        <div className="carousel-img">
                            <img src={carrusel1} alt={Image} />
                        </div>
                        <div className="carousel-text">
                            <h1>Antojado de <span>algo Rico, Calientico</span> y Crocantico?</h1>
                            <p>
                            Somos Olympus Delicias, antojamos a nuestros clientes con la calidad y el sabor de los excelentes productos que brindamos, generando una experiencia de consumo placentera.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="food">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-4">
                        <div class="food-item">
                            <i class="flaticon-burger"></i>
                            <h2>Empanadas</h2>
                            <p>
                                Conoce aquí nuestro mundo de diferentes sabores de las mejores empanadas crocantes. Innovamos con productos y recetas tradicionales.
                            </p>
                            <NavLink to='/Productos'>Ver Menú</NavLink>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="food-item">
                            <i class="flaticon-snack"></i>
                            <h2>Pasteles</h2>
                            <p>
                                Conoce nuestra gran variedad de pasteles reconocidos por su magnifico sabor, pensando siempre en los antojos de todos los días. 
                            </p>
                            <NavLink to='/Productos'>Ver Menú</NavLink>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="food-item">
                            <i class="flaticon-snack"></i>
                            <h2>Congelados</h2>
                            <p>
                            Disfruta de nuestra gran variedad de productos congelados. Creamos e innovamos productos, recetas y preparaciones tradicionales.
                            </p>
                            <NavLink to='/Productos'>Ver Menú</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="menu">
            <div class="container">
                <div class="section-header text-center">
                    <h2>Menú</h2>
                </div>
                <div class="menu-tab">
                    <div class="tab-content">
                        <div id="burgers" class="container tab-pane active">
                            <div class="row">
                                <div class="col-lg-7 col-md-12">
                                    <div class="menu-item">
                                        <div class="menu-img">
                                            <img src={empanada1} alt={Image} />
                                        </div>
                                        <div class="menu-text">
                                            <h3><span>Empanada con Carne</span> <strong>$4.000</strong></h3>
                                            <p>Deliciosas empanadas con carne y papa, siempre una buena opción para hacer feliz tu paladar.</p>
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="menu-img">
                                            <img src={pastel1} alt={Image} />
                                        </div>
                                        <div class="menu-text">
                                            <h3><span>Papa Rellena</span> <strong>$4.500</strong></h3>
                                            <p>Papa rellena con carne y papa, un rico antojo para cualquier momento del día.</p>
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="menu-img">
                                            <img src={empanada2} alt={Image} />
                                        </div>
                                        <div class="menu-text">
                                            <h3><span>Empanada Bumanguesa</span> <strong>$4.000</strong></h3>
                                            <p>Pechuga de Pollo seleccionada, queso tipo mozzarella, champiñón, salami y especias.</p>
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="menu-img">
                                            <img src={pastel2} alt={Image} />
                                        </div>
                                        <div class="menu-text">
                                            <h3><span>Pastel con Pollo</span> <strong>$4.500</strong></h3>
                                            <p>LPremia tu paladar con éste delicioso pastel con pollo y papa.</p>
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="menu-img">
                                            <img src={empanada3} alt={Image} />
                                        </div>
                                        <div class="menu-text">
                                            <h3><span>Empanada Ranchera</span> <strong>$4.000</strong></h3>
                                            <p>Queso tipo mozzarella, salami y pechuga seleccionada.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-5 d-none d-lg-block">
                                    <img src={carrusel2} alt={Image} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul class="nav nav-pills justify-content-center">
                    <NavLink className="btn custom-btn" to="/Productos">Productos</NavLink>
                </ul>
            </div>
        </div>

        <Nosotros />

        <Contacto />

       
        
    </div>
   );
}
 
export default Inicio;
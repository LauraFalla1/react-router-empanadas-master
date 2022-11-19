import Nosotros from './Nosotros';
import Contacto from './Contacto';
import { NavLink } from 'react-router-dom';
import pastel1 from '../img/pastel1.jpg'
import pastel2 from '../img/pastel2.png'
import bgred from '../img/bd-red.webp'
import imgcarousel1 from '../img/carrusel2.webp'
import imgcarousel2 from '../img/carrusel3.webp'
import imgcarousel3 from '../img/carrusel4.webp'
import carrusel1 from '../img/carrusel2.jpg'
import carrusel2 from '../img/empanada3.jpg'
import carrusel3 from '../img/empanada3.jpg'
import empanada1 from '../img/empanada1.jpg'
import empanada2 from '../img/empanada2.jpg'
import empanada3 from '../img/empanada3.jpg'
import iconempanada from '../img/icons8-empanada-64.png'
import iconpastel from '../img/icons8-patata-48.png'
import icongenlado from '../img/icons8-bolsa-de-cemento-48.png'

function Inicio() {
    return (
        <div className="App">

            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={imgcarousel1} class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block flex-content">
                                <h5>Antojado de algo Rico, <span>Calientico y Crocantico?</span></h5>
                                <p>Somos Olympus Delicias, antojamos a nuestros dientes con la calidad y el sabor de los excelentes productos que brindamos, generando una experiencia de consumo placentera.</p>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src={imgcarousel2} class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block flex-content">
                                <h5>Antojado de algo Rico, <span>Calientico y Crocantico?</span></h5>
                                <p>Somos Olympus Delicias, antojamos a nuestros dientes con la calidad y el sabor de los excelentes productos que brindamos, generando una experiencia de consumo placentera.</p>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src={imgcarousel3} class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block flex-content">
                                <h5>Antojado de algo Rico, <span>Calientico y Crocantico?</span></h5>
                                <p>Somos Olympus Delicias, antojamos a nuestros dientes con la calidad y el sabor de los excelentes productos que brindamos, generando una experiencia de consumo placentera.</p>
                            </div>
                    </div>
                </div>{/* 
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button> */}
            </div>

            <div className="food">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <div className="food-item">
                                <img src={iconempanada} alt={Image} />
                                <h2>Empanadas</h2>
                                <p>
                                    Conoce aquí nuestro mundo de diferentes sabores de las mejores empanadas crocantes. Innovamos con productos y recetas tradicionales.
                                </p>
                                <NavLink to='/Productos'>Ver Menú</NavLink>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="food-item">
                                <img src={iconpastel} alt={Image} />
                                <h2>Pasteles</h2>
                                <p>
                                    Conoce nuestra gran variedad de pasteles reconocidos por su magnifico sabor, pensando siempre en los antojos de todos los días.
                                </p>
                                <NavLink to='/Productos'>Ver Menú</NavLink>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="food-item">
                                <img src={icongenlado} alt={Image} />
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

            <div className="menu">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Menú</h2>
                    </div>
                    <div className="menu-tab">
                        <div className="tab-content">
                            <div id="burgers" className="container tab-pane active">
                                <div className="row">
                                    <div className="col-lg-7 col-md-12">
                                        <div className="menu-item">
                                            <div className="menu-img">
                                                <img src={empanada1} alt={Image} />
                                            </div>
                                            <div className="menu-text">
                                                <h3><span>Empanada con Carne</span> <strong>$4.000</strong></h3>
                                                <p>Deliciosas empanadas con carne y papa, siempre una buena opción para hacer feliz tu paladar.</p>
                                            </div>
                                        </div>
                                        <div className="menu-item">
                                            <div className="menu-img">
                                                <img src={pastel1} alt={Image} />
                                            </div>
                                            <div className="menu-text">
                                                <h3><span>Papa Rellena</span> <strong>$4.500</strong></h3>
                                                <p>Papa rellena con carne y papa, un rico antojo para cualquier momento del día.</p>
                                            </div>
                                        </div>
                                        <div className="menu-item">
                                            <div className="menu-img">
                                                <img src={empanada2} alt={Image} />
                                            </div>
                                            <div className="menu-text">
                                                <h3><span>Empanada Bumanguesa</span> <strong>$4.000</strong></h3>
                                                <p>Pechuga de Pollo seleccionada, queso tipo mozzarella, champiñón, salami y especias.</p>
                                            </div>
                                        </div>
                                        <div className="menu-item">
                                            <div className="menu-img">
                                                <img src={pastel2} alt={Image} />
                                            </div>
                                            <div className="menu-text">
                                                <h3><span>Pastel con Pollo</span> <strong>$4.500</strong></h3>
                                                <p>LPremia tu paladar con éste delicioso pastel con pollo y papa.</p>
                                            </div>
                                        </div>
                                        <div className="menu-item">
                                            <div className="menu-img">
                                                <img src={empanada3} alt={Image} />
                                            </div>
                                            <div className="menu-text">
                                                <h3><span>Empanada Ranchera</span> <strong>$4.000</strong></h3>
                                                <p>Queso tipo mozzarella, salami y pechuga seleccionada.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 d-none d-lg-block">
                                        <img src={carrusel2} alt={Image} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="nav nav-pills justify-content-center">
                        <NavLink classNameName="btn custom-btn" to="/Productos">Productos</NavLink>
                    </ul>
                </div>
            </div>

            <Nosotros />

            <Contacto />



        </div>
    );
}

export default Inicio;
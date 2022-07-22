import carrusel1 from '../img/carrusel3.jpg'
import Nosotros from './Nosotros';
import Contacto from './Contacto';
import {NavLink} from 'react-router-dom';

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
                            <h1>Los <span>Mejores</span> Ingredientes</h1>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac consequat at lectus in malesuada
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
                                Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non vulputa. Aliquam metus tortor auctor quis sem. 
                            </p>
                            <NavLink to='/Productos'>Ver Menú</NavLink>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="food-item">
                            <i class="flaticon-snack"></i>
                            <h2>Pasteles</h2>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non vulputa. Aliquam metus tortor auctor quis sem. 
                            </p>
                            <NavLink to='/Producto'>Ver Menú</NavLink>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="food-item">
                            <i class="flaticon-snack"></i>
                            <h2>Pasteles</h2>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non vulputa. Aliquam metus tortor auctor quis sem. 
                            </p>
                            <NavLink to='/Producto'>Ver Menú</NavLink>
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
                                            <img src="img/menu-burger.jpg" alt={Image} />
                                        </div>
                                        <div class="menu-text">
                                            <h3><span>Mini cheese Burger</span> <strong>$9.00</strong></h3>
                                            <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="menu-img">
                                            <img src="img/menu-burger.jpg" alt={Image} />
                                        </div>
                                        <div class="menu-text">
                                            <h3><span>Double size burger</span> <strong>$11.00</strong></h3>
                                            <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="menu-img">
                                            <img src="img/menu-burger.jpg" alt={Image} />
                                        </div>
                                        <div class="menu-text">
                                            <h3><span>Bacon, EGG and Cheese</span> <strong>$13.00</strong></h3>
                                            <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="menu-img">
                                            <img src="img/menu-burger.jpg" alt={Image} />
                                        </div>
                                        <div class="menu-text">
                                            <h3><span>Pulled porx Burger</span> <strong>$18.00</strong></h3>
                                            <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="menu-img">
                                            <img src="img/menu-burger.jpg" alt={Image} />
                                        </div>
                                        <div class="menu-text">
                                            <h3><span>Fried chicken Burger</span> <strong>$22.00</strong></h3>
                                            <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-5 d-none d-lg-block">
                                    <img src="img/menu-burger-img.jpg" alt={Image} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Nosotros />

        <Contacto />

       
        
    </div>
   );
}
 
export default Inicio;
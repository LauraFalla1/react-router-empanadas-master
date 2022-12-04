import { NavLink } from 'react-router-dom';
import pastel1 from '../img/pastel1.jpg'
import pastel2 from '../img/pastel2.png'
import carrusel2 from '../img/empanada3.jpg'
import empanada1 from '../img/empanada1.jpg'
import empanada2 from '../img/empanada2.jpg'
import empanada3 from '../img/empanada3.jpg'

function Menu() {
    return (
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
    );
}

export default Menu;
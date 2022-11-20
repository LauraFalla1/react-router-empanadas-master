import { NavLink } from 'react-router-dom';
import iconempanada from '../img/icons8-empanada-64.png'
import iconpastel from '../img/icons8-patata-48.png'
import icongenlado from '../img/icons8-bolsa-de-cemento-48.png'

function Categorias() {
    return ( 
        <div className="food">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <div className="food-item">
                                <img src={iconempanada} alt={Image} />
                                <h2>Empanadas</h2>
                                <p>
                                    Conoce el mundo de las mejores empanadas crocantes en sus diferentes sabores y recetas tradicionales.
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
        );
    }
    
export default Categorias;
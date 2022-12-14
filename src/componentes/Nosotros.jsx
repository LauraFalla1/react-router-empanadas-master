import { NavLink } from 'react-router-dom';
import nosotros from '../img/nosotros.jpg'

function Nosotros() {
    return (
        <div>
            <div className="page-header mb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Nosotros</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src={nosotros} alt={Image} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-header">
                                    <h2>Cocinando Desde 1982</h2>
                                </div>
                                <div className="about-text">
                                    <p>
                                        Somos una empresa caleña con más de 30 años de experiencia, en producción de alimentos, precocidos típicos colombianos y mucho más... Imperio del Sabor nació del sueño de los socios, buscando estandarizar los procesos de línea amarilla en las PANADERÍAS KUTY Y PAN NORTE.
                                    </p>
                                    <p>
                                        Nuestros productos son elaborados con la mejor materia prima y procesados bajo los estándares de las Buenas prácticas de manufactura. La tecnología es el motor del cambio, para ofrecer variedad e innovación, dan como resultado una alta calidad en nuestros productos.
                                    </p>
                                    <p>
                                        Contamos con un gran grupo de talento humano que día a día elaboran con compromiso, amor y dedicación todos nuestros productos para que nuestros clientes puedan compartir momentos especiales, en familia y amigos.
                                    </p>
                                    <NavLink className="btn custom-btn" to="/Productos">Productos</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nosotros;
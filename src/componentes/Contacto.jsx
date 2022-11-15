import {Link} from 'react-router-dom';
import empanada1 from '../img/empanadas1.jpg'

function Contacto() {
    return ( 
        <div>
            <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Contactenos</h2>
                    </div>
                </div>
            </div>
        </div>
            <div className="contact">
            <div className="container">
                <div className="section-header text-center">
                    <p>Contactenos</p>
                    <h2>Contacto Para Cualquier Consulta</h2>
                </div>
                <div className="row align-items-center contact-information">
                    <div className="col-md-6 col-lg-3">
                        <div className="contact-info">
                            <div className="contact-icon">
                                <i className="fa fa-map-marker-alt"></i>
                            </div>
                            <div className="contact-text">
                                <h3>Dirección</h3>
                                <p>Santa Ines, Neiva, Colombia</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="contact-info">
                            <div className="contact-icon">
                                <i className="fa fa-phone-alt"></i>
                            </div>
                            <div className="contact-text">
                                <h3>Teléfono</h3>
                                <p>+012 345 6789</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="contact-info">
                            <div className="contact-icon">
                                <i className="fa fa-envelope"></i>
                            </div>
                            <div className="contact-text">
                                <h3>Email</h3>
                                <p>imperio@sazon.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="contact-info">
                            <div class="contact-icon">
                                <i class="fa fa-share"></i>
                            </div>
                            <div class="contact-text">
                                <h3>Redes sociales</h3>
                                <div class="contact-social">
                                <a href="https://twitter.com/?lang=es" target="_blank" rel="noopener noreferrer"><i  class="fab fa-twitter"></i></a>
                                        <a href="https://es-la.facebook.com/facebook/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
                                        <a href="https://www.youtube.com/watch?v=EhCaEYDrp30" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a>
                                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a> 
                                        <a href="https://co.linkedin.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        </div>
    );
}
export default Contacto;
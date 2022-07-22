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
                                <h3>Llámenos</h3>
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
                                <h3>Envianos un Email</h3>
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
                                <h3>Follow Us</h3>
                                <div class="contact-social">
                                    <Link to='/Contacto'><i class="fab fa-twitter"></i></Link>
                                    <Link to='/Contacto'><i class="fab fa-facebook-f"></i></Link>
                                    <Link to='/Contacto'><i class="fab fa-youtube"></i></Link>
                                    <Link to='/Contacto'><i class="fab fa-instagram"></i></Link>
                                    <Link to='/Contacto'><i class="fab fa-linkedin-in"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className="row contact-form">
                    <div className="col-md-6">
                                <img src={empanada1} alt={Image} class="contactoimg" />
                    </div>
                    <div className="col-md-6">
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm" novalidate="novalidate">
                            <div className="control-group">
                                <input type="text" className="form-control" id="name" placeholder="Su Nombre" required="required" data-validation-required-message="Por favor escriba su nombres" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="email" className="form-control" id="email" placeholder="Su Correo Electrónico" required="required" data-validation-required-message="Por favor escriba su correo electrónico" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="text" className="form-control" id="subject" placeholder="Tema" required="required" data-validation-required-message="Por favor escriba el tema" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <textarea className="form-control" id="message" placeholder="Mensaje" required="required" data-validation-required-message="Por favor escriba su mensaje"></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div>
                                <button className="btn custom-btn" type="submit" id="sendMessageButton">Enviar Mensaje</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
        </div>
    );
}
export default Contacto;
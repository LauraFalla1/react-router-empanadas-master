import {Link} from 'react-router-dom';

function Footer() {
    return ( 
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="footer-contact">
                                    <h2>Nuestra Dirección</h2>
                                    <p><i className="fa fa-map-marker-alt"></i>Santa Ines, Neiva, Colombia</p>
                                    <p><i className="fa fa-phone-alt"></i>+012 345 6789</p>
                                    <p><i className="fa fa-envelope"></i>imperio@sazon.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="footer-newsletter">
                            <h2>Redes Sociales</h2>
                            <div className="footer-social">
                                        <a href="https://twitter.com/?lang=es" target="_blank" rel="noopener noreferrer"><i  className="fab fa-twitter"></i></a>
                                        <a href="https://es-la.facebook.com/facebook/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                                        <a href="https://www.youtube.com/watch?v=EhCaEYDrp30" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a> 
                                        <a href="https://co.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>Copyright &copy; <Link to="/">Olympus Delicias</Link>, All Right Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Footer;
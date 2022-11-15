import {Link} from 'react-router-dom';

function Footer() {
    return ( 
        <div class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="footer-contact">
                                    <h2>Nuestra Dirección</h2>
                                    <p><i class="fa fa-map-marker-alt"></i>Santa Ines, Neiva, Colombia</p>
                                    <p><i class="fa fa-phone-alt"></i>+012 345 6789</p>
                                    <p><i class="fa fa-envelope"></i>imperio@sazon.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="footer-newsletter">
                            <h2>Redes Sociales</h2>
                            <div class="footer-social">
                                        <a href="https://twitter.com/?lang=es" target="_blank" rel="noopener noreferrer"><i  class="fab fa-twitter"></i></a>
                                        <a href="https://es-la.facebook.com/facebook/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
                                        <a href="https://www.youtube.com/watch?v=EhCaEYDrp30" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a>
                                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a> 
                                        <a href="https://co.linkedin.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                        </div>
                    </div>
                    <div class="copyright">
                        <p>Copyright &copy; <Link to="/">Olympus Delicias</Link>, All Right Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Footer;
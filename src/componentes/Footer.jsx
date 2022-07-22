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
                                    <p><i class="fa fa-phone-alt"></i>+012 345 67890</p>
                                    <p><i class="fa fa-envelope"></i>imperio@sazon.com</p>
                                    <div class="footer-social">
                                        <Link to="/"><i class="fab fa-twitter"></i></Link>
                                        <Link to="/"><i class="fab fa-facebook-f"></i></Link>
                                        <Link to="/"><i class="fab fa-youtube"></i></Link>
                                        <Link to="/"><i class="fab fa-instagram"></i></Link>
                                        <Link to="/"><i class="fab fa-linkedin-in"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="footer-newsletter">
                            <h2>Comentarios</h2>
                            <p>
                                Lorem ipsum dolor sit amet elit. Quisque eu lectus a leo dictum nec non quam. Tortor eu placerat rhoncus, lorem quam iaculis felis, sed lacus neque id eros.
                            </p>
                            <div class="form">
                                <input class="form-control" placeholder="Digite su correo electrónico" />
                                <button class="btn custom-btn">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright">
                <div class="container">
                <p>Copyright &copy; <Link to="/">Imperio del Sabor</Link>, All Right Reserved.</p>
                </div>
            </div>
        </div>
     );
}

export default Footer;
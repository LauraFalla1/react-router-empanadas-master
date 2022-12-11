import imgcarousel1 from '../img/carrusel2.webp'
import imgcarousel2 from '../img/carrusel3.webp'
import imgcarousel3 from '../img/carrusel4.webp'

function Carousel() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imgcarousel2} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block flex-content">
                                <h5>Antojado de algo Rico, <span>Calientico y Crocantico?</span></h5>
                                <p>Somos Olympus Delicias, antojamos a nuestros dientes con la calidad y el sabor de los excelentes productos que brindamos, generando una experiencia de consumo placentera.</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={imgcarousel3} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block flex-content">
                                <h5>Antojado de algo Rico, <span>Calientico y Crocantico?</span></h5>
                                <p>Somos Olympus Delicias, antojamos a nuestros dientes con la calidad y el sabor de los excelentes productos que brindamos, generando una experiencia de consumo placentera.</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={imgcarousel1} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block flex-content">
                                <h5>Antojado de algo Rico, <span>Calientico y Crocantico?</span></h5>
                                <p>Somos Olympus Delicias, antojamos a nuestros dientes con la calidad y el sabor de los excelentes productos que brindamos, generando una experiencia de consumo placentera.</p>
                            </div>
                    </div>
                </div>{/* 
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>

        );
    }
    
    export default Carousel;
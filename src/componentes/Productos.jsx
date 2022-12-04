import mpastel1 from '../img/mpaste1.jpg'
import mpastel2 from '../img/mpastel2.jpg'
import mpastel3 from '../img/mpastel3.jpg'
import mpastel4 from '../img/mpastel4.jpg'
import ppastel from '../img/ppastel.jpg'
import mempa1 from '../img/mempa1.jpeg'
import mempa2 from '../img/mempa2.jpeg'
import mempa3 from '../img/mempa3.jpeg'
import mempa4 from '../img/mempa4.jpeg'
import mempa5 from '../img/mempa5.jpeg'
import mempa6 from '../img/mempa6.jpeg'
import congelado1 from '../img/congelado1.jpeg'
import congelado2 from '../img/congelado2.jpeg'
import congelado3 from '../img/congelado3.jpeg'
import congelado4 from '../img/congelado4.jpeg'
import congelado5 from '../img/congelado5.jpeg'
import congelado6 from '../img/congelado6.jpeg'

function Productos() {
    return (
        <div>
            <div className="page-header mb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Productos</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Menú</h2>
                    </div>
                    <div className="menu-tab">
                        <ul className="nav nav-pills justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="pill" href="#empanadas">Empanadas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="pill" href="#pasteles">Pasteles</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="pill" href="#congelados">Congelados</a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div id="empanadas" className="container tab-pane active">
                                <div className="row">
                                    <div className="col-lg-7 col-md-12">
                                        <div className="menu-item">
                                            <div className="menu-img">
                                                <img src={mempa1} alt={Image} />
                                            </div>
                                            <div className="menu-text">
                                                <h3><span>Empanada de Pollo</span> <strong>$4.000</strong></h3>
                                                <p> Pechuga de Pollo seleccionada y especias.</p>
                                            </div>
                                        </div>
                                        <div className="menu-item">
                                            <div className="menu-img">
                                                <img src={mempa6} alt={Image} />
                                            </div>
                                            <div className="menu-text">
                                                <h3><span>Empanada Bumanguesa</span> <strong>$4.000</strong></h3>
                                                <p>Pechuga de Pollo seleccionada, queso tipo mozzarella, champiñón, salami y especias.</p>
                                            </div>
                                        </div>
                                        <div className="menu-item">
                                            <div className="menu-img">
                                                <img src={mempa2} alt={Image} />
                                            </div>
                                            <div className="menu-text">
                                                <h3><span>Emapnada de Pollo, Queso y Champiñon</span> <strong>$4.000</strong></h3>
                                                <p>Pechuga seleccionada, queso tipo mozzarella y champiñón fresco.</p>
                                            </div>
                                        </div>
                                        <div className="menu-item">
                                            <div className="menu-img">
                                                <img src={mempa5} alt={Image} />
                                            </div>
                                            <div className="menu-text">
                                                <h3><span>Empanada Mixta</span> <strong>$4.000</strong></h3>
                                                <p> Arroz, carne y pechuga seleccionadas, maiz y especias.</p>
                                            </div>
                                        </div>
                                        <div className="menu-item">
                                            <div className="menu-img">
                                                <img src={mempa4} alt={Image} />
                                            </div>
                                            <div className="menu-text">
                                                <h3><span>Empanada Ranchera</span> <strong>$4.000</strong></h3>
                                                <p>Queso tipo mozzarella, salami y pechuga seleccionada.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 d-none d-lg-block">
                                        <img src={mempa3} alt={Image} />
                                    </div>
                                </div>
                            </div>
                            <div id="pasteles" className="container tab-pane fade">
                                <div className="row">
                                    <div className="col-lg-7 col-md-12">
                                        <div className="menu-item">
                                            <div className="menu-img">
                                                <img src={mpastel3} alt={Image} />
                                            </div>
                                            <div className="menu-text">
                                                <h3><span>Pastel de Pollo</span> <strong>$4.500</strong></h3>
                                                <p>Elaboradas con maíz peto y relleno de pollo y papa con su sabor exquisito que le da el toque del guiso casero.</p>
                                            </div>
                                        </div>
                                        <div className="menu-item">
                                            <div className="menu-img">
                                                <img src={mpastel2} alt={Image} />
                                            </div>
                                            <div className="menu-text">
                                                <h3><span>Pastel Mexicano</span> <strong>$4.500</strong></h3>
                                                <p>Maíz peto y relleno de carne, compuesta de carne desmechada y murillo condimentados con una leve dispersión de ají.</p>
                                            </div>
                                        </div>
                                        <div className="menu-item">
                                            <div className="menu-img">
                                                <img src={mpastel1} alt={Image} />
                                            </div>
                                            <div className="menu-text">
                                                <h3><span>Pastel de Papa</span> <strong>$4.500</strong></h3>
                                                <p>Mezcla de masa a base de maíz peto con aceite vegetal, rellenas de carne desmechada/molida y papa.</p>
                                            </div>
                                        </div>
                                        <div className="menu-item">
                                            <div className="menu-img">
                                                <img src={mpastel4} alt={Image} />
                                            </div>
                                            <div className="menu-text">
                                                <h3><span>Pastel Mixto</span> <strong>$4.500</strong></h3>
                                                <p>Arroz, carne y pechuga seleccionadas y especias.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 d-none d-lg-block">
                                        <img src={ppastel} alt={Image} />
                                    </div>
                                </div>
                            </div>
                            <div id="congelados" className="container tab-pane fade">
                                <div className="row">
                                    <div className="col-lg-7 col-md-12">
                                        <div className="menu-item">
                                            <div className="menu-img">
                                                <img src={congelado1} alt={Image} />
                                            </div>
                                            <div className="menu-text">
                                                <h3><span>Empanadas de de Pollo, Queso y Champiñon x6</span> <strong>$20.000</strong></h3>
                                                <p>Pechuga seleccionada, queso tipo mozzarella y champiñón fresco.</p>
                                            </div>
                                        </div>
                                        <div className="menu-item">
                                            <div className="menu-img">
                                                <img src={congelado4} alt={Image} />
                                            </div>
                                            <div className="menu-text">
                                                <h3><span>Pasteles y empanadas de carne x4</span> <strong>$18.000</strong></h3>
                                                <p>Mezcla de masa a base de maíz peto con aceite vegetal, rellenas de carne desmechada/molida y papa.</p>
                                            </div>
                                        </div>
                                        <div className="menu-item">
                                            <div className="menu-img">
                                                <img src={congelado3} alt={Image} />
                                            </div>
                                            <div className="menu-text">
                                                <h3><span>Pasteles Mexicanos x4</span> <strong>$15.000</strong></h3>
                                                <p>Maíz peto y relleno de carne, compuesta de carne desmechada y murillo condimentados con una leve dispersión de ají.</p>
                                            </div>
                                        </div>
                                        <div className="menu-item">
                                            <div className="menu-img">
                                                <img src={congelado2} alt={Image} />
                                            </div>
                                            <div className="menu-text">
                                                <h3><span>Pasteles y Empanadas Mixtos x5</span> <strong>$22.000</strong></h3>
                                                <p>Arroz, carne y pechuga seleccionadas y especias.</p>
                                            </div>
                                        </div>
                                        <div className="menu-item">
                                            <div className="menu-img">
                                                <img src={congelado6} alt={Image} />
                                            </div>
                                            <div className="menu-text">
                                                <h3><span>Empanadas y Pasteles Bumanguesa x5</span> <strong>$25.000</strong></h3>
                                                <p>LPechuga de Pollo seleccionada, queso tipo mozzarella, champiñón, salami y especias.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 d-none d-lg-block">
                                        <img src={congelado5} alt={Image} />
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

export default Productos;
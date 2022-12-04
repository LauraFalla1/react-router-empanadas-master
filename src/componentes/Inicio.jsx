import Nosotros from './Nosotros';
import Contacto from './Contacto';
import Menu from './Menu';
import Categorias from './Categorias';
import Carousel from './Carousel';


function Inicio() {
    return (
        <div className="App">
            <Carousel />
            <Categorias />
            <Menu />
            <Nosotros />
            <Contacto />
        </div>
    );
}

export default Inicio;
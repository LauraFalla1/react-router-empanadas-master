import {NavLink} from 'react-router-dom';

function Navbar() {
    
    return ( 
        <div class="navbar navbar-expand-lg bg-light navbar-light">
            <div class="container-fluid">
                <a href="index.html" class="navbar-brand">Olympus <span>Delicias</span></a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div class="navbar-nav ml-auto">
                    <NavLink to='/' className="nav-item nav-link active">Inicio</NavLink>
                        <NavLink to='/Productos' className="nav-item nav-link">Productos</NavLink>
                        <NavLink to='/Nosotros' className="nav-item nav-link">Nosotros</NavLink>
                        <NavLink to='/Contacto' className="nav-item nav-link">Contacto</NavLink>
                        <NavLink to='/Api' className="nav-item nav-link">API</NavLink>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Navbar;
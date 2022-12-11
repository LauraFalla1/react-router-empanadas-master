import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';

function Navbar() {
    
    return ( 
        <div className="navbar navbar-expand-lg bg-light navbar-light">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">Olympus <span>Delicias</span></Link>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto">
                        <NavLink to='/Productos' className="nav-item nav-link">Productos</NavLink>
                        <NavLink to='/Nosotros' className="nav-item nav-link">Nosotros</NavLink>
                        <NavLink to='/Contacto' className="nav-item nav-link">Contacto</NavLink>
                        <NavLink to='/login' className="nav-item nav-link"><i class="bi bi-person-circle"></i></NavLink>
                        
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Navbar;
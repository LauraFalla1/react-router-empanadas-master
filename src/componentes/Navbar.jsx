import { NavLink ,Link } from 'react-router-dom'
import { UserContext } from '../context/user.context'
import React from 'react'

function Navbar() {
    const { authUser } = React.useContext(UserContext)

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
                       {!authUser.isAuth?(
                           <NavLink to='/login' className="nav-item nav-link"><i className="bi bi-person-circle"></i></NavLink>
                       ):(
                        <NavLink to='/close-section' className="nav-item nav-link">Cerrar Session</NavLink>
                       )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
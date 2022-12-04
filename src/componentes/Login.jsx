import React from 'react'
import { UserContext } from '../context/user.context'
import iconlogin from '../img/icons8-user-67.png'
import LoginService from '../services/login.service'
import { useNavigate } from 'react-router-dom';

import { MessageSucess, MessageFailed } from '../utils/message'
const Login = () => {
    let navigate = useNavigate()
    const { authUser, setAuthUser } = React.useContext(UserContext)

    React.useEffect(() => {
        if (authUser.isAuth && authUser.isAdmin) navigate("/admin/dashboard")
        else if (authUser.isAuth) navigate("/")
    }, [authUser.isAuth, authUser.isAdmin, navigate])


    const init_section = async () => {
        const response = await LoginService.Login(login)
        if (response.token) {
            MessageSucess({
                title: "estas logeado",
                message: "login efectuado exitosamente"
            })
            localStorage.setItem("token", response.token)
            localStorage.setItem("is-admin", response.isAdmin)
            setAuthUser({
                token: response.token,
                isAuth: true,
                isAdmin: response.isAdmin
            })
            if (response.isAdmin) navigate("/admin/dashboard")
            else if (authUser.isAuth) navigate("/")
        } else {
            MessageFailed({
                title: "error",
                message: "usuario no autenticado"
            })
        }
    }

    const [login, setLogin] = React.useState({
        email: "",
        password: ""
    })

    return (
        <div>
            <div className="page-header-login">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Login</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='page-login'>
                <div className="cover">
                    <img src={iconlogin} alt={Image} />
                    <input type="email" placeholder="Correo" onChange={(e) => {
                        setLogin({
                            ...login,
                            email: e.target.value
                        })
                    }}
                        value={login.email}
                    />
                    <input type="password" placeholder="Clave"
                        onChange={(e) => {
                            setLogin({
                                ...login,
                                password: e.target.value
                            })
                        }}
                        value={login.password}
                    />

                    <div className="login-btn" onClick={() => {
                        init_section()
                    }}>LOGIN</div>
                </div>
            </div>
        </div>

    )

}
export default Login;
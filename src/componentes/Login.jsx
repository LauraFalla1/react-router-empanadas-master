import React, { Component } from 'react'
import iconlogin from '../img/icons8-user-67.png'

class Login extends Component {
    state={
        form:{
            email: '',
            password: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }
    render() {
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
                        <input type="text" placeholder="Username" name='username'/>
                        <input type="password" placeholder="Password" name='password'/>

                        <div className="login-btn" >LOGIN</div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Login;
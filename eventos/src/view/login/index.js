import React from 'react';
import './login.css'

function Login(){
    return(
        <div className="login-content d-flex align-items-center">
            <form className="form-signin mx-auto">
            <h1 className="h3 mb-3 font-weight-normal text-white">Login</h1>

            <input type="email" id="inputEmail" class="form-control my-2" placeholder="Email address" />

            <input type="password" id="inputPassword" class="form-control my-2" placeholder="Password"/>

            <button className="btn btn-lg btn-block btn-login" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted text-center">© 2017-2019</p>
            </form>
        </div>
    )
}

export default Login;
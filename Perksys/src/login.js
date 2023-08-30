import React from 'react';
import login from './login1.jpg'

const Login = () => {
    return (
        <div>
            <div className='login'>
                <img src={login} alt='login banner' id="loginbannerimg"/>
                <h1 id="contacthead">Employee Login</h1>
            </div>
            <div className='logindiv'>
                <div className='loginform'>
                    <h5>Employee Login</h5>
                    <input type="text" placeholder='Username' />
                    <input type="password" placeholder='Password'/>
                    <button className='btn btn-primary loginbtn'>Login</button><br/>
                    <span id="lostpassword"><a href='##' >Lost Password</a></span>
                </div>
            </div>
        </div>
    );
};

export default Login;
import React, {useState} from 'react';
import { Navigate } from "react-router-dom";
import {connect} from 'react-redux';
import {setAlert} from '../../actions/alert';
import { loginSuccess, loginFail } from '../../actions/register';
import axios from "axios";
import PropTypes from 'prop-types';
import { loginApi } from '../../APIs/auth';
import store from '../../store';


const Login = ({setAlert, loginSuccess, loginFail, isAuthenticated}) => {

    var [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    var [rememberme, setRememberme] = useState(false)

    const {username, password} = formData

    const clickHandler = async e => {
        e.preventDefault()
        // toast("Login")
        if(rememberme)
        {
            const usernameStorage = localStorage.getItem('username')
            console.log('username', usernameStorage)
            const passwordStorage = localStorage.getItem('password')
            console.log('password', passwordStorage)
        }
        else
        {
            localStorage.removeItem("username")
            localStorage.removeItem("password")
            
        }
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const body = JSON.stringify(formData);
            const res = await axios.post(loginApi, body, config);

            setAlert("Logged in", "success");
            loginSuccess(res.data.access)
            console.log(store.getState().register.isAuthenticated)
            
        } catch (err) {
            loginFail()
            const errorReturned = err.response.data
            if(errorReturned.detail === 'No active account found with the given credentials')
            setAlert('username or password is incorrect', "danger");
            console.log(errorReturned);

        }
    };

    const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
        localStorage.setItem( [e.target.name],  e.target.value);
    };

    const handleRemember = e => {
        // e.preventDefault()
        const check = e.target.checked
        if(check)
            setRememberme(true)
        else
            setRememberme(false)
    }
    
    if(isAuthenticated == true){
        console.log("Auth")
       return <Navigate to = "../postjobs" replace={true} />
    }


    
    return(
        <>
            <div id="preloader"></div>
            <div className="login-page-wrap">
                <div className="login-page-content">
                    <div className="login-box">
                        <div className="item-logo">
                            <img src="assets\img\logo2.png" alt="logo"/>
                        </div>
                        <form action="index.html" className="login-form" onSubmit={clickHandler}>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" placeholder="Enter username" name="username" value={localStorage.getItem('username')} onChange={e => onChange(e)}
                                   className="form-control" required/>
                                <i className="far fa-envelope"></i>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" placeholder="Enter password" name="password" value={password} onChange={e => onChange(e)}
                                   className="form-control" required/>
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="form-group d-flex align-items-center justify-content-between">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="remember-me" onClick={(e) => {handleRemember(e)}}/>
                                    <label for="remember-me" className="form-check-label">Remember Me</label>
                                </div>
                                <a href="ForgotPassword" className="forgot-btn">Forgot Password?</a>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="login-btn" >Login</button>
                            </div>
                            
                        </form>
                        {/* <div className="login-social">
                            <p>or sign in with</p>
                            <ul>
                                <li><a href="#" className="bg-fb"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#" className="bg-twitter"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#" className="bg-gplus"><i className="fab fa-google-plus-g"></i></a></li>
                                <li><a href="#" className="bg-git"><i className="fab fa-github"></i></a></li>
                            </ul>
                        </div> */}
                    </div>
                    <div className="sign-up">Don't have an account ? <a href="SignUp">Signup now!</a></div>
                </div>
            </div>
        </>
    )    
}

Login.propTypes = {
    setAlert: PropTypes.func.isRequired,
    loginSuccess: PropTypes.func.isRequired,
    loginFail: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: store.getState().register.isAuthenticated
})



export default connect(mapStateToProps, {setAlert, loginSuccess, loginFail}) (Login);
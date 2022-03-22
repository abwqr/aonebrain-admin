import React, {useState} from 'react'
import {connect} from 'react-redux';
import {setAlert} from '../actions/alert';
import { setLogin } from '../actions/login';
import axios from "axios";
import PropTypes from 'prop-types';
// import ForgotPassword from './ForgotPassword'

const Login = (props) => {
    localStorage.removeItem("username")
    localStorage.removeItem("password")
    var [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    var [rememberme, setRememberme] = useState(false)

    const {username, password} = formData

    const clickHandler = async e => {
        e.preventDefault()
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
            const res = await axios.post('http://aonebrain.aim-less.com/api/token/', body, config);
            // const res = await axios.post('https://jsonplaceholder.typicode.com/users', body);

            props.setAlert("Logged in", "success");
            console.log(res.data)
        } catch (err) {

            props.setAlert("Log in failed", "danger");
            // console.log(err.response.data);

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

    Login.propTypes = {
        setAlert: PropTypes.func.isRequired
    }


    
    return(
        <>
            <div id="preloader"></div>
            <div className="login-page-wrap">
                <div className="login-page-content">
                    <div className="login-box">
                        <div className="item-logo">
                            <img src="src\Styles\img\logo2.png" alt="logo"/>
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
export default connect(null, {setAlert, setLogin}) (Login);
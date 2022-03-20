import React, {useState} from 'react'
import {connect} from 'react-redux';
import {setAlert} from '../actions/alert';
import { setLogin } from '../actions/login';
import axios from "axios";
import PropTypes from 'prop-types'

const Login = (props) => {
    var [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const {username, password} = formData

    const clickHandler = async e => {
        e.preventDefault()
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const body = JSON.stringify(formData);
            const res = await axios.post('http://aonebrain.aim-less.com/api/token', body, config);
            // const res = await axios.post('https://jsonplaceholder.typicode.com/users', body);

            console.log(username, password, res);
            props.setAlert("Logged in");
        } catch (err) {

            props.setAlert("Log in failed");
            // console.log(err.response.data);

        }
    };

    const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
        console.log(e.target.value)
    };

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
                        <form action="index.html" className="login-form">
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" placeholder="Enter username" name="username" value={username} onChange={e => onChange(e)}
                                   className="form-control" required/>
                                <i className="far fa-envelope"></i>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="text" placeholder="Enter password" name="password" value={password} onChange={e => onChange(e)}
                                   className="form-control" required/>
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="form-group d-flex align-items-center justify-content-between">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="remember-me"/>
                                    <label for="remember-me" className="form-check-label">Remember Me</label>
                                </div>
                                <a href="#" className="forgot-btn">Forgot Password?</a>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="login-btn" onClick={clickHandler}>Login</button>
                            </div>
                            
                        </form>
                        <div className="login-social">
                            <p>or sign in with</p>
                            <ul>
                                <li><a href="#" className="bg-fb"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#" className="bg-twitter"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#" className="bg-gplus"><i className="fab fa-google-plus-g"></i></a></li>
                                <li><a href="#" className="bg-git"><i className="fab fa-github"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="sign-up">Don't have an account ? <a href="#">Signup now!</a></div>
                </div>
            </div>
        </>
    )


    
}
export default connect(null, {setAlert, setLogin}) (Login);
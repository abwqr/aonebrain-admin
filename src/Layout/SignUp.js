import React, {useState} from 'react'
import {connect} from 'react-redux';
import {setAlert} from '../actions/alert';
// import { setLogin } from '../actions/login';
import axios from "axios";
import PropTypes from 'prop-types'

const SignUp = (props) => {
    var [formData, setFormData] = useState({
        username: ' ',
        email: '',
        // firstName: '',
        // lastName: '',
        password1: ' ',
        password2: ' '
    })

    const {username, email, password1, password2} = formData

    const clickHandler = async e => {
        e.preventDefault()
        console.log(formData)
        
        if(isNaN(password1) && !isNaN(password1) && password1.length >= 8)
        {
            if(password1 !== password2)
            {
                props.setAlert("Passwords do not match", "danger")

            }

            else
            {    try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
                const body = JSON.stringify(formData);
                console.log(body)
                const res = await axios.post('http://aonebrain.aim-less.com/api/registration/', body, config);
                props.setAlert("Sign up successful", "success");
                console.log(res.data)

                } catch (err) {

                    props.setAlert("Sign up failed", "danger");

                }
            }
        }    

        else
        {
            
            if (!isNaN(password1)) props.setAlert("Password should contain a number", "danger") 
            if (isNaN(password1))  props.setAlert("Password should contain an alphabet", "danger")
            if (password1.length < 8) props.setAlert("Password length should have at least 8 characters", "danger")
        }

        
        
    };

    const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
          localStorage.setItem( [e.target.name],  e.target.value);
          console.log(e.target.value)
    };

    SignUp.propTypes = {
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
                        <form action="index.html" className="login-form"  onSubmit={clickHandler}>
                     
                           <div className="form-group">
                                <label>Username</label>
                                <input type="text" placeholder="Enter username" name="username" value={localStorage.getItem('username')} onChange={e => onChange(e)}
                                   className="form-control" required/>
                                <i className="far fa-envelope"></i>
                            </div>

                           <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="Enter Email" name="email" value={localStorage.getItem('email')} onChange={e => onChange(e)}
                                   className="form-control" required/>
                                <i className="far fa-envelope"></i>
                            </div>

                            {/* <div className="form-group">
                                <label>First Name</label>
                                <input type="text" placeholder="Enter First Name" name="firstName" value={localStorage.getItem('firstName')} onChange={e => onChange(e)}
                                   className="form-control" required/>
                                <i className="far fa-envelope"></i>
                            </div>

                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" placeholder="Enter Last Name" name="lastName" value={localStorage.getItem('lastName')} onChange={e => onChange(e)}
                                   className="form-control" required/>
                                <i className="far fa-envelope"></i>
                            </div> */}

                            
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" placeholder="Enter password" name="password1" value={localStorage.getItem('password1')} onChange={e => onChange(e)}
                                   className="form-control" required/>
                                <i className="fas fa-lock"></i>
                            </div>

                            <div className="form-group">
                                <label>Re-enter Password</label>
                                <input type="password" placeholder="Re-enter password" name="password2" value={localStorage.getItem('password2')} onChange={e => onChange(e)}
                                   className="form-control" required/>
                                <i className="fas fa-lock"></i>
                            </div>

                            <div className="form-group d-flex align-items-center justify-content-between">
                            </div>
                            <div className="form-group">
                                <button type="submit" className="login-btn">Sign Up</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </>
    )


    
}
export default connect(null, {setAlert}) (SignUp);
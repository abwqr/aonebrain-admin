import React, {useState} from 'react'
import {connect} from 'react-redux';
import {setAlert} from '../actions/alert';
// import logo2 from '../../public/img/logo2.png';
import axios from "axios";
import PropTypes from 'prop-types'

const SignUp = (props) => {

    function hasNumber(myString) {
        return /\d/.test(myString);
      }

    var [formData, setFormData] = useState({
        username: '',
        email: '',
        password1: '',
        password2: '',
        type: 'School'
    })

    const {username, email, password1, password2, type} = formData

    const clickHandler = async e => {
        e.preventDefault()
        console.log(formData)
        
        if(isNaN(password1) && hasNumber(password1) && password1.length >= 8)
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

                    const error = {email: 'A user is already registered with this e-mail address.',
                                   username: 'A user with that username already exists.',
                                   status: '400' 
                                  }
                    
                    

                    const errorReturned = err.response.data


                    console.log((JSON.stringify(Object.values(errorReturned)[2])))
                    
                    if(JSON.stringify(JSON.stringify(Object.values(errorReturned)[2])) === JSON.stringify(error.status)){
                      
                        if((JSON.stringify(Object.values(errorReturned)[1][0]) === JSON.stringify(error.email)))
                        {
                            // console.log(typeof(JSON.stringify(err.response.data)))
                            props.setAlert('A user is already registered with this e-mail address.', "danger");
                        }
                       
                    if(JSON.stringify(Object.values(errorReturned)[0][0]) === JSON.stringify(error.username))
                        props.setAlert('A user with that username already exists.', "danger");  
                    }
                    
                    else if(JSON.stringify(JSON.stringify(Object.values(errorReturned)[1])) === JSON.stringify(error.status)){
                      
                        if((JSON.stringify(Object.values(errorReturned)[0][0]) === JSON.stringify(error.email)))
                        {
                            // console.log(typeof(JSON.stringify(err.response.data)))
                            props.setAlert('A user is already registered with this e-mail address.', "danger");
                        }
                       
                    if(JSON.stringify(Object.values(errorReturned)[0][0]) === JSON.stringify(error.username))
                        props.setAlert('A user with that username already exists.', "danger");  
                    }

                    
                }
            }
        }    

        else
        {
            
            if (!isNaN(password1)) props.setAlert("Password should contain an alphabet", "danger") 
            if (!hasNumber(password1))  props.setAlert("Password should contain a number", "danger")
            if (password1.length < 8) props.setAlert("Password length should have at least 8 characters", "danger")
        }

        
        
    };

    const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
        
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
                            <img src="src/img/logo2.png" alt="logo"/>
                        </div>
                        <form action="index.html" className="login-form"  onSubmit={clickHandler}>
                     
                           <div className="form-group">
                                <label>Username</label>
                                <input type="text" placeholder="Enter username" name="username" value={username} onChange={e => onChange(e)}
                                   className="form-control" required/>
                                <i className="far fa-envelope"></i>
                            </div>

                           <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="Enter Email" name="email" value={email} onChange={e => onChange(e)}
                                   className="form-control" required/>
                                <i className="far fa-envelope"></i>
                            </div>

                            
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" placeholder="Enter password" name="password1" value={password1} onChange={e => onChange(e)}
                                   className="form-control" required/>
                                <i className="fas fa-lock"></i>
                            </div>

                            <div className="form-group">
                                <label>Re-enter Password</label>
                                <input type="password" placeholder="Re-enter password" name="password2" value={password2} onChange={e => onChange(e)}
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
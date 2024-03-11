import React, {useState} from 'react'
import {connect} from 'react-redux';
import {setAlert} from '../../actions/alert';
import axios from "axios";
import PropTypes from 'prop-types'
import { signupApi } from '../../APIs/auth';
import { registerSuccess, registerFail } from '../../actions/register';
// import PropTypes from 'prop-types';


const SignUp = ({registerSuccess, registerFail, setAlert}) => {

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
                setAlert("Passwords do not match", "danger")

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
                const res = await axios.post(signupApi, body, config);
                setAlert("Sign up successful", "success");
                
                registerSuccess(res.data.key);
                console.log(res.data.key)

                } catch (err) {
                    registerFail()
                    const error = {email: 'A user is already registered with this e-mail address.',
                                   username: 'A user with that username already exists.',
                                   status: '400' 
                                  }
                    
                    

                    const errorReturned = err.response.data


                    console.log(Object.values(errorReturned)[3])
                    
                    if(JSON.stringify(JSON.stringify(Object.values(errorReturned)[2])) === JSON.stringify(error.status)){
                      
                            setAlert(Object.values(errorReturned)[0][0], "danger");
                            setAlert(Object.values(errorReturned)[1][0], "danger");
                    }
                    
                    else if(JSON.stringify(JSON.stringify(Object.values(errorReturned)[1])) === JSON.stringify(error.status)){
                      
                        setAlert(Object.values(errorReturned)[0][0], "danger");
                    }

                    else if(JSON.stringify(JSON.stringify(Object.values(errorReturned)[3])) === JSON.stringify(error.status)){
                        setAlert(Object.values(errorReturned)[0][0], "danger");
                        setAlert(Object.values(errorReturned)[1][0], "danger");
                        setAlert(Object.values(errorReturned)[2][0], "danger");
                    }

                    
                }
            }
        }    

        else
        {
            
            if (!isNaN(password1)) setAlert("Password should contain an alphabet", "danger") 
            if (!hasNumber(password1))  setAlert("Password should contain a number", "danger")
            if (password1.length < 8) setAlert("Password length should have at least 8 characters", "danger")
        }

        
        
    };

    const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
        
          console.log(e.target.value)
    };

    
 


    return(
        <>
            <div id="preloader"></div>
            <div className="login-page-wrap">
                <div className="login-page-content">
                    <div className="login-box">
                        <div className="item-logo"> 
                            <img src="assets\img\logo2.png" alt="logo"/>
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
SignUp.propTypes = {
    setAlert: PropTypes.func.isRequired,
    registerSuccess: PropTypes.func.isRequired,
    registerFail: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => (
    {
        isAuthenticated: state.isAuthenticated
    }
);
export default connect(mapStateToProps, {setAlert, registerSuccess, registerFail}) (SignUp);
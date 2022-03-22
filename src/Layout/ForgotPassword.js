import React, {useState} from 'react'
import {connect} from 'react-redux';
import {setAlert} from '../actions/alert';
import axios from "axios";
import PropTypes from 'prop-types'

const ForgotPassword = (props) => {

    localStorage.removeItem('email')

    var [formData, setFormData] = useState({
        email: ''
    })


    const {email} = formData

    const clickHandler = async e => {
        e.preventDefault()
        
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const body = JSON.stringify(formData);
            const res = await axios.post('http://aonebrain.aim-less.com/api/password/reset/', body, config);
            // const res = await axios.post('https://jsonplaceholder.typicode.com/users', body);
            
            props.setAlert('Password reset e-mail has been sent.', "success");
            console.log(res.data)
        } catch (err) {

            props.setAlert("Error", "danger");
            // console.log(err.response.data);

        }
    };

    const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
        localStorage.setItem( [e.target.name],  e.target.value);
    };

   

    ForgotPassword.propTypes = {
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
                                <label>Email</label>
                                <input type="email" placeholder="Enter email" name="email" value={localStorage.getItem('email')} onChange={e => onChange(e)}
                                   className="form-control" required/>
                                <i className="far fa-envelope"></i>
                            </div>
                          
                            <div className="form-group">
                                <button type="submit" className="login-btn" >Login</button>
                            </div>
                            
                        </form>
                       
                    </div>
                </div>
            </div>
        </>
    )


    
}
export default connect(null, {setAlert}) (ForgotPassword);
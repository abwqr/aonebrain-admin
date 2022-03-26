import React, {Fragment} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Login from './Layout/auth/Login';
import Alert from "./Layout/Alert";
import SignUp from "./Layout/auth/SignUp";
import ForgotPassword from "./Layout/auth/ForgotPassword";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return(
    <Provider store={store}>
      <Router>
        <Fragment>
            <section className = "container">
              <Alert/>
              <Routes>
                <Route path="/login" element={<Login/>}/> 
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/forgotpassword" element = {<ForgotPassword/>}></Route>
              </Routes>
            </section>
        </Fragment>
    </Router>
  </Provider>
  )
}


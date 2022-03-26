import React, {Fragment} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Login from './Layout/Login';
import Alert from "./Layout/Alert";
import SignUp from "./Layout/SignUp";
import ForgotPassword from "./Layout/ForgotPassword";
import CandidatesList from "./Layout/Career/CandidatesList";
// import jQuery from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';

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
              <Route path="/candidateslist" element = {<CandidatesList/>}/>
            </Routes>
          </section>
      </Fragment>
    </Router>
  </Provider>
  )
}


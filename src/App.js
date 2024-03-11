import React, {Fragment} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Login from './Layout/auth/Login';
import Alert from "./Layout/Alert";
import SignUp from "./Layout/auth/SignUp";
import ForgotPassword from "./Layout/auth/ForgotPassword";
import CandidatesList from "./Layout/career/CandidatesList";
import PostJobs from "./Layout/career/PostJobs";
import IndividualJob from "./Layout/career/IndividualJob";
import ManageJobs from "./Layout/career/ManageJobs";
import UpdateJob from "./Layout/career/UpdateJob";


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
              <Route path="/updatejob" element={<UpdateJob/>}/>                
                <Route path="/managejobs" element={<ManageJobs/>}/>
                <Route path="/individualjob" element={<IndividualJob/>}/> 
                <Route path="/postjobs" element={<PostJobs/>}/> 
                <Route path="/candidateslist" element={<CandidatesList/>}/> 
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


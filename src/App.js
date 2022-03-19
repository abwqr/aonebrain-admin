import React, {Fragment} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Login from './Layout/Login';
// import './App.css';
export default function App() {
  return(
    <Provider store={store}>
      <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={<Login/>}/> 
        </Routes>
      </Fragment>
    </Router>
  </Provider>
    // <LoginSignUp/> 
    // // <HomePage/> 
  )
}


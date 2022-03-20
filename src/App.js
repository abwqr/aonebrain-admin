import React, {Fragment} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Login from './Layout/Login';
import Alert from "./Layout/Alert";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  return(
    <Provider store={store}>
      <Router>
      <Fragment>
        <section className = "container">
          <Alert/>
            <Routes>
              <Route path="/" element={<Login/>}/> 
            </Routes>
          </section>
      </Fragment>
    </Router>
  </Provider>
  )
}


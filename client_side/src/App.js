import React, {Fragment} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./Page/Home/Home";

import "bootstrap"
import About from './Page/About/About';
// import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    // <div className="App">


    //  <Home />



    // </div>

    <Fragment>
      <BrowserRouter>
          <Routes>
              <Route path="*" element={<Home />}/>
              <Route path="About" element={<About />}/>
          </Routes>
      </BrowserRouter>
    </Fragment>




  );
}

export default App;

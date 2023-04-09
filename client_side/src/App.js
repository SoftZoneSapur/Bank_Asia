import React, {Fragment} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./Page/Home/Home";

import "bootstrap"
import About from './Page/About/About';
import Office_Login from './Page/Office_Login/Office_Login';
import Registration from './Page/Registration/Registration';
import Forgot_Password from './Page/Forgot_Password/Forgot_Password';
import OTP_Input from './Components/Forgot_Password_Components/OTP_Input';
import New_Password from './Components/Forgot_Password_Components/New_Password';
import Office_Side_Home_Page from './Page/Office_Side_Home_Page/Office_Side_Home_Page';
// import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (

    <Fragment>
      <BrowserRouter>
          <Routes>
              <Route path="*" element={<Home />}/>
              <Route path="About" element={<About />}/>
              <Route path="Office_Login" element={<Office_Login />}/>
              <Route path="Registration" element={<Registration />}/>
              <Route path="Forgot_Password" element={<Forgot_Password />}/>
              <Route path="OTP_Input" element={<OTP_Input />}/>
              <Route path="New_Password" element={<New_Password />}/>

              <Route path="Office_Side_Home_Page" element={<Office_Side_Home_Page />}/>
          </Routes>
      </BrowserRouter>
    </Fragment>


  );
}

export default App;

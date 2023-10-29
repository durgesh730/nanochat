import Neet from "./neet/Neet";
import Home from "./component/Home";
import { Route, BrowserRouter, Routes, } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import UP from "./downloads/UP";
import Punjab from "./downloads/Punjab";
import Delhi from "./downloads/Delhi";
import Himachal from "./downloads/Himachal";
import Chandigarh from "./downloads/Chandigarh";
import Bihar from './downloads/Bihar'
import Rajasthan from './downloads/Rajasthan'
import WestBengal from './downloads/WestBengal'
import Odisha from './downloads/Odisha'
import Gujrat from './downloads/Gujarat'
import Uttarakhand from './downloads/Uttarakhand'
import Maharashtra from './downloads/Maharashtra'
import Haryana from './downloads/Haryana'
import Telangana from './downloads/Telangana'
import MP from './downloads/MP'

import Login from "./component/Login";
import ForgotPassword from "./component/ForgotPassword";
import Register from "./component/Register";
import PasswordReset from "./component/PasswordReset";
import Form from "./component/Form";

import Chemistry from "./neet/Chemistry";
import Biology from "./neet/Biology";
import Physics from "./neet/Physics";
import Result from "./neet/Result";
import ResultBio from "./neet/ResultBio";
import ResultPhy from "./neet/ResultPhy";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

import AIIMSrishi from "./component/Detail/AIIMSRishikesh";
import AIIMSkalyani from "./component/Detail/AIIMSKalyani";
import AIIMSmadurai from "./component/Detail/AIIMSMadurai";
import AIIMSgorakpur from "./component/Detail/AIIMSGorakhpur";
import AIIMSDelhi from "./component/Detail/AIIMSDelhi";

function App() {

  useEffect(() => {
    Aos.init({
      duration: 1600
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>

          {/*  NEET component routers  */}

          <Route path='/neet' element={<Neet />} ></Route>
          <Route path='/chem' element={<Chemistry />} ></Route>
          <Route path='/bio' element={<Biology />} ></Route>
          <Route path='/phy' element={<Physics />} ></Route>
          <Route path='/result' element={<Result />} ></Route>
          <Route path='/bioresult' element={<ResultBio />} ></Route>
          <Route path='/phyresult' element={<ResultPhy />} ></Route>

          {/*  Main page routers */}

          <Route path='/' element={<Home />} ></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/form' element={<Form />} ></Route>
          <Route path='/signup' element={<Register />} ></Route>
          <Route path='/password-reset' element={<PasswordReset />}> </Route>
          <Route path='/forgotpassword/:id/:token' element={<ForgotPassword />}></Route>


          {/*  cards routers  */}

          <Route path='/UtterPradesh' element={<UP />} ></Route>
          <Route path='/Panjab' element={<Punjab />} ></Route>
          <Route path='/Delhi' element={<Delhi />} ></Route>
          <Route path='/HimanchalPradesh' element={<Himachal />} ></Route>
          <Route path='/Chandigarh' element={<Chandigarh />} ></Route>

          <Route path='/MadhyaPradesh' element={<MP />} ></Route>
          <Route path='/Odisha' element={<Odisha />} ></Route>
          <Route path='/WestBengal' element={<WestBengal />} ></Route>
          <Route path='/Rajasthan' element={<Rajasthan />} ></Route>
          <Route path='/Bihar' element={<Bihar />} ></Route>

          <Route path='/Telangana' element={<Telangana />} ></Route>
          <Route path='/Haryana' element={<Haryana />} ></Route>
          <Route path='/Maharashtra' element={<Maharashtra />} ></Route>
          <Route path='/Uttarakhand' element={<Uttarakhand />} ></Route>
          <Route path='/Bihar' element={<Bihar />} ></Route>
          <Route path='/Gujrat' element={<Gujrat />} ></Route>

          {/* Details page routers */}
          <Route path="/Aiimsdelhi" element={<AIIMSDelhi />}></Route>
          <Route path="/Aiimsrishi" element={<AIIMSrishi />}></Route>
          <Route path="/Aiimsmadurai" element={<AIIMSmadurai />}></Route>
          <Route path="/Aimskalyani" element={<AIIMSkalyani />}></Route>
          <Route path="/Aiimsgorakpur" element={<AIIMSgorakpur />}></Route>

        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;

// react 
import { Route, BrowserRouter, Routes, } from "react-router-dom";
import { useEffect } from "react";

// aos effect
import Aos from "aos";
import 'aos/dist/aos.css';

//toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from 'react-hot-toast';

// components
import Neet from "./component/neet/Neet";
import Home from "./component/Home/Home";

import UP from "./component/Downloads/UP";
import Punjab from "./component/Downloads/Punjab";
import Delhi from "./component/Downloads/Delhi";
import Himachal from "./component/Downloads/Himachal";
import Chandigarh from "./component/Downloads/Chandigarh";
import Bihar from './component/Downloads/Bihar'
import Rajasthan from './component/Downloads/Rajasthan'
import WestBengal from './component/Downloads/WestBengal'
import Odisha from './component/Downloads/Odisha'
import Gujrat from './component/Downloads/Gujarat'
import Uttarakhand from './component/Downloads/Uttarakhand'
import Maharashtra from './component/Downloads/Maharashtra'
import Haryana from './component/Downloads/Haryana'
import MP from './component/Downloads/MP'

import Telagana from './component/Downloads/Telangana'

import Login from "./component/Login/Login";
import ForgotPassword from "./component/ForgetPassword/ForgotPassword";
import Register from "./component/Register/Register";
import PasswordReset from "./component/ResetPassword/PasswordReset";
import Form from "./component/CounsellingFrom/Form";

import Chemistry from "./component/neet/Chemistry";
import Biology from "./component/neet/Biology";
import Physics from "./component/neet/Physics";
import Result from "./component/neet/Result";
import ResultBio from './component/neet/ResultBio'
import ResultPhy from "./component/neet/ResultPhy";

import AIIMSRishikesh from "./component/CollegeDetails/AIIMSRishikesh";
import AIIMSgorakpur from "./component/CollegeDetails/AIIMSGorakhpur";
import AIIMSDelhi from "./component/CollegeDetails/AIIMSDelhi";
import AIIMSKalyani from "./component/CollegeDetails/AIIMSKalyani";
import AIIMSMadurai from "./component/CollegeDetails/AIIMSMadurai";
import AIIMSBhopal from "./component/CollegeDetails/AIIMSBhopal";
import AIIMSBhubaneswar from "./component/CollegeDetails/AIIMSBhubaneswar";
import AIIMSJodhpur from "./component/CollegeDetails/AIIMSJodhpur";
import AIIMSPatna from "./component/CollegeDetails/AIIMSPatna";
import AIIMSRaipur from "./component/CollegeDetails/AIIMSRaipur";

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

          <Route path='/Telangana' element={<Telagana />} ></Route>
          <Route path='/Haryana' element={<Haryana />} ></Route>
          <Route path='/Maharashtra' element={<Maharashtra />} ></Route>
          <Route path='/Uttarakhand' element={<Uttarakhand />} ></Route>
          <Route path='/Bihar' element={<Bihar />} ></Route>
          <Route path='/Gujrat' element={<Gujrat />} ></Route>

          {/* Details page routers */}
          <Route path="/college-details/aiimsdelhi" element={<AIIMSDelhi />}></Route>
          <Route path="/college-details/aiimsrishikesh" element={<AIIMSRishikesh />}></Route>
          <Route path="/college-details/aiimsmadurai" element={<AIIMSMadurai />}></Route>
          <Route path="/college-details/aimskalyani" element={<AIIMSKalyani />}></Route>
          <Route path="/college-details/aiimsgorakpur" element={<AIIMSgorakpur />}></Route>
          <Route path="/college-details/aiimsbhopal" element={<AIIMSBhopal />}></Route>
          <Route path="/college-details/aiimsbhubaneswar" element={<AIIMSBhubaneswar />}></Route>
          <Route path="/college-details/aiimsjodhpur" element={<AIIMSJodhpur />}></Route>
          <Route path="/college-details/aiimspatna" element={<AIIMSPatna />}></Route>
          <Route path="/college-details/aiimsraipur" element={<AIIMSRaipur />}></Route>

        </Routes>
        <ToastContainer />
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;

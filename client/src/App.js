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


import AndhraPradesh from "./component/Downloads/AndhraPradesh";
import ArunachalPradesh from "./component/Downloads/ArunachalPradesh";
import Assam from "./component/Downloads/Assam";
import Bihar from "./component/Downloads/Bihar";
import Chhattisgarh from "./component/Downloads/Chhattisgarh";
import Chandigarh from "./component/Downloads/Chandigarh";
import Delhi from "./component/Downloads/Delhi";
import Goa from "./component/Downloads/Goa";
import Gujarat from "./component/Downloads/Gujarat";
import Haryana from "./component/Downloads/Haryana";
import HimachalPradesh from "./component/Downloads/Himachal";
import Jharkhand from './component/Downloads/Jharkhand'
import Karnataka from './component/Downloads/Karnataka'
import Kerala from './component/Downloads/Kerala'
import MadhyaPradesh from './component/Downloads/MP'
import Maharashtra from './component/Downloads/Maharashtra'
import Manipur from './component/Downloads/Manipur'
import Meghalaya from './component/Downloads/Meghalaya'
import Mizoram from './component/Downloads/Mizoram'
import Nagaland from './component/Downloads/Nagaland'
import Odisha from './component/Downloads/Odisha'
import Punjab from './component/Downloads/Punjab'
import Rajasthan from './component/Downloads/Rajasthan'
import Sikkim from './component/Downloads/Sikkim'
import TamilNadu from './component/Downloads/TamilNadu'
import Telangana from './component/Downloads/Telangana'
import Tripura from './component/Downloads/Tripura'
import UttarPradesh from './component/Downloads/UP'
import Uttarakhand from './component/Downloads/Uttarakhand'
import WestBengal from './component/Downloads/WestBengal'




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
import AIIMSBhatinda from "./component/CollegeDetails/AIIMSBhatinda";
import AIIMSBhubaneswar from "./component/CollegeDetails/AIIMSBhubaneswar";
import AIIMSJodhpur from "./component/CollegeDetails/AIIMSJodhpur";
import AIIMSPatna from "./component/CollegeDetails/AIIMSPatna";
import AIIMSRaipur from "./component/CollegeDetails/AIIMSRaipur";
import Profile from "./component/Profile/Profile";
import Help from "./component/Help/Help";
import AIIMSBilaspur from "./component/CollegeDetails/AIIMSBilaspur";
import AIIMSBibinagar from "./component/CollegeDetails/AIIMSBibinagar";
import AIIMSDeonagar from "./component/CollegeDetails/AIIMSDeonagar";

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
          <Route path='/practice-questions/neet' element={<Neet />} ></Route>
          <Route path='/chem' element={<Chemistry />} ></Route>
          <Route path='/bio' element={<Biology />} ></Route>
          <Route path='/phy' element={<Physics />} ></Route>
          <Route path='/result' element={<Result />} ></Route>
          <Route path='/bioresult' element={<ResultBio />} ></Route>
          <Route path='/phyresult' element={<ResultPhy />} ></Route>

          {/*  Main page routers */}
          <Route path='/' element={<Home />} ></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/student-counselling/form' element={<Form />} ></Route>
          <Route path='/signup' element={<Register />} ></Route>
          <Route path='/password-reset' element={<PasswordReset />}> </Route>
          <Route path='/forgotpassword/:id/:token' element={<ForgotPassword />}></Route>
          <Route path='/user/profile' element={<Profile />}></Route>
          <Route path='/user/help' element={<Help />}></Route>

          {/*  cards routers  */}
          <Route path='/Andhra Pradesh' element={<AndhraPradesh/>} ></Route>
          <Route path='/Arunachal Pradesh' element={<ArunachalPradesh/>} ></Route>
          <Route path='/Assam' element={<Assam />} ></Route>
          <Route path='/Bihar' element={<Bihar />} ></Route>
          <Route path='/Chhattisgarh' element={<Chhattisgarh />} ></Route>
          <Route path='/Chandigarh' element={<Chandigarh />} ></Route>
          <Route path='/Delhi' element={<Delhi />} ></Route>

          <Route path='/Goa' element={<Goa />} ></Route>
          <Route path='/Gujarat' element={<Gujarat />} ></Route>
          <Route path='/Haryana' element={<Haryana />} ></Route>
          <Route path='/Himachal Pradesh' element={<HimachalPradesh />} ></Route>
          <Route path='/Jharkhand' element={<Jharkhand />} ></Route>

          <Route path='/Karnataka' element={<Karnataka />} ></Route>
          <Route path='/Kerala' element={<Kerala />} ></Route>
          <Route path='/Madhya Pradesh' element={<MadhyaPradesh />} ></Route>
          <Route path='/Maharashtra' element={<Maharashtra />} ></Route>
          <Route path='/Manipur' element={<Manipur />} ></Route>
          <Route path='/Meghalaya' element={<Meghalaya />} ></Route>

          <Route path='/Mizoram' element={<Mizoram/>} ></Route>
          <Route path='/Nagaland' element={<Nagaland />} ></Route>
          <Route path='/Odisha' element={<Odisha/>} ></Route>
          <Route path='/Punjab' element={<Punjab/>} ></Route>
          <Route path='/Rajasthan' element={<Rajasthan/>} ></Route>
          <Route path='/Sikkim' element={<Sikkim />} ></Route>

          <Route path='/Tamil Nadu' element={<TamilNadu />} ></Route>
          <Route path='/Telangana' element={<Telangana/>} ></Route>
          <Route path='/Tripura' element={<Tripura/>} ></Route>
          <Route path='/Uttar Pradesh' element={<UttarPradesh />} ></Route>
          <Route path='/Uttarakhand' element={<Uttarakhand />} ></Route>
          <Route path='/West Bengal' element={<WestBengal />} ></Route>

          {/* Details page routers */}
          <Route path="/college-details/aiimsdelhi" element={<AIIMSDelhi />}></Route>
          <Route path="/college-details/aiimsrishikesh" element={<AIIMSRishikesh />}></Route>
          <Route path="/college-details/aiimsmadurai" element={<AIIMSMadurai />}></Route>
          <Route path="/college-details/aimskalyani" element={<AIIMSKalyani />}></Route>
          <Route path="/college-details/aiimsgorakpur" element={<AIIMSgorakpur />}></Route>
          <Route path="/college-details/aiimsbhopal" element={<AIIMSBhopal />}></Route>
          <Route path="/college-details/aiimsbhatinda" element={<AIIMSBhatinda />}></Route>
          <Route path="/college-details/aiimsbhubaneswar" element={<AIIMSBhubaneswar />}></Route>
          <Route path="/college-details/aiimsjodhpur" element={<AIIMSJodhpur />}></Route>
          <Route path="/college-details/aiimspatna" element={<AIIMSPatna />}></Route>
          <Route path="/college-details/aiimsraipur" element={<AIIMSRaipur />}></Route>
          <Route path="/college-details/aiimsbilaspur" element={<AIIMSBilaspur />}></Route>
          <Route path="/college-details/aiimsbibinagar" element={<AIIMSBibinagar />}></Route>
          <Route path="/college-details/aiimsdeonagar" element={<AIIMSDeonagar />}></Route>
        </Routes>
        <ToastContainer />
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;

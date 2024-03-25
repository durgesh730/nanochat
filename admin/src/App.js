import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginScreen/LoginForm';
import Register from './components/LoginScreen/Register';
import ForgetPasswordForm from './components/ForgetPassword/ForgetPasswordForm';
import NewPasswordForm from './components/NewPasswordScreen/NewPasswordForm';
import Dashboard from './components/Dashboard/Dashboard';
import KrishnaAssig from './components/Dashboard/KrishnaAssig';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgetPasswordForm />} />
        <Route path="/newPassword" element={<NewPasswordForm />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/krishnaAssig" element={<KrishnaAssig />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;



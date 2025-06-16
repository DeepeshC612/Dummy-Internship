import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './account/SignupForm';
import LoginForm from './account/LoginForm';
import LandingPage from './LandingPageComponents/LandingPage';
//import LoginForm from './LoginForm'; // Create this or use a placeholder

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route  path="/login" element={<LoginForm/>}/>
        
      </Routes>
    </Router>
  );
};

export default App;

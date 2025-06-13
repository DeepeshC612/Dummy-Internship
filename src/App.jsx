import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './account/SignupForm';
import LoginForm from './account/LoginForm';
//import LoginForm from './LoginForm'; // Create this or use a placeholder

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        
      </Routes>
    </Router>
  );
};

export default App;

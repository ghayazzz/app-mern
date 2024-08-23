import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';
// import NavBar from './components/Layout/NavBar';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import Home from './components/Home';
import Upload from './components/Upload';
import SavedProjects from './components/SavedProjects';
import Profile from './components/Profile';
import Admin from './components/Admin';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Initialize as null to handle loading state

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      console.log(token);
      if (token) {
        axios.defaults.headers.common['x-auth-token'] = token;
        try {
          // Verify the token by calling a protected route
          await axios.get('http://localhost:5000/api/auth/user');
          setIsAuthenticated(true);
        } catch (err) {
          localStorage.removeItem('token');
          delete axios.defaults.headers.common['x-auth-token'];
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  // Show a loading state while authentication is being checked
  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      {/* <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} /> */}
      <Routes>
        <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route path="/upload" element={isAuthenticated ? <Upload /> : <Navigate to="/login" />} />
        <Route path="/saved" element={isAuthenticated ? <SavedProjects /> : <Navigate to="/login" />} />
        <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/admin" element={isAuthenticated ? <Admin /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;

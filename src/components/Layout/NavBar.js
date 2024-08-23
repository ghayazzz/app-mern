// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './NavBar.css'; 

// const NavBar = () => {
//   const navigate = useNavigate();

//   const logoutHandler = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//     window.location.reload();
//   };

//   return (
//     <nav className="navbar">
//       <ul className="nav-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/upload">Upload</Link></li>
//         <li><Link to="/saved">Saved Projects</Link></li>
//         <li><Link to="/profile">Profile</Link></li>
//         <li className="logout"><button onClick={logoutHandler}>Logout</button></li>
//       </ul>
//     </nav>
//   );
// }

// export default NavBar;

import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css'; 

const NavBar = () => {
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/auth/logout', {}, {
        headers: {
          'x-auth-token': token
        }
      });
      localStorage.removeItem('token');
      navigate('/login');
      window.location.reload();
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/upload">Upload</Link></li>
        <li><Link to="/saved">Saved Projects</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li className="logout"><button onClick={logoutHandler}>Logout</button></li>
      </ul>
    </nav>
  );
}

export default NavBar;

import React from 'react';
import NavBar from './Layout/NavBar';
const Home = () => {
  return (
    <div>
      <NavBar />
      <div style={{ textAlign: 'center', marginTop: '100px', color: 'white' }}>
        <h1>Welcome to the Home Page</h1>
      </div>
    </div>
  );
};

export default Home;
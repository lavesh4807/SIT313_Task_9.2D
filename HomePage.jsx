import React from 'react';
import './HomePage.css';
import {Outlet, Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <header className="header">
        <h2 className="logo">DEV@DEAKIN</h2>
        <input type="text" className="search-bar" placeholder="Search..." />
        <div className="options">
            <Link to='/postform'>
          <button className="option">POST</button>
          </Link>
          <Link to="/login">
           <button className="option"> LOGIN</button>
          </Link>
          <Outlet/>
        </div>
      </header>
      <body>
        
      <img style={{width:"500px",marginTop:"100px", marginLeft:"500px",marginRight:"auto"}} src="puic.jpg" alt="WELCOME PIC"></img>
      </body>
    </div>
   
 
  );
}

export default HomePage;
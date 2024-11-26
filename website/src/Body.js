import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

function Body() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </Router>
  );
}

function Home(){
  return <h1>Welcome to the Home Page.</h1>;
}

function About(){
  return <h1>About Us</h1>;
}

export default Body;

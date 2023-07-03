import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import NavBar from './components/Navbar';
import Home from './components/Home'
import Features from './components/Features';
import Login from './components/Login'
import { Link } from 'react-router-dom';
import Register from './components/Register'
const App = () => {
  return (
    <>
      {/* <NavBar /> */}
      {/* <Features/> */}
      {/* <Login /> */}
      {/* <Register/> */}

      <Router>
    <NavBar/>
      {/* <Home /> */}

    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/login" element={<Login/>} />
    <Route exact path="/register" element={<Register/>} />
    {/* <Route exact path="/Team" element={<Team/>} /> */}
    {/* <Route exact path="/Testimonials" element={<Testimonials/>} /> */}
    {/* <Route exact path="/Joinus" element={<Joinus/>} /> */}


    {/* <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={6} country="in" category="Technology"/>} /> */}
    </Routes>
      </Router>
    </>
  );
};

export default App;

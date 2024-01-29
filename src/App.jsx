// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Footer from './components/Footer';
import Greeting from './components/Greeting';
import React from 'react';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Greeting/>
        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;
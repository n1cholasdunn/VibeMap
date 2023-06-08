import './App.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Link
} from 'react-router-dom'
import Explore from './components/Explore';
import NavBar from './components/NavBar';
import CreateMap from './components/CreateMap';
import Home from './components/Home';
import Suggestions from './components/Suggestions';

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<CreateMap />} />
      </Routes>
    </>
  );
}

export default App;

import './App.css';
// import { useState } from 'react';
import { DestinationProvider } from './context';
import React from 'react';
import {
  // BrowserRouter as Router,
  // BrowserRouter,
  Route,
  Routes,
  // Link
} from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './components/NavBar';
import UserProfile from './Pages/UserProfile';
import CreateMap from './Pages/CreateTrip';

function App() {
  return (
    <div>
      <NavBar />
      <DestinationProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<CreateMap />} />
          <Route path='/profile' element={<UserProfile />} />
        </Routes>
      </DestinationProvider>
    </div>
  );
}

export default App;

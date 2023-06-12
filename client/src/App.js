import './App.css';
import { useState } from 'react';
import { DestinationProvider } from './context'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Link
} from 'react-router-dom'
import NavBar from './components/NavBar';
import CreateMap from './components/CreateMap';
import Home from './components/Home';
import UserProfile from './components/UserProfile';

function App() {

  return (
    <div>
      <NavBar />
      <DestinationProvider >
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

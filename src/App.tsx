import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CreateTournamentForm from './components/Tournaments/TournamentForm';
import Tournament from './components/Tournaments/Tournament';
import Tournaments from './components/Tournaments/Tournaments';
import Main from './views/pages/Main/Main';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Hero />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/tournaments' element={<Tournaments />} />
        <Route path='/tournaments/:id' element={<Tournament />} />
        <Route path='/tournaments/create' element={<CreateTournamentForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

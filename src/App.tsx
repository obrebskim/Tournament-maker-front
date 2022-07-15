import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CreateTournamentForm from './components/Tournaments/TournamentCreator';
import Tournament from './components/Tournaments/Tournament';
import Tournaments from './components/Tournaments/Tournaments';
import Main from './views/pages/Main/Main';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Background from './components/Common/Background';
import LoginForm from './components/Login/LoginForm';
import News from './components/News/News';

function App() {
  return (
    <BrowserRouter>
      <Background />
      <Navigation />
      <Hero />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/tournaments' element={<Tournaments />} />
        <Route path='/tournaments/:id' element={<Tournament />} />
        <Route path='/creator' element={<CreateTournamentForm />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/news' element={<News />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

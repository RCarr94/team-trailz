import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import * as trailsAPI from '../../utilities/api/trails';


// Components
import NavBar from '../../components/NavBar/NavBar';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

// Pages
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import TrailDetailsPage from '../TrailDetailsPage/TrailDetailsPage';
import CreateTrailPage from '../CreateTrailPage/CreateTrailPage';

// Helpers
import { getUser } from '../../utilities/services/users';

import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [trailItems, setTrailItems] = useState([]);

  return (
    <main className="App">
      <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<HomePage setUser={setUser} trailItems={trailItems} setTrailItems={setTrailItems} />} />
          { (!user) ?
            <>
              <Route path="/signin" element={<LoginForm setUser={setUser} />} />
              <Route path="/register" element={<SignUpForm setUser={setUser} />} />
            </>
            :
            <>
              <Route path="/signin" element={<Navigate to={'/'} />} />
              <Route path="/register" element={<Navigate to={'/'} />} />
            </>
          }
          <Route path="/trails/:trailId" element={<TrailDetailsPage trailItems={trailItems} />} />
          <Route
            path="/trails/new"
            element={<CreateTrailPage trailItems={trailItems} setTrailItems={setTrailItems} />}
          />
        </Routes>
      </>
    </main>
  );
}

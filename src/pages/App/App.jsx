import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';


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

const trailTestItems = [
  { _id: 1, name: 'Trail 1', location: 'Location 1', length: 'Length 1', difficulty: 'Difficulty 1', description: 'This is the perfect trail for dogs', comments: 'Comments 1' },
  { _id: 2, name: 'Trail 2', location: 'Location 2', length: 'Length 2', difficulty: 'Difficulty 2', description: 'So many amazing views', comments: 'Comments 2' },
  { _id: 3, name: 'Trail 3', location: 'Location 3', length: 'Length 3', difficulty: 'Difficulty 3', description: 'lorem fdbhsafbdhawhbfewqlf', comments: 'Comments 3' },
  { _id: 4, name: 'Trail 4', location: 'Location 4', length: 'Length 4', difficulty: 'Difficulty 4', description: 'dhsbafhasbgfuydsagfuyhasbfasb', comments: 'Comments 4' },
];

export default function App() {
  const [user, setUser] = useState(getUser());
  const [trailItems, setTrailItems] = useState(trailTestItems);

  return (
    <main className="App">
      <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<HomePage setUser={setUser} trailItems={trailItems} trailTestItems={trailTestItems} />} />
          <Route path="/signin" element={<LoginForm setUser={setUser} />} />
          <Route path="/register" element={<SignUpForm setUser={setUser} />} />
          <Route path="/trails/:trailName" element={<TrailDetailsPage trailItems={trailTestItems} />} />
          <Route path='/trails/new' element={<CreateTrailPage trailItems={trailItems} setTrailItems={setTrailItems} />} />
        </Routes>
      </>
    </main>
  );
}

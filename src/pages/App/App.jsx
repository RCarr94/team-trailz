import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';


// Components
import NavBar from '../../components/NavBar/NavBar';

// Pages
import HomePage from '../HomePage/HomePage';

// Helpers
import { getUser } from '../../utilities/services/users';

import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <>
        <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path='/' element={<HomePage setUser={setUser} />}/>

          </Routes>
      </>
    </main>
  );
}

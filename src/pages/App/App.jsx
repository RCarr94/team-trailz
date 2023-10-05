import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';


// Components
import NavBar from '../../components/NavBar/NavBar';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

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
            <Route path='/signin' element={<LoginForm setUser={setUser} />}/>
            <Route path='/register' element={<SignUpForm setUser={setUser} />}/>

          </Routes>
      </>
    </main>
  );
}

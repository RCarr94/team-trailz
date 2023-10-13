import { useState, useEffect } from 'react';
import { login } from '../../utilities/services/users'
import { Navigate } from 'react-router-dom'

const defaultState = {
    email: '',
    password: '',
    error: ''
}

export default function LoginForm({ setUser }) {
    const [formData, setFormData] = useState(defaultState)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const { email, password, error } = formData;

    useEffect(() => {
        setIsLoggedIn(false);
    }, []); 

    if (isLoggedIn) return <Navigate to="/" />

    const handleSubmit = async (e) => {
        // when we submit we basically just grab whatever we have in
        // the state.
        e.preventDefault();

        try {
            const {  password, email } = formData;
            const data = {  password, email }

            const user = await login(formData)
            // as soon as we get the decoded data from the creat account api call
            // (derived fromt he jwt in local storage), we can update app.js to store
            // user in state
            setUser(user)
            setIsLoggedIn(true)
        } catch (err) {
            setFormData({
                ...formData,
                error: 'Log in Failed - Try again!'
            })
        }
    }

    function handleChange(evt) {

        const newFormData = {
            ...formData, // use the existing formData
            [evt.target.name]: evt.target.value, // override whatever key with the current fieldd's value
            error: '' // clear any old errors as soon as the user interacts with the form
        };
        setFormData(newFormData);
    }

    const disabled = !email || !password

    return (
      <div className="bg-gray-100">
        <div className="container mx-auto py-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
          <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md" onSubmit={handleSubmit} autoComplete="off">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handleChange}
                required
              />
            </div>
            <button
              className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
              type="submit"
              disabled={disabled}
            >
              Sign In
            </button>
          </form>
        </div>
        {error && <p className="text-red-400">&nbsp;{error}</p>}
      </div>
    );
}
import { useState, useEffect } from 'react';
import { signUp } from '../../utilities/services/users'
import { Navigate, Link } from 'react-router-dom'
import { validateEmail } from '../../utilities/services/users'

const defaultState = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
}

export default function SignUpForm({ setUser }){
    const [formData, setFormData] = useState(defaultState)
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const { name, email, password, confirm, error } = formData;

    useEffect(() => {
      setIsLoggedIn(false);
    }, []); 

    if (isLoggedIn) return <Navigate to="/" />;

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            const { name, password, email } = formData;
            const data = {name, password, email}
            checkEmail();
            const user = await signUp(data)
            setUser(user)
            setIsLoggedIn(true)
        }catch (err) {
            setFormData({
                ...formData,
                error: 'Sign up Failed - Try again!'
            })
        }
    }


    // const handleChange = (e) => {
    //     const newFormData = { ...formData, [e.target.name]: e.target.value }
    //     window.alert( JSON.stringify(newFormData ) )
    //     setFormData(newFormData)
    // }

    function handleChange(evt) {
        // Replace with new object and use a computed property
        // to update the correct property
        const newFormData = {
            ...formData, // use the existing formData
            [evt.target.name]: evt.target.value, // override whatever key with the current fieldd's value
            error: '' // clear any old errors as soon as the user interacts with the form
        };
        setFormData(newFormData);
    }

    function checkEmail() {
      if (validateEmail(email)) {
    } else {
        console.log('Invalid email address format');
        throw new Error('Invalid email address format');
    }
    }

    const disabled = (password !== confirm) || !name || !email || !password || !confirm

    return (
      <div className="bg-gray-100">
        <div className="container mx-auto py-8">
          <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md" onSubmit={handleSubmit} autoComplete="off">
            <h1 className="text-2xl font-bold mb-6 text-center text-green-800">Register</h1>
            <div className="mb-4">
              <label className="block text-green-800 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-green-800 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-green-800 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-green-800 text-sm font-bold mb-2" htmlFor="confirm">
                Confirm Password
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                type="password"
                name="confirm"
                id="confirm"
                value={confirm}
                onChange={handleChange}
                required
              />
            </div>
            <button
              className="w-full bg-green-800 text-white text-sm font-bold py-2 px-4 rounded-md hover:cursor-pointer transition duration-300"
              type="submit"
              disabled={disabled}
            >
              Sign up
            </button>
            <span className='text-sm'>
              Already have an account? &nbsp;<Link className='text-green-800' to="/signin">Sign In</Link>
            </span>
           {error && <p className="text-red-500">&nbsp;{error}</p>}
          </form>
        </div>
      </div>
    );
}
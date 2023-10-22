import { useState } from 'react';
import { create } from '../../utilities/api/trails';
import { useNavigate } from 'react-router-dom';
import './CreateTrailPage.css';

import GoogleSearchBar from '../../components/GoogleSearchBar/GoogleSearchBar';



const defaultState = {
  trailName: '',
  difficulty: '',
  length: '',
  description: '',
  image: '',
}


export default function CreateTrailPage({ trailItems, setTrailItems }) {
  const [formData, setFormData] = useState(defaultState);
  const [location, setLocation] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const navigate = useNavigate();

  
  const { trailName, difficulty, length, description, error } = formData;



  async function handleSubmit(evt) {
    evt.preventDefault();
    
      try {
        const data = { ...formData, location, latitude, longitude };
        const newTrail = await create(data);

        setTrailItems([...trailItems, newTrail]);
        setFormData(defaultState);
        navigate('/');
      } catch (err) {
        setFormData({
          ...formData,
          error: err.message || "Trail creation failed. Please try again.",
        });
        console.log(err.message)
      }

  }
  
    function handleChange(evt) {
      const newFormData = {
        ...formData,
        [evt.target.name]: evt.target.value,
        error: ''
      };
      setFormData(newFormData);
    }

    function handleImgChange(evt) {
      const reader = new FileReader();
    
      reader.onload = function (evt) {
        const newFormData = {
          ...formData,
          image: evt.target.result,
          error: ''
        };
        setFormData(newFormData);
      };
      reader.readAsDataURL(evt.target.files[0]);
    }

  return (
    <>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px] bg-white rounded shadow-lg">
          <h2 className="text-2xl font-bold text-green-800 ">Add a Trail</h2>
          <form className="py-6 px-9" autoComplete="off" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-green-800 text-left" htmlFor="trailName">
                Trail Name
              </label>
              <input
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-green-700 focus:shadow-md"
                type="text"
                name="trailName"
                value={trailName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-5">
              <GoogleSearchBar
                location={location}
                setLocation={setLocation}
                handleChange={handleChange}
                setLatitude={setLatitude}
                setLongitude={setLongitude}
              />
            </div>

            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-green-800 text-left" htmlFor="length">
                Length
              </label>
              <input
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-green-700 focus:shadow-md"
                type="number"
                name="length"
                placeholder="KM"
                value={length}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-5">
              <label htmlFor="image" className="mb-3 block text-base font-medium text-green-800 text-left">
                Upload Trail Image
              </label>
              <div className="mb-8">
                <input
                  className="rounded border-[#e0e0e0] py-2 pr-36 text-base font-medium text"
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleImgChange}
                />
              </div>
            </div>

            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-green-800  text-left" htmlFor="difficulty">
                Difficulty
              </label>
              <select
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-green-700 focus:shadow-md"
                name="difficulty"
                value={difficulty}
                onChange={handleChange}
                required
              >
                <option value="" disabled hidden>
                  Select a difficulty
                </option>
                <option value="easy">Easy</option>
                <option value="average">Average</option>
                <option value="challenging">Challenging</option>
                <option value="extreme">Extreme</option>
              </select>
            </div>

            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-green-800 text-left" htmlFor="description">
                Description
              </label>
              <textarea
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-green-700 focus:shadow-md"
                type="text"
                name="description"
                placeholder="Tell us more about your experience..."
                value={description}
                onChange={handleChange}
                required
                rows={5}
              />
            </div>

            <button
              className="hover:shadow-form w-full rounded-md bg-green-800 py-3 px-8 text-center text-base font-semibold text-white outline-none"
              type="submit"
            >
              Add Trail
            </button>
            {error && <p className="text-red-500">&nbsp;{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
}
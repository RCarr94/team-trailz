import { useState } from 'react';
import { create } from '../../utilities/api/trails';
import './CreateTrailPage.css';

const defaultState = {
  trailName: '',
  location: '',
  difficulty: '',
  length: '',
  description: '',
  image: '',
  error: ''
}


export default function CreateTrailPage({ trailItems, setTrailItems, trailTestItems }) {
  const [formData, setFormData] = useState(defaultState);
  
  const { trailName, location, difficulty, length, description, image, error } = formData;
  
  async function handleSubmit(evt) {
    evt.preventDefault();
  
    try {
      // const newTrail = { trailName, location, difficulty, length, description, image };
      const data = { trailName, location, difficulty, length, description, image };
      const newTrail = await create(data);

      setTrailItems([...trailItems, newTrail]);
      setFormData(defaultState);
    } catch (err) {
      setFormData({
        ...formData,
        error: 'Trail creation failed - Try again!'
      });
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

  return (
    <>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px] bg-white rounded shadow-lg">
          <h2 className="text-2xl font-bold">Add a Trail</h2>
          <form className="py-6 px-9" autoComplete="off" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D] text-left" htmlFor="trailName">
                Trail Name
              </label>
              <input
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                type="text"
                name="trailName"
                value={trailName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D] text-left" htmlFor="location">
                Location
              </label>
              <input
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                type="text"
                name="location"
                value={location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D] text-left" htmlFor="length">
                Length
              </label>
              <input
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                type="number"
                name="length"
                value={length}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-5">
              <label htmlFor="image" className="mb-3 block text-base font-medium text-[#07074D] text-left">
                Upload Trail Image
              </label>
              <div className="mb-8">
                <input
                  className="rounded border-[#e0e0e0] py-2 pr-36 text-base font-medium text-[#07074D]"
                  type="file"
                  name="image"
                  value={image}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D] text-left" htmlFor="difficulty">
                Difficulty
              </label>
              <select
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                name="difficulty"
                value={difficulty}
                onChange={handleChange}
              >
                <option value="easy">Easy</option>
                <option value="average">Average</option>
                <option value="challenging">Challenging</option>
                <option value="extreme">Extreme</option>
              </select>
            </div>

            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D] text-left" htmlFor="description">
                Description
              </label>
              <input
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                type="text"
                name="description"
                value={description}
                onChange={handleChange}
                required
              />
            </div>

            <button
              className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              type="submit"
            >
              Add Trail
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
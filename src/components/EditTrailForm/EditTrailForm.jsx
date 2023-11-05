import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { update } from '../../utilities/api/trails';

export default function EditTrailForm({ trailItems, setTrailItems }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    trailName: '',
    difficulty: '',
    length: '',
    description: '',
  });

  useEffect(() => {
    async function getTrail() {
      try {
        const res = await fetch(`/api/trails/${id}`);
        const trail = await res.json();
        setFormData({
          trailName: trail.trailName,
          difficulty: trail.difficulty,
          length: trail.length,
          description: trail.description,
        });
      } catch (error) {
        console.log(error);
      }
    }

    getTrail(); // Call the async function here
  }, []);

  const { trailName, difficulty, length, description, error } = formData;

  function handleChange(evt) {
    const newFormData = {
      ...formData,
      [evt.target.name]: evt.target.value,
      error: '',
    };
    setFormData(newFormData);
    }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const updatedTrail = await update(id, formData);
      const updatedTrailItems = trailItems.map((trail) => {
        if (trail._id === updatedTrail._id) {
          console.log(updatedTrail._id);
          return updatedTrail;
        }
        return trail;
      });
      setTrailItems(updatedTrailItems);
      navigate(`/trails/${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px] bg-white rounded shadow-lg">
          <h2 className="text-2xl font-bold text-green-800 ">Edit {trailName}</h2>
          <form className="py-6 px-9" autoComplete="off" onSubmit={handleSubmit}>

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
              Update Trail
            </button>
            {error && <p className="text-red-500">&nbsp;{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
}

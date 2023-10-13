import { useState } from 'react';
import './CreateTrailPage.css';

const defaultState = {
  trailName: '',
  location: '',
  difficulty: '',
  length: '',
  description: ''
}

export default function CreateTrailPage({ trailItems, setTrailItems}) {
  const [formData, setFormData] = useState(defaultState);
  return (
    <>
      <div className="trail-form-container">
        <h2 className="header">Add a Trail</h2>
          <div className="form-container">
            <form  autoComplete="off">
            <label htmlFor="trailName">Trail Name</label>
            <input type="text" name="trailName"  required />

            <label htmlFor="location">Location</label>
            <input type="text" name="location" id="location"  required />

            <label htmlFor="difficulty">Difficulty</label>
            <select name="difficulty"  >
              <option value="easy">Easy</option>
              <option value="average">Average</option>
              <option value="challenging">Challenging</option>
              <option value="extreme">Extreme</option>
            </select>

            <label htmlFor="length">Length</label>
            <input type='number' name="length"  required />

            <label htmlFor="description">Description</label>
            <input type='text' name="description"  required />

            <button type="submit">
              Add Trail
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
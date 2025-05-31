import React, { useState } from 'react';

function MovieInput({ onAddMovie }) {
  const [movieData, setMovieData] = useState({
    movieName: '',
    actor: '',
    releaseDate: '',
    movieTypes: [],
    state: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMovieData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setMovieData(prev => ({
      ...prev,
      movieTypes: checked 
        ? [...prev.movieTypes, value]
        : prev.movieTypes.filter(type => type !== value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movieData.movieName && movieData.actor && movieData.releaseDate && movieData.state) {
      onAddMovie({
        ...movieData,
        movieTypes: movieData.movieTypes.join(', ')
      });
      setMovieData({
        movieName: '',
        actor: '',
        releaseDate: '',
        movieTypes: [],
        state: ''
      });
    }
  };

  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Movie Name:</label>
            <input
              type="text"
              name="movieName"
              className="form-control"
              value={movieData.movieName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Actor:</label>
            <input
              type="text"
              name="actor"
              className="form-control"
              value={movieData.actor}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Release Date:</label>
            <input
              type="date"
              name="releaseDate"
              className="form-control"
              value={movieData.releaseDate}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">State:</label>
            <select
              name="state"
              className="form-control"
              value={movieData.state}
              onChange={handleInputChange}
              required
            >
              <option value="">Select State</option>
              {states.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Movie Type:</label>
        <div>
          <label style={{ marginRight: '15px' }}>
            <input
              type="checkbox"
              value="2D"
              checked={movieData.movieTypes.includes('2D')}
              onChange={handleCheckboxChange}
            />
            <span style={{ marginLeft: '5px' }}>2D</span>
          </label>
          <label style={{ marginRight: '15px' }}>
            <input
              type="checkbox"
              value="3D"
              checked={movieData.movieTypes.includes('3D')}
              onChange={handleCheckboxChange}
            />
            <span style={{ marginLeft: '5px' }}>3D</span>
          </label>
          <label>
            <input
              type="checkbox"
              value="IMAX"
              checked={movieData.movieTypes.includes('IMAX')}
              onChange={handleCheckboxChange}
            />
            <span style={{ marginLeft: '5px' }}>IMAX</span>
          </label>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">Add Movie</button>
    </form>
  );
}

export default MovieInput;
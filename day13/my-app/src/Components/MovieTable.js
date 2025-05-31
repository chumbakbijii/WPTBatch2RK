import React from 'react';

function MovieTable({ movies }) {
  return (
    <div>
      <h5>Movie Database:</h5>
      {movies.length === 0 ? (
        <p>No movies added yet.</p>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table className="table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Movie Name</th>
                <th>Actor</th>
                <th>Release Date</th>
                <th>Movie Type</th>
                <th>State</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{movie.movieName}</td>
                  <td>{movie.actor}</td>
                  <td>{new Date(movie.releaseDate).toLocaleDateString()}</td>
                  <td>{movie.movieTypes || 'Not specified'}</td>
                  <td>{movie.state}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default MovieTable;
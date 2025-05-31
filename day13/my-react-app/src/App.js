import React, { useState } from 'react';

// Bootstrap CSS is included via CDN link in the HTML head

// Component A
const ComponentA = ({ children, showMessage = true }) => {
  return (
    <div className="card border-primary mb-3">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">Component A</h5>
      </div>
      <div className="card-body">
        {showMessage && <p className="text-primary">This is Component A</p>}
        {children}
      </div>
    </div>
  );
};

// Component B
const ComponentB = ({ children, showMessage = true }) => {
  return (
    <div className="card border-success mb-3">
      <div className="card-header bg-success text-white">
        <h5 className="mb-0">Component B</h5>
      </div>
      <div className="card-body">
        {showMessage && <p className="text-success">This is Component B</p>}
        {children}
      </div>
    </div>
  );
};

// Component C
const ComponentC = ({ children, showMessage = true }) => {
  return (
    <div className="card border-warning mb-3">
      <div className="card-header bg-warning text-dark">
        <h5 className="mb-0">Component C</h5>
      </div>
      <div className="card-body">
        {showMessage && <p className="text-warning">This is Component C</p>}
        {children}
      </div>
    </div>
  );
};

// Arithmetic Calculator Components
const Addition = ({ onCalculate }) => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = parseFloat(num1) + parseFloat(num2);
    onCalculate('Addition', num1, num2, result);
  };

  return (
    <div className="col-md-6 mb-3">
      <div className="card border-info">
        <div className="card-header bg-info text-white">Addition</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <input 
                type="number" 
                className="form-control form-control-sm" 
                placeholder="Number 1" 
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                required 
              />
            </div>
            <div className="mb-2">
              <input 
                type="number" 
                className="form-control form-control-sm" 
                placeholder="Number 2" 
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                required 
              />
            </div>
            <button type="submit" className="btn btn-info btn-sm">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Subtraction = ({ onCalculate }) => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = parseFloat(num1) - parseFloat(num2);
    onCalculate('Subtraction', num1, num2, result);
  };

  return (
    <div className="col-md-6 mb-3">
      <div className="card border-danger">
        <div className="card-header bg-danger text-white">Subtraction</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <input 
                type="number" 
                className="form-control form-control-sm" 
                placeholder="Number 1" 
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                required 
              />
            </div>
            <div className="mb-2">
              <input 
                type="number" 
                className="form-control form-control-sm" 
                placeholder="Number 2" 
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                required 
              />
            </div>
            <button type="submit" className="btn btn-danger btn-sm">Subtract</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Multiplication = ({ onCalculate }) => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = parseFloat(num1) * parseFloat(num2);
    onCalculate('Multiplication', num1, num2, result);
  };

  return (
    <div className="col-md-6 mb-3">
      <div className="card border-success">
        <div className="card-header bg-success text-white">Multiplication</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <input 
                type="number" 
                className="form-control form-control-sm" 
                placeholder="Number 1" 
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                required 
              />
            </div>
            <div className="mb-2">
              <input 
                type="number" 
                className="form-control form-control-sm" 
                placeholder="Number 2" 
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                required 
              />
            </div>
            <button type="submit" className="btn btn-success btn-sm">Multiply</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Division = ({ onCalculate }) => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = parseFloat(num2) !== 0 ? parseFloat(num1) / parseFloat(num2) : 'Cannot divide by zero';
    onCalculate('Division', num1, num2, result);
  };

  return (
    <div className="col-md-6 mb-3">
      <div className="card border-warning">
        <div className="card-header bg-warning text-dark">Division</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <input 
                type="number" 
                className="form-control form-control-sm" 
                placeholder="Number 1" 
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                required 
              />
            </div>
            <div className="mb-2">
              <input 
                type="number" 
                className="form-control form-control-sm" 
                placeholder="Number 2" 
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                required 
              />
            </div>
            <button type="submit" className="btn btn-warning btn-sm">Divide</button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Fruit Components
const FruitForm = ({ onAddFruit }) => {
  const [fruitName, setFruitName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fruitName.trim()) {
      onAddFruit(fruitName.trim());
      setFruitName('');
    }
  };

  return (
    <div className="card border-success mb-4">
      <div className="card-header bg-success text-white">
        <h5 className="mb-0">Add Fruit</h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-8">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Enter fruit name" 
              value={fruitName}
              onChange={(e) => setFruitName(e.target.value)}
              required 
            />
          </div>
          <div className="col-md-4">
            <button type="submit" className="btn btn-success w-100">Add Fruit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const FruitList = ({ fruits }) => {
  return (
    <div className="card border-info">
      <div className="card-header bg-info text-white">
        <h5 className="mb-0">Fruit List ({fruits.length} items)</h5>
      </div>
      <div className="card-body">
        {fruits.length === 0 ? (
          <p className="text-muted">No fruits added yet.</p>
        ) : (
          <ul className="list-group list-group-flush">
            {fruits.map((fruit, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {fruit}
                <span className="badge bg-primary rounded-pill">{index + 1}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

// Movie Components
const MovieForm = ({ onAddMovie }) => {
  const [movie, setMovie] = useState({
    movieName: '',
    actor: '',
    release: '',
    movieTypes: [],
    state: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMovie(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setMovie(prev => ({
      ...prev,
      movieTypes: checked 
        ? [...prev.movieTypes, value]
        : prev.movieTypes.filter(type => type !== value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie({ ...movie, id: Date.now() });
    setMovie({
      movieName: '',
      actor: '',
      release: '',
      movieTypes: [],
      state: ''
    });
  };

  return (
    <div className="card border-primary mb-4">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">Add Movie</h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Movie Name</label>
              <input 
                type="text" 
                className="form-control" 
                name="movieName"
                value={movie.movieName}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Actor</label>
              <input 
                type="text" 
                className="form-control" 
                name="actor"
                value={movie.actor}
                onChange={handleInputChange}
                required 
              />
            </div>
          </div>
          
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Release Date</label>
              <input 
                type="date" 
                className="form-control" 
                name="release"
                value={movie.release}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">State</label>
              <select 
                className="form-select" 
                name="state"
                value={movie.state}
                onChange={handleInputChange}
                required
              >
                <option value="">Select State</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Movie Type</label>
            <div className="form-check-container">
              {['2D', '3D', 'IMAX'].map(type => (
                <div key={type} className="form-check form-check-inline">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    value={type}
                    checked={movie.movieTypes.includes(type)}
                    onChange={handleCheckboxChange}
                  />
                  <label className="form-check-label">{type}</label>
                </div>
              ))}
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Add Movie</button>
        </form>
      </div>
    </div>
  );
};

const MovieTable = ({ movies }) => {
  return (
    <div className="card border-warning">
      <div className="card-header bg-warning text-dark">
        <h5 className="mb-0">Movie Database ({movies.length} movies)</h5>
      </div>
      <div className="card-body">
        {movies.length === 0 ? (
          <p className="text-muted">No movies added yet.</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  <th>Movie Name</th>
                  <th>Actor</th>
                  <th>Release Date</th>
                  <th>Movie Types</th>
                  <th>State</th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie) => (
                  <tr key={movie.id}>
                    <td className="fw-bold">{movie.movieName}</td>
                    <td>{movie.actor}</td>
                    <td>{new Date(movie.release).toLocaleDateString()}</td>
                    <td>
                      {movie.movieTypes.map(type => (
                        <span key={type} className="badge bg-info me-1">{type}</span>
                      ))}
                    </td>
                    <td>{movie.state}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [calculations, setCalculations] = useState([]);
  const [fruits, setFruits] = useState([]);
  const [movies, setMovies] = useState([]);

  const handleCalculate = (operation, num1, num2, result) => {
    setCalculations([...calculations, { operation, num1, num2, result, id: Date.now() }]);
  };

  const addFruit = (fruit) => {
    setFruits([...fruits, fruit]);
  };

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet" />
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mb-5 text-primary">React Component Architecture & Forms Demo</h1>
            
            {/* Section 1: Component Tree Structures */}
            <div className="mb-5">
              <h2 className="text-secondary mb-4">1. Component Tree Structures</h2>
              
              <div className="row">
                <div className="col-md-6 mb-4">
                  <h5 className="text-info">a) A ← B ← C (Nested Structure)</h5>
                  <ComponentA>
                    <ComponentB>
                      <ComponentC />
                    </ComponentB>
                  </ComponentA>
                </div>
                
                <div className="col-md-6 mb-4">
                  <h5 className="text-info">b) Use B and C in A, Use A in App</h5>
                  <ComponentA showMessage={false}>
                    <ComponentB />
                    <ComponentC />
                  </ComponentA>
                </div>
              </div>
              
              <div className="row">
                <div className="col-md-6 mb-4">
                  <h5 className="text-info">c) Use A, B, and C in App</h5>
                  <div className="d-flex gap-2">
                    <div className="flex-fill"><ComponentA /></div>
                    <div className="flex-fill"><ComponentB /></div>
                    <div className="flex-fill"><ComponentC /></div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4">
                  <h5 className="text-info">d) Use A in B and C, Use B and C in App</h5>
                  <div className="row">
                    <div className="col-6">
                      <ComponentB showMessage={false}>
                        <ComponentA />
                      </ComponentB>
                    </div>
                    <div className="col-6">
                      <ComponentC showMessage={false}>
                        <ComponentA />
                      </ComponentC>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Arithmetic Calculator */}
            <div className="mb-5">
              <h2 className="text-secondary mb-4">2. Arithmetic Calculator</h2>
              <div className="row">
                <Addition onCalculate={handleCalculate} />
                <Subtraction onCalculate={handleCalculate} />
                <Multiplication onCalculate={handleCalculate} />
                <Division onCalculate={handleCalculate} />
              </div>
              
              {calculations.length > 0 && (
                <div className="card border-dark mt-3">
                  <div className="card-header bg-dark text-white">
                    <h5 className="mb-0">Calculation Results</h5>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-sm">
                        <thead>
                          <tr>
                            <th>Operation</th>
                            <th>Number 1</th>
                            <th>Number 2</th>
                            <th>Result</th>
                          </tr>
                        </thead>
                        <tbody>
                          {calculations.slice(-5).reverse().map((calc) => (
                            <tr key={calc.id}>
                              <td><span className="badge bg-secondary">{calc.operation}</span></td>
                              <td>{calc.num1}</td>
                              <td>{calc.num2}</td>
                              <td className="fw-bold text-primary">{calc.result}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Section 3: Fruit Management */}
            <div className="mb-5">
              <h2 className="text-secondary mb-4">3. Fruit Management System</h2>
              <div className="row">
                <div className="col-md-6">
                  <FruitForm onAddFruit={addFruit} />
                </div>
                <div className="col-md-6">
                  <FruitList fruits={fruits} />
                </div>
              </div>
            </div>

            {/* Section 4: Movie Management */}
            <div className="mb-5">
              <h2 className="text-secondary mb-4">4. Movie Management System</h2>
              <MovieForm onAddMovie={addMovie} />
              <MovieTable movies={movies} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
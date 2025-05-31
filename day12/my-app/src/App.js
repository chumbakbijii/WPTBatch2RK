import React, { useState } from 'react';
import ComponentA from './Components/ComponentA';
import ComponentB from './Components/ComponentB';
import ComponentC from './Components/ComponentC';
import Addition from './Components/Addition';
import Subtraction from './Components/Subtraction';
import Multiplication from './Components/Multiplication';
import Division from './Components/Division';
import FruitInput from './Components/FruitInput';
import FruitList from './Components/FruitList';
import MovieInput from './Components/MovieInput';
import MovieTable from './Components/MovieTable';
//import bootstrapStyles from './bootstrap.min.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  const [fruits, setFruits] = useState([]);
  const [movies, setMovies] = useState([]);

  const addFruit = (fruit) => {
    setFruits([...fruits, fruit]);
  };

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div>
      <div/>
      <div className="container">
        <h1 className="text-center mb-4">React Component Tree & Forms Assignment</h1>
        
        {/* Section 1: Component Tree Structures */}
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">1. Component Tree Structures</div>
              <div className="card-body">
                
                {/* a) A <- B <- C */}
                <div className="alert alert-info">
                  <strong>Structure a) A ← B ← C:</strong>
                  <ComponentA>
                    <ComponentB>
                      <ComponentC />
                    </ComponentB>
                  </ComponentA>
                </div>

                {/* b) Use B and C in A, Use A in App */}
                <div className="alert alert-info mt-3">
                  <strong>Structure b) Use B and C in A, Use A in App:</strong>
                  <ComponentA>
                    <ComponentB />
                    <ComponentC />
                  </ComponentA>
                </div>

                {/* c) Use A and B and C in App */}
                <div className="alert alert-info mt-3">
                  <strong>Structure c) Use A and B and C in App:</strong>
                  <div>
                    <ComponentA />
                    <ComponentB />
                    <ComponentC />
                  </div>
                </div>

                {/* d) Use A in B and C, Use B and C in App */}
                <div className="alert alert-info mt-3">
                  <strong>Structure d) Use A in B and C, Use B and C in App:</strong>
                  <ComponentB>
                    <ComponentA />
                  </ComponentB>
                  <ComponentC>
                    <ComponentA />
                  </ComponentC>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Arithmetic Calculations */}
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">2. Addition Calculator</div>
              <div className="card-body">
                <Addition />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">2. Subtraction Calculator</div>
              <div className="card-body">
                <Subtraction />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">2. Multiplication Calculator</div>
              <div className="card-body">
                <Multiplication />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">2. Division Calculator</div>
              <div className="card-body">
                <Division />
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Fruit List */}
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">3. Add Fruit</div>
              <div className="card-body">
                <FruitInput onAddFruit={addFruit} />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">3. Fruit List</div>
              <div className="card-body">
                <FruitList fruits={fruits} />
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Movie Data */}
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">4. Add Movie</div>
              <div className="card-body">
                <MovieInput onAddMovie={addMovie} />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">4. Movie Table</div>
              <div className="card-body">
                <MovieTable movies={movies} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
import React from 'react';

function FruitList({ fruits }) {
  return (
    <div>
      <h5>Fruit List:</h5>
      {fruits.length === 0 ? (
        <p>No fruits added yet.</p>
      ) : (
        <ul className="list-group">
          {fruits.map((fruit, index) => (
            <li key={index} className="list-group-item">
              {fruit}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FruitList;
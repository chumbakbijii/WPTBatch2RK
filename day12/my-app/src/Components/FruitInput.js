import React, { useState } from 'react';

function FruitInput({ onAddFruit }) {
  const [fruitName, setFruitName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fruitName.trim()) {
      onAddFruit(fruitName.trim());
      setFruitName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Fruit Name:</label>
        <input
          type="text"
          className="form-control"
          value={fruitName}
          onChange={(e) => setFruitName(e.target.value)}
          placeholder="Enter fruit name"
          required
        />
      </div>
      <button type="submit" className="btn btn-success">Add Fruit</button>
    </form>
  );
}

export default FruitInput;
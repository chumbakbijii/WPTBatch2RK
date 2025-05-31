import React, { useState } from 'react';

function Subtraction() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const difference = parseFloat(num1) - parseFloat(num2);
    setResult(difference);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">First Number:</label>
        <input
          type="number"
          className="form-control"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label">Second Number:</label>
        <input
          type="number"
          className="form-control"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-info">Subtract</button>
      {result !== '' && (
        <div className="mt-3">
          <strong>Result: {result}</strong>
        </div>
      )}
    </form>
  );
}

export default Subtraction;
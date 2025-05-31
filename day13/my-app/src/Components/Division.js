import React, { useState } from 'react';

function Division() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (parseFloat(num2) === 0) {
      setError('Cannot divide by zero!');
      setResult('');
      return;
    }
    
    const quotient = parseFloat(num1) / parseFloat(num2);
    setResult(quotient);
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
      <button type="submit" className="btn btn-primary">Divide</button>
      {result !== '' && (
        <div className="mt-3">
          <strong>Result: {result}</strong>
        </div>
      )}
      {error && (
        <div className="mt-3" style={{ color: 'red' }}>
          <strong>{error}</strong>
        </div>
      )}
    </form>
  );
}

export default Division;
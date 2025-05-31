function ComponentB({ children }) {
  return (
    <div style={{ border: '2px solid #28a745', padding: '10px', margin: '5px', borderRadius: '5px' }}>
      <h4>Component B</h4>
      <p>This is Component B</p>
      {children}
    </div>
  );
}

export default ComponentB;
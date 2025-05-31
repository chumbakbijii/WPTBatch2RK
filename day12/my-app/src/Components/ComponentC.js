function ComponentC({ children }) {
  return (
    <div style={{ border: '2px solid #dc3545', padding: '10px', margin: '5px', borderRadius: '5px' }}>
      <h4>Component C</h4>
      <p>This is Component C</p>
      {children}
    </div>
  );
}

export default ComponentC;
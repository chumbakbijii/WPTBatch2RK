const ComponentA = function({ children }) {
  return (
    <div style={{ border: '2px solid #007bff', padding: '10px', margin: '5px', borderRadius: '5px' }}>
      <h4>Component A</h4>
      <p>This is Component A</p>
      {children}
    </div>
  );
}

export default ComponentA;
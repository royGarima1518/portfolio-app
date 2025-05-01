import React from 'react';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Garima's Portfolio</h1>
      <h2>Featured Projects</h2>

      <div style={{ border: '1px solid #ccc', borderRadius: 10, padding: 20, maxWidth: 600 }}>
        <h3>🚗 Car Parking System</h3>
        <p>
          An IoT-based car parking system using IR sensors and Arduino to detect available parking spots.
        </p>
        <a
          href="https://github.com/GarimaRoy906/car-parking-system"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 View Project on GitHub
        </a>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import SortingVisualizer from './components/SortingVisualizer';
import './index.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-4xl text-center font-bold mb-6">
          Sorting Algorithm Visualizer
        </h1>
        <SortingVisualizer />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import SortingVisualizer from '../components/SortingVisualizer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center my-4">Sorting Visualizer</h1>
      <SortingVisualizer />
    </main>
  );
}

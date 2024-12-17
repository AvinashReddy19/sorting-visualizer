import React, { useState, useEffect } from "react";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function SortingVisualizer() {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState(50); // Speed in milliseconds
  const [activeBars, setActiveBars] = useState([]); // Indices of bars being compared

  useEffect(() => {
    generateNewArray();
  }, []);

  const generateNewArray = () => {
    setArray(Array.from({ length: 30 }, () => Math.floor(Math.random() * 100) + 1));
    setIsSorting(false);
    setIsPaused(false);
    setActiveBars([]);
  };

  const pauseOrResumeSorting = () => {
    setIsPaused((prev) => !prev); // Toggle between paused and resumed states
  };

  const bubbleSortWithVisualization = async () => {
    const arr = [...array];
    const n = arr.length;

    setIsSorting(true);
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        setActiveBars([j, j + 1]); // Highlight the current bars
        await delayWhilePaused(speed);

        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap elements
          setArray([...arr]); // Update the array state
          await delayWhilePaused(speed);
        }
      }
    }
    setActiveBars([]);
    setIsSorting(false);
  };

  const delayWhilePaused = async (ms) => {
    while (isPaused) {
      await delay(100); // Check every 100ms if paused
    }
    await delay(ms); // Continue with the normal delay
  };

  const startSorting = async () => {
    setIsPaused(false);
    await bubbleSortWithVisualization();
  };

  const reset = () => {
    generateNewArray();
  };

  return (
    <div className="text-center p-6">
      {/* Control Buttons */}
      <div className="mb-4">
        <button
          onClick={startSorting}
          disabled={isSorting && !isPaused}
          className="bg-blue-500 text-white p-2 rounded-md mx-2"
        >
          Start
        </button>
        <button
          onClick={pauseOrResumeSorting}
          disabled={!isSorting}
          className="bg-yellow-500 text-white p-2 rounded-md mx-2"
        >
          {isPaused ? "Resume" : "Pause"}
        </button>
        <button
          onClick={reset}
          disabled={isSorting}
          className="bg-gray-500 text-white p-2 rounded-md mx-2"
        >
          Reset
        </button>
      </div>

      {/* Speed Control */}
      <div className="mb-4">
        <label className="mr-2">Speed:</label>
        <input
          type="range"
          min="10"
          max="200"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="slider"
        />
      </div>

      {/* Visualizing the array as bars */}
      <div className="flex justify-center items-end h-[300px] border rounded-lg bg-gray-100">
        {array.map((value, index) => (
          <div
            key={index}
            style={{
              height: `${value * 3}px`,
              width: `${100 / array.length}%`,
              backgroundColor: activeBars.includes(index) ? "red" : "blue",
            }}
            className="mx-1 rounded-t-md"
          ></div>
        ))}
      </div>

      {/* Algorithm Complexity Information */}
      <div className="mt-4 p-4 border rounded-lg bg-white">
        <h2 className="text-xl font-bold">Bubble Sort</h2>
        <p>
          <strong>Time Complexity:</strong> O(n²)
        </p>
        <p>
          <strong>Space Complexity:</strong> O(1)
        </p>
        <p>
          Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in
          the wrong order.
        </p>
      </div>
    </div>
  );
}

export default SortingVisualizer;

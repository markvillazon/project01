import { useState } from "react";
import BasicCalculator from "./assets/BasicCalculator";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count !== 0) setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">COUNTER: {count}</h1>
      <div className="flex gap-4 mb-6">
        <button
          onClick={increment}
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition transform hover:scale-105 text-lg font-semibold"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition transform hover:scale-105 text-lg font-semibold"
        >
          Decrement
        </button>
        <button
          onClick={reset}
          className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg transition transform hover:scale-105 text-lg font-semibold"
        >
          Reset
        </button>
      </div>
      <BasicCalculator />
    </div>
  );
}

export default App;

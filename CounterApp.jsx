import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      alert("Function Meledug");
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Function Rusak");
    }
  };

  const reset = () => {
    if (count > 0) {
      setCount(0);
      alert("Angka telah direset");
    } else {
      alert("Angka sudah 0");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="bg-purple-400 flex justify-between items-center px-8 py-4 rounded-md mb-4">
          <p className="text-white font-bold">Count:</p>
          <p className="text-white font-bold">{count}</p>
        </div>
        <div className="flex justify-between">
          <button
            className="py-2 px-4 bg-green-500 text-white rounded-md focus:outline-none hover:bg-green-600"
            onClick={increment}
          >
            Tambah
          </button>
          <button
            className="py-2 px-4 bg-red-500 text-white rounded-md focus:outline-none hover:bg-red-600"
            onClick={decrement}
          >
            Kurang
          </button>
          <button
            className="py-2 px-4 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;

import React, { useState } from "react";

function ColorPickerApp() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const RedChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (!isNaN(newValue) && newValue >= 0 && newValue <= 255) {
      setRed(newValue);
    } else {
      alert("Nilai harus berada di antara 0 dan 255");
    }
  };

  const GreenChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (!isNaN(newValue) && newValue >= 0 && newValue <= 255) {
      setGreen(newValue);
    } else {
      alert("Nilai harus berada di antara 0 dan 255");
    }
  };

  const BlueChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (!isNaN(newValue) && newValue >= 0 && newValue <= 255) {
      setBlue(newValue);
    } else {
      alert("Nilai harus berada di antara 0 dan 255");
    }
  };

  const generateRandomRGB = () => {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);

    setRed(randomRed);
    setGreen(randomGreen);
    setBlue(randomBlue);

    alert(
      `Nilai RGB yang dihasilkan secara acak: RGB(${randomRed}, ${randomGreen}, ${randomBlue})`
    );
  };

  const setPresetColor = (presetRed, presetGreen, presetBlue) => {
    setRed(presetRed);
    setGreen(presetGreen);
    setBlue(presetBlue);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-between gap-4 mb-4">
          <div className="flex flex-col w-1/3">
            <label className="text-gray-700 mb-2">Red:</label>
            <input
              type="number"
              value={red}
              onChange={RedChange}
              className="border rounded-md py-1 px-2"
            />
          </div>
          <div className="flex flex-col w-1/3">
            <label className="text-gray-700 mb-2">Green:</label>
            <input
              type="number"
              value={green}
              onChange={GreenChange}
              className="border rounded-md py-1 px-2"
            />
          </div>
          <div className="flex flex-col w-1/3">
            <label className="text-gray-700 mb-2">Blue:</label>
            <input
              type="number"
              value={blue}
              onChange={BlueChange}
              className="border rounded-md py-1 px-2"
            />
          </div>
        </div>
        <div
          className="w-full h-20 mb-4 rounded-lg"
          style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
        ></div>
        <p className="text-center mb-4">
          RGB {red}, {green}, {blue}
        </p>
        <div className="flex justify-center gap-4">
          <button
            className="bg-green-500 text-white py-2 px-4 rounded-lg focus:outline-none hover:bg-green-600"
            onClick={generateRandomRGB}
          >
            Generate Random RGB
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-lg focus:outline-none hover:bg-red-600"
            onClick={() => setPresetColor(255, 0, 0)}
          >
            Merah
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg focus:outline-none hover:bg-blue-600"
            onClick={() => setPresetColor(0, 0, 255)}
          >
            Biru
          </button>
          <button
            className="bg-yellow-500 text-white py-2 px-4 rounded-lg focus:outline-none hover:bg-yellow-600"
            onClick={() => setPresetColor(255, 255, 0)}
          >
            Kuning
          </button>
        </div>
      </div>
    </div>
  );
}

export default ColorPickerApp;

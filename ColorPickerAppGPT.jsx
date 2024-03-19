import React, { useState } from "react";

function ColorPickerApp() {
  const [red, setRed] = useState("0");
  const [green, setGreen] = useState("0");
  const [blue, setBlue] = useState("0");
  const [savedColors, setSavedColors] = useState([]);
  const [deletedColors, setDeletedColors] = useState([]);

  const RedChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (!isNaN(newValue) && newValue >= 0 && newValue <= 255) {
      setRed(newValue.toString());
    }
  };

  const GreenChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (!isNaN(newValue) && newValue >= 0 && newValue <= 255) {
      setGreen(newValue.toString());
    } else {
      alert("Nilai harus berada di antara 0 dan 255");
    }
  };

  const BlueChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (!isNaN(newValue) && newValue >= 0 && newValue <= 255) {
      setBlue(newValue.toString());
    }
  };

  const generateRandomRGB = () => {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);

    setRed(randomRed.toString());
    setGreen(randomGreen.toString());
    setBlue(randomBlue.toString());

    alert(
      `Nilai RGB yang dihasilkan secara acak: RGB(${randomRed}, ${randomGreen}, ${randomBlue})`
    );
  };

  const setPresetColor = (presetRed, presetGreen, presetBlue) => {
    setRed(presetRed.toString());
    setGreen(presetGreen.toString());
    setBlue(presetBlue.toString());
  };

  const saveColor = () => {
    const newColor = { red, green, blue };
    setSavedColors([...savedColors, newColor]);
  };

  const removeColor = (index) => {
    const removedColor = savedColors.splice(index, 1);
    setDeletedColors([...deletedColors, removedColor[0]]);
    setSavedColors([...savedColors]);
  };

  const clearAllColors = () => {
    setDeletedColors([...deletedColors, ...savedColors]);
    setSavedColors([]);
  };

  const restoreColor = () => {
    const lastDeletedColor = deletedColors.pop();
    if (lastDeletedColor) {
      setSavedColors([...savedColors, lastDeletedColor]);
      setDeletedColors([...deletedColors]);
    }
  };

  const selectSavedColor = (color) => {
    setRed(color.red);
    setGreen(color.green);
    setBlue(color.blue);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-10">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between gap-4 mb-4">
          <div className="w-1/3">
            <label className="block text-gray-700">Red:</label>
            <input
              type="number"
              value={red}
              onChange={RedChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="w-1/3">
            <label className="block text-gray-700">Green:</label>
            <input
              type="number"
              value={green}
              onChange={GreenChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="w-1/3">
            <label className="block text-gray-700">Blue:</label>
            <input
              type="number"
              value={blue}
              onChange={BlueChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div className="flex justify-center items-center mb-4">
          <div
            style={{
              backgroundColor: `rgb(${red}, ${green}, ${blue})`,
              width: "200px",
              height: "100px",
            }}
            className="rounded-lg"
          ></div>
        </div>
        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={generateRandomRGB}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Generate Random RGB
          </button>
          <button
            onClick={() => setPresetColor(255, 0, 0)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Merah
          </button>
          <button
            onClick={() => setPresetColor(0, 0, 255)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Biru
          </button>
          <button
            onClick={() => setPresetColor(255, 255, 0)}
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg"
          >
            Kuning
          </button>
          <button
            onClick={saveColor}
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
          >
            Simpan Warna
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <h2>Warna yang Disimpan:</h2>
          <ul className="list-disc pl-6">
            {savedColors.map((color, index) => (
              <li key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className="w-6 h-6 rounded-full mr-2"
                    style={{
                      backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`,
                    }}
                  ></div>
                  RGB {color.red}, {color.green}, {color.blue}
                </div>
                <button
                  onClick={() => removeColor(index)}
                  className="px-2 py-1 bg-red-500 text-white rounded"
                >
                  Hapus
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-center gap-4">
            <button
              onClick={clearAllColors}
              className="px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Hapus Semua Warna
            </button>
            <button
              onClick={restoreColor}
              className="px-4 py-2 bg-green-500 text-white rounded-lg"
            >
              Kembalikan Warna
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorPickerApp;

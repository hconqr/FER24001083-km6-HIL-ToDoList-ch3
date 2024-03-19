import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import UseEffect from "./useEffect.jsx";
// import CounterApp from "./CounterApp.jsx";
// import ColorPickerApp from "./ColorPickerApp.jsx";
import ShoppingApp from "./ShoppingApp.jsx";

// ReactDOM.createRoot(document.getElementById("counter")).render(
//   <React.StrictMode>
//     <CounterApp />
//   </React.StrictMode>
// );
// ReactDOM.createRoot(document.getElementById("color")).render(
//   <React.StrictMode>
//     <ColorPickerApp />
//   </React.StrictMode>
// );
ReactDOM.createRoot(document.getElementById("shop")).render(
  <React.StrictMode>
    <ShoppingApp />
  </React.StrictMode>
);
// ReactDOM.createRoot(document.getElementById("effect")).render(
//   <React.StrictMode>
//     <UseEffect />
//   </React.StrictMode>
// );

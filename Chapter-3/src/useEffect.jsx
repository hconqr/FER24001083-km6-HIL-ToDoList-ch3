import React, { useState, useEffect } from "react";

export default function UseEffect() {
  const [data, setData] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    console.log(
      "USE EFFECT HANYA AKAN JALAN SATU KALI KETIKA APLIKASI AKAN DI RENDER"
    );
  }, []);

  useEffect(() => {
    console.log(
      "USE EFFECT AKAN JALAN SETIAP ADA PERUBAHAN PADA DATA KETIKA APLIKASI AKAN DI RENDER"
    );
  }, [data]);

  useEffect(() => {
    console.log("USE EFFECT AKAN JALAN TERUS SETIAP PERUBAHAN APAPUN");
  });

  return (
    <div>
      <div>USE EFFECT</div>
      <div>
        <input
          placeholder="INPUT"
          value={data}
          onChange={(e) => setData(e?.target?.value)}
        />
        <input
          placeholder="OUTPUT"
          value={output}
          onChange={(e) => setOutput(e?.target?.value)}
        />
      </div>
    </div>
  );
}

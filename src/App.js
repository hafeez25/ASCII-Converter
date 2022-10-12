import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [keyCode, setKeyCode] = useState({
    key: "Press any key from keyboard to get ASCII Value",
    code: "",
  });

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  }, []);

  const detectKeyDown = (e) => {
    console.log(e);
    let key = e.keyCode === 32 ? e.code : e.key;
    let code = e.keyCode;

    setKeyCode({ key, code });
  };

  return (
    <div className="App">
      <div className="heading">
        <h1>ASCII CONVERTER</h1>
      </div>
      <div className="key-code">
        {keyCode.key} : {keyCode.code}
      </div>
    </div>
  );
}

export default App;

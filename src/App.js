import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [keyCode, setKeyCode] = useState({
    key: "Press any key from keyboard to get ASCII Value",
    code: "",
  });

  //keys that should show e.code instead of e.key
  const codeInsteadOfKey = [
    { keyCode: 32, keyName: "space" },
    { keyCode: 27, keyName: "escape" },
  ];

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  }, []);

  const showCodeInsteadOfKey = (keyCode) => {
    return codeInsteadOfKey.some((key) => key.keyCode === keyCode);
  };

  const detectKeyDown = (e) => {
    e.preventDefault();
    let key = showCodeInsteadOfKey(e.keyCode) ? e.code : e.key;
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

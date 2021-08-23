import React, { useState, useCallback } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/Demo";
function App() {
  const [showParagraph, setShowParagraph] = useState();

  console.log("APP Running");
  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevshowParagraph) => !prevshowParagraph);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}></DemoOutput>
      <Button onClick={toggleParagraphHandler}>Toggle</Button>
    </div>
  );
}

export default App;

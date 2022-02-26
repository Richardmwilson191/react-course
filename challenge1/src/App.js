import "./App.css";
import { useState } from "react";
import Container from "./Container";
import Input from "./Input";

function App() {
  const [color, setColor] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="App">
      <Container
        color={color}
        hexValue={hexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
      <Input
        color={color}
        setColor={setColor}
        setHexValue={setHexValue}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;

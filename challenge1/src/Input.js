import colorNames from "colornames";
import tinycolor from "tinycolor2";

const isLight = (color) => {
  return tinycolor(color).isLight();
};

const Input = ({ setColor, setHexValue, color, setIsDarkText }) => {
  return (
    <div>
      <input
        type="text"
        className="input"
        autoFocus
        value={color}
        placeholder="Add color name"
        onChange={(e) => {
          setColor(e.target.value);
          setHexValue(colorNames(e.target.value));
          setIsDarkText(isLight(e.target.value));
        }}
      />
    </div>
  );
};

export default Input;

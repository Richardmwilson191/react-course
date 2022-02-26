const Container = ({ color, hexValue, isDarkText, setIsDarkText }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        color: isDarkText ? "#000" : "#fff",
      }}
      className="container"
    >
      <p>{color ? color : "Empty"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </div>
  );
};

export default Container;

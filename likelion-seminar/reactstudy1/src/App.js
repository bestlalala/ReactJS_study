import React, {useState} from "react";
import PropTypes from "prop-types";
import './App.css';

function Btn({ text, bgcolor, changeValue }) {
  return (
    <button
      onClick={changeValue}
      style={{
        backgroundColor: bgcolor ? "skyblue" : "pink",
        color: "white",
        fontSize: "20px",
        fontWeight: "bold",
        padding: "10px 20px",
        border: 0,
        borderRadius: 10,
      }}
      >
        {text}
      </button>
  );
}
function App() {
  const [value, setValue] = useState("Continue");
  const changeValue = () => setValue("Done");
  return (
    <div>
      <Btn text="Save" bgcolor={true}/>
      <Btn text={18} bgcolor={true} fontSize="Continue" />
      <Btn text={value} bgcolor={false} changeValue={changeValue}/>
    </div>

  );
}

Btn.propTypes = {
  text: PropTypes.string,
  bgcolor: PropTypes.bool,
  fontSize: PropTypes.number,
}

export default App;

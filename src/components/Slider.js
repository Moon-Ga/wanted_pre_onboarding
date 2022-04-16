import { useState } from "react";
import "./Slider.css";

const Slider = ({ buttons }) => {
  const [value, setValue] = useState(0);

  const changeWithSlider = (e) => {
    setValue(e.target.value);
    console.log(e);
  };

  const changeWithButton = (e) => {
    setValue(e.target.innerText);
  };
  return (
    <div className="flex flex-col justify-center items-center w-[300px] h-[100px]">
      <div>{value}%</div>
      <input
        value={value}
        type="range"
        onChange={changeWithSlider}
        className="w-full"
      />
      <div className="w-full flex justify-between">
        {buttons.map((button, idx) => (
          <div key={idx} onClick={changeWithButton} className="cursor-pointer">
            {button}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

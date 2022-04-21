import { useState } from "react";

const Slider = ({
  max = 100,
  step = 1,
  buttons = ["0", "25", "50", "75", "100"],
}) => {
  const [value, setValue] = useState(0);

  const ratio = (100 / max) * value;

  const sliderBackground = `linear-gradient(to right,rgb(6 182 212) ${ratio}%, rgb(209 213 219) ${ratio}%)`;
  const buttonBackground = (idx) => {
    if (ratio >= (100 / (buttons.length - 1)) * idx) {
      return "rgb(6 182 212)";
    }
  };

  const changeValue = (e) => {
    let value;
    if (e.target.type === "range") {
      value = e.target.value;
    } else {
      value = e.target.innerText;
    }
    setValue(value);
  };

  return (
    <div className="flex flex-col justify-center items-center w-[300px]">
      <div className="text-lg text-center p-1 w-[calc(50%+15px)] border-2 translate-x-[7.5px]">
        {value}
      </div>
      <div className="relative w-full">
        <input
          max={max}
          step={step}
          value={value}
          type="range"
          onChange={changeValue}
          className="appearance-none w-[calc(100%+15px)] rounded-lg bg-gray-300 cursor-pointer"
          style={{ backgroundImage: sliderBackground }}
        />
        {buttons.map((button, idx) => (
          <span
            key={idx}
            className="absolute top-1/4 w-[15px] h-[15px] rounded-full bg-gray-300 -z-10"
            style={{
              left: (100 / (buttons.length - 1)) * idx + "%",
              backgroundColor: buttonBackground(idx),
            }}
          />
        ))}
      </div>
      <div className="flex w-[calc(100%+40px)] justify-between translate-x-[7.5px]">
        {buttons.map((button, idx) => (
          <div
            key={idx}
            onClick={changeValue}
            className="flex justify-center items-center text-xs w-[45px] h-[20px] rounded-xl border-2 cursor-pointer hover:bg-gray-100"
          >
            {button}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

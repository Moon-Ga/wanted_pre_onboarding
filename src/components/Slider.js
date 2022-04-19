import { useEffect, useState } from "react";

const Slider = ({ buttons }) => {
  const [value, setValue] = useState(0);

  const changeValue = (e) => {
    let value;
    if (e.target.id === "slider") {
      value = e.target.value;
    } else {
      value = e.target.innerText;
    }
    setValue(value);
    document.querySelector(
      "#slider"
    ).style.backgroundImage = `linear-gradient(to right,rgb(6 182 212) ${value}%, rgb(209 213 219) ${value}%)`;
    for (let i in buttons) {
      const left = (100 / (buttons.length - 1)) * i;
      const step = document.querySelector(`#step${i}`);
      if (value >= left && !step.style.backgroundColor) {
        step.style.backgroundColor = "rgb(6 182 212)";
      } else if (value < left && step.style.backgroundColor) {
        step.style.backgroundColor = "";
      }
    }
  };

  useEffect(() => {
    for (let i in buttons) {
      const left = (100 / (buttons.length - 1)) * i;
      const step = document.querySelector(`#step${i}`);
      step.style.left = left + "%";
    }
  }, [buttons]);

  return (
    <div className="flex flex-col justify-center items-center w-[300px]">
      <div className="text-lg text-center p-1 w-[calc(50%+15px)] border-2 translate-x-[7.5px]">
        {value}%
      </div>
      <div className="relative w-full">
        <input
          id="slider"
          value={value}
          type="range"
          onChange={changeValue}
          className="appearance-none w-[calc(100%+15px)] rounded-lg bg-gray-300"
        />
        {buttons.map((button, idx) => (
          <span
            key={idx}
            id={`step${idx}`}
            className="absolute top-1/4 w-[15px] h-[15px] rounded-full bg-gray-300 -z-10"
          />
        ))}
      </div>
      <div className="flex w-[calc(100%+40px)] justify-between translate-x-[7.5px]">
        {buttons.map((button, idx) => (
          <div
            key={idx}
            id={`button${idx}`}
            onClick={changeValue}
            className="step flex justify-center items-center text-xs w-[45px] h-[20px] rounded-xl border-2 cursor-pointer"
          >
            {button}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

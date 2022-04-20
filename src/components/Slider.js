import { useEffect, useRef, useState } from "react";

const Slider = ({
  max = 100,
  step = 1,
  buttons = ["0", "25", "50", "75", "100"],
}) => {
  const [value, setValue] = useState(0);

  const sliderRef = useRef();

  const changeValue = (e) => {
    let value;
    if (e.target.id === "slider") {
      value = e.target.value;
    } else {
      value = e.target.innerText;
    }
    setValue(value);

    paintButton(value);
  };

  const paintButton = (value) => {
    const ratio = (100 / max) * value;
    sliderRef.current.style.backgroundImage = `linear-gradient(to right,rgb(6 182 212) ${ratio}%, rgb(209 213 219) ${ratio}%)`;

    for (let i in buttons) {
      const left = (100 / (buttons.length - 1)) * i;
      const step = document.querySelector(`#step${i}`);
      if (ratio >= left && !step.style.backgroundColor) {
        step.style.backgroundColor = "rgb(6 182 212)";
      } else if (ratio < left && step.style.backgroundColor) {
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
        {value}
      </div>
      <div className="relative w-full">
        <input
          ref={sliderRef}
          id="slider"
          max={max}
          step={step}
          value={value}
          type="range"
          onChange={changeValue}
          className="appearance-none w-[calc(100%+15px)] rounded-lg bg-gray-300 cursor-pointer"
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
            className="step flex justify-center items-center text-xs w-[45px] h-[20px] rounded-xl border-2 cursor-pointer hover:bg-gray-100"
          >
            {button}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

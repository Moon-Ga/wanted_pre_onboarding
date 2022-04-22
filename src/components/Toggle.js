import { useState } from "react";

const Toggle = ({
  usage = "toggle",
  label = ["기본", "상세"],
  disabled = false,
}) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleClick = (e) => setIsToggled(!e.currentTarget.control.checked);

  return (
    <>
      <label
        onClick={toggleClick}
        htmlFor={usage}
        className="relative flex justify-around items-center w-[400px] h-[50px] rounded-full bg-gray-300 cursor-pointer"
      >
        <div
          className={`absolute ${
            isToggled ? "left-1/2" : "left-0"
          } w-1/2 h-full bg-white rounded-full border-gray-300 border-2 transition-all`}
        />
        <span
          className={`z-10 ${
            isToggled ? "text-gray-400" : "text-lg font-bold"
          }`}
        >
          {label[0]}
        </span>
        <span
          className={`z-10 ${
            isToggled ? "text-lg font-bold" : "text-gray-400"
          }`}
        >
          {label[1]}
        </span>
      </label>
      <input id={usage} type="checkbox" className="" disabled={disabled} />
    </>
  );
};

export default Toggle;

import { useState } from "react";

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleClick = (e) => setIsToggled(!e.currentTarget.control.checked);

  return (
    <>
      <label
        onClick={toggleClick}
        htmlFor="toggle"
        className="relative flex justify-around items-center w-[400px] h-[50px] rounded-full bg-gray-300 cursor-pointer"
      >
        <div
          className={`absolute ${
            !isToggled ? "left-0" : "left-1/2"
          } w-1/2 h-full bg-white rounded-full border-gray-300 border-2 transition-all`}
        />
        <span
          className={`z-10 ${
            isToggled ? "text-gray-400" : "text-lg font-bold"
          }`}
        >
          기본
        </span>
        <span
          className={`z-10 ${
            !isToggled ? "text-gray-400" : "text-lg font-bold"
          }`}
        >
          상세
        </span>
      </label>
      <input id="toggle" type="checkbox" className="appearance-none" />
    </>
  );
};

export default Toggle;

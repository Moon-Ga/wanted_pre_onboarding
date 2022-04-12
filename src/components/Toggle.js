import { useState } from "react";

const Toggle = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleClick = (e) => setIsChecked(!e.currentTarget.control.checked);

  return (
    <>
      <label
        onClick={toggleClick}
        htmlFor="toggle"
        className="relative flex justify-around items-center w-[400px] h-[50px] rounded-full bg-gray-300 cursor-pointer"
      >
        <div
          className={
            isChecked
              ? "absolute left-0 w-1/2 h-full bg-white rounded-full border-gray-300 border-2 transition-all"
              : "absolute left-1/2 w-1/2 h-full bg-white rounded-full border-gray-300 border-2 transition-all"
          }
        />
        <span className="z-10">기본</span>
        <span className="z-10">상세</span>
      </label>
      <input id="toggle" type="checkbox" className="appearance-none" />
    </>
  );
};

export default Toggle;

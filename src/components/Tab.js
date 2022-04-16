import { useRef, useState } from "react";

const Tab = ({ tabs }) => {
  const [selected, setSelected] = useState(0);
  const sliderRef = useRef();
  const switchTab = (idx) => {
    const tab = (100 / tabs.length) * idx;
    const left = tab + "%";
    sliderRef.current.style.left = left;
    setSelected(idx);
  };

  return (
    <div className="flex flex-col">
      <div className="grid grid-flow-col-dense">
        {tabs.map((tab, idx) => (
          <div
            key={idx}
            onClick={() => switchTab(idx)}
            className={`flex justify-center items-center w-[170px] h-[30px] cursor-pointer ${
              selected === idx
                ? "text-xl text-cyan-500 font-bold"
                : "text-gray-400"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="relative w-full h-2 bg-gray-300">
        <div
          ref={sliderRef}
          style={{ width: `${100 / tabs.length}%`, left: "0%" }}
          className="absolute h-full bg-cyan-500 transition-[left]"
        />
      </div>
    </div>
  );
};

export default Tab;

import { useRef, useState } from "react";

const Tab = ({ tabs }) => {
  const [selected, setSelected] = useState(0);
  const sliderRef = useRef();
  const switchTab = (idx) => {
    const tab = (100 / tabs.length) * idx;
    const from = sliderRef.current.classList.item(1);
    const to = `left-[${tab}%]`;
    sliderRef.current.classList.replace(from, to);
    setSelected(idx);
  };

  return (
    <div className="flex flex-col">
      <div className="grid grid-flow-col-dense">
        {tabs.map((tab, idx) => (
          <div
            key={idx}
            onClick={() => switchTab(idx)}
            className={
              selected === idx
                ? "w-[170px] h-[30px] text-center text-lg"
                : "w-[170px] h-[30px] text-center text-sm"
            }
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="relative w-full h-2 bg-gray-300">
        <div
          ref={sliderRef}
          className="absolute left-0 w-1/4 h-full bg-cyan-500 transition-all"
        />
      </div>
    </div>
  );
};

export default Tab;

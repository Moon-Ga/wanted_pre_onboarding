import { useState } from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";
import Input from "./components/Input";
import Slider from "./components/Slider";
import Tab from "./components/Tab";
import Toggle from "./components/Toggle";
import { countryList, kboTeamList } from "./data/DropdownData";

function App() {
  const [infoToggle, setInfoToggle] = useState(false);
  const [disabledToggle, setDisabledToggle] = useState(false);

  const componentsArray = [
    <>
      <Toggle
        usage="description"
        isToggled={infoToggle}
        setIsToggled={setInfoToggle}
        label={["기본", "상세"]}
      />
      <Toggle
        usage="disabled"
        isToggled={disabledToggle}
        setIsToggled={setDisabledToggle}
        label={["It's", "Disabled"]}
        disabled={true}
      />
    </>,
    <>
      <Tab />
      <Tab tabs={["전체", "한식", "중식", "양식", "일식", "분식"]} />
    </>,
    <>
      <Slider />
      <Slider min={0} max={5} step={0.1} buttonCount={6} />
    </>,
    <>
      <Dropdown list={countryList} placeholder="Select Your Country" />
      <Dropdown
        list={kboTeamList}
        placeholder="Select Your Team"
        direction="up"
      />
    </>,
    <Input />,
  ];

  return (
    <div>
      {componentsArray.map((components, idx) => (
        <div
          key={idx}
          className="min-w-[1024px] w-full min-h-[200px] h-[20vh] flex justify-center items-center border-2"
        >
          <div className="grid grid-flow-col gap-14">{components}</div>
        </div>
      ))}
    </div>
  );
}

export default App;

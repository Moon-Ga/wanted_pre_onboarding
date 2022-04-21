import "./App.css";
import Dropdown from "./components/Dropdown";
import Input from "./components/Input";
import Slider from "./components/Slider";
import Tab from "./components/Tab";
import Toggle from "./components/Toggle";
import { countryList, kboTeamList } from "./DropdownData";

function App() {
  const componentsArray = [
    <>
      <Toggle />
      <Toggle label={["OFF", "ON"]} />
    </>,
    <>
      <Tab />
      <Tab tabs={["전체", "한식", "중식", "양식", "일식", "분식"]} />
    </>,
    <>
      <Slider />
      <Slider max={10} step={0.1} buttons={["0", "2.5", "5", "7.5", "10"]} />
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

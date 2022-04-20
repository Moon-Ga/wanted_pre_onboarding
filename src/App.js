import "./App.css";
import Dropdown from "./components/Dropdown";
import Input from "./components/Input";
import Slider from "./components/Slider";
import Tab from "./components/Tab";
import Toggle from "./components/Toggle";
import { countryList } from "./DropdownData";

function App() {
  const componentsArray = [
    <Toggle label={["야", "호"]} />,
    <Tab tabs={["한식", "중식", "양식", "일식"]} />,
    <Slider max={10} step={0.1} buttons={["0", "2.5", "5", "7.5", "10"]} />,
    <Dropdown list={countryList} direction="up" />,
    <Input />,
  ];

  return (
    <div>
      {componentsArray.map((component, idx) => (
        <div
          key={idx}
          className="min-w-[768px] w-full min-h-[200px] h-[20vh] flex justify-center items-center border-2"
        >
          {component}
        </div>
      ))}
    </div>
  );
}

export default App;

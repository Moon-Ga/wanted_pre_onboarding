import "./App.css";
import Dropdown from "./components/Dropdown";
import Input from "./components/Input";
import Slider from "./components/Slider";
import Tab from "./components/Tab";
import Toggle from "./components/Toggle";
import { countryList } from "./DropdownData";

function App() {
  const componentsArray = [
    <Toggle />,
    <Tab tabs={["한식", "중식", "양식", "일식"]} />,
    <Slider buttons={["0", "25", "50", "75", "100"]} />,
    <Dropdown list={countryList} />,
    <Input />,
  ];

  return (
    <div>
      {componentsArray.map((component, idx) => (
        <div
          key={idx}
          className="w-full min-h-[200px] h-[20vh] flex justify-center items-center border-2"
        >
          {component}
        </div>
      ))}
    </div>
  );
}

export default App;

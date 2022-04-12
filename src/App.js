import "./App.css";
import Dropdown from "./components/Dropdown";
import Input from "./components/Input";
import Slider from "./components/Slider";
import Tab from "./components/Tab";
import Toggle from "./components/Toggle";

function App() {
  const componentsArray = [
    <Toggle />,
    <Tab tabs={["감자", "고구마", "카레라이스", "피자"]} />,
    <Slider />,
    <Input />,
    <Dropdown />,
  ];
  return (
    <div>
      {componentsArray.map((component, idx) => (
        <div
          key={idx}
          className="w-full h-[20vh] flex justify-center items-center border-2"
        >
          {component}
        </div>
      ))}
    </div>
  );
}

export default App;

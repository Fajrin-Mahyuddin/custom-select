import { useEffect, useState } from "react";
import SelectDropdown from "./components/organisms/SelectDropdown";
// import { OptionMenuList, OptionPropsList } from "types/select";
// import { components } from "./components";

const stateOptions = [
  { value: "Strawberry", label: "Strawberry" },
  { value: "Strawberry ice", label: "Strawberry ice" },
  { value: "Orange", label: "Orange" },
  { value: "Orange strawberry", label: "Orange strawberry" },
  { value: "Orange strawberry ice", label: "Orange strawberry ice" },
];

function App() {
  const [value, setValue] = useState([]);
  const [toggle, setToggle] = useState({ withSearch: false, isMulti: false });

  useEffect(() => {
    setValue([]);
  }, [toggle]);

  return (
    <div className="max-w-[800px] m-auto mt-[100px] h-[400px]">
      <button
        onClick={() => setToggle((e) => ({ ...e, withSearch: !e.withSearch }))}
        className="bg-[#975FCF] mb-2 mr-2 rounded-md px-6 text-[white] py-2"
      >
        Toggle {toggle.withSearch ? "OFF" : "ON"} Search
      </button>

      <button
        onClick={() => setToggle((e) => ({ ...e, isMulti: !e.isMulti }))}
        className="bg-[#975FCF] mb-2 rounded-md px-6 text-[white] py-2"
      >
        Toggle {toggle.isMulti ? "OFF" : "ON"} multiple choices
      </button>

      <SelectDropdown
        key={`${toggle.isMulti} - ${toggle.withSearch}`}
        withSearch={toggle.withSearch}
        options={stateOptions}
        isMulti={toggle.isMulti}
        value={value}
        onChange={(e) => {
          setValue(e as typeof value);
          console.log("value", e);
        }}
        name="name"
        // optionList={Menu}
      />
    </div>
  );
}

// const Menu = ((props: OptionPropsList) => {
//   return (
//     <div className="bg-[red] text-[20px]">
//       <components.Option {...props}>a{props.children}</components.Option>
//     </div>
//   );
// }) as OptionMenuList;

export default App;

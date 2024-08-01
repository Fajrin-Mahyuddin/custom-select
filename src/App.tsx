import { useState, useEffect } from 'react'
import
SelectDropdown, {
  OptionMenuList, OptionPropsList, components
} from '@fajrindev/custom-select'

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
    <div className="max-w-[800px] m-auto mt-[100px]">
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
        // className='w-[400px] bg-red-400'
        value={value}
        style={{
          option: () => ({
            backgroundColor: "#fff",
            padding: "5px 10px",
            "&:hover": {
              backgroundColor: "#975FCF",
              color: "#fff"
            }
          })
        }}
        onChange={(e) => {
          setValue(e as typeof value);
          console.log("value", e);
        }}
        name="name"
        optionList={Menu}
      />
    </div>
  )
}

const Menu = ((props: OptionPropsList) => {
  return (
    <div className="hover:bg-red-400">
      <components.Option {...props}>
        <span className='flex flex-row items-center gap-2 justify-start'>
          <RemoveIcon />{props.children}
        </span>
      </components.Option>
    </div>
  );
}) as OptionMenuList;

const RemoveIcon = () => {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" height="1em" width="1em">
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M320 320L192 192M192 320l128-128"
      />
    </svg>
  );
};

export default App

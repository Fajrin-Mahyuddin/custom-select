import { useState } from 'react'
import SelectDropdown from '@fajrindev/custom-select'

const stateOptions = [
  { value: "Strawberry", label: "Strawberry" },
  { value: "Strawberry ice", label: "Strawberry ice" },
  { value: "Orange", label: "Orange" },
  { value: "Orange strawberry", label: "Orange strawberry" },
  { value: "Orange strawberry ice", label: "Orange strawberry ice" },
];
function App() {
  const [value, setValue] = useState([]);
  return (
    <div className="max-w-[1280px] m-auto flex justify-center items-start h-screen pt-10">
      <div className='w-full bg-slate-500'>
        <SelectDropdown
          withSearch={true}
          options={stateOptions}
          isMulti={true}
          value={value}
          onChange={(e) => {
            setValue(e as typeof value);
          }}
          name="tes"
        />
      </div>
    </div >
  )
}

export default App

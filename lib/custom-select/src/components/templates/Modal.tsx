import { useState, useEffect } from "react";
import { Button, Modal } from "flowbite-react";
import SelectDropdown from "../organisms/SelectDropdown";

const stateOptions = [
  { value: "Strawberry", label: "Strawberry" },
  { value: "Strawberry ice", label: "Strawberry ice" },
  { value: "Orange", label: "Orange" },
  { value: "Orange strawberry", label: "Orange strawberry" },
  { value: "Orange strawberry ice", label: "Orange strawberry ice" },
];
const ModalComponent = () => {
  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState([]);
  const [toggle, setToggle] = useState({ withSearch: false, isMulti: false });

  useEffect(() => {
    setValue([]);
  }, [toggle]);
  return (
    <div>
      <button
        onClick={() => setOpenModal(true)}
        className="bg-[#975FCF] mb-2 mr-2 rounded-md px-6 text-[white] py-2"
      >
        Toggle modal
      </button>
      <Modal show={openModal} size="2xl" onClose={() => setOpenModal(false)}>
        <Modal.Header>Select with portal</Modal.Header>
        <Modal.Body>
          <div className="h-[200px]">
            <button
              onClick={() =>
                setToggle((e) => ({ ...e, withSearch: !e.withSearch }))
              }
              className="bg-[#975FCF] mb-2 mr-2 rounded-md px-6 text-[white] py-2"
            >
              Toggle {toggle.withSearch ? "OFF" : "ON"} Search
            </button>

            <button
              onClick={() => setToggle((e) => ({ ...e, isMulti: !e.isMulti }))}
              className="bg-[#975FCF] mb-2 rounded-md px-6 text-[white] py-2"
            >
              Toggle {toggle.isMulti ? "OFF" : "ON"} multiselect
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
              style={{
                option: (base) => ({
                  ...base,
                  backgroundColor: "#fff",
                  "&:hover": {
                    backgroundColor: "salmon",
                  },
                }),
              }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalComponent;

import { useState } from "react";
import ClearIcon from "../atoms/ClearIcon";
import Dropdown from "../templates/Dropdown";
import ControlItem from "../molecules/ControlItem";
import { formatLabel } from "../../utils/formatLabel";
import MultiValueRemove from "../molecules/MultiValueRemove";
import { TSelectComponent, TTypeOptions } from "../../types/select";
import { targetSearchStyle } from "../../constants";
import ReactSelect, {
  InputActionMeta,
  MultiValue,
  SingleValue,
} from "react-select";

const SelectDropdown = (props: TSelectComponent) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuTargetActive, setMenuTargetActive] = useState(false);
  const [inputValue, setInputValue] = useState<string>();

  const handleSearchInputChange = (val: string, meta: InputActionMeta) => {
    if (meta.action === "input-change") {
      setInputValue(val);
    } else {
      setInputValue(meta.prevInputValue);
    }
  };

  const handleValueChange = (
    args: SingleValue<TTypeOptions> | MultiValue<TTypeOptions>,
  ) => {
    if (props.isMulti && args) {
      const val = Array.isArray(props.value) ? [...props.value, args] : [args];
      props.onChange(val);
    } else {
      props.onChange(args);
    }
    setInputValue(undefined);
    setIsOpen(false);
  };

  const handleDropdownIndicator = () =>
    inputValue ? <ClearIcon onClick={() => setInputValue(undefined)} /> : null;

  return (
    <div className={props.className}>
      <Dropdown
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        target={
          <ReactSelect
            className={props.className}
            menuIsOpen={props.withSearch ? false : isMenuTargetActive}
            isClearable={false}
            value={props.value}
            isSearchable={!props.withSearch}
            placeholder={props.placeholder}
            hideSelectedOptions
            isMulti={props.isMulti}
            options={props.options}
            onMenuOpen={() =>
              props.withSearch ? setIsOpen(true) : setMenuTargetActive(true)
            }
            openMenuOnClick={true}
            onMenuClose={() => setMenuTargetActive(false)}
            onChange={(val) => props.onChange(val)}
            components={
              props.optionList
                ? {
                    MultiValueRemove: MultiValueRemove,
                    Option: props.optionList,
                  }
                : { MultiValueRemove: MultiValueRemove }
            }
            styles={{ ...targetSearchStyle, ...props.style }}
            formatOptionLabel={(opt, context) => {
              return (
                <span
                  dangerouslySetInnerHTML={{
                    __html: formatLabel(opt, context),
                  }}
                />
              );
            }}
          />
        }
      >
        <ReactSelect
          autoFocus
          menuIsOpen={isOpen}
          placeholder="Search"
          value={props.value}
          isClearable={false}
          hideSelectedOptions
          inputValue={inputValue}
          tabSelectsValue={false}
          options={props.options}
          className={"w-full"}
          onChange={handleValueChange}
          backspaceRemovesValue={false}
          controlShouldRenderValue={false}
          onInputChange={handleSearchInputChange}
          styles={{
            control: (base) => {
              return {
                ...base,
                border: 0,
                borderBottom: "1.5px solid #red",
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                boxShadow: "none",
                "&:hover": {
                  boxShadow: "none",
                },
              };
            },
            menu: (base) => ({
              ...base,
              marginTop: 0,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            }),
            ...props.style,
          }}
          components={
            props.optionList
              ? {
                  Control: ControlItem,
                  DropdownIndicator: handleDropdownIndicator,
                  IndicatorSeparator: null,
                  Option: props.optionList,
                }
              : {
                  Control: ControlItem,
                  DropdownIndicator: handleDropdownIndicator,
                  IndicatorSeparator: null,
                }
          }
          // formatOptionLabel={(opt, context) => (
          //   <span
          //     dangerouslySetInnerHTML={{ __html: formatLabel(opt, context) }}
          //   />
          // )}
        />
      </Dropdown>
    </div>
  );
};

export default SelectDropdown;

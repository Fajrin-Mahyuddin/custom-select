import { ComponentType } from "react";
import { OptionProps, StylesConfig } from "react-select";

export type TTypeOptions = {
  label: string;
  value: string;
};

export type TSelectComponent = {
  name: string;
  options: TTypeOptions[];
  containerClassName?: string;
  className?: string;
  placeholder?: string;
  styleSearchList?: StylesConfig<TTypeOptions, false>;
  inputStyle?: StylesConfig<TTypeOptions>;
  optionList?: ComponentType<OptionProps<TTypeOptions>>;
  withSearch: boolean;
  onChange: <T>(e: T) => void;
  isMulti: boolean;
  value: TTypeOptions[] | TTypeOptions;
} & (
  | {
      // isMulti: true;
      // value?: TTypeOptions[]
      // onChange: (e: TTypeOptions[] | undefined) => void;
    }
  | {
      // isMulti: false;
      // value?: TTypeOptions
      // onChange: (e: TTypeOptions | undefined) => void;
    }
);

export type OptionMenuList = ComponentType<OptionProps<TTypeOptions>>;
export type OptionPropsList = OptionProps;

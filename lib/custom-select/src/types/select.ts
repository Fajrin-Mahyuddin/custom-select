import { ComponentType } from "react";
import { OptionProps, StylesConfig } from "react-select";

export type TTypeOptions = {
  label: string;
  value: string;
};

export type TSelectComponent = {
  name: string;
  isMulti: boolean;
  className?: string;
  withSearch: boolean;
  placeholder?: string;
  options: TTypeOptions[];
  containerClassName?: string;
  onChange: <T>(e: T) => void;
  style?: StylesConfig<TTypeOptions>;
  value: TTypeOptions[] | TTypeOptions;
  optionList?: ComponentType<OptionProps<TTypeOptions>>;
  // styleSearchList?: StylesConfig<TTypeOptions, false>;
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

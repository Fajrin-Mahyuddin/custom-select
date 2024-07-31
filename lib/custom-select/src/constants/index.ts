import { StylesConfig } from "react-select";
import { TTypeOptions } from "../types/select";

export const dropdownSearchStyle: StylesConfig<TTypeOptions, false> = {
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
  // multiValue: (base) => ({ ...base, borderRadius: "15px" }),
};

export const targetSearchStyle: StylesConfig<TTypeOptions> = {
  multiValue: (base) => ({
    ...base,
    borderRadius: "15px",
    padding: "1px 5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
  menu: (base) => ({
    ...base,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  }),
  multiValueRemove(base) {
    return {
      ...base,
      "&:hover": {
        backgroundColor: "transparent",
      },
    };
  },
};

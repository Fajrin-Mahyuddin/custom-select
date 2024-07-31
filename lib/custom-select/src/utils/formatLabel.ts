import { FormatOptionLabelMeta } from "react-select";
import { TTypeOptions } from "../types/select";

export const formatLabel = (
  opt: TTypeOptions,
  context: FormatOptionLabelMeta<TTypeOptions>,
) => {
  const regex = RegExp(`${context.inputValue}`, "gi");
  const text = opt.label.replace(
    regex,
    `<mark class="custom-select-marked-highlight-color">$&</mark>`,
  );
  return context.selectValue.includes(opt) ? opt.label : text;
};

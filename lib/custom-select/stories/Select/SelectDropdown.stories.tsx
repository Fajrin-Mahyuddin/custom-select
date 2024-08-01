import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
// import { useArgs } from "@storybook/preview-api";
import SelectCustom from "../../src/components/organisms/SelectDropdown";
import { fn } from "@storybook/test";
import { useState } from "react";
import ModalComponent from "../../src/components/templates/Modal";

const meta = {
  title: "Custom Select",
  component: SelectCustom,
  args: { onChange: fn() },
} satisfies Meta<typeof SelectCustom>;

const stateOptions = [
  { value: "Strawberry", label: "Strawberry" },
  { value: "Strawberry ice", label: "Strawberry ice" },
  { value: "Orange", label: "Orange" },
  { value: "Orange strawberry", label: "Orange strawberry" },
  { value: "Orange strawberry ice", label: "Orange strawberry ice" },
];

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    withSearch: true,
    isMulti: false,
    name: "name",
    options: stateOptions,
    value: [],
    className: "w-full",
  },
  argTypes: {
    options: {
      options: stateOptions,
    },
  },
};

export const UsageWithModal: Story = {
  args: {
    ...Base.args,
    name: "usage",
  },
  render: function Rander() {
    return <ModalComponent />;
  },
};

export const UsageWithLabel: Story = {
  args: {
    ...Base.args,
    name: "usage",
  },
  render: function Rander(args) {
    const [val, setVal] = useState([]);
    return (
      <div className="flex flex-col items-start md:items-center md:flex-row">
        <label htmlFor="label" className="w-[100px]">
          Label :{" "}
        </label>
        <SelectCustom
          {...args}
          id="label"
          value={val}
          onChange={(e) => setVal(e as [])}
        />
      </div>
    );
  },
};

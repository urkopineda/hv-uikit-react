import { CSSProperties } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { HvColorPicker, HvColorPickerProps } from "./ColorPicker";

const makeDecorator = (styles: CSSProperties) => (Story) =>
  <div style={styles}>{Story()}</div>;

const meta: Meta<typeof HvColorPicker> = {
  title: "Widgets/Color Picker",
  component: HvColorPicker,
};
export default meta;

export const Main: StoryObj<HvColorPickerProps> = {
  args: {
    label: "Color",
    expanded: true,
  },
  argTypes: {
    classes: { control: { disable: true } },
    description: { control: { disable: true } },
    "aria-label": { table: { disable: true } },
    "aria-describedby": { table: { disable: true } },
    "aria-labelledby": { table: { disable: true } },
  },
  decorators: [makeDecorator({ height: 600 })],
  render: (args) => {
    return (
      <div style={{ width: "134px" }}>
        <HvColorPicker {...args} onChange={(color) => console.log(color)} />
      </div>
    );
  },
};

export const WithoutSavedColors: StoryObj<HvColorPickerProps> = {
  parameters: {
    docs: {
      description: {
        story: "ColorPicker component without the saved colors area.",
      },
    },
  },
  decorators: [makeDecorator({ height: 500 })],
  render: () => {
    return (
      <div style={{ width: "134px" }}>
        <HvColorPicker
          expanded
          showSavedColors={false}
          onChange={(color) => console.log(color)}
          defaultValue="#C62828"
        />
      </div>
    );
  },
};

export const OnlyRecommendedColors: StoryObj<HvColorPickerProps> = {
  parameters: {
    docs: {
      description: {
        story: "ColorPicker component with only the recommend colors area.",
      },
    },
  },
  decorators: [makeDecorator({ height: 200 })],
  render: () => {
    return (
      <div style={{ width: "134px" }}>
        <HvColorPicker
          expanded
          showSavedColors={false}
          showCustomColors={false}
          onChange={(color) => console.log(color)}
          defaultValue="#F6941E"
        />
      </div>
    );
  },
};

export const IconOnly: StoryObj<HvColorPickerProps> = {
  parameters: {
    docs: {
      description: {
        story: "ColorPicker component that only shows an icon.",
      },
    },
  },
  decorators: [makeDecorator({ height: 500 })],
  render: () => {
    return (
      <div style={{ width: "134px" }}>
        <HvColorPicker
          iconOnly
          expanded
          onChange={(color) => console.log(color)}
        />
      </div>
    );
  },
};

export const IconOnlyWithoutSavedColors: StoryObj<HvColorPickerProps> = {
  parameters: {
    docs: {
      description: {
        story:
          "ColorPicker component that only shows an icon and without the saved colors area.",
      },
    },
  },
  decorators: [makeDecorator({ height: 500 })],
  render: () => {
    return (
      <div style={{ width: "134px" }}>
        <HvColorPicker
          iconOnly
          expanded
          showSavedColors={false}
          defaultValue="#477DBD"
          onChange={(color) => console.log(color)}
        />
      </div>
    );
  },
};

export const IconOnlyRecommendedColors: StoryObj<HvColorPickerProps> = {
  parameters: {
    docs: {
      description: {
        story:
          "ColorPicker component that only shows an icon and the recommended colors.",
      },
    },
  },
  decorators: [makeDecorator({ height: 200 })],
  render: () => {
    return (
      <div style={{ width: "134px" }}>
        <HvColorPicker
          iconOnly
          expanded
          showSavedColors={false}
          showCustomColors={false}
          defaultValue="#59941B"
          onChange={(color) => console.log(color)}
        />
      </div>
    );
  },
};

export const CustomizedColorPicker: StoryObj<HvColorPickerProps> = {
  parameters: {
    docs: {
      description: {
        story:
          "ColorPicker component with several customizations. With these customizations you can recreate the DS3 component.",
      },
    },
  },
  decorators: [makeDecorator({ height: 450 })],
  render: () => {
    return (
      <div style={{ width: "240px" }}>
        <HvColorPicker
          expanded
          showLabels={false}
          showSavedColors={false}
          dropdownIcon="arrow"
          defaultValue="#EC018B"
          onChange={(color) => console.log(color)}
          recommendedColorsPosition="bottom"
          recommendedColors={[
            "#C62828",
            "#DB6B22",
            "#F6941E",
            "#8DC63D",
            "#59941B",
            "#00838F",
            "#05A99C",
            "#01ADEF",
            "#477DBD",
            "#0155A5",
            "#2E3192",
            "#652C90",
            "#AA00FF",
            "#EC018B",
            "#999999",
            "#414141",
          ]}
        />
      </div>
    );
  },
};

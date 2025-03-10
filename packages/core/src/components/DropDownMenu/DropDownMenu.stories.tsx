import { Calendar, Plane, User } from "@hitachivantara/uikit-react-icons";
import { Meta, StoryObj } from "@storybook/react";
import {
  HvButton,
  HvDropDownMenu,
  HvDropDownMenuProps,
  HvListValue,
} from "@core/components";
import { useState } from "react";

const meta: Meta<typeof HvDropDownMenu> = {
  title: "Components/Dropdown Menu",
  component: HvDropDownMenu,
  decorators: [
    (storyFn) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: 175,
        }}
      >
        {storyFn()}
      </div>
    ),
  ],
};
export default meta;

export const Main: StoryObj<HvDropDownMenuProps> = {
  args: {
    dataList: [{ label: "Item 1" }, { label: "Item 2" }, { label: "Item 3" }],
    placement: "left",
    keepOpened: false,
    disabled: false,
    expanded: true,
    defaultExpanded: false,
    category: "secondaryGhost",
  },
  argTypes: {
    classes: { control: { disable: true } },
    onToggle: { control: { disable: true } },
    onClick: { control: { disable: true } },
  },
  render: ({ expanded, onToggle, ...rest }) => {
    const [open, setOpen] = useState<boolean>(!!expanded);

    return (
      <HvDropDownMenu
        expanded={open}
        onToggle={() => setOpen((o) => !o)}
        {...rest}
      />
    );
  },
};

export const WithIconsAndActions: StoryObj<HvDropDownMenuProps> = {
  parameters: {
    docs: {
      description: {
        story:
          "DropDownMenu with Icons and Actions. Icons should be colored accordingly when selected.",
      },
    },
  },
  render: () => {
    const iconSelectedColor =
      (Icon: React.ElementType): HvListValue["icon"] =>
      ({ isSelected }) =>
        <Icon color={isSelected ? "atmo1" : undefined} />;

    return (
      <HvDropDownMenu
        expanded
        id="dropdownmenu-with-icons-and-actions"
        placement="right"
        onClick={(e, item) => console.log(item.label)}
        aria-label="dropdownMenu-3"
        dataList={[
          { label: "Label 1", icon: iconSelectedColor(User) },
          { label: "Label 2", icon: iconSelectedColor(Calendar) },
          { label: "Label 3", icon: iconSelectedColor(Plane) },
        ]}
      />
    );
  },
};

export const DisabledItems: StoryObj<HvDropDownMenuProps> = {
  parameters: {
    docs: {
      description: {
        story: "DropDownMenu with disabled items.",
      },
    },
  },
  render: () => {
    return (
      <HvDropDownMenu
        id="dpmDisabledItems"
        expanded
        aria-label="dropdownMenu-DisabledItems"
        dataList={[
          { label: "Label 1" },
          { label: "Label 2", disabled: true },
          { label: "Label 3" },
        ]}
      />
    );
  },
};

export const Controlled: StoryObj<HvDropDownMenuProps> = {
  parameters: {
    docs: {
      description: {
        story: "DropDownMenu toggle opening controlled by an external button.",
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(true);

    return (
      <>
        <HvButton
          variant="secondaryGhost"
          onClick={() => {
            setOpen(!open);
          }}
          style={{ width: 125 }}
        >
          Click to&nbsp;
          {!open ? "Open" : "Close"}
        </HvButton>
        <HvDropDownMenu
          id="dropMenu"
          expanded={open}
          onClick={(e, item) => console.log(item.label)}
          disablePortal={false}
          aria-label="dropdownMenu-1"
          keepOpened={false}
          dataList={[
            { label: "Label 1" },
            { label: "Label 2" },
            { label: "Label 3" },
          ]}
          onToggle={(e, s) => {
            setOpen(s);
          }}
        />
      </>
    );
  },
};

Controlled.parameters = {
  eyes: { include: false },
};

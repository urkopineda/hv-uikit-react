import { IconSprite, IconSpriteProps } from "@hitachivantara/uikit-react-icons";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof IconSprite> = {
  title: "Foundation/Icons/Sprites",
  parameters: {
    componentSubtitle:
      "The IconSprite component is used to display SVG icons from a sprite sheet.",
  },
  component: IconSprite,
};
export default meta;

export const Main: StoryObj<IconSpriteProps> = {
  args: {
    iconSize: "S",
    inverted: false,
    spriteBaseUrl: "/packages/icons/sprites/icons.svg",
    iconName: "CheckboxCheck",
  },
  argTypes: {
    svgProps: { control: { disable: true } },
    spriteBaseUrl: {
      control: {
        type: "select",
        labels: {
          "/packages/icons/sprites/icons.svg": "Icons",
          "/packages/icons/sprites/pictograms.svg": "Pictograms",
        },
      },
      options: [
        "/packages/icons/sprites/icons.svg",
        "/packages/icons/sprites/pictograms.svg",
      ],
    },
  },
  render: (args) => {
    return <IconSprite {...args} />;
  },
};

export const IconSize = () => (
  <IconSprite
    spriteBaseUrl="/packages/icons/sprites/icons.svg"
    iconName="CheckboxCheck"
    iconSize="M"
  />
);

IconSize.parameters = {
  docs: {
    description: { story: "Overrides Generic Icon size using standard sizes" },
  },
};

export const CustomColors = () => (
  <IconSprite
    spriteBaseUrl="/packages/icons/sprites/icons.svg"
    iconName="Bookmark"
    color={["secondary", "brand"]}
    iconSize="M"
    aria-label="Click to bookmark"
  />
);

CustomColors.parameters = {
  docs: {
    description: { story: "Overriding Icon colors with palette colors" },
  },
};

export const DecorativeIcon = () => (
  <IconSprite
    spriteBaseUrl="/packages/icons/sprites/icons.svg"
    iconName="Machine"
    role="presentation"
    iconSize="M"
  />
);

DecorativeIcon.parameters = {
  docs: {
    description: {
      story:
        "Icon with decorative meaning using the hidden attribute for accessibility",
    },
  },
};

export const SemanticIcon = () => (
  <IconSprite
    spriteBaseUrl="/packages/icons/sprites/icons.svg"
    iconName="Level4"
    role="img"
    title="Warning!"
    iconSize="M"
    semantic="negative"
  />
);

SemanticIcon.parameters = {
  docs: {
    description: {
      story:
        "Icon with semantic meaning using the title and role attributes for accessibility",
    },
  },
};

export const CustomSize = () => (
  <IconSprite
    spriteBaseUrl="/packages/icons/sprites/icons.svg"
    iconName="CheckboxCheck"
    height={200}
    width={200}
    style={{ width: 240, height: 240 }}
  />
);

CustomSize.parameters = {
  docs: {
    description: { story: "Overrides Icon size using non standard sizes" },
  },
};

export const InvertedColors = () => (
  <IconSprite
    spriteBaseUrl="/packages/icons/sprites/icons.svg"
    iconName="Level5"
    iconSize="L"
    inverted
    role="img"
    title="Critical!"
  />
);

InvertedColors.parameters = {
  docs: {
    description: { story: "Inverts Generic Icon colors" },
  },
};

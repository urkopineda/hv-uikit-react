import { theme } from "@hitachivantara/uikit-styles";
import { IconBase, IconBaseProps } from "./IconBase";

const selectors = ["Checkbox", "RadioButton"];
const isSelector = (componentName) =>
  selectors.some((el) => componentName.startsWith(el));
const isSort = (componentName) => componentName.startsWith("Sort");
const largerIcons = [
  "Level0Good",
  "Level1",
  "Level2Average",
  "Level3Bad",
  "Level4",
  "Level5",
  "Canceled",
  "Running",
  "Pending",
];
const hasSpecialSize = (iconName) => largerIcons.includes(iconName);
const hasSpecialSizeXS = (iconName) => iconName.endsWith("XS");
const calcSize = (iconName, size) =>
  hasSpecialSize(iconName) ? size + 8 : size;

const sizeSelector = (iconName, iconSize, height, width) => {
  if (height && width) {
    return { width, height };
  }

  switch (iconSize) {
    case "L":
      return { width: calcSize(iconName, 96), height: calcSize(iconName, 96) };
    case "M":
      return { width: calcSize(iconName, 32), height: calcSize(iconName, 32) };
    case "XS":
      return { width: calcSize(iconName, 12), height: calcSize(iconName, 12) };
    case "S":
    default:
      return { width: calcSize(iconName, 16), height: calcSize(iconName, 16) };
  }
};

export interface IconSpriteProps
  extends Omit<IconBaseProps, "viewbox" | "inverted" | "semantic"> {
  spriteBaseUrl: string;
  iconName: string;
}

export const IconSprite = ({
  spriteBaseUrl,
  iconName,
  color,
  iconSize = "S",
  height,
  width,
  svgProps = {},
  ...others
}: IconSpriteProps) => {
  if (hasSpecialSizeXS(iconName)) {
    iconSize = "XS";
  }

  const getColor = (c) => theme?.colors?.[c] || c;
  // this color array is fragile... we know it currently covers all the existing icons
  const colorArray = [
    theme.colors.secondary,
    isSelector(iconName)
      ? theme.colors.atmo1
      : isSort(iconName)
      ? theme.colors.atmo4
      : theme.colors.atmo2,
  ];

  if (typeof color === "string") {
    colorArray[0] = getColor(color);
  } else if (Array.isArray(color)) {
    color.slice(0, colorArray.length).forEach((c, i) => {
      colorArray[i] = getColor(c);
    });
  }

  const size = sizeSelector(iconName, iconSize, height, width);

  const { style: svgStyle, ...otherSvgProps } = svgProps;

  const colorVars = {};
  colorArray.forEach((value, index) => {
    colorVars[`--icon-color-${index}`] = value;
  });

  return (
    <IconBase iconSize={iconSize ?? "S"} name="Abacus" {...others}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={size.height}
        width={size.width}
        focusable={false}
        style={{ ...colorVars, ...svgStyle }}
        {...otherSvgProps}
      >
        <use
          href={`${spriteBaseUrl}#${iconName}`}
          height={size.height}
          width={size.width}
        />
      </svg>
    </IconBase>
  );
};

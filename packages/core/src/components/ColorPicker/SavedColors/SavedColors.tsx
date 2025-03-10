import { HvButton } from "@core/components";
import { ExtractNames } from "@core/utils";
import { CloseXS, Add } from "@hitachivantara/uikit-react-icons";
// @types/react-color seems to be broken
// @ts-ignore
import { Swatch } from "react-color/lib/components/common";
import { staticClasses, useClasses } from "./SavedColors.styles";

export { staticClasses as colorPickerSavedColorsClasses };

export type HvColorPickerSavedColorsClasses = ExtractNames<typeof useClasses>;

interface SavedColorsProps {
  colors: string[];
  onClickColor: (color: { hex: string; source: string }) => void;
  onAddColor: () => void;
  onRemoveColor: (color: string, index: number) => void;
  deleteButtonArialLabel?: string;
  classes?: HvColorPickerSavedColorsClasses;
}

export const SavedColors = ({
  colors,
  onClickColor,
  onAddColor,
  onRemoveColor,
  deleteButtonArialLabel,
  classes: classesProp,
}: SavedColorsProps) => {
  const { classes } = useClasses(classesProp);

  const handleClick = (hex: string) => {
    onClickColor({
      hex,
      source: "hex",
    });
  };

  return (
    <div className={classes.root}>
      <HvButton
        className={classes.addButton}
        variant="secondarySubtle"
        icon
        onClick={onAddColor}
      >
        <Add />
      </HvButton>
      {colors.map((color, index) => (
        <div
          key={`saved-color-${color}-${index}`}
          className={classes.swatchRoot}
        >
          <div className={classes.swatchWrap}>
            <Swatch
              color={color}
              onClick={handleClick}
              focusStyle={{
                boxShadow: `inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px ${color}`,
              }}
            />
          </div>
          <div className={classes.removeButtonRoot}>
            <HvButton
              className={classes.removeButton}
              variant="secondarySubtle"
              onClick={() => onRemoveColor(color, index)}
              tabIndex={0}
              aria-label={deleteButtonArialLabel}
            >
              <CloseXS iconSize="XS" />
            </HvButton>
          </div>
        </div>
      ))}
    </div>
  );
};

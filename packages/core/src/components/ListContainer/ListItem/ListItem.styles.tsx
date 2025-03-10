import styled from "@emotion/styled";
import { theme } from "@hitachivantara/uikit-styles";
import { transientOptions } from "@core/utils/transientOptions";
import { HvFocus } from "@core/components";
import { outlineStyles } from "@core/utils";
import { CSSProperties } from "react";
import listItemClasses from "./listItemClasses";

export const StyledListItem = styled(
  "li",
  transientOptions
)(
  ({
    $gutters,
    $interactive,
    $selected,
    $disabled,
    $startAdornment,
    $endAdornment,
  }: {
    $gutters: boolean;
    $interactive: boolean;
    $selected: boolean;
    $disabled: boolean;
    $startAdornment: boolean;
    $endAdornment: boolean;
  }) => ({
    ...(theme.typography.body as CSSProperties),
    padding: 0,
    display: "block",
    height: "32px",
    lineHeight: "32px",
    listStyleType: "none",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    position: "relative",

    "&:not(:last-child)": {
      marginBottom: "8px",
    },
    [`&.${listItemClasses.condensed}`]: {
      marginBottom: 0,
    },

    ...($gutters && {
      padding: `0 ${theme.space.xs}`,

      [`&.${listItemClasses.withStartAdornment}`]: {
        paddingLeft: 0,
      },
      [`&.${listItemClasses.withEndAdornment}`]: {
        paddingRight: 0,
      },
    }),
    ...($interactive && {
      cursor: "pointer",
      [`&:not(.${listItemClasses.disabled}):not(.${listItemClasses.selected}):hover`]:
        {
          backgroundColor: theme.list.hoverColor,
        },
      [`&.${listItemClasses.disabled}`]: {
        cursor: "not-allowed",
      },
    }),
    ...($selected && {
      backgroundColor: theme.list.hoverColor,
    }),
    ...($disabled && {
      color: theme.colors.secondary_60,
      backgroundColor: theme.list.disabledBackgroundColor,
    }),
    ...($startAdornment && {
      "& > div": {
        float: "left",
      },

      "& svg": {
        boxShadow: "none !important",
        outline: "none !important",
      },
      [`.${listItemClasses.disabled} > svg *.color0`]: {
        fill: theme.colors.secondary_60,
      },
    }),
    ...($endAdornment && {
      "& > div": { float: "right" },

      "& svg": {
        boxShadow: "none !important",
        outline: "none !important",
      },
      [`.${listItemClasses.disabled} > svg *.color0`]: {
        fill: theme.colors.secondary_60,
      },
    }),
    "&.HvIsFocused": {
      ...outlineStyles,
      backgroundColor: theme.colors.atmo3,
      zIndex: 2,
    },
  })
);

export const StyledFocus = styled(HvFocus)({
  backgroundColor: theme.colors.atmo3,
  zIndex: 2,
});

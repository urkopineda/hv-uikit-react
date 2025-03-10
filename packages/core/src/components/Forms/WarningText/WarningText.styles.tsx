import styled from "@emotion/styled";
import { HvTypography } from "@core/components";
import { theme } from "@hitachivantara/uikit-styles";
import { transientOptions } from "@core/utils/transientOptions";
import { Fail } from "@hitachivantara/uikit-react-icons";

export const StyledRoot = styled(
  "div",
  transientOptions
)(({ $show, $topBorder }: { $show: boolean; $topBorder: boolean }) => ({
  display: "none",
  ...($show && {
    display: "flex",
  }),
  ...($topBorder && {
    borderTop: `solid 1px ${theme.colors.negative}`,
  }),
}));

export const StyledTypography = styled(
  HvTypography,
  transientOptions
)(({ $topGutter, $hideText }: { $topGutter: boolean; $hideText: boolean }) => ({
  color: theme.colors.negative,
  paddingRight: theme.space.xs,
  "&:first-of-type": {
    paddingLeft: theme.space.xs,
  },
  ...($topGutter && {
    paddingTop: 6,
  }),
  ...($hideText && {
    // display none or visibility hidden prevents
    // browser to trigger the aria-alert
    width: 0,
    height: 0,
    padding: 0,
    margin: 0,
    overflow: "hidden",
  }),
}));

export const StyledIcon = styled(Fail)({
  minWidth: "32px",
});

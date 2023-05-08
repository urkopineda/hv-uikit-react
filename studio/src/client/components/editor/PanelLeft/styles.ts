import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

const styles = {
  panelLeft: css({
    display: "flex",
  }),
  navBar: css({
    display: "flex",
    width: 55,
    flexDirection: "column",
    rowGap: theme.space.xs,
    padding: `${theme.space.sm} ${theme.space.xs}`,
    background: theme.colors.atmo1,
  }),
  panel: css({
    width: 250,
    marginLeft: 3,
    background: theme.colors.atmo1,
  }),
};

export default styles;

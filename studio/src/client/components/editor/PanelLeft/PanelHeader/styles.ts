import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

const styles = {
  panelHeader: css({
    display: "flex",
    alignItems: "center",
    padding: `${theme.space.xs} ${theme.space.xs}`,
    background: theme.colors.atmo2,
    textTransform: "capitalize",
  }),
};

export default styles;

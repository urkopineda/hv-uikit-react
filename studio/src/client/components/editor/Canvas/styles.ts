import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

const styles = {
  root: css({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    margin: "0 3px",
  }),
  canvas: css({
    height: "100%",
    padding: theme.space.sm,
    background: theme.colors.atmo1,
    transition: "0.5s ease",
  }),
  desktop: css({
    width: "100%",
  }),
  mobile: css({
    width: "500px",
  }),
};

export default styles;

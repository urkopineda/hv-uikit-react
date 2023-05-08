import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

const styles = {
  root: css({
    display: "flex",
    paddingTop: `calc(${theme.header.height} + 3px)`,
    minHeight: "100vh",
  }),
  fullWidth: css({
    padding: 0,
    maxWidth: "100%",
  }),
};

export default styles;

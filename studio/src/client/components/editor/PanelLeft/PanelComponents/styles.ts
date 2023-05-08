import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

const styles = {
  componentGrid: css({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
    gridGap: theme.space.xs,
  }),
  componentItem: css({
    display: "flex",
    border: `1px solid ${theme.colors.atmo3}`,
    borderRadius: theme.radii.base,
    padding: "1rem",
    placeItems: "center",
    "&::before": {
      content: '""',
      display: "block",
      paddingBottom: "100%",
      gridArea: "1 / 1 / 2 / 2"
    },
    "&:hover": {
      cursor: "pointer",
      background: theme.colors.atmo2,
      border: `1px solid ${theme.colors.atmo3}`,
    },
  }),
  selected: css({
    background: theme.colors.primary_20,
    border: `1px solid ${theme.colors.atmo3}`,
  }),
};

export default styles;

const styles = theme => ({
  header: {
    backgroundColor: theme.hv.palette.atmosphere.atmo1,
    ...theme.hv.typography.normalText,
    borderBottomColor: theme.hv.palette.atmosphere.atmo5,
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    width: "100%",
    zIndex: "1999",
    padding: "5px 15px",
    height: "50px"
  },
  contentWithHeader: {
    width: "100%",
    padding: "80px 50px 20px"
  },
  name: {
    fontWeight: theme.hv.typography.highlightText.fontWeight
  },
  title: {
    ...theme.hv.typography.highlightText,
    fontSize: 25,
    lineHeight: "50px"
  },
  link: {
    fontSize: 12
  },
  description: {
    ...theme.hv.typography.normalText,
    marginBottom: theme.hv.spacing.sm,
    maxWidth: 900
  }
});

export default styles;

export const getManagerStyles = () => {
  return {
    ".sidebar-container": {
      ".sidebar-header": {
        button: {
          display: "none",
        },

        div: {
          margin: 0,
        },

        a: {
          textAlign: "center",
          fontSize: 27,
        },

        img: {
          width: "80%",
        },
      },

      "#storybook-explorer-searchfield": {
        borderRadius: 2,
      },

      ".sidebar-item.sidebar-item": {
        fontSize: 14,
        paddingBottom: 4,
        paddingTop: 4,
      },

      ".sidebar-subheading button": {
        fontWeight: 900,
        fontSize: 12,
      },
    },

    "button[title='Apply outlines to the preview']": {
      display: "none",
    },

    ".sidebar-item.sidebar-item svg": {
      color: "inherit",
    },
  };
};

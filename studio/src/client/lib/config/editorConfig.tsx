import { Doc, Components } from "@hitachivantara/uikit-react-icons";

const editorConfig: EditorConfig = {
  leftPanel: {
    label: "Left Panel",
    mode: "pages",
    panels: [
      {
        id: "pages",
        label: "Pages",
        icon: <Doc />,
        component: "PanelPages",
      },
      {
        id: "components",
        label: "Components",
        icon: <Components />,
        component: "PanelComponents",
      },
    ],
  },
  canvas: {
    label: "Canvas",
    mode: "desktop",
  },
  rightPanel: {
    label: "Right Panel",
  },
};

export default editorConfig;

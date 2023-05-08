interface Panel {
  label?: string;
  mode?: string;
  panels?: {
    id?: string;
    label: string;
    icon: JSX.Element;
    component: string;
  }[];
}

interface EditorConfig {
  leftPanel: Panel;
  canvas: Panel;
  rightPanel: Panel;
}

interface EditorStore extends EditorConfig {
  setLeftPanelMode: (mode?: string) => void;
  setCanvasMode: (mode?: string) => void;
}

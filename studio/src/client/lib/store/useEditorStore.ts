import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import editorConfig from "lib/config/editorConfig";

const useEditorStore = create(
  immer<EditorStore>((set) => ({
    ...editorConfig,
    setLeftPanelMode: (mode) =>
      set((state) => {
        state.leftPanel.mode = mode;
      }),
    setCanvasMode: (mode) =>
      set((state) => {
        state.canvas.mode = mode;
      }),
  }))
);

export default useEditorStore;

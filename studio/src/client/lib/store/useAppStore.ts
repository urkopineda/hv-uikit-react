import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import appConfig from "lib/config/appConfig";

const useAppStore = create(
  immer<AppStore>((set) => ({
    ...appConfig,
    setPages: (pages) =>
      set((state) => {
        state.pages = pages;
      }),
    addPage: (page) =>
      set((state) => {
        state.pages = [...state.pages, page];
      }),
    setSelectedPage: (page) =>
      set((state) => {
        state.selectedPage = page;
      }),
  }))
);

export default useAppStore;

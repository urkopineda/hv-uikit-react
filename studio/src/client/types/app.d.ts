interface Page {
  id: string;
  label: string;
}

interface AppConfig {
  pages: Page[];
  selectedPage: string;
}

interface AppStore extends AppConfig {
  setPages: (pages: Page[]) => void;
  addPage: (page: Page) => void;
  setSelectedPage: (page: string) => void;
}

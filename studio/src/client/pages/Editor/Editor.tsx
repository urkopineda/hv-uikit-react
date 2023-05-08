import { Header, PanelLeft, Canvas, PanelRight } from "components";

import classes from "./styles";

const Editor = () => (
  <div className={classes.root}>
    <Header />
    <PanelLeft />
    <Canvas />
    <PanelRight />
  </div>
);

export default Editor;

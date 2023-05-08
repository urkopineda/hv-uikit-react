import { clsx } from "clsx";
import { HvTypography } from "@hitachivantara/uikit-react-core";

import useEditorStore from "lib/store/useEditorStore";
import classes from "./styles";

export const Canvas = () => {
  const { canvas } = useEditorStore();

  return (
    <section className={classes.root}>
      <div
        className={clsx(classes.canvas, {
          [classes.desktop]: canvas.mode === "desktop",
          [classes.mobile]: canvas.mode === "mobile",
        })}
      >
        <HvTypography>{canvas.label}</HvTypography>
      </div>
    </section>
  );
};

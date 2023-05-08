import { useRef, createElement } from "react";
import { useClickOutside } from "@hitachivantara/uikit-react-core";

import useEditorStore from "lib/store/useEditorStore";
import { IconButton } from "components/common";
import { PanelPages, PanelComponents } from "components/editor";

import classes from "./styles";

const components = {
  PanelPages,
  PanelComponents,
};

export const PanelLeft = () => {
  const {
    leftPanel: { panels, mode },
    setLeftPanelMode,
  } = useEditorStore();
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => {
    setLeftPanelMode();
  });

  return (
    <section ref={ref} className={classes.panelLeft}>
      <div className={classes.navBar}>
        {panels?.map(({ id, label, icon }) => {
          const isActive = mode === id;

          return (
            <IconButton
              key={id}
              title={label}
              onClick={() => {
                setLeftPanelMode(id);
              }}
              selected={isActive}
              tooltipPlacement="right"
            >
              {icon}
            </IconButton>
          );
        })}
      </div>

      {panels?.map(({ id, component }) => {
        const isActive = mode === id;

        return (
          isActive && (
            <div key={id} className={classes.panel}>
              {createElement(components[component])}
            </div>
          )
        );
      })}
    </section>
  );
};

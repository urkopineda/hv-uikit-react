import { PanelHeader } from "components/editor";
import useEditorStore from "lib/store/useEditorStore";
import { useComponents } from "lib/api/useComponents";
import { ComponentItem } from "./ComponentItem";

import classes from "./styles";

export const PanelComponents = () => {
  const { leftPanel } = useEditorStore();
  const { components } = useComponents();

  return (
    <>
      <PanelHeader label={leftPanel.mode} />

      <div className={classes.componentGrid} >
      {components?.map((component) => (
        <ComponentItem
          key={component.name}
          id={component.name}
          title={component.name}
        />
      ))}
      </div>
    </>
  );
};

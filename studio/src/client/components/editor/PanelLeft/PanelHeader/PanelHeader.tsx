import { HvTypography } from "@hitachivantara/uikit-react-core";
import { Close } from "@hitachivantara/uikit-react-icons";

import useEditorStore from "lib/store/useEditorStore";
import { IconButton } from "components/common";
import classes from "./styles";

interface PanelHeaderProps {
  label?: string;
  children?: React.ReactNode;
}

export const PanelHeader = ({ label, children }: PanelHeaderProps) => {
  const { setLeftPanelMode } = useEditorStore();

  return (
    <div className={classes.panelHeader}>
      <HvTypography variant="label">{label}</HvTypography>
      <span style={{ marginLeft: "auto" }}>
        {children}
        <IconButton title="Close" onClick={() => setLeftPanelMode()}>
          <Close iconSize="XS" />
        </IconButton>
      </span>
    </div>
  );
};

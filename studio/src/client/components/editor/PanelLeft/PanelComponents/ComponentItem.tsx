import { clsx } from "clsx";
import { useState } from "react";
import { HvTypography } from "@hitachivantara/uikit-react-core";
import { Drag, MoreOptionsVertical } from "@hitachivantara/uikit-react-icons";

import classes from "./styles";

interface ComponentItemProps {
  id: string;
  title: string;
  onClick?: (id: string) => void;
  selected?: boolean;
}

export const ComponentItem = ({ id, title, onClick, selected }: ComponentItemProps) => {
  const [isOver, setIsOver] = useState(false);

  const handleMouseOver = () => {
    setIsOver(true);
  };

  const handleMouseOut = () => {
    setIsOver(false);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className={clsx(classes.componentItem, {
        [classes.selected]: selected,
      })}
      onMouseOver={handleMouseOver}
      onFocus={handleMouseOver}
      onMouseOut={handleMouseOut}
      onBlur={handleMouseOut}
      onClick={() => onClick?.(id)}
      onKeyUp={() => onClick?.(id)}
    >
      <HvTypography variant="label">{title}</HvTypography>
    </div>
  );
};

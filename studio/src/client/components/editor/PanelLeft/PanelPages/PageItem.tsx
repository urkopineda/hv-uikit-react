import { clsx } from "clsx";
import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { HvTypography } from "@hitachivantara/uikit-react-core";
import { Drag, MoreOptionsVertical } from "@hitachivantara/uikit-react-icons";

import classes from "./styles";

interface PageItemProps {
  id: string;
  label: string;
  onClick: (id: string) => void;
  selected: boolean;
}

export const PageItem = ({ id, label, onClick, selected }: PageItemProps) => {
  const [isOver, setIsOver] = useState(false);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

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
      ref={setNodeRef}
      style={style}
      className={clsx(classes.pageItem, {
        [classes.selected]: selected,
      })}
      onMouseOver={handleMouseOver}
      onFocus={handleMouseOver}
      onMouseOut={handleMouseOut}
      onBlur={handleMouseOut}
      onClick={() => onClick(id)}
      onKeyUp={() => onClick(id)}
    >
      <Drag
        iconSize="XS"
        className={clsx(classes.icon, classes.drag, {
          [classes.show]: isOver,
        })}
        {...attributes}
        {...listeners}
      />
      <HvTypography>{label}</HvTypography>
      <MoreOptionsVertical
        iconSize="XS"
        style={{ marginLeft: "auto" }}
        className={clsx(classes.icon, {
          [classes.show]: isOver || selected,
        })}
      />
    </div>
  );
};

import { ClickAwayListener } from "@mui/material";
import { clsx } from "clsx";

import {
  NavigationData,
  HvVerticalNavigationTree,
  HvVerticalNavigation,
  verticalNavigationTreeClasses,
} from "@core/components";
import { HvBaseProps } from "@core/types";
import { setId } from "@core/utils";

import { StyledPopper, StyledPopupContainer } from "./NavigationPopup.styles";

export interface HvVerticalNavigationPopupProps
  extends HvBaseProps<HTMLDivElement> {
  id?: string;
  anchorEl?: HTMLElement | null;
  fixedMode?: boolean;
  data?: NavigationData[];
  selected?: string;
  onClose?: () => void;
  onChange?: any;
}

export const HvVerticalNavigationPopup = ({
  id,
  anchorEl,
  fixedMode,
  onClose,
  data,
  selected,
  onChange,

  ...others
}: HvVerticalNavigationPopupProps) => {
  const handleClickAway = () => {
    onClose?.();
  };

  const handleChange = (event, selectedItem) => {
    onChange(event, selectedItem.id, selectedItem);
  };

  const handleMouseLeave = () => {
    if (!fixedMode) {
      onClose?.();
    }
  };

  return (
    <StyledPopper open anchorEl={anchorEl} placement="right-start" {...others}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <StyledPopupContainer>
          <HvVerticalNavigation open useIcons>
            <HvVerticalNavigationTree
              className={clsx(verticalNavigationTreeClasses.popup)}
              id={setId(id, "tree")}
              collapsible
              defaultExpanded
              selected={selected}
              onChange={handleChange}
              data={data}
              onMouseLeave={handleMouseLeave}
            />
          </HvVerticalNavigation>
        </StyledPopupContainer>
      </ClickAwayListener>
    </StyledPopper>
  );
};

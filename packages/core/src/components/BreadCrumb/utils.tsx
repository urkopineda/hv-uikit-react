import { MoreOptionsHorizontal } from "@hitachivantara/uikit-react-icons";
import { HvDropDownMenu } from "components";
import { useId } from "hooks";

export const removeExtension = (label) =>
  label.includes(".") ? label.substring(0, label.lastIndexOf(".")) : label;

export const pathWithSubMenu = (
  id,
  onClick,
  listRoute,
  maxVisible,
  dropDownMenuProps
) => {
  const nbrElemToSubMenu = listRoute.length - maxVisible;
  const subMenuList = listRoute.slice(1, nbrElemToSubMenu + 1);

  const handleClick = (event, data) => {
    event.preventDefault();

    onClick?.(event, data);
  };

  listRoute.splice(
    1,
    nbrElemToSubMenu,
    <HvDropDownMenu
      id={useId(id, "dropdown-menu")}
      icon={<MoreOptionsHorizontal iconSize="S" color="acce1" />}
      dataList={subMenuList}
      {...dropDownMenuProps}
      onClick={onClick != null ? handleClick : undefined}
    />
  );

  return listRoute;
};

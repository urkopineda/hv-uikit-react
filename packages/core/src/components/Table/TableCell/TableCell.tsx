import styled from "@emotion/styled";
import capitalize from "lodash/capitalize";
import {
  CSSProperties,
  forwardRef,
  TdHTMLAttributes,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { theme } from "@hitachivantara/uikit-styles";
import { transientOptions } from "@core/utils/transientOptions";
import {
  checkValidHexColorValue,
  ExtractNames,
  hexToRgbA,
  getVarValue,
} from "@core/utils";
import { useTheme } from "@core/hooks";
import {
  HvTableCellAlign,
  HvTableCellType,
  HvTableCellVariant,
} from "../Table";
import TableContext from "../TableContext";
import TableSectionContext from "../TableSectionContext";
import { staticClasses, useClasses } from "./TableCell.styles";

export { staticClasses as tableCellClasses };

export type HvTableCellClasses = ExtractNames<typeof useClasses>;

export interface HvTableCellProps
  extends Omit<TdHTMLAttributes<HTMLTableCellElement>, "align"> {
  /** The component used for the root node. Either a string to use a HTML element or a component. Defaults to td. */
  component?: React.ElementType;
  /** Content to be rendered */
  children?: React.ReactNode;
  /** Inline styles to be applied to the root element. */
  style?: CSSProperties;
  /** Set the text-align on the table cell content. */
  align?: HvTableCellAlign;
  /** Sets the cell's variant. */
  variant?: HvTableCellVariant | "listcheckbox" | "listactions";
  /** Specify the cell's type. The prop defaults to the value inherited from the parent TableHead, TableBody, or TableFooter components. */
  type?: HvTableCellType;
  /** Whether or not the cell is part of a sorted column. */
  sorted?: boolean;
  /** The cell is part of a sticky column. */
  stickyColumn?: boolean;
  /** The cell is part of the last sticky to the left column. */
  stickyColumnMostLeft?: boolean;
  /** The cell is part of the first sticky to the right column. */
  stickyColumnLeastRight?: boolean;
  /** The cell is part of the first column in the group. */
  groupColumnMostLeft?: boolean;
  /** The cell is part of the last column in the group. */
  groupColumnMostRight?: boolean;
  /** Whether or not the cell is resizable */
  resizable?: boolean;
  /** Whether or not the cell is being resized */
  resizing?: boolean;
  /** A Jss Object used to override or extend the styles applied to the component. */
  classes?: HvTableCellClasses;
}

const defaultComponent = "td";

interface StyledTableCellProps {
  $variantList: boolean;
  $variantListHead: boolean;
  $stickyColumn: boolean;
  $stickyColumnMostLeft: boolean;
  $stickyColumnLeastRight: boolean;
  $groupColumnMostLeft: boolean;
  $groupColumnMostRight: boolean;
  $resizable: boolean;
  $resizing: boolean;
  $align: string;
  $variant: string;
  $type: string;
  $sortedColor: string;
}

const StyledTableCell = (c: any) =>
  styled(
    c,
    transientOptions
  )(({ $stickyColumn, $type, $sortedColor }: StyledTableCellProps) => ({
    ...($type === "body" && {
      [`&.${staticClasses.sorted}`]: {
        backgroundColor: $sortedColor,
      },
    }),
    ...($stickyColumn && {
      [`&.${staticClasses.sorted}`]: {
        backgroundImage: `linear-gradient(to right, ${$sortedColor}, ${$sortedColor})`,
      },
    }),
  }));

const getSortedColor = (color?: string, alpha?: string) => {
  return checkValidHexColorValue(color) && alpha
    ? hexToRgbA(color, parseFloat(alpha))
    : color;
};

/**
 * `HvTableCell` acts as a `td` element and inherits styles from its context
 */
export const HvTableCell = forwardRef<HTMLElement, HvTableCellProps>(
  (props, externalRef) => {
    const {
      children,
      component,
      className,
      style,
      classes: classesProp,
      align = "inherit",
      variant = "default",
      type: typeProp,
      stickyColumn = false,
      stickyColumnMostLeft = false,
      stickyColumnLeastRight = false,
      groupColumnMostLeft = false,
      groupColumnMostRight = false,
      sorted = false,
      resizable = false,
      resizing = false,
      ...others
    } = props;
    const { classes, cx } = useClasses(classesProp);
    const { activeTheme, rootId } = useTheme();
    const tableContext = useContext(TableContext);
    const tableSectionContext = useContext(TableSectionContext);

    const [sortedColorValue, setSortedColorValue] = useState<
      string | undefined
    >();
    const [sortedColorAlpha, setSortedColorAlpha] = useState<
      string | undefined
    >();

    const type = typeProp || tableSectionContext?.type || "body";

    const Component =
      component || tableContext?.components?.Td || defaultComponent;

    const TableCell = useMemo(() => StyledTableCell(Component), [Component]);

    const [sortedColor, setSortedColor] = useState(
      getSortedColor(sortedColorValue, sortedColorAlpha)
    );

    useEffect(() => {
      setSortedColorValue(getVarValue(theme.table.rowSortedColor, rootId));
      setSortedColorAlpha(getVarValue(theme.table.rowSortedColorAlpha, rootId));

      setSortedColor(getSortedColor(sortedColorValue, sortedColorAlpha));
    }, [
      activeTheme?.colors.modes.selectedMode,
      sortedColorValue,
      sortedColorAlpha,
      rootId,
    ]);

    return (
      <TableCell
        ref={externalRef}
        role={Component === defaultComponent ? null : "cell"}
        style={style}
        className={cx(className, classes.root, classes[type], {
          [classes[`align${capitalize(align)}`]]: align !== "inherit",
          [classes.variantList]: tableContext.variant === "listrow",
          [classes.variantListHead]:
            tableContext.variant === "listrow" && type !== "body",
          [classes[`variant${capitalize(variant)}`]]: variant !== "default",
          [classes.sorted]: sorted,
          [classes.stickyColumn]: stickyColumn,
          [classes.stickyColumnMostLeft]: stickyColumnMostLeft,
          [classes.stickyColumnLeastRight]: stickyColumnLeastRight,
          [classes.groupColumnMostLeft]: groupColumnMostLeft,
          [classes.groupColumnMostRight]: groupColumnMostRight,
          [classes.resizable]: resizable,
          [classes.resizing]: resizing,
        })}
        $type={type}
        $stickyColumn={stickyColumn}
        $sortedColor={sortedColor}
        {...others}
      >
        {children}
      </TableCell>
    );
  }
);

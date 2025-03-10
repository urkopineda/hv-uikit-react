import { clsx } from "clsx";
import styled from "@emotion/styled";
import { HvBaseProps } from "@core/types";
import React, {
  Children,
  forwardRef,
  isValidElement,
  useContext,
  useMemo,
  useRef,
} from "react";
import { useForkRef } from "@core/hooks";
import { HvFocus } from "@core/components";
import tableBodyClasses, { HvTableBodyClasses } from "./tableBodyClasses";
import TableContext from "../TableContext";
import TableSectionContext from "../TableSectionContext";

export interface HvTableBodyProps
  extends HvBaseProps<HTMLTableSectionElement, "children"> {
  /**
   * Content to be rendered
   */
  children: React.ReactNode;
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   * Defaults to tbody.
   */
  component?: React.ElementType;
  /** Sets whether or not there should be arrow navigation between the table rows */
  withNavigation?: boolean;
  /** A Jss Object used to override or extend the styles applied to the component. */
  classes?: HvTableBodyClasses;
}

const tableSectionContext = {
  type: "body",
  filterClassName: "grid",
};

const defaultComponent = "tbody";

const StyledTableBody = (c: any) =>
  styled(c)({
    backgroundColor: "inherit",
    position: "relative",
    zIndex: 0,
  });

/**
 * HvTableBody acts as a `tbody` element.
 * `HvTableCell` and `HvTableRow` elements in it inherit body-specific styles
 */
export const HvTableBody = forwardRef<HTMLElement, HvTableBodyProps>(
  (
    {
      classes,
      className,
      component,
      children,
      withNavigation = false,
      ...others
    },
    externalRef
  ) => {
    const tableContext = useContext(TableContext);

    const bodyRef = useRef(null);

    const handleRef = useForkRef(externalRef, bodyRef);

    const Component =
      component || tableContext?.components?.TBody || defaultComponent;

    const TableBody = useMemo(() => StyledTableBody(Component), [Component]);

    return (
      <TableSectionContext.Provider value={tableSectionContext}>
        <TableBody
          className={clsx(tableBodyClasses.root, classes?.root, className)}
          ref={handleRef}
          role={Component === defaultComponent ? null : "rowgroup"}
          {...others}
        >
          {withNavigation
            ? Children.map(children, (element) => {
                if (isValidElement(element)) {
                  return (
                    <HvFocus
                      id={`my-id-${element.key}`}
                      rootRef={bodyRef}
                      key={`row-${element.key}`}
                      strategy="grid"
                      filterClass={tableSectionContext.filterClassName}
                      navigationJump={1}
                      focusDisabled={false}
                      selected={element.props.selected}
                    >
                      {element}
                    </HvFocus>
                  );
                }
              })
            : children}
        </TableBody>
      </TableSectionContext.Provider>
    );
  }
);

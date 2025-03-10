import { HvBaseProps } from "@core/types";
import { StyledContainer } from "./SimpleGrid.styles";

export type Spacing = "sm" | "md" | "lg" | "xl";

export interface Breakpoint {
  cols?: number;
  maxWidth?: number;
  minWidth?: number;
  spacing?: Spacing;
}

export interface HvSimpleGridProps extends HvBaseProps {
  /**
   * Spacing with pre-defined values according the values defined in the theme
   */
  spacing?: Spacing;
  /**
   * Provide an array to define responsive behavior:
   *
   *    maxWidth or minWidth: max-width or min-width at which media query will work
   *
   *    cols: number of columns per row at given max-width
   *
   *    spacing: optional spacing at given max-width, if not provided spacing from component prop will be used instead
   */
  breakpoints?: Breakpoint[];
  /**
   * Number of how many columns the content will be displayed
   */
  cols?: number;
}

export const HvSimpleGrid = ({
  children,
  breakpoints,
  spacing = "sm",
  cols,
  ...others
}: HvSimpleGridProps) => {
  return (
    <StyledContainer
      spacing={spacing}
      cols={cols}
      breakpoints={breakpoints}
      {...others}
    >
      {children}
    </StyledContainer>
  );
};

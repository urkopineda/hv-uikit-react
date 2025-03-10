import { MouseEventHandler, ReactNode } from "react";
import { Backwards, Forwards } from "@hitachivantara/uikit-react-icons";
import { HvBaseProps } from "@core/types";
import { HvButton, HvPaginationProps } from "..";
import { HvCarouselClasses, HvCarouselProps } from ".";
import { useClasses } from "./Carousel.styles";

interface HvCarouselControlsProps
  extends HvBaseProps<HTMLDivElement>,
    Pick<HvPaginationProps, "page" | "pages" | "canPrevious" | "canNext">,
    Pick<HvCarouselProps, "showDots"> {
  classes?: HvCarouselClasses;
  actions?: ReactNode;
  onPreviousClick?: MouseEventHandler<HTMLButtonElement>;
  onNextClick?: MouseEventHandler<HTMLButtonElement>;
}

export const HvCarouselControls = (props: HvCarouselControlsProps) => {
  const {
    classes: classesProp,
    className,
    showDots,
    page,
    pages,
    canPrevious,
    canNext,
    actions,
    onPreviousClick,
    onNextClick,
  } = props;
  const { classes, cx } = useClasses(classesProp, false);

  const selectedIndex = page || 0;
  const numSlides = pages;

  return (
    <div className={cx(classes.controls, className)}>
      {showDots ? (
        <div className={classes.dots}>
          {Array.from(Array(numSlides)).map((el, index) => (
            <span
              key={`circle-${index}`}
              className={cx(classes.dot, {
                [classes.dotSelected]: index === selectedIndex,
              })}
            />
          ))}
        </div>
      ) : (
        <>
          <HvButton
            icon
            disabled={!canPrevious}
            variant="secondaryGhost"
            aria-label="Backwards"
            onClick={onPreviousClick}
          >
            <Backwards iconSize="XS" />
          </HvButton>
          <div className={classes.pageCounter}>
            {`${selectedIndex + 1} / ${numSlides}`}
          </div>
          <HvButton
            icon
            disabled={!canNext}
            variant="secondaryGhost"
            aria-label="Forwards"
            onClick={onNextClick}
          >
            <Forwards iconSize="XS" />
          </HvButton>
        </>
      )}
      {actions}
    </div>
  );
};

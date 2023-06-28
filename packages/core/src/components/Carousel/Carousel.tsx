import React, {
  CSSProperties,
  Children,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import useCarousel, { EmblaOptionsType } from "embla-carousel-react";
import {
  Backwards,
  Forwards,
  Close,
  Fullscreen,
} from "@hitachivantara/uikit-react-icons";
import {
  ExtractNames,
  HvBaseProps,
  HvButton,
  HvContainer,
  HvTypography,
} from "../..";

import { HvCarouselControls } from "./CarouselControls";
import { HvCarouselThumbnails } from "./CarouselThumbnails";
import { staticClasses, useClasses } from "./Carousel.styles";

const clamp = (num: number, max: number, min = 0) =>
  Math.min(Math.max(num, min), max);

export { staticClasses as carouselClasses };

export type HvCarouselClasses = ExtractNames<typeof useClasses>;

export interface HvCarouselProps
  extends HvBaseProps<HTMLDivElement, "title" | "onChange"> {
  /** A Jss Object used to override or extend the styles applied. */
  classes?: HvCarouselClasses;
  /** Height of the Slider container. If `undefined`, images will keep a 16/9 aspect-ratio */
  height?: CSSProperties["height"];
  /** Width of the thumbnail. Height will try to maintain a 16/9 aspect-ratio */
  thumbnailWidth?: CSSProperties["width"];
  /** Title of the carousel */
  title?: React.ReactNode;
  /** Content slides to be displayed. @see `<HvCarouselSlide />` */
  children?: React.ReactNode;
  /** Custom content to render in the actions area */
  actions?: React.ReactNode;
  /** Whether Carousel is in "xs mode" - to use in embedded contexts */
  xs?: boolean;
  /** Whether to show dots instead of arrow pagination. Defaults to true under 5 elements */
  showDots?: boolean;
  /** Whether to show the counter on the top-right corner of the active slide */
  showCounter?: boolean;
  /** Whether to show the back/forwards buttons over the active slide */
  showSlideControls?: boolean;
  /** Whether to enable the fullscreen toggle button */
  showFullscreen?: boolean;
  /** Whether to hide the thumbnails. Hidden by default in "xs" mode */
  hideThumbnails?: boolean;
  /** Carousel configuration options. @see https://www.embla-carousel.com/api/options/ */
  carouselOptions?: EmblaOptionsType;
  /** */
  renderThumbnail?: (index: number) => React.ReactNode;
  /** The callback fired when the active slide changes. */
  onChange?: (index: number) => void;
}

/**
 * A Carousel is commonly used to browse images, it can also be used to browse any kind of content like text, video, or charts.
 * It allows you to focus on a particular content while having a notion of how many you have to explore.
 */
export const HvCarousel = (props: HvCarouselProps) => {
  const {
    className,
    classes: classesProp,
    height: heightProp = "auto",
    thumbnailWidth = 90,
    title,
    children,
    actions,
    xs,
    showDots: showDotsProp,
    showCounter: showCounterProp,
    showSlideControls,
    showFullscreen: showFullscreenProp,
    hideThumbnails: hideThumbnailsProp,
    carouselOptions,
    renderThumbnail,
    onChange,
    ...others
  } = props;
  const { classes, cx } = useClasses(classesProp);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const [containerRef, controller] = useCarousel({
    align: "start",
    loop: true,
    ...carouselOptions,
  });

  const [selectedIndex, setSelectedIndex] = useState(
    carouselOptions?.startIndex ?? 0
  );

  const numSlides = Children.count(children);

  const handlePrevious = useCallback(() => {
    controller?.scrollPrev();
  }, [controller]);

  const handleNext = useCallback(() => {
    controller?.scrollNext();
  }, [controller]);

  const handleScroll = (index: number) => {
    controller?.scrollTo(index);
  };

  const handleSelect = useCallback(() => {
    if (!controller) return;

    const slideIndex = controller.selectedScrollSnap();
    setSelectedIndex(slideIndex);

    // scroll to thumbnail button
    thumbnailsRef.current
      ?.querySelectorAll("button")
      ?.[slideIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });

    onChange?.(slideIndex);
  }, [controller, onChange]);

  useEffect(() => {
    if (!controller) return;

    controller.on("select", handleSelect);

    return () => {
      controller.off("select", handleSelect);
    };
  }, [controller, handleSelect]);

  useEffect(() => {
    if (!controller) return;

    controller.reInit();
    setSelectedIndex((currentIndex) => clamp(currentIndex, numSlides, 0));
  }, [numSlides, controller]);

  const canPrev = controller?.canScrollPrev() ?? false;
  const canNext = controller?.canScrollNext() ?? false;
  const showTitle = !!title && (!xs || isFullscreen);
  const showFullscreen = showFullscreenProp ?? xs;
  const height = isFullscreen ? "100%" : heightProp ?? "auto";
  const showCounter = xs;
  const hideThumbnails = hideThumbnailsProp ?? (xs && !isFullscreen);
  const showThumbnails = !hideThumbnails && !!renderThumbnail;
  const showDots = showDotsProp ?? numSlides <= 5;

  return (
    <HvContainer
      className={cx(classes.root, className, {
        [classes.xs]: xs,
        [classes.fullscreen]: isFullscreen,
      })}
      {...others}
    >
      {showTitle && (
        <HvTypography variant="title2" className={classes.title}>
          {title}
        </HvTypography>
      )}
      <div className={classes.actions}>
        {showFullscreen && (
          <HvButton
            icon
            variant="secondaryGhost"
            onClick={() => setIsFullscreen((curr) => !curr)}
            className={classes.closeButton}
          >
            {isFullscreen ? (
              <Close aria-label="Close" />
            ) : (
              <Fullscreen aria-label="Fullscreen" />
            )}
          </HvButton>
        )}
        {actions}
      </div>

      <div className={classes.mainContainer}>
        <HvCarouselControls
          classes={classes}
          showDots={showDots}
          page={selectedIndex}
          pages={numSlides}
          canPrevious={canPrev}
          canNext={canNext}
          onPreviousClick={handlePrevious}
          onNextClick={handleNext}
        />

        <div
          className={cx(classes.main, {
            [classes.mainXs]: xs,
            [classes.mainFullscreen]: isFullscreen,
          })}
        >
          {showCounter && (
            <div className={classes.counterContainer}>
              <span className={classes.counter}>
                {`${selectedIndex + 1}/${numSlides}`}
              </span>
            </div>
          )}

          {showSlideControls && (
            <div className={classes.slideControls}>
              <HvButton
                icon
                disabled={!canPrev}
                variant="secondary"
                aria-label="Backwards"
                onClick={handlePrevious}
              >
                <Backwards iconSize="XS" />
              </HvButton>
              <HvButton
                icon
                disabled={!canNext}
                variant="secondary"
                aria-label="Forwards"
                onClick={handleNext}
              >
                <Forwards iconSize="XS" />
              </HvButton>
            </div>
          )}

          <div
            ref={containerRef}
            style={{ height }}
            className={classes.slidesViewport}
          >
            <div className={classes.slidesContainer}>{children}</div>
          </div>
        </div>
      </div>

      {showThumbnails && (
        <HvCarouselThumbnails
          classes={classes}
          ref={thumbnailsRef}
          page={selectedIndex}
          pages={numSlides}
          width={thumbnailWidth}
          onThumbnailClick={(evt, i) => handleScroll(i)}
          renderThumbnail={renderThumbnail}
        />
      )}
    </HvContainer>
  );
};

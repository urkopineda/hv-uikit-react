import { colors } from "../tokens/colors";
import { makeTheme } from "../makeTheme";
import { HvTheme } from "../types";

const ds5 = makeTheme((theme: HvTheme) => ({
  name: "ds5",
  colors: {
    modes: {
      dawn: {
        type: "light",
        backgroundColor: colors.light.atmo2,
        ...colors.common,
        ...colors.light,
      },
      wicked: {
        type: "dark",
        backgroundColor: colors.dark.atmo2,
        ...colors.common,
        ...colors.dark,
      },
    },
  },
  typography: {
    display: {
      color: theme.colors.secondary,
      fontWeight: theme.fontWeights.semibold,
      fontSize: theme.fontSizes.xl4,
      lineHeight: theme.lineHeights.xl4,
    },
    title1: {
      color: theme.colors.secondary,
      fontWeight: theme.fontWeights.semibold,
      fontSize: theme.fontSizes.xl3,
      lineHeight: theme.lineHeights.xl3,
    },
    title2: {
      color: theme.colors.secondary,
      fontWeight: theme.fontWeights.semibold,
      fontSize: theme.fontSizes.xl2,
      lineHeight: theme.lineHeights.xl2,
    },
    title3: {
      color: theme.colors.secondary,
      fontWeight: theme.fontWeights.semibold,
      fontSize: theme.fontSizes.xl,
      lineHeight: theme.lineHeights.xl,
    },
    title4: {
      color: theme.colors.secondary,
      fontWeight: theme.fontWeights.semibold,
      fontSize: theme.fontSizes.lg,
      lineHeight: theme.lineHeights.lg,
    },
    label: {
      color: theme.colors.secondary,
      fontWeight: theme.fontWeights.semibold,
      fontSize: theme.fontSizes.base,
      lineHeight: theme.lineHeights.base,
    },
    body: {
      color: theme.colors.secondary,
      fontWeight: theme.fontWeights.normal,
      fontSize: theme.fontSizes.base,
      lineHeight: theme.lineHeights.base,
    },
    caption1: {
      color: theme.colors.secondary,
      fontWeight: theme.fontWeights.normal,
      fontSize: theme.fontSizes.sm,
      lineHeight: theme.lineHeights.sm,
    },
    caption2: {
      color: theme.colors.secondary,
      fontWeight: theme.fontWeights.normal,
      fontSize: theme.fontSizes.xs,
      lineHeight: theme.lineHeights.xs,
    },
    // LEGACY
    "5xlTitle": {
      color: theme.colors.secondary,
      fontSize: "52px",
      letterSpacing: "0.02em",
      lineHeight: "60px",
      fontWeight: 600,
    },
    "4xlTitle": {
      color: theme.colors.secondary,
      fontSize: "52px",
      letterSpacing: "0.02em",
      lineHeight: "60px",
      fontWeight: 400,
    },
    xxlTitle: {
      color: theme.colors.secondary,
      fontSize: "42px",
      letterSpacing: "0.02em",
      lineHeight: "52px",
      fontWeight: 400,
    },
    lTitle: {
      color: theme.colors.secondary,
      fontSize: "32px",
      letterSpacing: "0.02em",
      lineHeight: "40px",
      fontWeight: 400,
    },
    sTitle: {
      color: theme.colors.secondary,
      fontSize: "22px",
      letterSpacing: "0.02em",
      lineHeight: "30px",
      fontWeight: 400,
    },
    xxsTitle: {
      color: theme.colors.secondary,
      fontSize: "18px",
      letterSpacing: "0.02em",
      lineHeight: "28px",
      fontWeight: 400,
    },
    sectionTitle: {
      color: theme.colors.secondary,
      fontSize: "14px",
      letterSpacing: "0.32em",
      lineHeight: "18px",
      fontWeight: 400,
      textTransform: "uppercase",
    },
    placeholderText: {
      color: theme.colors.secondary_60,
      fontSize: "12px",
      letterSpacing: "0.02em",
      lineHeight: "16px",
      fontWeight: 400,
    },
    link: {
      color: theme.colors.primary,
      fontSize: "12px",
      letterSpacing: "0.02em",
      lineHeight: "16px",
      fontWeight: 600,
    },
    disabledText: {
      color: theme.colors.secondary_60,
      fontSize: "12px",
      letterSpacing: "0.02em",
      lineHeight: "16px",
      fontWeight: 600,
    },
    selectedNavText: {
      color: theme.colors.brand,
      fontSize: "12px",
      letterSpacing: "0.02em",
      lineHeight: "16px",
      fontWeight: 600,
    },
    vizTextDisabled: {
      color: theme.colors.secondary_60,
      fontSize: "10px",
      letterSpacing: "0.02em",
      lineHeight: "15px",
      fontWeight: 400,
    },
    xsInlineLink: {
      color: theme.colors.primary,
      fontSize: "10px",
      letterSpacing: "0.02em",
      lineHeight: "15px",
      fontWeight: 600,
      textDecoration: "underline",
    },
  },
  actionBar: {
    borderTop: `1px solid ${theme.colors.atmo3}`,
  },
  dropdown: {
    borderRadius: theme.radii.base,
    disabledColor: theme.colors.secondary_60,
    readOnlyBorder: `1px solid ${theme.colors.secondary_80}`,
    readOnlyBackgroundColor: theme.colors.atmo1,
    placeholderColor: theme.colors.secondary_80,
    dropdownHeaderInvalidBorder: `1px solid ${theme.colors.negative}`,
    listContainerPadding: theme.space.sm,
    searchContainerMargin: theme.space.xs,
  },
  button: {
    borderRadius: theme.radii.base,
    padding: theme.spacing(["xs", "sm"]),
    marginIconRight: "0px",
    marginIconLeft: "-8px",
    semanticColor: "rgba(251, 252, 252, 0.3)",
    semanticColorDisabled: "rgba(251, 252, 252, 0.1)",
    hoverColor: theme.colors.primary_20,
    secondaryBackgroundColor: "transparent",
    secondarySubtleBorderColor: theme.colors.secondary,
  },
  header: {
    color: theme.colors.secondary,
    brandColor: theme.colors.secondary,
    height: "64px",
    backgroundColor: theme.colors.atmo1,
    secondLevelBackgroundColor: theme.colors.atmo2,
    secondLevelHeight: "56px",
    hoverColor: theme.colors.primary_20,
    borderTopThickness: "0px",
    borderTopColor: "transparent",
    selectedItemColor: theme.colors.secondary,
    selectedItemBackgroundColor: "transparent",
    selectedItemBorderTopColor: "transparent",
    selectedItemBorderTopThickness: "0px",
    selectedItemBorderBottomColor: theme.colors.secondary,
    selectedItemBorderBottomThickness: "4px",
    secondLevelSelectedItemBorderTopColor: "transparent",
    secondLevelSelectedItemBorderTopThickness: "0px",
    secondLevelSelectedItemBorderBottomColor: theme.colors.secondary,
    secondLevelSelectedItemBorderBottomThickness: "4px",
    shadow: "none",
    secondLevelItemColor: theme.colors.secondary,
    secondLevelSelectedItemColor: theme.colors.secondary,
    secondLevelSelectedItemBackgroundColor: "transparent",
  },
  card: {
    iconMargin: "0px",
    outline: `1px solid ${theme.colors.atmo4}`,
    borderRadius: `0px 0px ${theme.radii.round} ${theme.radii.round}`,
    hoverColor: theme.colors.primary,
    backgroundColor: "transparent",
    titleVariant: "label",
    subheaderVariant: "caption1",
    subheaderColor: theme.colors.secondary,
  },
  tab: {
    padding: "0 16px",
    hoverBackgroundColor: theme.colors.primary_20,
    hoverBackgroundBorderRadius: theme.radii.base,
    hoverUnderlineBackgroundColor: theme.colors.atmo4,
  },
  list: {
    hoverColor: theme.colors.primary_20,
    disabledBackgroundColor: theme.colors.atmo3,
  },
  dialog: {
    borderRadius: theme.radii.round,
    margin: "80px",
    titleVariant: "title4",
  },
  baseCheckBox: {
    hoverColor: theme.colors.primary_20,
    borderRadius: theme.radii.base,
  },
  checkbox: {
    hoverColor: theme.colors.primary_20,
    borderRadius: theme.radii.base,
  },
  baseDropdown: {
    shadow: "none",
    placeholderColor: theme.colors.secondary_80,
    borderColor: theme.colors.secondary_80,
    hoverBorderColor: theme.colors.primary,
    disabledBorderColor: theme.colors.secondary_60,
    disabledBackgroundColor: theme.colors.atmo2,
    readOnlyBorder: `1px solid ${theme.colors.secondary_60}`,
    readOnlyBackgroundColor: theme.colors.atmo2,
    openBorderColor: theme.colors.secondary_80,
  },
  baseRadio: {
    hoverColor: theme.colors.primary_20,
    hoverBorderRadius: theme.radii.base,
  },
  baseSwitch: {
    padding: 0,
    height: "32px",
    width: "40px",
    track: {
      opacity: 1,
      borderRadius: "15px",
      height: "16px",
      width: "32px",
      border: `solid 1px ${theme.colors.secondary}`,
      backgroundColor: theme.colors.atmo1,
      hoverBackgroundColor: "transparent",
    },
    thumb: {
      width: "12px",
      height: "12px",
      left: "-9px",
      border: `solid 1px ${theme.colors.secondary}`,
      backgroundColor: theme.colors.atmo1,
      marginLeft: "2px",
      marginTop: 0,
      boxShadow: "none",
    },
    disabled: {
      thumbBackgroundColor: theme.colors.atmo3,
      thumbBorder: `solid 1px ${theme.colors.secondary_60}`,
      trackBackgroundColor: theme.colors.atmo3,
      trackBorder: `solid 1px ${theme.colors.secondary_60}`,
      trackOpacity: 1,
    },
    checkedTrackBackgroundColor: theme.colors.secondary,
    hoverBackgroundColor: theme.colors.primary_20,
    hoverBaseBackgroundColor: "transparent",
    checkedOpacity: 1,
    borderRadius: theme.radii.base,
    focusBorderRadius: "8px",
  },
  baseInput: {
    underlineHeight: "0px",
    placeholderColor: theme.colors.secondary_80,
    borderColor: theme.colors.secondary_80,
    hoverColor: theme.colors.primary,
    disabledBorderColor: theme.colors.secondary_60,
    disabledTextColor: theme.colors.secondary_60,
    disabledBackgroundColor: theme.colors.atmo2,
    readOnlyBorderColor: theme.colors.secondary_60,
    readOnlyTextColor: theme.colors.secondary_80,
    readOnlyBackgroundColor: "transparent",
    multilineBorderColor: theme.colors.secondary_80,
    multilineDisabledBorderColor: theme.colors.secondary_60,
  },
  radio: {
    hoverColor: theme.colors.primary_20,
    borderRadius: theme.radii.base,
  },
  tagsInput: {
    borderColor: theme.colors.secondary_80,
    disabledBackgroundColor: theme.colors.atmo2,
    readOnlyBackgroundColor: theme.colors.atmo2,
    hoverColor: theme.colors.primary,
    readOnlyBorderColor: theme.colors.secondary_60,
  },
  switch: {
    invalidPaddingBottom: "1px",
  },
  fileUploader: {
    dropZone: {
      borderColor: theme.colors.secondary_60,
      backgroundColor: theme.colors.atmo1,
      borderRadius: theme.radii.round,
      borderColorDrag: theme.colors.primary,
      borderColorDisabled: theme.colors.secondary_60,
      borderType: "dashed",
    },
    fileList: {
      itemBorder: `1px solid ${theme.colors.atmo4}`,
      itemBorderRadius: `0px 0px ${theme.radii.round} ${theme.radii.round}`,
    },
    file: {
      progressHeight: "4px",
      borderWidth: "2px",
      previewContainerSize: "48px",
      imageSize: "40px",
    },
    preview: {
      buttonSize: "48px",
      overlayColor: theme.colors.primary_20,
      overlayOpacity: "1",
      overlayBorderRadius: theme.radii.base,
    },
  },
  dropDownMenu: {
    borderRadius: theme.radii.base,
    hoverColor: theme.colors.primary_20,
    borderOpened: `1px solid ${theme.colors.secondary_80}`,
    borderClosed: "1px solid transparent",
    extensionHeight: "0px",
    extensionBorderColor: theme.colors.secondary_80,
  },
  pagination: {
    pageSizeBorderColor: theme.colors.secondary_80,
    pageSizeHoverBorderColor: theme.colors.secondary_80,
  },
  actionsGeneric: {},
  bulkActions: {
    separatorDisplay: "flex",
    border: `1px solid ${theme.colors.atmo4}`,
    backgroundColor: theme.colors.atmo2,
    padding: `${theme.space.xs} ${theme.space.md}`,
    anySelectedBackgroundColor: theme.colors.primary_20,
  },
  table: {
    headerHoverColor: "transparent",
    headerBorderTopColor: "transparent",
    selectedRowBackgroundColor: theme.colors.atmo2,
    rowBorderColor: theme.colors.atmo4,
    rowBackgroundColor: theme.colors.atmo1,
    rowBorderRadius: theme.radii.base,
    rowListBackgroundColor: "transparent",
    rowListBorderRadius: theme.radii.round,
    rowListBorderColor: theme.colors.atmo4,
    rowStripedBackgroundColorEven: theme.colors.atmo1,
    rowStripedBackgroundColorOdd: "transparent",
    rowExpandBackgroundColor: theme.colors.atmo2,
    rowHoverColor: theme.colors.primary_20,
    rowHoverBorderColor: theme.colors.atmo4,
    rowSortedColor: theme.colors.primary,
    rowSortedColorAlpha: "0.1",
    cellPaddingTop: `calc(${theme.space.xs} - 2px )`,
    cellPaddingBottom: `calc(${theme.space.xs} - 3px )`,
    cellListBorder: "none",
    cellBorder: `solid 1px ${theme.colors.atmo4}`,
  },
  calendar: {
    border: `1px solid ${theme.colors.secondary_80}`,
    borderRadius: theme.radii.base,
    cellHoverColor: theme.colors.primary_20,
    headerInputBorderBottom: `1px solid ${theme.colors.secondary_80}`,
    headerInputBorderTop: `1px solid ${theme.colors.secondary_80}`,
    headerInputBorderLeft: `1px solid ${theme.colors.secondary_80}`,
    headerInputBorderRight: `1px solid ${theme.colors.secondary_80}`,
    headerInputFontColor: theme.colors.secondary_80,
    headerInputFontSize: theme.fontSizes.base,
    headerInputFontLetterSpacing: "string",
    headerInputFontLineHeight: theme.lineHeights.base,
    headerInputFontWeight: theme.fontWeights.normal,
  },
  globalActions: {
    sectionVariant: "title4",
  },
  emptyState: {
    titleVariant: "title4",
    titleMarginTop: "4px",
  },
  tooltip: {
    borderRadius: theme.radii.round,
  },
  verticalNavigation: {
    justifyContent: "flex-start",
    hoverColor: theme.colors.primary_20,
    activeBorderLeft: `4px solid ${theme.colors.secondary}`,
    inactiveBorderLeft: `4px solid transparent`,
    actionsMarginTop: "auto",
  },
  slider: {
    dragBarColor: theme.colors.primary_20,
    ringColor: theme.colors.primary_20,
    ringOpacity: "100%",
  },
  stepNavigation: {
    separatorMargin: "4px",
    defaultSeparatorHeight: 1,
    simpleSeparatorHeight: 1,
  },
  filterGroup: {
    applyButtonVariant: "primary",
    cancelButtonVariant: "secondarySubtle",
    applyButtonMarginRight: "8px",
    rightPanelBorderLeft: `1px solid ${theme.colors.atmo3}`,
    rightPanelShadow: "none",
    partialCounterFontWeight: theme.fontWeights.normal,
  },
  multiButton: {
    disabledBackgroundColor: theme.colors.atmo3,
  },
  datePicker: {
    dropdownPlaceholderColor: theme.colors.secondary_80,
    placeholderVariant: "label",
  },
  scrollTo: {
    horizontal: {
      dotDisplay: "flex",
      buttonHeight: "48px",
      buttonHoverBackgroundColor: "transparent",
      buttonBottomBorder: "none",
      selectedButtonBottomBorder: "none",
      textPadding: "3px 10px",
      textMaxWidth: "120px",
    },
    dotRootSize: "16px",
    dotRootRadius: "50%",
    dotHoverBackgroundColor: theme.colors.primary_20,
    dotHoverColor: theme.colors.secondary,
    dotHoverSize: "6px",
    dotNotSelectedColor: theme.colors.secondary_60,
    dotNotSelectedSize: "4px",
    dotSelectedSize: 6,
    backgroundColorOpacity: 0.9,
    backgroundColorBlur: "4px",
  },
  inlineEditor: {
    hoverBorderColor: theme.colors.primary,
    activeBorderColor: theme.colors.secondary,
    borderWidth: "1px",
  },
  queryBuilder: {
    ruleSubGroupLeftConnectorPosition: "-38px",
    ruleSubGroupContainerLeftConnectorPosition: "-33px",
    ruleLeftConnectorPosition: `calc( -1 * 17px)`,
    ruleConnectorHorizontalSize: "17px",
    ruleConnectorHeight: "39px",
    actionsContainerMarginTop: "24px",
    topActionButtonContainerBottom: `calc(-1 * ${theme.space.md} * 0.5 - 3px)`,
    topActionButtonContainerRight: `calc(${theme.space.sm} * 1.75 + 2px)`,
    topGroupPaddingBottom: `calc(${theme.space.md} * 3)`,
    border: `1px solid ${theme.colors.atmo4}`,
  },
  colorPicker: {
    inputValueVariant: "label",
    panelMinWidth: "266px",
    panelPadding: "16px",
    pickersFlexDirection: "column",
    hueHeight: "8px",
    hueWidth: "232px",
    hueDirection: "horizontal",
    hueMarginTop: "18px",
    hueBorderRadius: `calc(2*${theme.radii.base})`,
    hueSliderWidth: "12px",
    hueSliderHeight: "12px",
    hueSliderBorderRadius: theme.radii.circle,
    hueSliderBackground: "transparent",
    hueSliderBorder: "2px solid #fff",
    hueSliderMarginLeft: "0px",
    saturationWidth: "232px",
    saturationHeight: "140px",
    saturationMarginRight: "0px",
    saturationBorderRadius: theme.radii.base,
    saturationPointerWidth: "8px",
    saturationPointerHeight: "8px",
    colorPickerWidth: "232px",
    recommendedColorsRootWidth: "232px",
    recommendedColorsWidth: "calc(100% + 8px)",
    recommendedColorsMargin: "-4px -4px",
    recommendedColorsBottomPadding: "24px",
    recommendedColorsSwatchWidth: "32px",
    recommendedColorsSwatchHeight: "32px",
    recommendedColorsSwatchMargin: "4px",
    recommendedColorsSwatchBorderRadius: theme.radii.base,
    fieldsPaddingTop: "18px",
    fieldsMarginRight: "0px",
    fieldsHexPaddingRight: "4px",
    fieldsRgbPaddingLeft: "4px",
    fieldsHexWidth: "82px",
    fieldsRgbWidth: "50px",
    addSavedColorButtonMargin: "4px",
    addSavedColorButtonWidth: "32px",
    addSavedColorButtonHeight: "32px",
    savedColorsWidth: "calc(100% + 8px)",
    savedColorsMargin: "-4px -4px",
    savedColorsSwatchWidth: "32px",
    savedColorsSwatchHeight: "32px",
    savedColorsSwatchMargin: "4px",
    savedColorsSwatchBorderRadius: theme.radii.base,
  },
  carousel: {
    xsControlsDisplay: "flex",
    counterContainerDisplay: "none",
    mainContainerFlexDirection: "column",
    controlsBorder: `1px solid ${theme.colors.atmo4}`,
    controlsBackgroundColor: theme.colors.atmo2,
    controlsJustifyContent: "center",
    thumbnailBorderRadius: theme.radii.round,
    thumbnailSelectedBorder: "none",
  },
  drawer: {
    backDropBackgroundColor: theme.colors.atmo4,
  },
  forms: {
    infoMessage: {
      textColor: theme.colors.secondary_80,
    },
    label: {
      fontWeight: theme.fontWeights.normal,
    },
  },
  snackbar: {
    actionButtonVariant: "secondarySubtle",
    actionMarginLeft: "auto",
  },
}));

export default ds5;

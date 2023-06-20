import { forwardRef, isValidElement } from "react";
import SnackbarContent, {
  SnackbarContentProps as MuiSnackbarContentProps,
} from "@mui/material/SnackbarContent";
import { ExtractNames, iconVariant, setId } from "@core/utils";
import { HvBaseProps } from "@core/types";
import { HvActionsGeneric, HvActionGeneric } from "@core/components";
import { HvSnackbarVariant } from "../Snackbar";
import { staticClasses, useClasses } from "./SnackbarContentWrapper.styles";

export { staticClasses as snackbarContentClasses };

export type HvSnackbarContentClasses = ExtractNames<typeof useClasses>;

export type HvSnackbarContentClassKey =
  | "root"
  | "success"
  | "error"
  | "default"
  | "warning"
  | "message"
  | "messageSpan"
  | "messageText"
  | "action"
  | "iconVariant";

export interface HvSnackbarContentProps
  extends Omit<MuiSnackbarContentProps, "variant" | "action" | "classes">,
    HvBaseProps {
  /** The message to display. */
  label?: React.ReactNode;
  /** Variant of the snackbar. */
  variant: HvSnackbarVariant;
  /** Controls if the associated icon to the variant should be shown. */
  showIcon?: boolean;
  /** Custom icon to replace the variant default. */
  customIcon?: React.ReactNode;
  /** Action to display. */
  action?: React.ReactNode | HvActionGeneric;
  /** The callback function ran when an action is triggered, receiving `action` as param */
  actionCallback?: (
    event: React.SyntheticEvent,
    id: string,
    action: HvActionGeneric
  ) => void;
  /** A Jss Object used to override or extend the styles applied to the component. */
  classes?: Partial<HvSnackbarContentClasses>;
}

export const HvSnackbarContent = forwardRef<
  HTMLDivElement,
  HvSnackbarContentProps
>(
  (
    {
      className,
      id,
      classes: classesProp = {},
      label,
      variant,
      showIcon,
      customIcon,
      action,
      actionCallback,
      ...others
    },
    ref
  ) => {
    const icon = customIcon || (showIcon && iconVariant(variant, "base_dark"));
    const innerAction: any = isValidElement(action) ? action : [action];

    const { classes, cx } = useClasses(classesProp);

    return (
      <SnackbarContent
        ref={ref}
        id={id}
        classes={{
          root: cx(classes?.root),
          message: cx(classes?.message),
        }}
        className={cx(className, classes?.[variant])}
        message={
          <div id={setId(id, "message")} className={cx(classes?.messageSpan)}>
            {icon && <div className={cx(classes?.iconVariant)}>{icon}</div>}
            <div className={cx(classes?.messageText)}>{label}</div>
            {action && (
              <div id={setId(id, "action")} className={cx(classes?.action)}>
                <HvActionsGeneric
                  id={id}
                  category="secondaryGhost"
                  actions={innerAction}
                  actionsCallback={actionCallback}
                />
              </div>
            )}
          </div>
        }
        {...others}
      />
    );
  }
);

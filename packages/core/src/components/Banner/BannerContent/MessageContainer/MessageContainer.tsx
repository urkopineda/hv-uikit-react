import clsx from "clsx";
import { HvBaseProps } from "../../../../types";
import { HvActionGeneric, HvActionsGeneric } from "components";
import { messageContainerClasses, HvMessageContainerClasses } from ".";
import {
  StyledIconContainer,
  StyledTypography,
  StyledMessageContainer,
} from "./MessageContainer.styles";
import { useId } from "hooks";

export type HvMessageContainerProps = HvBaseProps & {
  /** Icon to be presented. */
  icon?: React.ReactNode;
  /** The message to display. */
  message?: React.ReactNode;
  /** Actions to display on message. */
  actionsOnMessage?: React.ReactNode | HvActionGeneric[];
  /** The callback function ran when an action is triggered, receiving `actionsOnMessage` as param */
  actionsOnMessageCallback?: (
    event: React.SyntheticEvent,
    id: string,
    action: HvActionGeneric
  ) => void;
  /** A Jss Object used to override or extend the styles applied to the component. */
  classes?: HvMessageContainerClasses;
};

export const HvMessageContainer = ({
  id,
  classes,
  icon,
  actionsOnMessage,
  actionsOnMessageCallback,
  message,
}: HvMessageContainerProps) => {
  return (
    <>
      {icon && (
        <StyledIconContainer
          className={clsx(
            messageContainerClasses.iconContainer,
            classes?.iconContainer
          )}
        >
          {icon}
        </StyledIconContainer>
      )}
      <StyledTypography
        id={useId(id, "message")}
        className={clsx(messageContainerClasses.message, classes?.message)}
      >
        {message}
      </StyledTypography>
      {actionsOnMessage && (
        <StyledMessageContainer
          id={useId(id, "message-container")}
          className={clsx(
            messageContainerClasses.actionMessageContainer,
            classes?.actionMessageContainer
          )}
        >
          <HvActionsGeneric
            id={id}
            category="semantic"
            actions={actionsOnMessage}
            actionsCallback={actionsOnMessageCallback}
          />
        </StyledMessageContainer>
      )}
    </>
  );
};

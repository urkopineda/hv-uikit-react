import { memo, useContext, useState } from "react";

import { HvFormStatus, HvInput } from "@core/components";

import { QueryBuilderContext } from "../../../Context";
import { useClasses } from "./TextValue.styles";

export interface TextValueProps {
  id?: number;
  value?: any;
  initialTouched?: boolean;
}

export const TextValue = ({
  id,
  value = "",
  initialTouched = false,
}: TextValueProps) => {
  const { classes } = useClasses();

  const context = useContext(QueryBuilderContext);
  const { labels, dispatchAction, readOnly } = context;
  const [touched, setTouched] = useState(initialTouched);
  const isValid = value != null && value.toString().trim() !== "";

  let status: HvFormStatus = isValid ? "valid" : "invalid";
  status = !touched ? "standBy" : status;

  return (
    <HvInput
      className={classes.location}
      label={labels.rule.value.text.label}
      required
      status={status}
      statusMessage={labels.rule.value.text.validation.required}
      value={value}
      inputProps={{
        autoComplete: "off",
      }}
      onChange={(t, v) => {
        dispatchAction({
          type: "set-value",
          id,
          value: v,
        });
      }}
      onBlur={() => {
        setTouched(true);
      }}
      onKeyDown={(e: any) => {
        if (e.key === "Enter") {
          e.preventDefault();
        }
      }}
      placeholder="—"
      readOnly={readOnly}
    />
  );
};

export default memo(TextValue);

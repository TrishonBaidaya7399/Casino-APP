"use client";

import * as React from "react";
import Input from "./input";
import Checkbox from "./checkbox";

interface CheckboxWithInputProps {
  checkboxLabel: string;
  inputLabel?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const CheckboxWithInput: React.FC<CheckboxWithInputProps> = ({
  checkboxLabel,
  inputLabel,
  inputProps,
}) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="mb-4">
      {/* Reuse the existing Checkbox component */}
      <Checkbox
        label={checkboxLabel}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />

      {checked && (
        <div className="mt-2">
          <Input label={inputLabel} {...inputProps} />
        </div>
      )}
    </div>
  );
};

CheckboxWithInput.displayName = "CheckboxWithInput";

export default CheckboxWithInput;

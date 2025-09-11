"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface BaseProps {
  label?: string;
  errorMessage?: string;
  optional?: boolean;
}

interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    BaseProps {
  checked?: boolean; // optional controlled checked
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, errorMessage, optional, checked, onChange, ...props }, ref) => {
    const hasError = !!errorMessage;

    // ✅ Internal state for uncontrolled usage
    const [internalChecked, setInternalChecked] = React.useState(false);

    const isChecked = checked !== undefined ? checked : internalChecked;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (checked === undefined) {
        setInternalChecked(e.target.checked);
      }
      onChange?.(e);
    };

    return (
      <div className="mb-4">
        <label className="flex items-center gap-2 cursor-pointer text-sm text-white">
          <input
            type="checkbox"
            ref={ref}
            className="sr-only"
            checked={isChecked}
            onChange={handleChange}
            {...props}
          />
          <span
            className={cn(
              "w-5 h-5 relative flex-shrink-0 rounded-md border-2 bg-gray-800 transition-all duration-300 flex items-center justify-center",
              hasError ? "border-red-500" : "border-white-3",
              isChecked ? "bg-sports border-sports" : ""
            )}
          >
            {isChecked && (
              <span className="absolute text-white text-sm pointer-events-none select-none">
                ✓
              </span>
            )}
          </span>
          {label && (
            <span>
              {label}{" "}
              {optional && <span className="text-gray-500">(Optional)</span>}
            </span>
          )}
        </label>

        {errorMessage && (
          <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;

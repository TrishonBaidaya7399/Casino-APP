"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface BaseProps {
  label?: string;
  errorMessage?: string;
  optional?: boolean;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>, BaseProps {
  options: { value: string; label: string }[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, errorMessage, options, optional, ...props }, ref) => {
    const hasError = !!errorMessage;

    return (
      <div className="mb-4">
        {label && (
          <label className="block text-sm text-white mb-1">
            {label} {optional && <span className="text-gray-500">(Optional)</span>}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            className={cn(
              "w-full bg-background-2 text-white border-2 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 appearance-none transition-all duration-300",
              hasError ? "border-red-500" : "border-white-3",
              props.disabled && "opacity-50 cursor-not-allowed"
            )}
            {...props}
          >
            <option value="">Select an option</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-lg pointer-events-none">
            {hasError ? <span className="text-red-500">✖</span> : <ChevronDown className="w-4 h-4 text-white-3" />}
          </span>
        </div>
        {errorMessage && <p className="text-red-500 text-xs mt-1">{errorMessage}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;

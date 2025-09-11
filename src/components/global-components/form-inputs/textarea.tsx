"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface BaseProps {
  label?: string;
  errorMessage?: string;
  optional?: boolean;
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, BaseProps {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, errorMessage, optional, ...props }, ref) => {
    const hasError = !!errorMessage;

    return (
      <div className="mb-4">
        {label && (
          <label className="block text-sm text-white mb-1">
            {label} {optional && <span className="text-gray-500">(Optional)</span>}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            "w-full bg-gray-800 text-white border-2 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 resize-y transition-all duration-300",
            hasError ? "border-red-500" : "border-white-3",
            props.disabled && "opacity-50 cursor-not-allowed"
          )}
          {...props}
        />
        {errorMessage && <p className="text-red-500 text-xs mt-1">{errorMessage}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;

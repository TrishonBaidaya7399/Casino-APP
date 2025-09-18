import * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix"> {
  prefix?: React.ReactNode;
}
function Input({ className, type, prefix, ...props }: InputProps) {
  return (
    <div className="relative flex items-center w-full">
      {prefix && (
        <span
          className="absolute left-3 flex items-center pointer-events-none"
          aria-hidden="true"
        >
          {prefix}
        </span>
      )}
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-sidebar flex h-9 w-full min-w-0 rounded-md bg-transparent py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-0.5",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          prefix ? "pl-10" : "px-3", 
          className
        )}
        {...props}
      />
    </div>
  );
}

export { Input };

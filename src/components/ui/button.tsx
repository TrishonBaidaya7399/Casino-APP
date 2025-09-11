import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonVariant =
  | "gray"
  | "outline"
  | "orangeGradient"
  | "purpleGradient"
  | "greenGradient";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  asChild?: boolean; // for next/link support
  href?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  gray: "bg-white-3 text-white hover:bg-gray-500",
  outline:
    "border border-2 border-white-3 bg-background text-white hover:bg-gray-900 transition-colors",
  orangeGradient:
    "bg-gradient-to-t from-orange-1 to-yellow-1 text-white hover:opacity-80",
  purpleGradient:
    "bg-gradient-to-t from-purple-1 to-blue-1 text-white hover:opacity-80",
  greenGradient:
    "bg-gradient-to-t from-cyan-1 to-green-1 text-white hover:opacity-80",
};

export function Button({
  variant = "gray",
  fullWidth = false,
  className,
  icon,
  children,
  asChild = false,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer",
    fullWidth && "w-full",
    variantClasses[variant],
    className
  );

  if (asChild && href) {
    return (
      <Link href={href} className={classes}>
        {icon && <span className="size-5">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {icon && <span className="size-5">{icon}</span>}
      {children}
    </button>
  );
}

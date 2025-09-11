import React from "react";

function CloseSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-4 h-4 ${className}`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path d="M1 15L14.9999 1.00002" />
      <path d="M1 1L14.9999 14.9999" />
    </svg>
  );
}

export default CloseSVG;

import React from "react";

function HamburgerSVG({ className = "" }: { className?: string }) {
    return (
        <svg
            className={`w-6 h-4 ${className}`}
            viewBox="0 0 22 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeOpacity={1}
            strokeWidth={2}
        >
            <path d="M0 1H22" />
            <path d="M0 7H22" />
            <path d="M0 13H22" />
        </svg>
    );
}

export default HamburgerSVG;

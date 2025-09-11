import React from "react";

function WhiteArrowSVG({ className = "" }: { className?: string }) {
    return (
        <svg className={`${className}`} viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7.5H3.5M17 7.5L11 1.5M17 7.5L11 13.5M17 7.5H6.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default WhiteArrowSVG;

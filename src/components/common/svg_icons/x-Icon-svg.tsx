import React from "react";

function XIconSVG({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-4 h-4 ${className}`} viewBox="0 0 16 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.2174 0.269531H14.4663L9.55298 5.88519L15.3332 13.5268H10.8073L7.26253 8.89222L3.20647 13.5268H0.956125L6.21146 7.52026L0.666504 0.269531H5.30724L8.51143 4.50575L12.2174 0.269531ZM11.428 12.1807H12.6742L4.6301 1.54495H3.29281L11.428 12.1807Z"/>
    </svg>

  );
}

export default XIconSVG;

import React from "react";

function SponsorSVG({
  color = "currentColor",
  size = 24,
}: {
 color?: string;
  size?: number;
}) {
  return (
    <div>
      <svg
        width={`${size}`}
        height={`${size}`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.5"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.106 18.247C5.298 16.083 2 13.542 2 9.137C2 4.274 7.5 0.825 12 5.501V20.5C11 20.5 10 19.73 8.962 18.91C8.684 18.6927 8.39867 18.4717 8.106 18.247Z"
          fill={`${color}`}
        />
        <path
          d="M15.038 18.91C17.981 16.592 22 14 22 9.138C22 4.276 16.5 0.824998 12 5.501V20.5C13 20.5 14 19.73 15.038 18.91Z"
          fill={`${color}`}
        />
      </svg>
    </div>
  );
}

export default SponsorSVG;

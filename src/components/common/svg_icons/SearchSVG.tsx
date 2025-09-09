import React from "react";

function SearchSVG({
  size = 24,
}: {
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
        <mask
          id="mask0_1_281"
        //   style="mask-type:luminance"
          maskUnits="userSpaceOnUse"
          x="3"
          y="3"
          width="18"
          height="18"
        >
          <path
            d="M11.6 19.2C15.7974 19.2 19.2 15.7974 19.2 11.6C19.2 7.40264 15.7974 4 11.6 4C7.40264 4 4 7.40264 4 11.6C4 15.7974 7.40264 19.2 11.6 19.2Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M18.4 18.4L20 20"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </mask>
        <g mask="url(#mask0_1_281)">
          <path d="M2.40002 2.39999H21.6V21.6H2.40002V2.39999Z" className="bg-muted fill-muted" />
        </g>
      </svg>
    </div>
  );
}

export default SearchSVG;

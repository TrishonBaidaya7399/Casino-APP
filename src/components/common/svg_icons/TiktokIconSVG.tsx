import React from "react";

function TiktokIconSVG() {
  const uid = React.useId();
  return (
    <div>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath={`url(#${uid}-clip0_1_822)`}>
          <path
            d="M11.3817 0.000244141H8.68519V10.8988C8.68519 12.1974 7.64811 13.264 6.35749 13.264C5.06687 13.264 4.02977 12.1974 4.02977 10.8988C4.02977 9.62344 5.04383 8.57993 6.28836 8.53358V5.79736C3.54579 5.84371 1.33331 8.093 1.33331 10.8988C1.33331 13.7278 3.59188 16.0002 6.38055 16.0002C9.16916 16.0002 11.4277 13.7046 11.4277 10.8988V5.31038C12.4418 6.05242 13.6863 6.493 15 6.5162V3.77996C12.9719 3.71039 11.3817 2.04082 11.3817 0.000244141Z"
            className="bg-muted fill-muted"
            fillOpacity="0.55"
          />
        </g>
        <defs>
       <clipPath id={`${uid}-clip0_1_822`}>
            <rect
              width="16"
              height="16"
              className="bg-muted fill-muted"
              transform="translate(0 0.000244141)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default TiktokIconSVG;

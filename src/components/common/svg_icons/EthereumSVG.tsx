import React from "react";

function EthereumSVG() {
  const uid = React.useId();
  return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath={`url(#${uid}-clip0_1_546)`}>
          <path
            d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
            className="bg-muted fill-muted"
          />
          <path
            d="M7.9945 8.2765L4.634 7.988L7.994 6.087V8.2765H7.9945ZM7.9945 10.5065V13.9765C6.826 12.1575 5.538 10.1555 4.5 8.535C5.725 9.225 7.004 9.946 7.9945 10.5065ZM7.9945 5.4725L4.5 7.4225L7.9945 2V5.4725Z"
            className="bg-primary fill-primary"
          />
          <path
            d="M11.355 7.988L7.99451 8.2765V6.087L11.355 7.988ZM7.99451 10.507C8.98451 9.947 10.263 9.225 11.4885 8.535C10.4505 10.156 9.16251 12.158 7.99451 13.976V10.507ZM7.99451 5.4725V2L11.4885 7.4225L7.99451 5.4725Z"
            className="bg-primary fill-primary"
            fillOpacity="0.601"
          />
          <path
            opacity="0.2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.99451 8.27654L11.3545 7.98804L7.99451 9.87554V8.27654Z"
            className="bg-primary fill-primary"
          />
          <path
            opacity="0.603"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.99404 8.27654L4.63354 7.98804L7.99404 9.87554V8.27654Z"
            className="bg-primary fill-primary"
          />
        </g>
        <defs>
          <clipPath id={`${uid}-clip0_1_546`}>
            <rect width="16" height="16" className="bg-primary fill-primary" />
          </clipPath>
        </defs>
      </svg>
  );
}

export default EthereumSVG;

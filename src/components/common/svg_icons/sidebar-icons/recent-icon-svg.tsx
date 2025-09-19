function RecentIconSvg({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`size-5 ${className}`}
    >
      <path
        d="M11 7V11L13.5 13.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 2.33801C7.51945 1.45874 9.24448 0.997119 11 1.00001C16.523 1.00001 21 5.47701 21 11C21 16.523 16.523 21 11 21C5.477 21 1 16.523 1 11C1 9.17901 1.487 7.47001 2.338 6.00001"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default RecentIconSvg;

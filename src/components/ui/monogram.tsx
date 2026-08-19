export function Monogram({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Ilias Chrysovergis Monogram"
      role="img"
    >
      {/* Precision Geometric Monogram: I and C letterforms */}
      <rect
        x="8"
        y="7"
        width="4"
        height="26"
        rx="2"
        fill="currentColor"
      />
      <path
        d="M22 9C22 7.89543 22.8954 7 24 7H28C32.4183 7 36 10.5817 36 15V15C36 15.5523 35.5523 16 35 16H25C23.3431 16 22 14.6569 22 13V9Z"
        fill="currentColor"
      />
      <path
        d="M22 27C22 28.6569 23.3431 30 25 30H35C35.5523 30 36 30.4477 36 31V31C36 35.4183 32.4183 39 28 39H24C22.8954 39 22 38.1046 22 37V27Z"
        fill="currentColor"
      />
      <rect
        x="22"
        y="18"
        width="11"
        height="4"
        rx="2"
        fill="currentColor"
        opacity="0.4"
      />
    </svg>
  );
}

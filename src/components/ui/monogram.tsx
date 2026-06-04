export function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="IC monogram"
      role="img"
    >
      {/* Geometric monogram: I and C letterforms */}
      <rect
        x="8"
        y="6"
        width="4.5"
        height="28"
        rx="1"
        fill="currentColor"
      />
      <path
        d="M22 10C22 8.34315 23.3431 7 25 7H28C32.4183 7 36 10.5817 36 15V15C36 15.5523 35.5523 16 35 16H26C25.4477 16 25 15.5523 25 15V10Z"
        fill="var(--accent)"
      />
      <path
        d="M25 18C25 17.4477 25.4477 17 26 17H35C35.5523 17 36 17.4477 36 18V22C36 22.5523 35.5523 23 35 23H26C25.4477 23 25 22.5523 25 22V18Z"
        fill="var(--accent)"
        opacity="0.7"
      />
      <path
        d="M22 30C22 31.6569 23.3431 33 25 33H28C32.4183 33 36 29.4183 36 25V25C36 24.4477 35.5523 24 35 24H26C25.4477 24 25 24.4477 25 25V30Z"
        fill="var(--accent)"
      />
    </svg>
  );
}

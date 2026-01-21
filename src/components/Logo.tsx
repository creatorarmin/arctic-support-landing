const Logo = ({ className = "h-8 w-8" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="premiumBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1F4ED8" />
          <stop offset="50%" stopColor="#1E40AF" />
          <stop offset="100%" stopColor="#172554" />
        </linearGradient>
      </defs>
      <rect
        x="18"
        y="22"
        width="92"
        height="60"
        rx="18"
        ry="18"
        fill="url(#premiumBlue)"
        stroke="#FFFFFF"
        strokeWidth="2.5"
      />
      <path
        d="M50 82 L44 102 L66 82 Z"
        fill="url(#premiumBlue)"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="52" cy="52" r="4" fill="#FFFFFF" />
      <circle cx="64" cy="52" r="4" fill="#FFFFFF" />
      <circle cx="76" cy="52" r="4" fill="#FFFFFF" />
    </svg>
  );
};

export default Logo;

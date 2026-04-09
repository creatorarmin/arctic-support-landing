const Logo = ({ className = "h-8 w-8" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4A843" />
          <stop offset="50%" stopColor="#C4942F" />
          <stop offset="100%" stopColor="#A67C1E" />
        </linearGradient>
      </defs>
      <rect
        x="18"
        y="22"
        width="92"
        height="60"
        rx="14"
        ry="14"
        fill="hsl(225, 60%, 30%)"
      />
      <path
        d="M50 82 L44 102 L66 82 Z"
        fill="hsl(225, 60%, 30%)"
        strokeLinejoin="round"
      />
      <circle cx="52" cy="52" r="4" fill="url(#logoGold)" />
      <circle cx="64" cy="52" r="4" fill="url(#logoGold)" />
      <circle cx="76" cy="52" r="4" fill="url(#logoGold)" />
    </svg>
  );
};

export default Logo;

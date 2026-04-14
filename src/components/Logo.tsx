const Logo = ({ className = "h-8 w-8" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="32" height="32" rx="6" fill="hsl(0 0% 92%)" />
      {/* Vertical stem */}
      <path
        d="M9 7 L12.5 7 L12.5 25 L9 25 Z"
        fill="hsl(0 0% 4%)"
        rx="1"
      />
      {/* Upper diagonal arm */}
      <path
        d="M13 16 L22 7 L24 7 L24 9.5 L15.5 17 Z"
        fill="hsl(0 0% 4%)"
      />
      {/* Lower diagonal arm */}
      <path
        d="M13 16.5 L15.5 15.5 L24 23 L24 25.5 L22 25.5 Z"
        fill="hsl(0 0% 4%)"
      />
    </svg>
  );
};

export default Logo;

const Logo = ({ className = "h-8 w-8" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="32" height="32" rx="6" fill="hsl(0 0% 92%)" />
      {/* K built from geometric bars */}
      <rect x="9" y="7" width="3.5" height="18" rx="1" fill="hsl(0 0% 4%)" />
      <rect
        x="12"
        y="14.5"
        width="3.5"
        height="12"
        rx="1"
        fill="hsl(0 0% 4%)"
        transform="rotate(-52 12 14.5)"
      />
      <rect
        x="12"
        y="17"
        width="3.5"
        height="12"
        rx="1"
        fill="hsl(0 0% 4%)"
        transform="rotate(-128 12 17)"
      />
    </svg>
  );
};

export default Logo;

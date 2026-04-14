const Logo = ({ className = "h-8 w-8" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="32" height="32" rx="6" fill="hsl(0 0% 92%)" />
      <text
        x="16"
        y="23"
        textAnchor="middle"
        fill="hsl(0 0% 4%)"
        fontSize="18"
        fontFamily="JetBrains Mono, monospace"
        fontWeight="700"
      >
        K
      </text>
    </svg>
  );
};

export default Logo;

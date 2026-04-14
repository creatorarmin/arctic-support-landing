const Logo = ({ className = "h-8 w-8" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="32" height="32" rx="2" fill="currentColor" />
      <text
        x="16"
        y="22"
        textAnchor="middle"
        fill="hsl(0 0% 98%)"
        fontSize="16"
        fontFamily="JetBrains Mono, monospace"
        fontWeight="700"
      >
        K
      </text>
    </svg>
  );
};

export default Logo;

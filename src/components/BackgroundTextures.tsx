const BackgroundTextures = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Top-left polygon - lighter */}
      <div
        className="absolute -top-32 -left-32 h-[600px] w-[600px] opacity-30"
        style={{
          background: 'linear-gradient(135deg, hsl(220 15% 16%) 0%, transparent 70%)',
          clipPath: 'polygon(0% 0%, 100% 0%, 60% 100%, 0% 80%)',
        }}
      />
      
      {/* Top-right polygon - darker */}
      <div
        className="absolute -top-20 -right-20 h-[500px] w-[500px] opacity-40"
        style={{
          background: 'linear-gradient(225deg, hsl(220 20% 6%) 0%, transparent 60%)',
          clipPath: 'polygon(40% 0%, 100% 0%, 100% 70%, 70% 100%, 20% 50%)',
        }}
      />
      
      {/* Middle-left polygon - lighter */}
      <div
        className="absolute top-[40%] -left-40 h-[700px] w-[500px] opacity-25"
        style={{
          background: 'linear-gradient(90deg, hsl(220 15% 14%) 0%, transparent 80%)',
          clipPath: 'polygon(0% 20%, 80% 0%, 100% 50%, 60% 100%, 0% 80%)',
        }}
      />
      
      {/* Middle-right polygon - darker */}
      <div
        className="absolute top-[50%] -right-32 h-[600px] w-[400px] opacity-35"
        style={{
          background: 'linear-gradient(270deg, hsl(220 20% 5%) 0%, transparent 70%)',
          clipPath: 'polygon(30% 0%, 100% 20%, 100% 80%, 20% 100%, 0% 40%)',
        }}
      />
      
      {/* Bottom-left polygon - darker */}
      <div
        className="absolute bottom-0 -left-20 h-[500px] w-[600px] opacity-30"
        style={{
          background: 'linear-gradient(45deg, hsl(220 20% 6%) 0%, transparent 60%)',
          clipPath: 'polygon(0% 40%, 60% 0%, 100% 60%, 70% 100%, 0% 100%)',
        }}
      />
      
      {/* Bottom-right polygon - lighter */}
      <div
        className="absolute -bottom-32 -right-40 h-[600px] w-[700px] opacity-25"
        style={{
          background: 'linear-gradient(315deg, hsl(220 15% 15%) 0%, transparent 70%)',
          clipPath: 'polygon(20% 30%, 100% 0%, 100% 100%, 0% 100%, 40% 60%)',
        }}
      />
    </div>
  );
};

export default BackgroundTextures;

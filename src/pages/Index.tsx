import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero with warm radial glow */}
        <div className="texture-network-1 relative">
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse 80% 60% at 20% 50%, hsl(34 73% 78% / 0.12), transparent 70%), radial-gradient(ellipse 50% 50% at 80% 80%, hsl(355 48% 16% / 0.06), transparent 60%)',
          }} />
          <Hero />
        </div>

        {/* Features with subtle warm gradient */}
        <div className="relative">
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'linear-gradient(180deg, transparent 0%, hsl(34 73% 78% / 0.08) 40%, hsl(34 73% 78% / 0.05) 70%, transparent 100%)',
          }} />
          <Features />
        </div>

        {/* About with burgundy accent */}
        <div className="texture-network-2 relative">
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse 60% 50% at 75% 40%, hsl(355 48% 16% / 0.07), transparent 60%), radial-gradient(ellipse 70% 60% at 10% 70%, hsl(34 73% 78% / 0.1), transparent 60%)',
          }} />
          <About />
        </div>

        {/* Pricing with warm wash */}
        <div className="relative">
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse 90% 50% at 50% 30%, hsl(34 73% 78% / 0.1), transparent 70%), radial-gradient(ellipse 40% 40% at 90% 90%, hsl(355 48% 16% / 0.05), transparent 50%)',
          }} />
          <Pricing />
        </div>

        {/* CTA with burgundy gradient */}
        <div className="relative">
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'linear-gradient(180deg, transparent 0%, hsl(355 48% 16% / 0.06) 50%, hsl(34 73% 78% / 0.08) 100%)',
          }} />
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
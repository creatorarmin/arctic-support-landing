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
        <div className="texture-network-1">
          <Hero />
        </div>
        <Features />
        <div className="texture-network-2">
          <About />
        </div>
        <Pricing />
        <div className="texture-network-1">
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

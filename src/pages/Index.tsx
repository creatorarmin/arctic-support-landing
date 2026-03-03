import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background noise-texture">
      <Header />
      <main>
        <div className="section-grain">
          <Hero />
        </div>
        <Stats />
        <div className="section-grain-alt">
          <Features />
        </div>
        <About />
        <div className="section-grain">
          <Pricing />
        </div>
        <div className="section-grain-alt">
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

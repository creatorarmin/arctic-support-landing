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
        <Hero />
        <Stats />
        <div className="section-organic">
          <Features />
        </div>
        <About />
        <div className="section-organic-alt">
          <Pricing />
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

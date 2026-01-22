import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import BackgroundTextures from "@/components/BackgroundTextures";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <BackgroundTextures />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Stats />
        <Features />
        <About />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

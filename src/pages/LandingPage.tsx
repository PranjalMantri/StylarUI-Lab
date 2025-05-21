import Features from "../components/landing/Features";
import Footer from "../components/landing/Footer";
import HeroSection from "../components/landing/HeroSection";
import HowItWorks from "../components/landing/HowItWorks";
import Navbar from "../components/landing/Navbar";
import Pricing from "../components/landing/Pricing";

function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 antialiased overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <Features />
      <HowItWorks />
      <Pricing />
      <Footer />
    </div>
  );
}

export default LandingPage;

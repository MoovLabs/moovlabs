import Image from "next/image";
import Navigation from "./components/navigation";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/Herosection";
import ServicesSection from "./components/ServiceSection";
import WorkSection from "./components/WorkSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <WorkSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

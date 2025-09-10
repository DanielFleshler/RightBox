import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import SlideshowSection from "../components/SlideshowSection";
import ProductsSection from "../components/ProductsSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <SlideshowSection />
      <ProductsSection />
      <ContactSection />
    </>
  );
}

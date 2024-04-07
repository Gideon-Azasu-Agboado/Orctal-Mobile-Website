import Downloads from "./components/Downloads";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import PurposeSection from "./components/PurposeSection";

export default function Home() {
  return (
    <main>
      <Hero/>
      <PurposeSection/>
      <HowItWorks/>
      <Downloads/>
      <Footer/>
    </main>
  );
}

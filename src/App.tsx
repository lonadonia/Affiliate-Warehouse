import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Audience from './components/Audience';
import HowItWorks from './components/HowItWorks';
import PriceTracking from './components/PriceTracking';
import PricingModel from './components/PricingModel';
import WholesalerSafe from './components/WholesalerSafe';
import Testimonials from './components/Testimonials';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Audience />
      <HowItWorks />
      <PriceTracking />
      <PricingModel />
      <WholesalerSafe />
      <Testimonials />
      <GetStarted />
      <Footer />
    </div>
  );
}

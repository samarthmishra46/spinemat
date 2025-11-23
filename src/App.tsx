import Hero from './components/Hero';
import Bestsellers from './components/Bestsellers';
import WhyChoose from './components/WhyChoose';
import Reviews from './components/Reviews';
import Construction from './components/Construction';
import Benefits from './components/Benefits';
import Comparison from './components/Comparison';
import DeliveryWarranty from './components/DeliveryWarranty';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Bestsellers />
      <WhyChoose />
      <Reviews />
      <Construction />
      <Benefits />
      <Comparison />
      <DeliveryWarranty />
      <FinalCTA />
    </div>
  );
}

export default App;

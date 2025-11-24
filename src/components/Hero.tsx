import { Shield, Truck, Star, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

const heroImages = [
  { id: 1, url: 'https://res.cloudinary.com/dqyizevct/image/upload/v1763995068/30_Years_kgypdr.jpg', bg: 'from-blue-100 to-blue-200' },
  { id: 2, url: 'https://res.cloudinary.com/dqyizevct/image/upload/v1763995067/Relax_Plus_haabd4.jpg', bg: 'from-purple-100 to-purple-200' },
  { id: 3, url: 'https://res.cloudinary.com/dqyizevct/image/upload/v1763995062/15_Lacs_Plus_mxo9xa.jpg', bg: 'from-green-100 to-green-200' },
  { id: 4, url: 'https://res.cloudinary.com/dqyizevct/image/upload/v1763995064/Magnetic_Elite_womirc.jpg', bg: 'from-indigo-100 to-indigo-200' },
  { id: 5, url: 'https://res.cloudinary.com/dqyizevct/image/upload/v1763995069/Experia_culvga.jpg', bg: 'from-pink-100 to-pink-200' },
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Logo Space */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="text-3xl md:text-4xl font-bold text-gray-900">
           
           <img src="https://res.cloudinary.com/dqyizevct/image/upload/v1763995092/Spinemat_Mattress_2_kxwi08.avif" alt="Spinemat Logo" className="h-12 md:h-16" />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                India Is Choosing Better Sleep. You Deserve It Too.
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Premium orthopedic mattresses designed for pain-free mornings, deeper sleep, and zero partner disturbance
              </p>
            </div>

            <a 
              href="https://spinemat.com/collections/mattress"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
            >
              SHOP NOW
            </a>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-gray-200">
              <div className="flex flex-col items-center text-center space-y-2">
                <Shield className="w-8 h-8 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">25 Year Warranty</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <Truck className="w-8 h-8 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">All-India Delivery</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <Star className="w-8 h-8 text-blue-600 fill-blue-600" />
                <span className="text-sm font-medium text-gray-700">4.8★ Rated by 10,000+</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <MapPin className="w-8 h-8 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Made in India</span>
              </div>
            </div>
          </div>

          <div className="relative order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative aspect-[3307/2331]">
                {heroImages.map((image, index) => (
                  <div
                    key={image.id}
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <img 
                        src={image.url} 
                        alt={`Mattress ${image.id}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-xl z-10">
              <div className="text-sm font-semibold">Trusted by</div>
              <div className="text-2xl font-bold">10,000+</div>
              <div className="text-sm">Happy Sleepers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Shield, Truck, Star, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                India Is Choosing Better Sleep. You Deserve It Too.
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Premium orthopedic mattresses designed for pain-free mornings, deeper sleep, and zero partner disturbance
              </p>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              SHOP NOW
            </button>

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

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-64 h-64 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-6xl">😴</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-xl">
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

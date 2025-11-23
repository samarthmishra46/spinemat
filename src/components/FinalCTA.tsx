import { ArrowRight, Star } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          "Upgrade Your Sleep Today. Your Back Will Thank You Tomorrow."
        </h2>

        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
          Join 10,000+ happy customers who chose pain-free mornings and deeper sleep
        </p>

        <button className="bg-white text-blue-600 hover:bg-blue-50 px-12 py-5 rounded-xl text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center space-x-3 group">
          <span>Shop Bestsellers</span>
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
        </button>

        <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold mb-2">25 Years</div>
            <div className="text-blue-100">Warranty</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold mb-2">100 Days</div>
            <div className="text-blue-100">Free Trial</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold mb-2">4.8★</div>
            <div className="text-blue-100">Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}

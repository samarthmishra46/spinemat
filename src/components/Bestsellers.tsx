import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'MULTI COMFORT HR',
    benefit: 'Back Support That Works',
    price: '₹12,999',
    rating: 4.7,
    image: '🛏️',
  },
  {
    id: 2,
    name: 'RACER',
    benefit: 'Maximum Pressure Relief',
    price: '₹15,999',
    rating: 4.8,
    image: '🛏️',
  },
  {
    id: 3,
    name: 'RACER PLUS',
    benefit: 'Ultimate Comfort & Support',
    price: '₹18,999',
    rating: 4.9,
    image: '🛏️',
  },
  {
    id: 4,
    name: 'ELITE',
    benefit: 'Premium Orthopedic Excellence',
    price: '₹24,999',
    rating: 4.9,
    image: '🛏️',
  },
];

export default function Bestsellers() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Bestsellers
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-square bg-gradient-to-br from-slate-100 to-blue-50 flex items-center justify-center p-8">
                <span className="text-8xl">{product.image}</span>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-blue-600 font-medium">
                    {product.benefit}
                  </p>
                </div>

                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold text-gray-900">{product.rating}</span>
                  <span className="text-sm text-gray-500">Average Rating</span>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="text-2xl font-bold text-gray-900 mb-4">
                    {product.price}
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300">
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

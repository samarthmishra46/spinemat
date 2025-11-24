import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'MULTI COMFORT HR',
    benefit: 'Back Support That Works',
    price: '₹12,999',
    rating: 4.7,
    image: 'https://res.cloudinary.com/dqyizevct/image/upload/v1763994752/fin_v9fffd.webp',
  },
  {
    id: 2,
    name: 'RACER',
    benefit: 'Maximum Pressure Relief',
    price: '₹15,999',
    rating: 4.8,
    image: 'https://res.cloudinary.com/dqyizevct/image/upload/v1763994773/Racerblue2_tnkj04.webp',
  },
  {
    id: 3,
    name: 'RACER PLUS',
    benefit: 'Ultimate Comfort & Support',
    price: '₹18,999',
    rating: 4.9,
    image: 'https://res.cloudinary.com/dqyizevct/image/upload/v1763994958/Racer_PLUS_Golden_z6vs3y.webp',
  },
  {
    id: 4,
    name: 'ELITE',
    benefit: 'Premium Orthopedic Excellence',
    price: '₹24,999',
    rating: 4.9,
    image: 'https://res.cloudinary.com/dqyizevct/image/upload/v1763994958/Elite22_fnrjbe.webp',
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

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 snap-x snap-mandatory md:snap-none">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex-shrink-0 w-[280px] md:w-auto snap-center"
            >
              <div className="">
                <img src={product.image} alt="" />
               
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

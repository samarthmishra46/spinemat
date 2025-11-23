import { Layers } from 'lucide-react';

const layers = [
  {
    id: 1,
    title: 'High-Resilience Support Core',
    description: 'Foundation that maintains proper spinal alignment',
    icon: '🔵',
  },
  {
    id: 2,
    title: 'Pressure-Relief Comfort Layer',
    description: 'Reduces pressure points for pain-free sleep',
    icon: '🟢',
  },
  {
    id: 3,
    title: 'Motion-Isolation Structure',
    description: 'Eliminates partner disturbance completely',
    icon: '🟡',
  },
  {
    id: 4,
    title: 'Breathable Premium Quilted Cover',
    description: 'Keeps you cool throughout the night',
    icon: '⚪',
  },
];

export default function Construction() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Layers className="w-16 h-16 text-blue-300" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How Our Mattresses Are Built
          </h2>
          <p className="text-xl text-blue-100">
            Comfort That's Engineered, Not Accidental.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {layers.map((layer, index) => (
            <div
              key={layer.id}
              className="relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {index + 1}
              </div>

              <div className="text-6xl mb-6 text-center">{layer.icon}</div>

              <h3 className="text-xl font-bold mb-3 text-center">
                {layer.title}
              </h3>

              <p className="text-blue-100 text-center leading-relaxed">
                {layer.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
          <p className="text-2xl font-semibold text-blue-100">
            Every layer works together to deliver the sleep you deserve
          </p>
        </div>
      </div>
    </section>
  );
}

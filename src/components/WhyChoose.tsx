import { CheckCircle2 } from 'lucide-react';

const features = [
  'Scientifically engineered for full-body alignment',
  'Zero partner disturbance even if someone tosses',
  'High-Resilience Foam that stays supportive for years',
  'Breathable cover that stays cool through the night',
  '10-Year Anti-Sag Guarantee',
  'Free and safe delivery across India',
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Thousands Choose Spinemat Over Popular Brands
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700 font-medium leading-relaxed">{feature}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-2xl md:text-3xl font-bold text-gray-900 bg-white inline-block px-8 py-4 rounded-xl shadow-md">
            We don't sell soft foam. We sell pain-free mornings.
          </p>
        </div>
      </div>
    </section>
  );
}

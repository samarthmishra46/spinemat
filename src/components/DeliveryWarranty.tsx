import { Truck, Shield, RotateCcw, Package, Clock, HeadphonesIcon } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'All-India Delivery',
    description: 'We deliver to every corner of India',
  },
  {
    icon: RotateCcw,
    title: '100 Days Free Trial',
    description: 'Try it risk-free for over 3 months',
  },
  {
    icon: Shield,
    title: '25-Year Warranty',
    description: 'Industry-leading guarantee',
  },
  {
    icon: HeadphonesIcon,
    title: 'Easy Return Support',
    description: 'Hassle-free returns if needed',
  },
  {
    icon: Package,
    title: 'Secure Packaging',
    description: 'Multi-layer protection during transit',
  },
  {
    icon: Clock,
    title: 'Fast Dispatch',
    description: 'Quick processing and shipping',
  },
];

export default function DeliveryWarranty() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Delivery, Warranty & Returns
          </h2>
          <p className="text-xl text-gray-600">
            "Worry-Free Experience, Start to Finish."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center border-2 border-green-200">
          <p className="text-2xl font-bold text-gray-900">
            Sleep on it for 100 days. If you don't love it, we'll take it back — no questions asked.
          </p>
        </div>
      </div>
    </section>
  );
}

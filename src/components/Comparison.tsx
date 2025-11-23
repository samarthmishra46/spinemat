import { X, Check } from 'lucide-react';

const comparisonData = [
  {
    feature: 'Back Support',
    cheap: 'Low',
    spinemat: 'High HR Orthopedic',
    cheapIsGood: false,
  },
  {
    feature: 'Motion Isolation',
    cheap: 'Poor',
    spinemat: 'Excellent',
    cheapIsGood: false,
  },
  {
    feature: 'Durability',
    cheap: '1–2 Years',
    spinemat: '30 Years',
    cheapIsGood: false,
  },
  {
    feature: 'Cooling',
    cheap: 'Traps Heat',
    spinemat: 'Stays Cool',
    cheapIsGood: false,
  },
  {
    feature: 'Warranty',
    cheap: '0–2 Years',
    spinemat: '25-Year Guarantee',
    cheapIsGood: false,
  },
];

export default function Comparison() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Spinemat vs Others
          </h2>
          <p className="text-xl text-gray-600">
            See why thousands are making the switch
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-100 to-blue-50">
                  <th className="px-6 py-5 text-left text-lg font-bold text-gray-900">
                    Feature
                  </th>
                  <th className="px-6 py-5 text-center text-lg font-bold text-gray-600">
                    Cheap Mattress
                  </th>
                  <th className="px-6 py-5 text-center text-lg font-bold text-blue-600 bg-blue-50">
                    Spinemat
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-6 py-5 text-gray-900 font-semibold">
                      {row.feature}
                    </td>
                    <td className="px-6 py-5 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <X className="w-5 h-5 text-red-500" />
                        <span className="text-gray-600">{row.cheap}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-center bg-blue-50">
                      <div className="flex items-center justify-center space-x-2">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="font-semibold text-gray-900">{row.spinemat}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-6 text-center">
            <p className="text-white text-xl font-semibold">
              Don't settle for less. Choose quality that lasts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

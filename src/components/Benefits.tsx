import { Check } from 'lucide-react';

const benefits = [
  'Wake up without stiffness',
  'Stay comfortable in any sleeping position',
  'Stop losing sleep because of partner movement',
  'Fix posture automatically while resting',
];

export default function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-lg font-semibold">
              Spinemat & Sleep
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              "Bad Sleep Affects Everything — Your Back, Your Mood, Your Whole Day."
            </h2>

            <p className="text-xl text-gray-600">
              Don't let poor sleep quality control your life anymore.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              But… With the SpineMat:
            </h3>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg font-medium text-gray-800 pt-0.5">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Experience The Difference
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    text: 'If you have desk job pain like me, this is a blessing. Shoulders and hips feel supported. I sleep more deeply now and feel fresh even after six hours.',
    rating: 5,
  },
  {
    id: 2,
    text: 'I usually toss a lot at night but this mattress keeps me stable. I fall asleep faster and stay asleep longer. It almost feels like it resets my body every morning.',
    rating: 5,
  },
  {
    id: 3,
    text: 'My wife and I both struggle with back tension. After two weeks on this mattress, morning pain reduced for both of us. It genuinely helped more than any pillow or therapy we tried.',
    rating: 5,
  },
  {
    id: 4,
    text: 'My child sleeps better on this mattress than the old one. She doesn\'t wake up crying or uncomfortable anymore. I am planning to buy another one for our guest room.',
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real Customer Experiences
          </h2>
          <div className="flex items-center justify-center space-x-2 mt-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-xl font-semibold text-gray-900">4.8 Average</span>
            <span className="text-lg text-gray-600">| 10,000+ Happy Sleepers</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-blue-200" />

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed text-lg">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

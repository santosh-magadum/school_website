import { FaStar } from 'react-icons/fa';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      relation: 'Parent',
      text: 'Brilliant School has transformed my child\'s academic performance and confidence. The teachers are dedicated and caring, making learning enjoyable.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      relation: 'Parent',
      text: 'The holistic approach to education at Brilliant School ensures all-around development. My daughter has grown into a confident and responsible individual.',
      rating: 5,
    },
    {
      name: 'Arjun Patel',
      relation: 'Parent',
      text: 'Exceptional infrastructure, qualified faculty, and a nurturing environment. We are proud to have chosen Brilliant School for our son\'s education.',
      rating: 5,
    },
    {
      name: 'Sneha Desai',
      relation: 'Parent',
      text: 'The school\'s emphasis on values and character development is commendable. My child loves going to school every day.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-100 to-blue-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-teal-100 px-4 py-2 rounded-full mb-4">
            <p className="text-teal-700 font-bold text-sm">TESTIMONIALS</p>
          </div>
          <h2 className="text-4xl font-bold text-blue-900 mb-4">What Parents Say</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Hear from our parent community about their experiences with Brilliant School
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border-2 border-blue-200 rounded-2xl p-8 hover:border-orange-300 transition duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-teal-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">"{testimonial.text}"</p>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 mb-1">{testimonial.name}</p>
                <p className="text-blue-600 text-sm">{testimonial.relation} - Brilliant School</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-600 to-teal-500 rounded-2xl p-12 text-white text-center shadow-lg">
          <h3 className="text-3xl font-bold mb-4">Join Our Community</h3>
          <p className="text-teal-50 mb-8 max-w-2xl mx-auto text-lg">
            Be part of a school that transforms lives and inspires excellence in every student.
          </p>
          {/* <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg"> */}
          <button className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg">
            Start Your Child's Journey
          </button>
        </div>
      </div>
    </section>
  );
}

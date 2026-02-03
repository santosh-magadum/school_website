export default function NewsEvents() {
  const news = [
    {
      date: 'Feb 1, 2026',
      title: 'Annual Sports Day Celebration',
      description: 'Students showcase their athletic talents and team spirit in our grand annual sports festival.',
    },
    {
      date: 'Jan 26, 2026',
      title: 'Science Exhibition 2026',
      description: 'Our young scientists presented innovative projects and experiments in our prestigious science fair.',
    },
    {
      date: 'Jan 15, 2026',
      title: 'Republic Day Assembly',
      description: 'Students celebrate patriotic values through speeches, performances, and cultural programs.',
    },
  ];

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block text-yellow-500 font-bold text-sm mb-2">LATEST UPDATES</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">News & Events</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay updated with the latest happenings at Brilliant School Sankeshwar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-6">
                <span className="inline-block bg-yellow-500 text-blue-900 font-bold px-4 py-1 rounded-full text-sm">
                  {item.date}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{item.description}</p>
                <button className="text-teal-600 font-bold hover:text-teal-700 transition duration-300">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          {/* <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300"> */}
          {/* <button className="bg-blue-900 text-white font-bold py-3 px-8 rounded-lg transition duration-300"> */}
          <button className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-blue font-bold py-3 px-8 rounded-lg transition duration-300">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
}

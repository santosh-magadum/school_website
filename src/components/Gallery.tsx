export default function Gallery() {
  const galleryImages = [
    {
      title: 'Science Exhibition 2026',
      category: 'Academic',
      emoji: '🔬',
    },
    {
      title: 'Sports Day Highlights',
      category: 'Sports',
      emoji: '⚽',
    },
    {
      title: 'Annual Day Celebration',
      category: 'Cultural',
      emoji: '🎭',
    },
    {
      title: 'School Campus',
      category: 'Campus',
      emoji: '🏫',
    },
    {
      title: 'Class Activities',
      category: 'Academic',
      emoji: '📚',
    },
    {
      title: 'Art Workshop',
      category: 'Arts',
      emoji: '🎨',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block text-yellow-500 font-bold text-sm mb-2">MOMENTS FROM SCHOOL</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Capture the special moments of learning, growth, and joy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer transform hover:scale-105 transition duration-300"
            >
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-64 flex items-center justify-center">
                <div className="text-7xl">{image.emoji}</div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 flex items-end">
                <div className="w-full bg-gradient-to-t from-black to-transparent p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                  <span className="inline-block bg-yellow-500 text-blue-900 font-bold px-3 py-1 rounded-full text-xs mb-2">
                    {image.category}
                  </span>
                  <h3 className="font-bold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            View All Gallery
          </button>
        </div>
      </div>
    </section>
  );
}

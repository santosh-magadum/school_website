export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/Illustration */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl opacity-10 blur-xl"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl shadow-xl">
                <div className="text-6xl mb-6">🏫</div>
                <div className="text-2xl font-bold text-blue-900">Building Futures Since 2000</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-block text-yellow-500 font-bold text-sm mb-2">ABOUT OUR SCHOOL</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our School</h2>

            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Brilliant School Sankeshwar is an institution dedicated to fostering academic excellence, moral values, and holistic development. Our commitment to quality education reflects in every aspect of our school community.
            </p>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Founded with the vision to nurture young minds into responsible global citizens, we combine traditional values with modern teaching methodologies. Our serene and conducive learning environment provides the perfect foundation for students to thrive academically and personally.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-900">1000+</div>
                <p className="text-gray-600 text-sm mt-2">Students</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-900">50+</div>
                <p className="text-gray-600 text-sm mt-2">Faculty Members</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-900">25+</div>
                <p className="text-gray-600 text-sm mt-2">Years</p>
              </div>
            </div>

            {/* <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300"> */}
            <button className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-blue font-bold py-3 px-8 rounded-lg transition duration-300">
              Read More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900 min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <div className="mb-4 inline-block bg-teal-100 px-6 py-2 rounded-full">
              <p className="text-teal-700 font-semibold text-sm">Welcome to Excellence in Education</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-blue-900">
              Brilliant School <span className="text-teal-600">Sankeshwar</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-xl">
              Nurturing minds, building character, and inspiring excellence. Join our community of learners dedicated to achieving greatness in every aspect of life.
            </p>
            <div className="flex gap-4 flex-col sm:flex-row justify-center md:justify-start">
              {/* <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg"> */}
              <button className= "border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-blue font-bold py-3 px-8 rounded-lg transition duration-300">
                Apply Now
              </button>
              <button className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-blue font-bold py-3 px-8 rounded-lg transition duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Icon/Illustration */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-64 h-64 bg-gradient-to-br from-teal-400 to-teal-500 rounded-3xl shadow-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">🎓</div>
                <p className="text-white font-bold text-lg">Excellence in Education</p>
              </div>
            </div>
          </div>
        </div>

        {/* Admission Banner */}
        <div className="mt-16 bg-teal-600 text-white rounded-2xl p-6 text-center shadow-xl transform hover:scale-105 transition duration-300">
          <p className="text-xl font-bold">🎉 Admissions Open for 2025-26 - Inquiries Started!</p>
          <p className="text-sm mt-2">Limited seats available. Enroll your child in excellence today.</p>
        </div>
      </div>
    </section>
  );
}

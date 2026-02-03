import { FaClock } from 'react-icons/fa';

export default function SchoolSections() {
  const sections = [
    {
      name: 'Primary School',
      time: '8:15 AM to 2:45 PM',
      grades: 'Grades 1-5',
      color: 'from-green-400 to-green-600',
      icon: '📚',
    },
    {
      name: 'Middle School',
      time: '8:15 AM to 3:30 PM',
      grades: 'Grades 6-8',
      color: 'from-blue-400 to-blue-600',
      icon: '🔬',
    },
    {
      name: 'Secondary School',
      time: '8:15 AM to 2:45 PM',
      grades: 'Grades 9-10',
      color: 'from-purple-400 to-purple-600',
      icon: '🎓',
    },
  ];

  return (
    <section id="sections" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block text-yellow-500 font-bold text-sm mb-2">SCHOOL DIVISIONS</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our School Sections</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive education tailored to each developmental stage
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section) => (
            <div
              key={section.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-r ${section.color} h-32 flex items-center justify-center`}>
                <div className="text-6xl">{section.icon}</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.name}</h3>
                <p className="text-gray-600 font-semibold mb-4">{section.grades}</p>
                <div className="flex items-center gap-3 text-gray-700">
                  <FaClock className="text-yellow-500" />
                  <span className="font-medium">{section.time}</span>
                </div>
                {/* <button className="mt-6 w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg transition duration-300"> */}
                <button className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-blue font-bold py-3 px-8 rounded-lg transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-100 rounded-2xl p-10 text-blue-900 text-center">
          <h3 className="text-2xl font-bold mb-4">Comprehensive Curriculum</h3>
          <p className="text-blue-800 mb-6 max-w-3xl mx-auto">
            Our curriculum combines academics, sports, arts, and character development to ensure well-rounded education.
          </p>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-900">🎓</div>
              <p className="mt-2 font-semibold text-gray-900">CBSE Board</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900">💻</div>
              <p className="mt-2 font-semibold text-gray-900">Tech-Enabled</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900">⚽</div>
              <p className="mt-2 font-semibold text-gray-900">Sports</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900">🎨</div>
              <p className="mt-2 font-semibold text-gray-900">Arts & Culture</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

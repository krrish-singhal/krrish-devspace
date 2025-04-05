import { GraduationCap, Calendar, MapPin } from 'lucide-react';

function Education() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science And Engineering ",
      institution: "KIET GROUP OF INSTTUTIONS",
      location: "Ghaziabad , India",
      duration: "2024-2028",
      description: "Specialized in Computer Science with focus on Data Structures, Algorithms, and Full Stack Development. Maintained a strong academic record while participating in various technical competitions."
    },
    {
      degree: "Higher Secondary Education",
      institution: "Dewan Public School",
      location: "Hapur, India",
      duration: "2022-24",
      description: "Completed with distinction in Physics, Chemistry, and Mathematics. Active participant in coding competitions and tech clubs.Secured Top 10 position in whole district."
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            Education
          </h2>
          <p className="text-gray-300 text-lg">
            My academic journey and achievements
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div className="h-12 w-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                    <p className="text-purple-400">{edu.institution}</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-300">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;

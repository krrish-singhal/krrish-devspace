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
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-[#3cf26f]">Education</span>
          </h2>
          <p className="text-gray-600 text-lg">
            My academic journey and achievements
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white border-2 border-[#3cf26f]/20 rounded-2xl p-8 hover:border-[#3cf26f] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div className="h-14 w-14 bg-gradient-to-br from-[#3cf26f] to-[#2dd15f] rounded-full flex items-center justify-center shadow-lg">
                    <GraduationCap className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                    <p className="text-[#3cf26f] font-medium">{edu.institution}</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-[#3cf26f]" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#3cf26f]" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-700">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;

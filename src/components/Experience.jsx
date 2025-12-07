import { Briefcase, Calendar, MapPin } from 'lucide-react';

function Experience() {
  const experiences = [
    {
      title: 'React Native Developer (Paid Intern)',
      company: 'Vinkura AI',
      duration: 'August 2024 - September 2024 (1 month)',
      location: 'Remote',
      description: 'Worked on developing and maintaining React Native mobile applications. Collaborated with the team to implement new features and improve app performance.',
      technologies: ['React Native', 'JavaScript', 'Firebase', 'Git']
    },
    {
      title: 'Freelance Full Stack Developer',
      company: 'Freelance Project',
      duration: '2024',
      location: 'Remote',
      description: 'Developed a comprehensive CRM (Customer Relationship Management) application from scratch. Implemented features for customer management, sales tracking, and analytics dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            My <span className="text-[#3cf26f]">Experience</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Professional journey and key projects
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#3cf26f] to-[#2dd15f] rounded-2xl flex items-center justify-center">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-[#3cf26f] font-semibold text-lg mb-3">
                    {exp.company}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

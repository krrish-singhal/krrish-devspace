import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

function Experience() {
  const experiences = [
    {
      title: 'Remote Software Engineer',
      company: 'Make With Us',
      role: 'Full Stack Developer',
      duration: 'Current Role',
      location: 'Remote',
      description:
        'Working remotely on full-stack product development, converting business requirements into stable user-facing features and backend workflows for active products.',
      highlights: [
        'Collaborate with distributed teams on planning, implementation, testing, and release readiness.',
        'Improve product reliability, user flows, API communication, and maintainability across live applications.',
      ],
    },
    {
      title: 'React Native and Node.js Developer Intern',
      company: 'White Mirror Solutions Private Limited',
      role: 'Software Development Intern',
      duration: 'Internship',
      location: 'Remote',
      description:
        'Contributed to mobile and backend feature development while working with the team on implementation, issue fixing, and delivery-focused improvements.',
      highlights: [
        'Built and refined application screens, server-side flows, authentication logic, and data handling.',
        'Supported debugging, performance improvements, and clean handoff of completed modules.',
      ],
    },
    {
      title: 'React Native Developer Intern',
      company: 'Vinkura AI',
      role: 'Mobile App Development Intern',
      duration: 'Internship',
      location: 'Remote',
      description:
        'Developed user-facing mobile app flows for an astrology and consultation product, focusing on smooth onboarding, chat interaction, and secure user access.',
      highlights: [
        'Worked on consultation-driven experiences, personalized content delivery, and customer-facing journeys.',
        'Coordinated with the team to improve usability, app stability, and feature completeness.',
      ],
    },
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
            Professional roles, responsibilities, and hands-on product delivery.
          </p>
        </div>


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
                    <FaBriefcase className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-[#3cf26f] font-semibold text-lg">
                    {exp.company}
                  </p>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
                    {exp.role}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaCalendarAlt className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaMapMarkerAlt className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="mt-4 space-y-2 text-gray-600">
                    {exp.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#3cf26f]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
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

import { ExternalLink } from 'lucide-react';

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
        { name: "React.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
        { name: "Typescript", icon: "https://static-00.iconduck.com/assets.00/file-type-typescript-official-icon-256x256-aavrgmi0.png" },
        { name: "Tailwind CSS", icon: "https://tse4.mm.bing.net/th/id/OIP._6ooq0R60ba3UT5c-QVemAHaDm?rs=1&pid=ImgDetMain" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://tse1.mm.bing.net/th/id/OIP.1fZjQpkRMKTBGN_7H5YnFwHaGL?rs=1&pid=ImgDetMain" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
        { name: "SQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" }
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
        { name: "C", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            Technical Expertise
          </h2>
          <p className="text-gray-300 text-lg">
            As a passionate problem solver and dedicated full-stack developer, I bring a comprehensive skill set to transform ideas into robust, scalable solutions. My expertise spans across modern web technologies and best practices in software development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-16">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold text-purple-400 mb-6">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gray-900 rounded-xl p-4 flex flex-col items-center justify-center hover:bg-gray-800 transition-all duration-300"
                  >
                    <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-3" />
                    <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

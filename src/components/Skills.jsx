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
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Tailwind CSS", icon: "https://th.bing.com/th/id/OIP.pEeKeUoENMqoN-kR8f8XoQHaFj?w=224&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" }
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
        { name: "C", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" },
        { name: "Java", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8">
            Technical Expertise
          </h2>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            As a passionate problem solver and dedicated full-stack developer, I bring a comprehensive skill set to transform ideas into robust, scalable solutions. My expertise spans modern technologies and best practices in software development.
          </p>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold text-purple-400 mb-6">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="bg-gray-900 rounded-xl p-6 flex flex-col items-center justify-center hover:bg-gray-800 transition-all duration-300">
                    <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-4" />
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

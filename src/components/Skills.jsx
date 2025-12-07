import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

function Skills() {
  const [activeTab, setActiveTab] = useState('technical');

  const technicalSkills = [
    { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "Dart", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "C/C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
    { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },

  ];

  const problemSolver = [
    { name: "LeetCode", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png", url: "https://leetcode.com/u/krrish_singhal/" },
    { name: "GeeksforGeeks", logo: "https://media.geeksforgeeks.org/gfg-gg-logo.svg", url: "https://www.geeksforgeeks.org/user/krrishsin3i4i/" },
    { name: "Codolio", logo: "https://d3hr337ydpgtsa.cloudfront.net/assets/Banner.png", url: "https://codolio.com" }
  ];

  const softSkills = [
    { name: "Problem Solving", icon: "🧩" },
    { name: "Team Work", icon: "🤝" },
    { name: "Communication", icon: "💬" },
    { name: "Quick Learner", icon: "📚" },
    { name: "Time Management", icon: "⏰" },
    { name: "Adaptability", icon: "🔄" }
  ];

  const getSkills = () => {
    switch(activeTab) {
      case 'technical':
        return technicalSkills;
      case 'problem':
        return problemSolver;
      case 'soft':
        return softSkills;
      default:
        return technicalSkills;
    }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            My <span className="text-[#3cf26f]">Skills</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Technologies and tools I use to build impactful digital experiences.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab('technical')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === 'technical'
                ? 'bg-gradient-to-r from-[#3cf26f] to-[#2dd15f] text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            ⚙️ Technical Skills
          </button>
          <button
            onClick={() => setActiveTab('problem')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === 'problem'
                ? 'bg-gradient-to-r from-[#3cf26f] to-[#2dd15f] text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            🎯 Problem Solver
          </button>
          <button
            onClick={() => setActiveTab('soft')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === 'soft'
                ? 'bg-gradient-to-r from-[#3cf26f] to-[#2dd15f] text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            👥 Soft Skills
          </button>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {getSkills().map((skill, index) => (
            activeTab === 'problem' ? (
              <a
                key={index}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-[#3cf26f]/20 rounded-2xl p-6 text-center hover:shadow-xl hover:border-[#3cf26f] transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              >
                <div className={`mx-auto mb-4 flex items-center justify-center ${skill.name === 'Codolio' ? 'w-32 h-24' : 'w-20 h-20'}`}>
                  <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-sm font-semibold text-gray-800 flex items-center justify-center gap-2">
                  {skill.name}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
              </a>
            ) : activeTab === 'technical' ? (
              <div
                key={index}
                className="bg-white border-2 border-[#3cf26f]/20 rounded-2xl p-6 text-center hover:shadow-xl hover:border-[#3cf26f] transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-sm font-semibold text-gray-800">{skill.name}</h3>
              </div>
            ) : (
              <div
                key={index}
                className="bg-white border-2 border-[#3cf26f]/20 rounded-2xl p-6 text-center hover:shadow-xl hover:border-[#3cf26f] transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-5xl mb-3">{skill.icon}</div>
                <h3 className="text-sm font-semibold text-gray-800">{skill.name}</h3>
              </div>
            )
          ))}
        </div>

        {/* Always Learning Badge */}
        <div className="text-center mt-12">
          <div className="inline-block bg-gradient-to-r from-[#3cf26f] to-[#2dd15f] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg">
            🎓 Always Learning & Growing
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

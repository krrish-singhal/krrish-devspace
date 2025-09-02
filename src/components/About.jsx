import { GraduationCap, Code2, Users, Rocket, Lightbulb } from "lucide-react";

function About() {
  const features = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description:
        "Expertise in React, Next.js, Node, Express, MongoDB, and scalable architectures for production-quality apps.",
    },
    {
      icon: Users,
      title: "Collaboration & Leadership",
      description:
        "Led technical teams in hackathons, successful in coding contests, and delivered complex features collaboratively.",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description:
        "Solves real-world problems by designing robust, maintainable and creative digital solutions.",
    },
    {
      icon: Lightbulb,
      title: "Continuous Growth",
      description:
        "Stays up-to-date with new technologies, always improving UX/UI, performance, and code quality.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex flex-col items-center flex-shrink-0 mb-8 lg:mb-0 lg:mr-8">
          <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl">
            <img
              src="https://i.imgur.com/1eY8Vuv.jpeg"
              alt="Krrish Singhal"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="w-full mt-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-4 backdrop-blur-sm shadow-lg">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <GraduationCap className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Academic Excellence
                </h3>
                <p className="text-purple-400">B.Tech CSE @ KIET | CGPA: 9.0</p>
              </div>
            </div>
          </div>
        </div>

        {/* About Me Content */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
            About Me
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              I'm Krrish, a passionate Full Stack Developer skilled in the MERN
              stack and modern frameworks like Next.js. My journey started with
              curiosity and grew into delivering robust, scalable client and
              enterprise solutions. Practical leadership, continuous learning,
              and a love for clean, impactful design drive me to turn innovative
              ideas into successful products.
            </p>
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              I continuously develop my problem-solving skills through
              hackathons, coding contests, and collaboration in technical clubs.
              From e-commerce platforms to intelligent SaaS tools, my work
              reflects a blend of strong engineering and user-centric design.
            </p>
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              Beyond coding, I mentor, contribute to the community, and stay
              sharp on current trends—ensuring every project delivers top-tier
              user experience with modern best practices.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            {/* Google Drive Resume Link */}
            <a
              href="https://drive.google.com/file/d/1pqHJHHRHS5aajZ6o5WjwuC5YiOjXvFnz/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-lg text-white font-medium shadow-lg gap-2"
            >
              <span>View Resume</span>
            </a>

            <a
              href="https://leetcode.com/u/Krrish_Singhal/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-3 bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg text-sm font-semibold gap-2 transition-all duration-200 shadow-md"
              title="View my LeetCode profile"
            >
              LeetCode
            </a>

            <a
              href="https://www.geeksforgeeks.org/user/krrishsiw00l/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-semibold gap-2 transition-all duration-200 shadow-md"
              title="View my GeeksforGeeks profile"
            >
              GFG
            </a>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
        {features.map((feature, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            className="bg-gray-800/70 rounded-lg p-6 hover:bg-gray-700 shadow-lg transition-all duration-300"
          >
            <div className="h-10 w-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-3">
              <feature.icon className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;

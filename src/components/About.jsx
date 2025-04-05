import { Code2, Download, Rocket, Users, GraduationCap } from 'lucide-react';

function About() {
  const features = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Passionate about building end-to-end web applications with modern technologies."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Strong experience working in agile teams and delivering high-quality solutions."
    },
    {
      icon: Rocket,
      title: "Problem Solving",
      description: "Dedicated to finding elegant solutions to complex technical challenges."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full overflow-hidden mb-8 border-4 border-purple-500 shadow-lg">
              <img
                src="https://i.imgur.com/1eY8Vuv.jpeg"
                alt="Krrish Singhal"
                className="w-full h-full object-cover"
              />
            </div>

            {/* CGPA Highlight */}
            <div className="w-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <GraduationCap className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Academic Excellence</h3>
                  <p className="text-purple-400">Current CGPA: 9.5/10.0</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
              About Me
            </h2>
            <div className="prose prose-invert">
              <p className="text-gray-300 text-base leading-relaxed mb-4">
                I'm a passionate Full Stack Developer with a deep love for creating innovative web solutions. Currently pursuing my B.Tech in Computer Science at Delhi Technological University, I combine my academic excellence with practical development experience to build robust and scalable applications.
              </p>
              <p className="text-gray-300 text-base leading-relaxed mb-4">
                My journey in web development started with a curiosity to understand how things work on the internet, and it has evolved into a professional pursuit of creating seamless digital experiences. I specialize in modern web technologies and take pride in writing clean, efficient code that solves real-world problems.
              </p>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community. I believe in continuous learning and staying updated with the latest trends in web development.
              </p>
            </div>

            <div className="mt-6">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-sm text-white"
              >
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800 transition-all duration-300"
            >
              <div className="h-10 w-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-3">
                <feature.icon className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;

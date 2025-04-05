import { Github, ExternalLink, Globe, Code2, Database, Server, Cpu, Cloud, Bot, ShoppingCart } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: "Blogging Platform",
      description: "Full-stack blogging solution with modern features",
      image: "https://i.imgur.com/lRN48vo.png",
      technologies: ["React", "Appwrite Backend"],
      github: "https://github.com/krrish-singhal/Blog_With_Blofify.git",
      live: "https://blog-with-blofify.vercel.app/",
      icon: ShoppingCart,
    },
    {
      title: "Todo with local Storage",
      description: "Manage todos but in a way that let you to complete that ",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000",
      technologies: ["React.js", "Redux Toolkit"],
      github: "https://github.com/krrish-singhal/Your_Todo",
      live: "https://your-todo-three.vercel.app/",
      icon: Code2
    },
    {
      title: "Weather Dashboard",
      description: "See what is going to be the weather anywhere of today and upcoming days",
      image: "https://media.istockphoto.com/id/477902875/photo/weather-forecast-on-a-digital-display.jpg?s=1024x1024&w=is&k=20&c=dh6G856Z1WFRE8S-qq_SnO0gR4qVCLcF5ROxxLbm2EI=",
      technologies: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/krrish-singhal/Weather_App",
      live: "https://weather-app-mu-henna-17.vercel.app/",
      icon: Bot
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-sm">
            A showcase of my technical expertise and creative problem-solving
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                <div className="absolute top-3 right-3 bg-gray-900/80 p-2 rounded-full">
                  <project.icon className="h-4 w-4 text-purple-400" />
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 bg-gray-700 rounded-lg text-sm text-white hover:bg-gray-600 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 bg-purple-500 rounded-lg text-sm text-white hover:bg-purple-600 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

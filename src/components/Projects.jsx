import { useState } from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';
import SwiftMart from '../assets/image.png';
import Taskify from '../assets/Taskify.png';
import CravingCart from '../assets/Craving_cart_image.png';

const projects = [
  {
    title: "Shop Matrix",
    description: "A comprehensive e-commerce platform with advanced product management, cart functionality, and secure checkout.",
    image: SwiftMart,
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/krrish-singhal",
    live: "https://shop-matrix.netlify.app/",
    category: "web",
    featured: true,
  },
  {
    title: "Taskify",
    description: "A comprehensive task management platform, providing real-time collaboration and productivity tracking.",
    image: Taskify,
    technologies: ["React", "TypeScript", "Firebase"],
    github: "https://github.com/krrish-singhal/My_Taskify.git",
    live: "https://taskify-142w85e2t-krrish-singhals-projects.vercel.app/",
    category: "web",
    featured: true,
  },
  {
    title: "Craving Cart",
    description: "A food delivery platform with real-time order tracking, restaurant management, and seamless payment integration.",
    image: CravingCart,
    technologies: ["React", "Tailwind CSS", "Firebase", "Node.js"],
    github: "https://github.com/krrish-singhal/Craving-cart.git",
    live: "https://craving-cart.vercel.app/",
    category: "web",
    featured: true,
  },
  {
    title: "Blogify",
    description: "Modern blogging platform with Markdown support, user authentication, and real-time content management.",
    image: "https://i.imgur.com/lRN48vo.png",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/krrish-singhal/Blog_With_Blofify.git",
    live: "https://blog-with-blofify.vercel.app/",
    category: "web",
    featured: true,
  },
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = projects;

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            My <span className="text-[#3cf26f]">Projects</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Explore my work across apps, web platforms, and creative UI/UX designs.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3cf26f] to-[#2dd15f]"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#3cf26f] to-[#2dd15f] text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/krrish-singhal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;

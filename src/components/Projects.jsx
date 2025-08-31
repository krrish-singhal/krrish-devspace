import { Github, ExternalLink, ShoppingCart } from 'lucide-react';
import SwiftMart from '../assets/image.png';
import Taskify from '../assets/Taskify.png';
import CravingCart from '../assets/Craving_cart_image.png'

const projects = [
  {
    title: "Swift Mart",
    description:
      "Full-featured e-commerce platform (MERN): including authentication, admin dashboard, cart management, product catalog, OLX marketplace, Cloudinary uploads, and a mystery box feature.",
    image: SwiftMart,
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Cloudinary"],
    github: "https://github.com/krrish-singhal/My_Swift_Mart.git", // Replace with actual link
    
    icon: ShoppingCart,
  },
  {
    title: "Taskify",
    description:
      "A productivity application for managing and categorizing tasks (To-Do, In Progress, Done); features authentication, editing, persistent storage, and clean dashboard.",
    image: Taskify,
    technologies: ["MERN", "JWT", "MongoDB"],
    github: "https://github.com/krrish-singhal/My_Taskify.git",
    live: "https://taskify-142w85e2t-krrish-singhals-projects.vercel.app", // Demo link
    icon: Github,
  },
  {
    title: "Plan and Go",
    description:
      "Next.js + TypeScript intelligent trip planner: unified trip entry, automated cab/train/flight booking, hotel selection, bundled lodging/meals, optional expert guides, and more.",
    image: "https://images.pexels.com/photos/21014/pexels-photo.jpg",
    technologies: ["Next.js", "TypeScript", "API Integration"],
    github: "https://github.com/krrish-singhal/PlanAndGo", // Replace with actual link
    live: "https://krrish-devspace.vercel.app", // Replace with actual live/demo
    icon: ExternalLink,
  },
  {
    title: "Craving Cart",
    description:
      "A feature-rich e-commerce cart built with Next.js and JavaScript. Includes seamless browsing, cart management, authentication, and a dynamic checkout process.",
    image: CravingCart,
    technologies: ["Next.js", "JavaScript"],
    github: "https://github.com/krrish-singhal/Craving-cart.git",
    live: "https://craving-cart.vercel.app/",
    icon: ShoppingCart,
  },
  {
    title: "Orbix",
    description:
      "A unique ride-hailing app (MERN): real-time ride booking, fare calculation, OTP verification, maps integration, various vehicle types, secure payment, and in-cab food ordering.",
    image: "https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Payment Gateway"],
    github: "https://github.com/krrish-singhal/Orbix",
    live: "https://krrish-devspace.vercel.app",
    icon: ExternalLink,
  },
  {
    title: "Blogify",
    description:
      "Modern blogging app (React + Appwrite): Markdown support, user authentication, fast rendering with real-time data sync and fully responsive clean UI.",
    image: "https://i.imgur.com/lRN48vo.png",
    technologies: ["React", "Appwrite", "Markdown"],
    github: "https://github.com/krrish-singhal/Blog_With_Blofify.git",
    live: "https://blog-with-blofify.vercel.app/",
    icon: Github,
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            My Projects
          </h2>
          <p className="text-gray-300 text-sm">
            A showcase of full-stack applications blending engineering and creativity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-gray-800/70 rounded-xl overflow-hidden hover:shadow-2xl hover:bg-gray-800 transition-all duration-300">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-gray-900/80 p-2 rounded-full">
                  <project.icon className="h-5 w-5 text-purple-400" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-2 bg-gray-700 rounded-lg text-sm text-white hover:bg-gray-600 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-2 bg-purple-500 rounded-lg text-sm text-white hover:bg-purple-700 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
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

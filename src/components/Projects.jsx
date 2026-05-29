import {
  FaCarSide,
  FaComments,
  FaExternalLinkAlt,
  FaGithub,
  FaGraduationCap,
  FaMobileAlt,
  FaServer,
  FaShoppingBag,
  FaTicketAlt,
  FaUserTie,
  FaUsersCog,
  FaWhatsapp,
} from 'react-icons/fa';
import OrbixImage from '../assets/Orbix.png';

const projectSections = [
  {
    title: 'Live Production Projects',
    subtitle: 'Platforms currently built for real users, operational workflows, and live data.',
    icon: FaServer,
    projects: [
      {
        title: 'DKJU ERP System',
        period: 'Mar 2026 - Present',
        icon: FaServer,
        image: '/dkju.png',
        description:
          'Developed and maintained a large-scale education ERP platform managing admissions, student records, fee management, academic tracking, transfer processes, and institutional administration across South India.',
        tags: ['40K+ live users', 'Admissions', 'Fees', 'Academic tracking', 'Administration'],
        live: 'https://www.dkju.in',
      },
      {
        title: 'CrewHive',
        period: 'Apr 2026 - Present',
        icon: FaWhatsapp,
        image: '/crewhive.png',
        description:
          'Developed an automated WhatsApp-based platform powered by a self-coded bot system to provide rural and village-level employment opportunities through automated communication and task distribution.',
        tags: ['WhatsApp Automation', 'APIs', 'Backend Systems', 'Rural Employment'],
        live: 'https://crew-hive-one.vercel.app',
      },
      {
        title: 'KMJ',
        period: 'May 2026 - Present',
        icon: FaUsersCog,
        image: './kmj.png',
        description:
          'A Jamat management web application designed to streamline community operations, manage member registrations, schedule events, and coordinate local administrative activities.',
        tags: ['Community Management', 'Jamat Management', 'Admin Workflows', 'Web Application'],
        live: 'https://kmj-six.vercel.app',
      },
      {
        title: 'Student Administrative Management System',
        period: 'May 2026 - Present',
        icon: FaGraduationCap,
        image: './smas.png',
        description:
          'A dynamic dashboard built to efficiently manage student administrative workflows and track student expenses, fee records, and financial aid distributions in real-time.',
        tags: ['Expense Dashboard', 'Financial Tracking', 'Admin Dashboard', 'Student Data'],
        live: 'https://smas-tau.vercel.app',
      },
      {
        title: 'TicketLelo',
        period: 'Mar 2023',
        icon: FaTicketAlt,
        image: './ticketlelo.png',
        description:
          'Built an end-to-end event and ticket management ecosystem where organizers can host, manage, approve, and execute events with custom forms, payments, email automation, and dashboards.',
        tags: ['Next.js', 'Payment Gateway', 'Role-Based Access', 'Email Automation'],
        live: 'https://ticketlelo-flax.vercel.app',
      },
    ],
  },
  {
    title: 'Web Development Projects',
    subtitle: 'Full-stack web applications built with scalable frontend and backend architecture.',
    icon: FaUsersCog,
    projects: [
      {
        title: 'Skillion',
        period: 'Dec 2025 - Jan 2026',
        icon: FaGraduationCap,
        image: 'https://cdn.phototourl.com/uploads/2026-02-08-52a163c2-72a9-42ba-b7e4-ef7ff97c46d0.png',
        description:
          'Built a MERN-based Learning Management System with secure authentication, role-based access, course management, responsive dashboards, and real-time progress tracking for students and educators.',
        tags: ['MERN Stack', 'Authentication', 'Role-Based Access', 'Course Management'],
        github: 'https://github.com/krrish-singhal/skillion-frontend',
        live: 'https://skillion-frontend-gilt.vercel.app/',
      },
      {
        title: 'Orbix',
        period: 'Oct 2025 - Nov 2025',
        icon: FaCarSide,
        image: OrbixImage,
        description:
          'Developed a ride-hailing platform with real-time ride booking, fare calculation, driver authentication, OTP-based ride verification, maps integration, vehicle options, and an interactive UI.',
        tags: ['MERN Stack', 'Maps Integration', 'OTP Verification', 'Fare Calculation'],
        github: 'https://github.com/krrish-singhal/Orbix_Frontend-',
        live: 'https://orbix-frontend.vercel.app/',
      },
      {
        title: 'Shop Matrix',
        period: '2025',
        icon: FaShoppingBag,
        image: '/shop_matrix.png',
        description:
          'Full-stack e-commerce platform with product catalog, shopping cart, secure checkout, payment integration, order tracking, and inventory management system.',
        tags: ['MERN Stack', 'Shopping Cart', 'Payment Integration', 'Inventory'],
        github: 'https://github.com/krrish-singhal/shop-matrix',
        live: 'https://shop-matrix.vercel.app',
      },
      {
        title: 'Craving Cart',
        period: '2024',
        icon: FaShoppingBag,
        image: '/craving-cart.png',
        description:
          'Food delivery web application with restaurant browsing, menu management, real-time order tracking, payment processing, user reviews, ratings, and delivery notifications.',
        tags: ['MERN Stack', 'Food Delivery', 'Real-time Tracking', 'Payment Gateway'],
        github: 'https://github.com/krrish-singhal/craving-cart',
        live: 'https://craving-cart.vercel.app',
      },
    ],
  },
  {
    title: 'Mobile App Projects',
    subtitle: 'React Native mobile applications focused on product flows, real-time systems, and backend communication.',
    icon: FaMobileAlt,
    projects: [
      {
        title: 'Nexent',
        period: 'Mobile E-Commerce Platform',
        icon: FaShoppingBag,
        visual: 'bg-gradient-to-br from-emerald-600 via-cyan-700 to-slate-900',
        description:
          'Developed a production-ready e-commerce mobile application with secure authentication, product browsing, order management, payment integration, responsive UI, and scalable backend communication.',
        tags: ['React Native', 'Node.js', 'MongoDB', 'Payment Gateway Integration'],
        github: 'https://github.com/krrish-singhal/nexent-app',
      },
      {
        title: 'Baatchit',
        period: '2025',
        icon: FaComments,
        visual: 'bg-gradient-to-br from-blue-700 via-sky-600 to-emerald-500',
        description:
          'Built a real-time chatting application enabling instant communication and synchronized messaging through WebSocket-based architecture for low-latency interaction across devices.',
        tags: ['React Native', 'Node.js', 'WebSockets', 'Express.js'],
        github: 'https://github.com/krrish-singhal/baatchit-app',
      },
      {
        title: 'Kanchan CRM',
        period: '2026',
        icon: FaUsersCog,
        visual: 'bg-gradient-to-br from-slate-800 via-emerald-700 to-lime-500',
        description:
          'Built a scalable CRM application for customer management, lead tracking, workflow organization, communication management, centralized dashboards, and automation-driven visibility.',
        tags: ['React Native', 'Node.js', 'Firebase', 'Role-Based Access Control'],
        github: 'https://github.com/krrish-singhal/kanchan-crm',
      },
      {
        title: 'Dorise',
        period: '2026',
        icon: FaUserTie,
        visual: 'bg-gradient-to-br from-violet-800 via-fuchsia-700 to-orange-500',
        description:
          'Developed a full-stack astrology and consultation mobile application at Vinkura AI with personalized horoscope insights, recommendations, consultation experiences, and secure user management.',
        tags: ['React Native', 'Node.js', 'Firebase', 'Authentication Systems'],
        github: 'https://github.com/krrish-singhal/dorise-app',
      },
    ],
  },
];

function ProjectCard({ project }) {
  const ProjectIcon = project.icon;
  const hasActions = project.github || project.live;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className={`relative h-44 overflow-hidden ${project.image ? 'bg-gray-100' : project.visual}`}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-white">
            <ProjectIcon className="h-16 w-16" />
          </div>
        )}
        <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-gray-800 shadow-sm">
          {project.period}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {hasActions && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
              >
                <FaGithub className="h-4 w-4" />
                Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#3cf26f] to-[#2dd15f] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg"
              >
                <FaExternalLinkAlt className="h-4 w-4" />
                Live
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            My <span className="text-[#3cf26f]">Projects</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Production platforms, web applications, and mobile app projects grouped by the work they represent.
          </p>
        </div>

        <div className="space-y-16">
          {projectSections.map((section) => {
            const SectionIcon = section.icon;

            return (
              <div key={section.title}>
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3cf26f] to-[#2dd15f] text-white">
                        <SectionIcon className="h-6 w-6" />
                      </span>
                      <h3 className="text-3xl font-bold text-gray-900">{section.title}</h3>
                    </div>
                    <p className="max-w-3xl text-gray-600">{section.subtitle}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {section.projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-14">
          <a
            href="https://github.com/krrish-singhal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-gray-800"
          >
            <FaGithub className="h-5 w-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;

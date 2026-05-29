import { FaCode, FaDatabase, FaExternalLinkAlt, FaJava, FaLayerGroup } from 'react-icons/fa';
import {
  SiAppwrite,
  SiCss,
  SiCplusplus,
  SiExpress,
  SiFirebase,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

const skillGroups = [
  {
    title: 'Languages',
    icon: FaCode,
    description: 'Programming, scripting, and markup languages used across frontend, backend, and problem solving.',
    skills: [
      { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
      { name: 'Python', icon: SiPython, color: 'text-blue-600' },
      { name: 'Java', icon: FaJava, color: 'text-orange-600' },
      { name: 'C/C++', icon: SiCplusplus, color: 'text-blue-700' },
      { name: 'SQL', icon: FaDatabase, color: 'text-slate-700' },
      { name: 'HTML', icon: SiHtml5, color: 'text-orange-500' },
      { name: 'CSS', icon: SiCss, color: 'text-blue-500' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: FaLayerGroup,
    description: 'Modern frameworks and libraries for scalable web, mobile, and server-side development.',
    skills: [
      { name: 'React.js', icon: SiReact, color: 'text-cyan-500' },
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-950' },
      { name: 'React Native', icon: SiReact, color: 'text-cyan-500' },
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
      { name: 'Express.js', icon: SiExpress, color: 'text-gray-800' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-sky-500' },
    ],
  },
  {
    title: 'Databases & Backend Services',
    icon: FaDatabase,
    description: 'Data platforms, backend services, and API tools used to build reliable product systems.',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
      { name: 'MySQL', icon: SiMysql, color: 'text-blue-700' },
      { name: 'Firebase', icon: SiFirebase, color: 'text-amber-500' },
      { name: 'Supabase', icon: SiSupabase, color: 'text-emerald-600' },
      { name: 'Appwrite', icon: SiAppwrite, color: 'text-pink-600' },
      { name: 'GraphQL', icon: SiGraphql, color: 'text-pink-500' },
    ],
  },
];

const codingProfiles = [
  {
    name: 'LeetCode',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png',
    url: 'https://leetcode.com/u/Krrish_Singhal/',
  },
  {
    name: 'GeeksforGeeks',
    logo: 'https://media.geeksforgeeks.org/gfg-gg-logo.svg',
    url: 'https://www.geeksforgeeks.org/profile/krrishsiw00l?tab=activity',
  },
  {
    name: 'Codolio',
    logo: 'https://d3hr337ydpgtsa.cloudfront.net/assets/Banner.png',
    url: 'https://codolio.com/profile/krrish@123',
  },
];

function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            My <span className="text-[#3cf26f]">Skills</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A clear breakdown of the technologies I use across web, mobile, backend, and data-driven products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillGroups.map((group) => {
            const GroupIcon = group.icon;

            return (
              <div
                key={group.title}
                className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3cf26f] to-[#2dd15f] text-white">
                    <GroupIcon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{group.title}</h3>
                    <p className="text-sm text-gray-500">{group.skills.length} skills</p>
                  </div>
                </div>

                <p className="mb-6 text-sm leading-relaxed text-gray-600">
                  {group.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className="flex min-h-14 items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 py-3"
                      >
                        <SkillIcon className={`h-5 w-5 flex-shrink-0 ${skill.color}`} />
                        <span className="text-sm font-semibold text-gray-800">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Problem Solving Profiles</h3>
              <p className="text-gray-600">
                Coding practice and profile links for competitive problem solving.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {codingProfiles.map((profile) => (
              <a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-[#3cf26f]/20 bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#3cf26f] hover:shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-50 p-2">
                    <img
                      src={profile.logo}
                      alt={profile.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span className="font-bold text-gray-900">{profile.name}</span>
                </div>
                <FaExternalLinkAlt className="h-4 w-4 text-gray-400 transition-colors group-hover:text-[#2dd15f]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

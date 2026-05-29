import { FaAws, FaAward, FaCertificate, FaCloud, FaNetworkWired } from 'react-icons/fa';

const certifications = [
  {
    title: 'Infosys Springboard',
    focus: 'Professional technology learning and skill development certification.',
    icon: FaAward,
    accent: 'from-blue-700 to-cyan-500',
  },
  {
    title: 'Cisco Networking',
    focus: 'Networking fundamentals, connectivity concepts, and infrastructure basics.',
    icon: FaNetworkWired,
    accent: 'from-sky-700 to-emerald-500',
  },
  {
    title: 'AWS Cloud',
    focus: 'Cloud computing fundamentals, AWS services, and deployment concepts.',
    icon: FaAws,
    accent: 'from-orange-500 to-slate-900',
  },
];

function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            My <span className="text-[#3cf26f]">Certifications</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Certifications and structured learning completed across software, networking, and cloud fundamentals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {certifications.map((certification) => {
            const CertificationIcon = certification.icon;

            return (
              <article
                key={certification.title}
                className="rounded-2xl bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${certification.accent} text-white`}
                >
                  <CertificationIcon className="h-8 w-8" />
                </div>

                <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#2dd15f]">
                  <FaCertificate className="h-4 w-4" />
                  Certification
                </div>

                <h3 className="text-2xl font-bold text-gray-900">{certification.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {certification.focus}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-[#3cf26f]/30 bg-white p-6 shadow-md">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3cf26f]/15 text-[#2dd15f]">
                <FaCloud className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Continuous Learning</h3>
                <p className="text-sm text-gray-600">
                  Strengthening practical knowledge across development, networking, and cloud services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;

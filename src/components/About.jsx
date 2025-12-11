function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Me Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="text-[#3cf26f]">Me</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Passionate about building impactful digital products, mentoring developers, and leading innovation through technology.
          </p>
        </div>

        {/* Hi, I'm Krrish Singhal Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          {/* Left - Image */}
          <div className="flex-shrink-0">
            <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#3cf26f] to-[#2dd15f] p-1">
              <div className="w-full h-full rounded-3xl overflow-hidden bg-white">
                <img
                  src="https://i.imgur.com/1eY8Vuv.jpeg"
                  alt="Krrish Singhal"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex-1">
            <h3 className="text-4xl font-bold mb-6">
              Hi, I'm <span className="text-[#3cf26f]">Krrish Singhal</span>
            </h3>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Currently pursuing B.Tech in Computer Science and Engineering at KIET, Ghaziabad. I specialize in full-stack web development with React, Node.js, and modern web technologies. Proficient in JavaScript, Python, and building scalable web applications.
              </p>
              <p>
                Passionate about creating impactful digital products and innovative web solutions. Experienced in developing responsive and user-friendly web applications and mobile applications with modern frameworks and best practices.
              </p>
              <p>
                Always eager to learn new technologies and take on challenging projects that push the boundaries of web development. Committed to writing clean, maintainable code and delivering exceptional user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

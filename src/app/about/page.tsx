"use client";

export default function PrivacyPage() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-white via-sky-50 to-white font-sans">
      {/* Header Section */}
      <section className="text-center py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/bg-pattern.svg')] bg-center bg-no-repeat opacity-5 pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#33AED7] mb-4 sm:mb-6 drop-shadow-md">
            About TechSahayata
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-2 sm:mb-4">
            Last updated:{" "}
            <span className="font-semibold text-gray-800">
              {new Date().toLocaleDateString()}
            </span>
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Empowering businesses with cutting-edge technology and innovative
            solutions that shape the digital future.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16">
        <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 lg:p-16 border border-gray-100 hover:shadow-[#33AED7]/20 transition-shadow duration-500">
          <div className="space-y-8 sm:space-y-10 md:space-y-12 text-gray-700 leading-relaxed">
            {/* Intro */}
            <section className="transition-all duration-500 hover:scale-[1.02] hover:shadow-sm hover:bg-sky-50/40 rounded-xl sm:rounded-2xl p-2 sm:p-4">
              <p>
                <strong className="text-[#33AED7]">TechSahayata</strong> is a
                leading technology solutions provider dedicated to empowering
                businesses through innovative digital transformation. With a
                strong foundation in website development, mobile app solutions,
                custom software engineering, artificial intelligence (AI), and
                robotic process automation (RPA), we deliver cutting-edge
                products that drive growth, efficiency, and performance.
              </p>
            </section>

            {/* Vision */}
            <section className="transition-all duration-500 hover:scale-[1.02] hover:shadow-sm hover:bg-sky-50/40 rounded-xl sm:rounded-2xl p-2 sm:p-4">
              <p>
                At <strong className="text-[#33AED7]">TechSahayata</strong>, we
                believe technology should make life simpler, smarter, and more
                connected. Our expert team of developers, designers, and
                engineers collaborate to craft seamless digital experiences
                tailored to each client’s goals. From concept to deployment, we
                ensure every solution we build is secure, scalable, and
                future-ready.
              </p>
            </section>

            {/* Expertise */}
            <section className="transition-all duration-500 hover:scale-[1.02] hover:shadow-sm hover:bg-sky-50/40 rounded-xl sm:rounded-2xl p-2 sm:p-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 border-l-4 border-[#33AED7] pl-2 sm:pl-4">
                Our Expertise
              </h2>
              <ul className="list-disc pl-5 sm:pl-8 space-y-2 sm:space-y-4">
                <li>
                  <strong className="text-gray-900">Website Development:</strong>{" "}
                  Responsive, SEO-optimized, and visually engaging websites that
                  strengthen your online presence.
                </li>
                <li>
                  <strong className="text-gray-900">Mobile App Development:</strong>{" "}
                  High-performance Android, iOS, and cross-platform apps with
                  user-friendly designs.
                </li>
                <li>
                  <strong className="text-gray-900">
                    Custom Software Solutions
                  </strong>{" "}
                  Scalable enterprise applications tailored to your business
                  needs.
                </li>
                <li>
                  <strong className="text-gray-900">AI & Machine Learning:</strong>{" "}
                  Intelligent systems that automate processes, predict trends,
                  and enhance decision-making.
                </li>
                <li>
                  <strong className="text-gray-900">
                    RPA (Robotic Process Automation):
                  </strong>{" "}
                  Smart automation solutions that reduce manual work, improve
                  accuracy, and optimize productivity.
                </li>
              </ul>
            </section>

            {/* Mission */}
            <section className="transition-all duration-500 hover:scale-[1.02] hover:shadow-sm hover:bg-sky-50/40 rounded-xl sm:rounded-2xl p-2 sm:p-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 border-l-4 border-[#33AED7] pl-2 sm:pl-4">
                Our Mission
              </h2>
              <p>
                Our mission is to help organizations embrace the future of
                technology with confidence. By combining creativity, innovation,
                and technical expertise, we enable businesses to stay
                competitive in an ever-evolving digital world.
              </p>
            </section>

            {/* Commitment */}
            <section className="transition-all duration-500 hover:scale-[1.02] hover:shadow-sm hover:bg-sky-50/40 rounded-xl sm:rounded-2xl p-2 sm:p-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 border-l-4 border-[#33AED7] pl-2 sm:pl-4">
                Our Commitment
              </h2>
              <p>
                At <strong className="text-[#33AED7]">TechSahayata</strong>, your
                growth is our technology mission. We strive to deliver
                excellence through every project and partnership, ensuring our
                clients achieve long-term success with innovative, reliable, and
                transformative solutions.
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* Bottom Accent */}
      <div className="w-full h-1 bg-gradient-to-r from-[#33AED7] via-sky-400 to-[#33AED7]"></div>
    </main>
  );
}

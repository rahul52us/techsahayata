"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Lightbulb, Code, Cpu, Rocket, Shield } from "lucide-react";

const About = () => {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3]);

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-100 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 sm:px-12 overflow-hidden min-h-[90vh]">
        {/* Hero Background */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-sky-800/70 via-sky-700/50 to-sky-50 z-10" />
          <img
            src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1762967830/techsahayata-assets/abouthero.jpg"
            alt="Tech innovation background"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Floating Blobs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-sky-400/30 rounded-full blur-3xl animate-pulse z-0"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-300/30 rounded-full blur-3xl animate-pulse z-0"></div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl mb-6"
          >
            About TechSahayata
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-2xl mx-auto text-white/95 mb-6 drop-shadow-lg font-medium"
          >
            Empowering businesses with cutting-edge technology and innovation.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/80 text-base drop-shadow-md"
          >
            Last updated:{" "}
            <span className="font-semibold text-white">
              {new Date().toLocaleDateString()}
            </span>
          </motion.p>
        </div>
      </section>

      {/* INTRO & VISION */}
      <section className="relative py-16 sm:py-24 px-6 sm:px-10 lg:px-20 bg-gradient-to-br from-white to-sky-50">
        <div className="max-w-5xl mx-auto text-gray-700 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-sky-50 to-white p-8 sm:p-10 rounded-3xl shadow-lg border border-sky-200 hover:shadow-2xl transition-all duration-300"
          >
            <p className="text-lg leading-relaxed">
              <strong className="text-sky-600">TechSahayata</strong> is a
              technology-driven company dedicated to helping businesses achieve
              digital transformation through intelligent, scalable, and
              future-ready solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-sky-100 via-white to-sky-50 p-8 sm:p-10 rounded-3xl shadow-md border border-sky-200"
          >
            <div className="absolute -top-5 left-6 text-sky-600">
              <Lightbulb size={40} />
            </div>
            <p className="text-lg mt-4">
              We believe technology should empower people. Our team crafts
              seamless digital experiences that are secure, efficient, and built
              for growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="py-20 bg-gradient-to-b from-sky-50 via-white to-sky-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-center text-sky-800 mb-12"
          >
            Our Expertise
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 rounded-3xl overflow-hidden shadow-2xl border border-sky-200"
          >
            <img
              src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1762963325/expertise-visual_irrgc4.jpg"
              alt="Expertise banner"
              className="w-full h-[400px] object-cover"
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Website Development",
                desc: "Responsive and SEO-optimized websites that reflect your brand’s excellence.",
                icon: <Code size={36} className="text-sky-600" />,
              },
              {
                title: "Mobile App Development",
                desc: "Intuitive Android, iOS, and cross-platform apps for seamless user experiences.",
                icon: <Rocket size={36} className="text-sky-600" />,
              },
              {
                title: "Custom Software Solutions",
                desc: "Robust, scalable software tailored to your business needs.",
                icon: <Cpu size={36} className="text-sky-600" />,
              },
              {
                title: "AI & Machine Learning",
                desc: "AI-driven insights that improve efficiency and decision-making.",
                icon: <Shield size={36} className="text-sky-600" />,
              },
              {
                title: "Robotic Process Automation",
                desc: "Automate tasks with precision and speed using smart RPA systems.",
                icon: <Lightbulb size={36} className="text-sky-600" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl border border-sky-100 transition-all hover:-translate-y-2 duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & COMMITMENT */}
      <section className="relative py-20 px-6 sm:px-10 lg:px-20 bg-gradient-to-br from-sky-50 via-white to-sky-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 rounded-3xl overflow-hidden shadow-2xl border border-sky-200"
          >
            <img
              src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1762963471/mission-future_lhrlz7.jpg"
              alt="Mission vision banner"
              className="w-full h-[350px] object-cover"
            />
          </motion.div>

          <div className="space-y-14">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-8 sm:p-10 bg-white rounded-3xl shadow-lg border border-sky-100 hover:shadow-2xl"
            >
              <h2 className="text-3xl font-bold text-sky-800 mb-4 border-l-4 border-sky-500 pl-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700">
                To empower organizations through technology and creativity,
                helping them stay ahead in a rapidly changing digital landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 sm:p-10 bg-gradient-to-r from-sky-100 to-white rounded-3xl shadow-lg border border-sky-200 hover:shadow-2xl"
            >
              <h2 className="text-3xl font-bold text-sky-800 mb-4 border-l-4 border-sky-500 pl-4">
                Our Commitment
              </h2>
              <p className="text-lg text-gray-700">
                At <strong className="text-sky-600">TechSahayata</strong>, we
                are committed to delivering excellence, building trust, and
                ensuring every digital solution we create adds real business
                value.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GRADIENT STRIP */}
      <div className="w-full h-2 bg-gradient-to-r from-sky-500 via-sky-400 to-sky-600 animate-pulse"></div>
    </main>
  );
};

export default About;

"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Lightbulb, Code, Cpu, Rocket, Shield } from "lucide-react";

const About = () => {
  const { scrollYProgress } = useScroll();
  
  // Smoothed transitions
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const heroY = useTransform(smoothProgress, [0, 0.3], [0, 150]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);
  const textParallax = useTransform(smoothProgress, [0, 0.5], [0, -50]);

  return (
    <main className="w-full min-h-screen bg-[#F8FAFC] selection:bg-[#097899]/30 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 sm:px-12 overflow-hidden min-h-screen">
        {/* Hero Background with Parallax */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity, scale: 1.1 }}
          className="absolute inset-0 z-0"
        >
          {/* Gradient overlay using brand color #097899 */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#002c3a]/90 via-[#097899]/60 to-[#F8FAFC] z-10" />
          <img
            src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1762967830/techsahayata-assets/abouthero.jpg"
            alt="Tech innovation background"
            className="w-full h-full object-cover grayscale-[20%] contrast-125"
          />
        </motion.div>

        {/* Animated Background Blobs using brand color */}
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-[#097899]/10 rounded-full blur-[100px] z-0" 
        />
        <motion.div 
          animate={{ rotate: -360 }} 
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-[#097899]/10 rounded-full blur-[80px] z-0" 
        />

        {/* Hero Content */}
        <motion.div style={{ y: textParallax }} className="relative z-20 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-white uppercase bg-[#097899]/40 backdrop-blur-md border border-white/20 rounded-full"
          >
            Since 2024
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black text-white drop-shadow-2xl mb-8 tracking-tighter"
          >
            About <span className="text-[#67e2ff]">TechSahayata</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-3xl max-w-2xl mx-auto text-slate-100 mb-8 drop-shadow-lg font-light leading-relaxed"
          >
            Empowering businesses with cutting-edge technology and innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-2 text-white/70 text-sm tracking-widest uppercase"
          >
            <span className="w-8 h-[1px] bg-white/30"></span>
            Last updated: {new Date().toLocaleDateString()}
            <span className="w-8 h-[1px] bg-white/30"></span>
          </motion.div>
        </motion.div>
      </section>

      {/* INTRO & VISION */}
      <section className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto text-gray-700 space-y-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(9,120,153,0.05)] border border-[#097899]/10 hover:border-[#097899]/30 transition-all duration-500"
          >
            <p className="text-2xl leading-relaxed font-light italic">
              <strong className="text-[#097899] font-bold not-italic">TechSahayata</strong> is a
              technology-driven company dedicated to helping businesses achieve
              digital transformation through intelligent, scalable, and
              future-ready solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-[#097899] to-[#046c8a] p-12 rounded-[2.5rem] shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12">
              <Lightbulb size={200} className="text-white" />
            </div>
            <div className="relative z-10">
                <Lightbulb size={48} className="text-[#67e2ff] mb-6" />
                <p className="text-2xl text-white font-medium leading-snug">
                  We believe technology should empower people. Our team crafts
                  seamless digital experiences that are secure, efficient, and built
                  for growth.
                </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-20">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black text-[#002c3a] mb-4"
              >
                Our Expertise
              </motion.h2>
              <div className="w-24 h-1.5 bg-[#097899] mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-20 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group"
          >
            <img
              src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1762963325/expertise-visual_irrgc4.jpg"
              alt="Expertise banner"
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Website Development", desc: "Responsive and SEO-optimized websites that reflect your brand’s excellence.", icon: <Code size={36} /> },
              { title: "Mobile App Development", desc: "Intuitive Android, iOS, and cross-platform apps for seamless user experiences.", icon: <Rocket size={36} /> },
              { title: "Custom Software Solutions", desc: "Robust, scalable software tailored to your business needs.", icon: <Cpu size={36} /> },
              { title: "AI & Machine Learning", desc: "AI-driven insights that improve efficiency and decision-making.", icon: <Shield size={36} /> },
              { title: "Robotic Process Automation", desc: "Automate tasks with precision and speed using smart RPA systems.", icon: <Lightbulb size={36} /> },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-10 bg-slate-50 rounded-[2rem] border border-transparent hover:border-[#097899]/20 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-[#097899] mb-6 group-hover:bg-[#097899] group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & COMMITMENT */}
      <section className="py-24 px-6 sm:px-10 bg-slate-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[3rem] overflow-hidden shadow-px border-4 border-white"
          >
            <img
              src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1762963471/mission-future_lhrlz7.jpg"
              alt="Mission vision banner"
              className="w-full h-[600px] object-cover"
            />
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-white rounded-[2.5rem] shadow-sm border border-[#097899]/10"
            >
              <h2 className="text-3xl font-black text-[#002c3a] mb-6 flex items-center gap-4">
                <span className="w-10 h-1 bg-[#097899] rounded-full" /> Our Mission
              </h2>
              <p className="text-xl text-slate-600 font-medium leading-relaxed">
                To empower organizations through technology and creativity,
                helping them stay ahead in a rapidly changing digital landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="p-10 bg-[#002c3a] rounded-[2.5rem] shadow-xl text-white"
            >
              <h2 className="text-3xl font-black mb-6 flex items-center gap-4">
                <span className="w-10 h-1 bg-[#097899] rounded-full" /> Our Commitment
              </h2>
              <p className="text-xl text-slate-100 font-light leading-relaxed">
                At <strong className="text-[#097899] font-bold">TechSahayata</strong>, we
                are committed to delivering excellence, building trust, and
                ensuring every digital solution we create adds real business
                value.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
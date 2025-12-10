import React from 'react';
import { HiDownload } from 'react-icons/hi';
import { PiStarFourFill } from 'react-icons/pi';
import { motion } from 'framer-motion';

// Tech stack icons
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiGit } from 'react-icons/si';

export const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const testimonials = [
  {
    quote:
      "Om quickly understood our requirements and delivered a clean, modern website with excellent UI/UX that performs flawlessly across all devices. Communication was smooth throughout, and the project was completed ahead of schedule. Highly professional and reliable.",
    name: "Anand Srivastava",
    role: "Head of Training & Development",
    company: "ClassBoxes",
    logo: "/assets/Testimonials/classboxes.jpeg", // update path
  },
  {
    quote:
      "Working with Om was a great experience. He translated our ideas into a beautiful, responsive UI and paid attention to even the smallest details.",
    name: "Sweta Verma",
    role: "Product Manager",
    company: "EduWave",
    logo: "/assets/logos/eduwave.png", // update path
  },
  {
    quote:
      "Highly professional and reliable, with timely delivery of the feature and excellent communication throughout the project. The frontend implementation was clean, efficient, and well-optimized. Strongly recommended for frontend development work.",
    name: "Tushar Langer",
    role: "Founder & CEO",
    company: "GoBasera",
    logo: "/assets/Testimonials/gobasera.jpeg", // update path
  },

 
];


  return (
    <section className="mt-16 pb-16" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-content font-semibold inline-flex items-center gap-1 border border-outer/60 py-1.5 px-3 rounded-2xl mb-4 bg-white/5 backdrop-blur-sm">
            <PiStarFourFill className="text-lg" />
            About Me
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-4">
            Turning ideas & complex problems <br className="hidden md:block" /> into simple, delightful experiences.
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            I help brands and businesses build fast, modern and conversion-focused web experiences with clean code and thoughtful design.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-12"
        >
          {/* Card1 */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.05, translateY: -4 }}
            className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 text-center border border-outer/60 overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40" />
            <h3 className="text-5xl md:text-6xl font-bold text-gradient mb-1 relative z-10">40+</h3>
            <p className="text-gray-700 font-semibold text-lg relative z-10">Happy Clients</p>
            <p className="text-gray-500 text-sm mt-2 relative z-10">
              Delivering reliable, on-time and quality work for every project.
            </p>
          </motion.div>

          {/* Card2 */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.05, translateY: -4 }}
            className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 text-center border border-outer/60 overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-40" />
            <h3 className="text-5xl md:text-6xl font-bold text-gradient mb-1 relative z-10">2+</h3>
            <p className="text-gray-700 font-semibold text-lg relative z-10">Years Experience</p>
            <p className="text-gray-500 text-sm mt-2 relative z-10">
              Hands-on with modern frontend stacks & real client projects.
            </p>
          </motion.div>

          {/* Card3 */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.05, translateY: -4 }}
            className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 text-center border border-outer/60 overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tl from-white/10 via-transparent to-transparent opacity-40" />
            <h3 className="text-5xl md:text-6xl font-bold text-gradient mb-1 relative z-10">20+</h3>
            <p className="text-gray-700 font-semibold text-lg relative z-10">Projects Completed</p>
            <p className="text-gray-500 text-sm mt-2 relative z-10">
              From landing pages to full-stack applications and dashboards.
            </p>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"
        >
          {/* Left Column - Text */}
          <div className="lg:col-span-2 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              viewport={{ once: true }}
              className="text-gray-600 text-lg leading-relaxed"
            >
              Hello! I'm <span className="font-semibold text-content">Om</span>, a web developer based in India.
              I specialize in crafting fast, responsive and visually engaging websites that feel great to use.
              My focus is on blending clean UI, smooth interactions and solid code architecture.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              viewport={{ once: true }}
              className="text-gray-600 text-lg leading-relaxed"
            >
              Over the past couple of years, I've worked with 40+ clients and completed 20+ projects ranging from
              personal portfolios to business websites and full-stack applications. I enjoy taking complex ideas
              and turning them into simple, intuitive digital experiences that actually solve problems and support
              business goals.
            </motion.p>

            {/* Core Values */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              viewport={{ once: true }}
              className="mt-4"
            >
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-[0.18em] mb-3">
                Core Values
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-white/5 border border-outer/50 rounded-2xl p-4">
                  <p className="text-sm font-semibold text-content mb-1">Clean & Scalable Code</p>
                  <p className="text-xs text-gray-500">
                    Writing maintainable, structured code that grows with your product.
                  </p>
                </div>
                <div className="bg-white/5 border border-outer/50 rounded-2xl p-4">
                  <p className="text-sm font-semibold text-content mb-1">User-First Design</p>
                  <p className="text-xs text-gray-500">
                    Every screen is designed with clarity, usability and purpose.
                  </p>
                </div>
                <div className="bg-white/5 border border-outer/50 rounded-2xl p-4">
                  <p className="text-sm font-semibold text-content mb-1">Reliable Communication</p>
                  <p className="text-xs text-gray-500">
                    Transparent updates, clear timelines and long-term collaboration.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Primary Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              viewport={{ once: true }}
              className="mt-4"
            >
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-[0.18em] mb-3">
                Primary Stack
              </h3>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-outer/60 backdrop-blur-sm text-sm">
                  <FaReact className="text-lg" style={{ color: "#61DAFB" }} />
                  <span>React</span>
                </div>

                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-outer/60 backdrop-blur-sm text-sm">
                  <SiNextdotjs className="text-lg" style={{ color: "#000000" }} />
                  <span>Next.js</span>
                </div>

                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-outer/60 backdrop-blur-sm text-sm">
                  <SiTailwindcss className="text-lg" style={{ color: "#38BDF8" }} />
                  <span>Tailwind CSS</span>
                </div>

                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-outer/60 backdrop-blur-sm text-sm">
                  <FaNodeJs className="text-lg" style={{ color: "#339933" }} />
                  <span>Node.js</span>
                </div>

                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-outer/60 backdrop-blur-sm text-sm">
                  <SiMongodb className="text-lg" style={{ color: "#47A248" }} />
                  <span>MongoDB</span>
                </div>

                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-outer/60 backdrop-blur-sm text-sm">
                  <SiGit className="text-lg" style={{ color: "#F05032" }} />
                  <span>Git</span>
                </div>

                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-outer/60 backdrop-blur-sm text-sm">
                  <FaGithub className="text-lg" style={{ color: "#181717" }} />
                  <span>GitHub</span>
                </div>
              </div>
            </motion.div>


            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center gap-4 mt-6"
            >
              <a
                href="/assets/resume.pdf"
                download
                className="custom-gradient py-3.5 px-7 text-white rounded-full font-semibold flex items-center justify-center gap-2 w-max hover:opacity-90 transition-opacity duration-300 shadow-lg shadow-black/10"
              >
                Download CV
                <HiDownload className="text-lg" />
              </a>

              <a
                href="#projects"
                className="py-3.5 px-7 rounded-full font-semibold border border-outer/60 text-content/90 hover:bg-white/10 transition-colors duration-300"
              >
                View Projects
              </a>
            </motion.div>
          </div>

          {/* Right Column - Personal Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-5"
          >
            {/* Current Role / Availability */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-sm font-medium border border-emerald-500/30">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Open to freelance & remote work
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-content">Current Role:</span>{' '}
                Freelance Frontend Web Developer
              </p>
            </motion.div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-outer/60 p-6 space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-500 text-xs font-medium mb-1 uppercase tracking-[0.15em]">
                  Name
                </p>
                <p className="text-gray-900 text-xl font-semibold">Ompal Singh</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-500 text-xs font-medium mb-1 uppercase tracking-[0.15em]">
                  Phone
                </p>
                <p className="text-gray-900 text-xl font-semibold break-all">
                  +91 723-382-8073
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-500 text-xs font-medium mb-1 uppercase tracking-[0.15em]">
                  Email
                </p>
                <p className="text-gray-900 text-xl font-semibold break-all">
                  ompalsingh@example.com
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-500 text-xs font-medium mb-1 uppercase tracking-[0.15em]">
                  Location
                </p>
                <p className="text-gray-900 text-xl font-semibold">
                  Kanpur, India
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-500 text-xs font-medium mb-1 uppercase tracking-[0.15em]">
                  Timezone
                </p>
                <p className="text-gray-900 text-sm font-semibold">
                  IST (UTC +05:30)
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-500 text-xs font-medium mb-1 uppercase tracking-[0.15em]">
                  Availability
                </p>
                <p className="text-gray-900 text-sm font-semibold">
                  Mon – Sat • 9:00 AM – 10:00 PM IST
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

       {/* Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6 gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500 mb-2">
                  Testimonials
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-content">
                  What my clients say
                </h3>
              </div>
            </div>

            {/* Cards container */}
            <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-3 md:gap-6 md:overflow-visible no-scrollbar">
              {testimonials.map((t, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 * index }}
                  viewport={{ once: true }}
                  className="min-w-[260px] md:min-w-0 bg-white/10 backdrop-blur-xl border border-outer/60 rounded-3xl p-5 md:p-6 relative overflow-hidden"
                >
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 text-3xl opacity-30 text-black select-none">
                    ❝
                  </div>

                  {/* Quote */}
                  <p className="text-gray-500 text-sm md:text-content leading-relaxed mb-4 relative z-10">
                    “{t.quote}”
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-3 relative z-10">
                    {/* Company Logo */}
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden border border-outer/40">
                      {t.logo ? (
                        <img
                          src={t.logo}
                          alt={t.company}
                          className="w-8 h-8 object-contain"
                        />
                      ) : (
                        <span className="text-xs font-semibold text-content">
                          {t.company?.charAt(0) || "C"}
                        </span>
                      )}
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-content leading-tight">
                        {t.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

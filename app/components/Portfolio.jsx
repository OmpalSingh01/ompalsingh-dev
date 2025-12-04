import React from "react";
import { PiStarFourFill } from "react-icons/pi";
import { HiArrowUpRight } from "react-icons/hi2";
import { motion, scale } from "framer-motion";

// const glowVariants = {
//   initial: { opacity: 0 },
//   hover: { opacity: 1 },
// };

export const Portfolio = () => {
  // Projects array
  const projects = [
    {
      id: 1,
      title: "Project One",
      image: "/assets/portfolio-1.png",
      tags: ["React", "Node.js"],
    },
    {
      id: 2,
      title: "Project Two",
      image: "/assets/portfolio-2.png",
      tags: ["Next.js", "Tailwind CSS"],
    },
    {
      id: 3,
      title: "Project Three",
      image: "/assets/portfolio-3.png",
      tags: ["JavaScript", "CSS"],
    },
  ];

  // Animation Variants

  const container = {
    hidden: { },
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  // const item = {
  //   hidden: { opacity: 0, y: 30 },
  //   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  // };

  // card 

  const card = {
    hidden: { opacity: 0, y: 60, rotateX: -10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="my-8" id="portfolio">
      {/* Heading */}
      <motion.div 
      initial={{opacity:0, y:20}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.6}}
      viewport={{ once: true}}
      className="text-center">
        <p className="text-content font-semibold inline-flex items-center gap-1 border-1 border-outer py-1.5 px-3 rounded-2xl mb-4">
          <PiStarFourFill className="text-lg" />
          Portfolio
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8">
          Check out my featured <br /> projects
        </h2>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.article
          variants={card}
          whileHover={{ scale: 1.03, rotateY: 3 }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
            key={project.id}
            className="group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 cursor-pointer"
            
          >
            {/* Image + overlay */}
            <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-[450px] object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            {/* Project Info */}
            <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            
            className="absolute bottom-4 left-4 right-4 z-10">
              <div className="p-3 md:p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tagText, index) => (
                    <span
                      key={index}
                      className="text-[11px] md:text-xs uppercase tracking-wide px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/10"
                    >
                      {tagText}
                    </span>
                  ))}
                </div>

                {/* Title + button */}
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-black transition-colors duration-300">
                    <HiArrowUpRight className="text-lg" />
                  </button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                
                className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-purple-500/5 to-transparent blur-xl"
              />
            </motion.div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

import React, { useState } from "react"; // ✅ make sure useState is imported
import { PiStarFourFill } from "react-icons/pi";
import { HiArrowUpRight } from "react-icons/hi2";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

export const Portfolio = () => {
  // Projects array
  const projects = [
    {
      id: 1,
      title: "Project One",
      image: "/assets/portfolio-1.png",
      tags: ["React", "Node.js", "Full Stack"],
      role: "Full-Stack Development",
      description:
        "A performant full-stack web app focused on seamless UX and responsive design.",
      liveUrl: "#", // replace with your live link
      codeUrl: "#", // replace with your GitHub link
      category: "fullstack", // ✅ slug (no space, lowercase)
    },
    {
      id: 2,
      title: "Project Two",
      image: "/assets/portfolio-2.png",
      tags: ["Next.js", "Tailwind CSS", "SSR"],
      role: "Frontend & Performance",
      description:
        "Next.js powered interface with optimized loading, SEO-friendly structure and clean UI.",
      liveUrl: "#",
      codeUrl: "#",
      category: "frontend", // ✅
    },
    {
      id: 3,
      title: "Project Three",
      image: "/assets/portfolio-3.png",
      tags: ["JavaScript", "CSS", "UI/UX"],
      role: "UI / UX & Interactions",
      description:
        "Interactive single-page experience with smooth animations and pixel-perfect layout.",
      liveUrl: "#",
      codeUrl: "#",
      category: "ui", // ✅
    },
  ];

  // Filter state
  const [activeFilter, setActiveFilter] = useState("all");

  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 40, rotateX: -6 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  // Filters config – values MUST match project.category
  const filters = [
    { label: "All", value: "all" },
    { label: "Frontend", value: "frontend" },
    { label: "Full Stack", value: "fullstack" },
    { label: "UI/UX", value: "ui" },
  ];

  // Apply filter
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="relative my-16 md:my-24" id="portfolio">
      {/* Section background accent */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-80" />
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-12"
      >
        <p className="text-content font-semibold inline-flex items-center gap-1 border border-outer/60 py-1.5 px-3 rounded-2xl mb-4">
          <PiStarFourFill className="text-lg" />
          Portfolio
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-3">
          Check out my featured <br className="hidden md:block" /> projects
        </h2>
        <p className="text-sm md:text-content text-white/60 max-w-xl mx-auto">
          A selection of work that highlights my focus on clean UI, smooth
          interactions, and modern web best practices.
        </p>
      </motion.div>

      {/* Filter pills */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10"
      >
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`px-3.5 py-1.5 text-xs md:text-sm rounded-full border transition-colors duration-200
              ${
                activeFilter === filter.value
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/40"
                  : "border-black/10 bg-white/5 text-black/70 hover:bg-primary/70 hover:text-white"
              }`}
          >
            {filter.label}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        key={activeFilter}
        layout
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
      >

        {filteredProjects.map((project) => (
          <motion.article
            key={project.id}
            layout
            variants={card}
            whileHover={{ scale: 1.03, rotateY: 3 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className="group relative bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 cursor-pointer"
          >
            {/* Outer hover glow */}
            <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/40 to-cyan-500/0 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

            {/* Image + overlay */}
            <div className="relative overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                initial={{ scale: 1.02 }}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6 }}
                className="w-full h-64 md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Featured badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="inline-flex items-center rounded-full border border-white/20 bg-black/40 px-2.5 py-1 text-[11px] uppercase tracking-wide text-white/70">
                  Featured Project
                </span>
              </div>

              {/* Category badge */}
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[11px] uppercase tracking-wide text-white/80">
                  {project.category === "frontend" && "Frontend"}
                  {project.category === "fullstack" && "Full Stack"}
                  {project.category === "ui" && "UI / UX"}
                </span>
              </div>
            </div>

            {/* Project Info Overlay */}
            <div className="absolute inset-x-4 bottom-4 z-10">
              <div className="p-3 md:p-5 rounded-2xl bg-black/70 backdrop-blur-xl border border-white/10 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                {/* Tags & role */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tagText, index) => (
                      <span
                        key={index}
                        className="text-[10px] md:text-[11px] uppercase tracking-wide px-3 py-1 rounded-full bg-white/5 text-white/75 border border-white/15"
                      >
                        {tagText}
                      </span>
                    ))}
                  </div>
                  <span className="text-[11px] md:text-xs text-white/60 italic">
                    {project.role}
                  </span>
                </div>

                {/* Title & description */}
                <div className="mb-3">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm text-white/65 line-clamp-2 md:line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Buttons: Live & Code */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs md:text-sm text-white hover:bg-white hover:text-black transition-colors duration-200"
                    >
                      <span>Live Demo</span>
                      <HiArrowUpRight className="text-sm" />
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-xs md:text-sm text-white/80 hover:bg-white/10 hover:border-white/40 transition-colors duration-200"
                    >
                      <FiGithub className="text-sm" />
                      <span>Code</span>
                    </a>
                  </div>

                  {/* Small index badge */}
                  <span className="shrink-0 h-8 w-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-[11px] text-white/70">
                    #{project.id.toString().padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          </motion.article>
        ))}

        {/* Optional: empty state if no projects match */}
        {filteredProjects.length === 0 && (
          <div className="col-span-full text-center text-sm text-white/60">
            No projects in this category yet.
          </div>
        )}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-10 md:mt-12 flex justify-center"
      >
        <a
          href="https://github.com/your-username" // replace with your GitHub
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm md:text-base text-white/80 hover:bg-white hover:text-black transition-colors duration-200"
        >
          <FiGithub className="text-lg" />
          <span>View all projects on GitHub</span>
        </a>
      </motion.div>
    </section>
  );
};

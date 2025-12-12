import React, { useState } from "react";
import { motion, useSpring } from "framer-motion";
import {
  PiStarFourFill,
  PiGraduationCapFill,
  PiBriefcaseFill,
} from "react-icons/pi";

export const Resume = () => {
  // Education Array
  const education = [
    {
      year: "2023 - 2025",
      title: "Master of Computer Applications",
      institution: "Kamla Nehru Institute of Technology, Sultanpur, India",
      location: "Sultanpur, UP, India",
      description:
        "Advanced coursework in full-stack development, distributed systems, and cloud-native architectures. Built production-ready MERN applications with scalable APIs, real-time data handling, and end-to-end deployment pipelines.",
      logo: "/assets/Logo/KNIT.png",
    },
    {
      year: "2020 - 2023",
      title: "Bachelor of Computer Applications",
      institution: "UIET CSJM University, Kanpur, India",
      location: "CSJMU Campus, Kanpur, India",
      description:
        "Completed foundational coursework in computer science, software development, and database management, with practical experience in building web applications and applying core programming concepts. Gained strong fundamentals in algorithms, data structures, and system design principles.",
      logo: "/assets/Logo/csjmu.png",
    },
    {
      year: "2018 - 2020",
      title: "Higher Secondary Education",
      institution: "Kendriya Vidyalaya IIT Kanpur, India",
      location: "IIT Kanpur Campus, India",
      description:
        "Completed higher secondary education with a focus on Mathematics and Computer Science, building strong analytical, logical reasoning, and problem-solving skills. Developed early proficiency in programming fundamentals and digital technologies.",
      logo: "assets/Logo/kv.png",
    },
    {
      year: "2015 - 2017",
      title: "Secondary Education",
      institution: "Kendriya Vidyalaya IIT Kanpur, India",
      location: "IIT Kanpur Campus, India",
      description:
        "Completed secondary education with a solid academic foundation across core subjects, strengthening quantitative aptitude, communication skills, and overall academic discipline.",
      logo: "assets/Logo/kv.png",
    },
  ];

  // Experience Array
  const workData = [
    {
      year: "OCT 2025 - Present",
      title: "Software Engineer Intern",
      location: "Remote, Hyderabad, India",
      company: "Go Basera",
      description:
        "I designed and implemented a multi-step user onboarding workflow to improve first-time activation while independently delivering two full production-grade features from requirement analysis to deployment. Additionally, I contributed to three core system features and resolved multiple critical hotfixes to enhance platform stability. I also implemented Playwright end-to-end testing and integrated Razorpay to enable secure staged payment processing.",
      stack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Docker", "Git", "Swagger", "Postman", "Playwright"],
      logo: "assets/Logo/gobasera.jpeg",
    },
    {
      year: "OCT 2025 - Present",
      title: "Freelance Frontend Developer",
      location: "Remote, New Jersey, USA",
      company: "Classboxes Technologies",
      description:
        "I delivered 45+ personalized portfolio websites for students, professionals, and job seekers, optimizing performance and SEO to improve visibility, Lighthouse scores, and overall loading speed. I designed UI/UX wireframes in Figma and converted them into fully responsive, pixel-perfect interfaces. Additionally, I customized WordPress portfolio themes using PHP and integrated dynamic content features to enhance user experience and maintainability.",
      stack: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "PHP", "WordPress", "Laravel", "Figma"],
      logo: "assets/Logo/classboxes.jpeg",
    },
    
    {
      year: "JUN 2024 - AUG 2024",
      title: "Frontend Developer Intern",
      location: "Kanpur, India",
      company: "FR Web Solutions",
      description:
        "I developed responsive user interfaces using React.js and Bootstrap, ensuring mobile-first design and cross-browser compatibility. I integrated frontend components with backend REST APIs while following Git-based collaborative workflows. Additionally, I improved UI performance and resolved cross-browser rendering issues to deliver a consistent and optimized user experience.",
      stack: ["React.js", "JavaScript", "CSS3", "Bootstrap", "Git", "GitHub"],  
      logo: "assets/Logo/fr.jpg",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Static progress for now (based on workData)
  const activeIndex = 2;
  const totalSteps = workData.length;
  const safeIndex = Math.min(activeIndex, totalSteps - 1);
  const progress = ((safeIndex + 1) / totalSteps) * 100;

  // Timeline spine with glow + mouse sway
  const TimelineSpine = ({ progress, mouseX = 0 }) => {
    const swayX = useSpring(mouseX * 10, {
      stiffness: 120,
      damping: 18,
      mass: 0.4,
    });

    return (
      <div className="pointer-events-none absolute left-4 sm:left-5 inset-y-0 flex items-stretch z-0">
        <motion.div
          className="relative w-[3px] mx-auto h-full"
          style={{ x: swayX }}
        >
          {/* Inactive full line */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "color-mix(in srgb, var(--color-primary) 15%, transparent)",
            }}
          />

          {/* Active progress */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: `${progress}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] rounded-full"
            style={{
              background: "var(--color-primary)",
              boxShadow:
                "0 0 30px color-mix(in srgb, var(--color-primary), transparent 10%)",
            }}
          />

          {/* Soft glow bleed */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: `${progress}%`, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pointer-events-none absolute -left-6 -right-6 top-0 rounded-full blur-3xl"
            style={{
              background:
                "color-mix(in srgb, var(--color-primary) 30%, transparent)",
            }}
          />

          {/* Top & bottom caps */}
          <div
            className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full"
            style={{
              background: "var(--color-primary)",
              boxShadow: "0 0 14px var(--color-primary)",
            }}
          />
          <div
            className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full blur-[2px]"
            style={{
              background:
                "color-mix(in srgb, var(--color-primary) 60%, transparent)",
            }}
          />
        </motion.div>
      </div>
    );
  };

  const TimelineColumn = ({ title, icon, items, type }) => {
    const [mouseX, setMouseX] = useState(0); // -1 to 1

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width; // 0 → 1
      const normalized = (x - 0.5) * 2; // -1 → 1
      setMouseX(normalized);
    };

    const handleMouseLeave = () => {
      setMouseX(0);
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Column header */}
        <div className="mb-6 flex items-center justify-between gap-2">
          <h3 className="text-xl md:text-2xl font-bold text-content flex items-center gap-2">
            <span
              className="inline-flex h-9 w-9 items-center justify-center rounded-full"
              style={{
                background:
                  "color-mix(in srgb, var(--color-primary) 12%, transparent)",
                color: "var(--color-primary)",
              }}
            >
              {icon}
            </span>
            {title}
          </h3>
          <span className="hidden md:inline-flex text-[11px] uppercase tracking-[0.18em] border px-3 py-1 rounded-full"
            style={{
              borderColor: "var(--color-outer)",
              color: "var(--color-content-alter)",
            }}
          >
            {type === "education" ? "Academic Timeline" : "Professional Timeline"}
          </span>
        </div>

        <div className="relative">
          {/* Spine behind cards */}
          <TimelineSpine progress={progress} mouseX={mouseX} />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative z-10 flex-shrink-0 space-y-7 sm:space-y-8 pl-7 sm:pl-9"
          >
            {items.map((item, index) => (
              <motion.article
                key={index}
                variants={cardVariant}
                whileHover={{ x: 6, y: -2, rotate: -0.2 }}
                className="relative flex items-start gap-4 group"
              >
                {/* Bullet + logo */}
                <div className="relative z-10 mt-1">
                  <div className="w-11 h-11 rounded-3xl border bg-white/5 backdrop-blur-sm flex items-center justify-center flex-shrink-0 overflow-hidden shadow-sm group-hover:shadow-md group-hover:-translate-y-[1px] transition-all duration-200"
                    style={{ borderColor: "var(--color-outer)" }}
                  >
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt={item.institution || item.company}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    ) : type === "education" ? (
                      <PiGraduationCapFill
                        className="w-5 h-5"
                        style={{ color: "var(--color-primary)" }}
                      />
                    ) : (
                      <PiBriefcaseFill
                        className="w-5 h-5"
                        style={{ color: "var(--color-primary)" }}
                      />
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex-1">
                  <div className="relative pb-3 md:pb-4">
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-60"
                      style={{
                        background:
                          "linear-gradient(to right, transparent, color-mix(in srgb, var(--color-primary) 40%, transparent), transparent)",
                      }}
                    />

                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className="inline-flex items-center text-[11px] font-semibold tracking-wide px-2.5 py-1 rounded-full uppercase"
                          style={{
                            color: "var(--color-primary)",
                            background:
                              "color-mix(in srgb, var(--color-primary) 12%, transparent)",
                          }}
                        >
                          {item.year}
                        </span>
                          <span
                        className="px-2 py-0.5 text-xs font-medium rounded-full"
                        style={{
                          border: "1px solid color-mix(in srgb, var(--color-primary) 40%, transparent)",
                          color: "var(--color-primary)",
                        }}
                      >
                        {item.location}
                      </span>


                        <span
                          className="inline-flex text-[11px] font-medium rounded-full px-2 py-0.5"
                          style={{
                            border: "1px solid rgba(148, 163, 184, 0.4)",
                            color: "var(--color-content-alter)",
                            background: "rgba(15, 23, 42, 0.02)",
                          }}
                        >
                          {type === "education" ? "Education" : "Experience"}
                        </span>
                      </div>

                      <h4 className="text-base md:text-lg font-semibold text-content">
                        {item.title}
                      </h4>

                      <p className="text-xs md:text-sm font-medium"
                        style={{ color: "var(--color-content-alter)" }}
                      >
                        {item.institution || item.company}
                      </p>

                      <p className="text-xs md:text-sm leading-relaxed"
                        style={{ color: "var(--color-content-alter)" }}
                      >
                        {item.description}
                      </p>

                      <p className="text-xs md:text-sm font-medium"
                        style={{ color: "var(--color-content-alter)" }}
                      >
                        {item.stack && item.stack.length > 0 && (
                          <>
                            <span className="font-semibold">Tech Stack:</span>{" "}
                            {item.stack.join(", ")}
                          </>
                        )}
                      </p>

                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="mt-16 pb-16" id="resume">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto px-4"
      >
        <p className="text-content font-semibold inline-flex items-center gap-1 border py-1.5 px-3 rounded-2xl mb-4 bg-white/60 backdrop-blur"
          style={{ borderColor: "var(--color-outer)" }}
        >
          <PiStarFourFill className="text-lg" />
          Resume
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-3">
          Education &amp; Practical Experience
        </h2>
        <p className="text-sm md:text-base"
          style={{ color: "var(--color-content-alter)" }}
        >
          A quick look at my academic journey and hands-on experience in web
          development and technology. From foundational learning to building
          real-world projects with modern tools.
        </p>

        {/* small highlight row */}
        <div className="mt-5 flex flex-wrap justify-center gap-3 text-[11px] md:text-xs">
          <span
            className="inline-flex items-center gap-1 rounded-full px-3 py-1"
            style={{
              border: "1px solid var(--color-outer)",
              background: "rgba(255,255,255,0.6)",
              color: "gray-500",
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            5+ Years Learning &amp; Building
          </span>
          <span
            className="inline-flex items-center gap-1 rounded-full px-3 py-1"
            style={{
              border: "1px solid var(--color-outer)",
              background: "rgba(255,255,255,0.6)",
              color: "gray-500",
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Full-Stack · MERN · UI/UX Focus
          </span>
        </div>
      </motion.div>

      {/* Timeline Content */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto px-4">
        <TimelineColumn
          title="Education"
          icon={<PiGraduationCapFill className="w-4 h-4" />}
          items={education}
          type="education"
        />
        <TimelineColumn
          title="Work Experience"
          icon={<PiBriefcaseFill className="w-4 h-4" />}
          items={workData}
          type="work"
        />
      </div>
    </section>
  );
};

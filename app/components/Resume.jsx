import React from "react";
import {
  PiStarFourFill,
  PiGraduationCapFill,
  PiBriefcaseFill,
} from "react-icons/pi";
import { motion } from "framer-motion";

export const Resume = () => {
  // Education Array
  const education = [
    {
      year: "2020 - 2024",
      title: "Bachelor of Technology in Computer Science",
      institution: "ABC University, India",
      description:
        "Studied core computer science subjects including algorithms, data structures, databases, and web development. Graduated with honors.",
      logo: "/assets/KNIT.png",
    },
    {
      year: "2018 - 2020",
      title: "Higher Secondary Education",
      institution: "XYZ School, India",
      description:
        "Completed higher secondary education with a focus on science and mathematics. Achieved top grades in all subjects.",
      logo: "/logos/xyz-school.png",
    },
    {
      year: "2016 - 2018",
      title: "Secondary Education",
      institution: "ABC High School, India",
      description:
        "Completed secondary education with a focus on science and mathematics. Participated in various extracurricular activities.",
      logo: "/logos/abc-highschool.png",
    },
  ];

  // Experience Array
  const workData = [
    {
      year: "2022 - Present",
      title: "Frontend Developer Intern",
      company: "Tech Solutions Pvt Ltd",
      description:
        "Worked on developing responsive web applications using React and Tailwind CSS. Collaborated with designers and backend developers to implement new features.",
      logo: "/logos/tech-solutions.png",
    },
    {
      year: "2021 - 2022",
      title: "Junior Web Developer",
      company: "Web Creators Inc",
      description:
        "Assisted in the development and maintenance of client websites. Gained experience in HTML, CSS, JavaScript, and version control using Git.",
      logo: "/logos/web-creators.png",
    },
    {
      year: "2020 - 2021",
      title: "IT Support Assistant",
      company: "XYZ Corporation",
      description:
        "Provided technical support to employees, troubleshooting hardware and software issues. Assisted in setting up new workstations and maintaining IT inventory.",
      logo: "/logos/xyz-corp.png",
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

  // Timeline spine with glow
  const TimelineSpine = ({ progress }) => (
    <div className="pointer-events-none absolute left-4 sm:left-5 inset-y-0 flex items-stretch z-0">
      <div className="relative w-[3px] mx-auto h-full">
        {/* Inactive full line */}
        <div className="absolute inset-0 rounded-full bg-primary/10" />

        {/* Active filled progress + strong glow via shadow */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: `${progress}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] rounded-full bg-primary shadow-[0_0_30px_rgba(124,58,237,0.9)]"
        />

        {/* Extra soft glow bleed */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: `${progress}%`, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pointer-events-none absolute -left-6 -right-6 top-0 rounded-full blur-3xl bg-primary/30"
        />

        {/* Top & bottom caps */}
        <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_14px_rgba(124,58,237,0.9)]" />
        <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-primary/40 blur-[2px]" />
      </div>
    </div>
  );

  const TimelineColumn = ({ title, icon, items, type }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="mb-6 flex items-center justify-between gap-2">
        <h3 className="text-xl md:text-2xl font-bold text-content flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
            {icon}
          </span>
          {title}
        </h3>
        <span className="hidden md:inline-flex text-[11px] uppercase tracking-[0.18em] text-muted-foreground border border-outer px-3 py-1 rounded-full">
          {type === "education" ? "Academic Timeline" : "Professional Timeline"}
        </span>
      </div>

      <div className="relative">
        {/* Spine behind cards */}
        <TimelineSpine progress={progress} />

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
                <div className="w-11 h-11 rounded-3xl border border-outer bg-background/80 flex items-center justify-center flex-shrink-0 overflow-hidden shadow-sm group-hover:shadow-md group-hover:-translate-y-[1px] transition-all duration-200">
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt={item.institution || item.company}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  ) : type === "education" ? (
                    <PiGraduationCapFill className="w-5 h-5 text-primary" />
                  ) : (
                    <PiBriefcaseFill className="w-5 h-5 text-primary" />
                  )}
                </div>
              </div>

              {/* Card Content */}
              <div className="flex-1">
                <div className="relative pb-3 md:pb-4">
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-60" />
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center text-[11px] font-semibold tracking-wide text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase">
                        {item.year}
                      </span>
                      <span className="inline-flex text-[11px] font-medium rounded-full border border-border/60 px-2 py-0.5 text-muted-foreground/80 bg-background/70">
                        {type === "education" ? "Education" : "Experience"}
                      </span>
                    </div>

                    <h4 className="text-base md:text-lg font-semibold text-content">
                      {item.title}
                    </h4>

                    <p className="text-xs md:text-sm text-muted-foreground/80 font-medium">
                      {item.institution || item.company}
                    </p>

                    <p className="text-xs md:text-sm text-muted-foreground/90 leading-relaxed">
                      {item.description}
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
        <p className="text-content font-semibold inline-flex items-center gap-1 border border-outer py-1.5 px-3 rounded-2xl mb-4 bg-background/70 backdrop-blur">
          <PiStarFourFill className="text-lg" />
          Resume
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-3">
          Education & Practical Experience
        </h2>
        <p className="text-sm md:text-content text-muted-foreground">
          A quick look at my academic journey and hands-on experience in web
          development and technology. From foundational learning to building
          real-world projects with modern tools.
        </p>

        {/* small highlight row */}
        <div className="mt-5 flex flex-wrap justify-center gap-3 text-[11px] md:text-xs">
          <span className="inline-flex items-center gap-1 rounded-full border border-outer/70 bg-background/70 px-3 py-1 text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            3+ Years Learning & Building
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-outer/70 bg-background/70 px-3 py-1 text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Frontend · MERN · UI Focus
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

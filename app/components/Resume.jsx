import React from "react";
import { PiStarFourFill, PiGraduationCapFill, PiBriefcaseFill } from "react-icons/pi";
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

  return (
    <section className="mt-16 pb-12" id="resume">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-content font-semibold inline-flex items-center gap-1 border border-outer py-1.5 px-3 rounded-2xl mb-4">
          <PiStarFourFill className="text-lg" />
          Resume
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-3">
          Education and Practical <br /> Experience
        </h2>
        <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
          A quick look at my academic journey and hands-on experience in web development and technology.
        </p>
      </motion.div>

      {/* Timeline Content */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-content mb-6 flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
              <PiGraduationCapFill className="w-4 h-4" />
            </span>
            Education
          </h3>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-primary via-primary/40 to-transparent shadow-[0_0_12px_rgba(124,58,237,0.6)]">
              {/* Animated Pulse */}
              <motion.span
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: [0.2, 1, 0.2], y: ["0%", "100%", "0%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 h-10 w-full bg-gradient-to-b from-white/60 to-transparent rounded-full"
              />
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative flex-shrink-0 space-y-8 pl-2"
            >
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={cardVariant}
                  whileHover={{ x: 8, y: -2 }}
                  className="relative flex items-start gap-4"
                >
                  {/* Logo circle */}
                  <div className="relative z-10 mt-1">
                    <div className="w-11 h-11 rounded-2xl border border-outer bg-background/70 flex items-center justify-center flex-shrink-0 overflow-hidden shadow-sm">
                      {edu.logo ? (
                        <img
                          src={edu.logo}
                          alt={edu.institution}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      ) : (
                        <PiGraduationCapFill className="w-5 h-5 text-primary" />
                      )}
                    </div>
                  </div>

                  {/* Card Content – simplified, no heavy box */}
                  <div className="flex-1">
                    <div className="relative pb-3 md:pb-4">
                      {/* subtle bottom gradient line */}
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-60" />
                      <div className="space-y-1">
                        <span className="inline-flex items-center text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                          {edu.year}
                        </span>
                        <h4 className="text-base md:text-lg font-semibold text-content">
                          {edu.title}
                        </h4>
                        <p className="text-xs md:text-sm text-muted-foreground">
                          {edu.institution}
                        </p>
                        <p className="text-xs md:text-sm text-muted-foreground/90 leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-content mb-6 flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
              <PiBriefcaseFill className="w-4 h-4" />
            </span>
            Work Experience
          </h3>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-primary via-primary/40 to-transparent shadow-[0_0_12px_rgba(124,58,237,0.6)]">
              {/* Animated Pulse */}
              <motion.span
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: [0.2, 1, 0.2], y: ["0%", "100%", "0%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 h-10 w-full bg-gradient-to-b from-white/60 to-transparent rounded-full"
              />
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative flex-shrink-0 space-y-8 pl-2"
            >
              {workData.map((job, index) => (
                <motion.div
                  key={index}
                  variants={cardVariant}
                  whileHover={{ x: 8, y: -2 }}
                  className="relative flex items-start gap-4"
                >
                  {/* Logo circle */}
                  <div className="relative z-10 mt-1">
                    <div className="w-11 h-11 rounded-2xl border border-outer bg-background/70 flex items-center justify-center flex-shrink-0 overflow-hidden shadow-sm">
                      {job.logo ? (
                        <img
                          src={job.logo}
                          alt={job.company}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      ) : (
                        <PiBriefcaseFill className="w-5 h-5 text-primary" />
                      )}
                    </div>
                  </div>

                  {/* Card Content – simplified */}
                  <div className="flex-1">
                    <div className="relative pb-3 md:pb-4">
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-60" />
                      <div className="space-y-1">
                        <span className="inline-flex items-center text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                          {job.year}
                        </span>
                        <h4 className="text-base md:text-lg font-semibold text-content">
                          {job.title}
                        </h4>
                        <p className="text-xs md:text-sm text-muted-foreground">
                          {job.company}
                        </p>
                        <p className="text-xs md:text-sm text-muted-foreground/90 leading-relaxed">
                          {job.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

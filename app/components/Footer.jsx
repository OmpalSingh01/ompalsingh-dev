import React from "react";
import {
  FaDribbble,
  FaBehance,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";
import { motion } from "framer-motion";

/* ===== Animations ===== */
const socialContainer = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

const socialItem = {
  hidden: { opacity: 0, y: 16, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 18 },
  },
};

const footerText = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const dividerVariant = {
  hidden: { scaleX: 0, opacity: 0, originX: 0 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const contactContainer = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const contactItem = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const bottomBar = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
  },
};

const bottomItem = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};



/* ===== Component ===== */
export const Footer = () => {
  const socialIcons = [
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/your-profile",
    label: "LinkedIn",
    color: "#0A66C2", // LinkedIn Blue
  },
  {
    icon: FaGithub,
    url: "https://github.com/your-username",
    label: "GitHub",
    color: "#181717", // GitHub Black
  },
  {
    icon: FaBehance,
    url: "https://www.behance.net/yourprofile",
    label: "Behance",
    color: "#1769FF", // Behance Blue
  },
  {
    icon: FaDribbble,
    url: "https://dribbble.com/yourprofile",
    label: "Dribbble",
    color: "#EA4C89", // Dribbble Pink
  },
];


  return (
    <footer className="w-full border-t border-outer/40 bg-transparent">
      <div className="mx-auto max-w-6xl px-4 py-12 text-center md:text-left">

        {/* ===== Top Section ===== */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          
          <motion.div
            variants={footerText}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gradient mb-3">
              Let’s work together
            </h2>
            <p className="text-content md:text-lg text-muted-foreground">
              Have a project in mind or want to collaborate? I’m always open to
              discussing new opportunities, creative ideas, and freelance work.
            </p>
          </motion.div>

          {/* ===== Social Icons ===== */}
          <motion.div
            variants={socialContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 md:justify-end"
          >
            {socialIcons.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={index}
                variants={socialItem}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 rounded-2xl border border-outer/70 bg-transparent transition-all duration-10 inline-flex items-center justify-center"
                style={{ color: social.color }}     // ✅ Real brand color
              >
                <IconComponent className="text-xl md:text-2xl" />
              </motion.a>
            );
          })}

          </motion.div>
        </div>

        {/* ===== Divider ===== */}
        <motion.hr
          variants={dividerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="my-8 border-outer/40"
        />

        {/* ===== Contact Info ===== */}
        <motion.div
          variants={contactContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 text-content md:grid-cols-3 md:text-lg font-medium"
        >
          <motion.div variants={contactItem}>
            <p className="font-semibold">📍 Location</p>
            <p className="text-muted-foreground">Kanpur, India</p>
          </motion.div>

          <motion.div variants={contactItem}>
            <p className="font-semibold">📞 Phone</p>
            <p className="text-muted-foreground">+91 723-382-8073</p>
          </motion.div>

          <motion.div variants={contactItem}>
            <p className="font-semibold">📧 Email</p>
            <a
              href="mailto:mohitsingh.2626452@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              mohitsingh.2626452@gmail.com
            </a>
          </motion.div>
        </motion.div>

        {/* ===== Bottom Bar ===== */}
          <motion.div
          variants={bottomBar}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-outer/30 pt-4 text-xs text-muted-foreground md:flex-row"
        >
          <motion.p variants={bottomItem}>
            © {new Date().getFullYear()} Ompal Singh. All rights reserved.
          </motion.p>

          <motion.p variants={bottomItem}>
            Built with React, Tailwind CSS & Framer Motion
          </motion.p>
        </motion.div>


      </div>
    </footer>
  );
};

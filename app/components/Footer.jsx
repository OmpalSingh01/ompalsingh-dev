
import React from "react";
import {
  FaDribbble,
  FaBehance,
  FaInstagram,
  FaTwitch,
  FaPinterest,
} from "react-icons/fa";
import { motion } from "framer-motion";

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
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 18,
    },
  },
};

const footerText = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
  },
};

const dividerVariant = {
  hidden: { scaleX: 0, opacity: 0, originX: 0 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.15 },
  },
};

const contactContainer = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const contactItem = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export const Footer = () => {
  const socialIcons = [
    { icon: FaDribbble, url: "https://dribbble.com/yourprofile" },
    { icon: FaBehance, url: "https://www.behance.net/yourprofile" },
    { icon: FaInstagram, url: "https://www.instagram.com/yourprofile" },
    { icon: FaTwitch, url: "https://www.twitch.tv/yourprofile" },
    { icon: FaPinterest, url: "https://www.pinterest.com/yourprofile" },
  ];

  return (
    <footer className="py-12 px-4 text-center">
      {/* Social icons */}
      <motion.div
        variants={socialContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex justify-center gap-2 md:gap-6 mb-8"
      >
        {socialIcons.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <motion.a
              key={index}
              variants={socialItem}
              whileHover={{
                scale: 1.12,
                y: -4,
                rotate: 4,
                boxShadow:
                  "0 18px 45px rgba(0,0,0,0.25), 0 0 20px rgba(124,58,237,0.45)",
              }}
              whileTap={{ scale: 0.95, y: 0, rotate: 0 }}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl border border-outer bg-black/10 hover:bg-primary/10 transition-all duration-300"
            >
              <IconComponent className="text-xl md:text-2xl text-primary" />
            </motion.a>
          );
        })}
      </motion.div>

      {/* Text */}
      <motion.p
        variants={footerText}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-xl md:text-2xl font-semibold text-gradient max-w-3xl mx-auto mb-8"
      >
        Want to know more about me, tell me about your project or just to say
        hello? Drop me a line and I'll get back to you as soon as possible.
      </motion.p>

      {/* Divider */}
      <motion.hr
        variants={dividerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="border-outer mb-8"
      />

      {/* Contact info */}
      <motion.div
        variants={contactContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-lg md:text-xl font-medium"
      >
        <motion.div variants={contactItem}>
          <p className="font-semibold">📍 Location</p>
          <p>Kanpur, India</p>
        </motion.div>

        <motion.div variants={contactItem}>
          <p className="font-semibold">📞 Phone</p>
          <p>+91 723-382-8073</p>
        </motion.div>

        <motion.div variants={contactItem}>
          <p className="font-semibold">📧 Email</p>
          <p>mohitsingh.2626452@gmail.com</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

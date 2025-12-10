import React, { useState } from "react";
import { PiStarFourFill } from "react-icons/pi";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export const Contact = () => {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    const formData = new FormData(event.target);
    formData.append("access_key", "c0ae299a-a335-48e5-9682-9c323de05915");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        event.target.reset();
      } else {
        setStatus({
          type: "error",
          message:
            data.message ||
            "Failed to send message. Please try again in a moment.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Something went wrong. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="mt-12 pb-16" id="contact">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="text-center"
      >
        <p
          className="font-semibold inline-flex items-center gap-1 py-1.5 px-3 rounded-2xl mb-4 bg-white/60 backdrop-blur"
          style={{
            border: "1px solid var(--color-outer)",
            color: "var(--color-content)",
          }}
        >
          <PiStarFourFill className="text-lg" />
          Contact Me
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-3">
          Let&apos;s make something amazing together.
        </h2>
        <p
          className="md:text-lg text-sm max-w-2xl mx-auto"
          style={{ color: "var(--color-content-alter)" }}
        >
          Share your project details, collaboration ideas, or questions. I&apos;ll
          get back to you as soon as possible.
        </p>
      </motion.div>

      {/* Contact Form Card */}
      <motion.form
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.25 }}
  onSubmit={onSubmit}
  className="mt-8 max-w-4xl mx-auto rounded-3xl px-4 py-8 md:px-8 md:py-10 
             grid grid-cols-1 md:grid-cols-2 gap-6 border"
  style={{
    borderColor: "color-mix(in srgb, var(--color-outer) 70%, transparent)",
    background: "color-mix(in srgb, var(--color-base) 85%, transparent)",
    backdropFilter: "blur(18px)",
    color: "var(--color-content)",
    transition: "box-shadow 0.3s ease, border-color 0.3s ease",
  }}
  whileHover={{
    boxShadow:
      "0 0 32px color-mix(in srgb, var(--color-primary) 35%, transparent)",
  }}
>

        {/* Left Side */}
        <motion.div className="flex flex-col space-y-6">
          {/* Name */}
          <motion.div variants={item} className="relative">
            <motion.input
              id="name"
              name="name"
              type="text"
              placeholder=" "
              whileFocus={{ scale: 1.01 }}
              className="peer w-full border-b-2 bg-transparent focus:outline-none py-3 text-sm md:text-base"
              style={{
                borderColor: "color-mix(in srgb, var(--color-outer) 80%, transparent)",
                color: "var(--color-content)",
              }}
              required
            />
            <label
              htmlFor="name"
              className="pointer-events-none absolute left-0 top-3 text-sm transition-all duration-200
                        peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm
                        peer-focus:-top-3 peer-focus:text-xs
                        peer-focus:text-[color:var(--color-primary)]
                        peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-xs
                        peer-not-placeholder-shown:text-[color:var(--color-content-alter)]"
            >
              Your Name<span className="text-red-500">*</span>
            </label>

          </motion.div>

          {/* Email */}
          <motion.div variants={item} className="relative">
            <motion.input
              id="email"
              name="email"
              type="email"
              placeholder=" "
              whileFocus={{ scale: 1.01 }}
              className="peer w-full border-b-2 bg-transparent focus:outline-none py-3 text-sm md:text-base"
              style={{
                borderColor: "color-mix(in srgb, var(--color-outer) 80%, transparent)",
                color: "var(--color-content)",
              }}
              required
            />
            <label
              htmlFor="email"
              className="pointer-events-none absolute left-0 top-3 text-sm transition-all duration-200
                        peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm
                        peer-focus:-top-3 peer-focus:text-xs
                        peer-focus:text-[color:var(--color-primary)]
                        peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-xs
                        peer-not-placeholder-shown:text-[color:var(--color-content-alter)]"
            >
              Email Address<span className="text-red-500">*</span>
            </label>

          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div className="flex flex-col space-y-6">
          {/* Company */}
          <motion.div variants={item} className="relative">
            <motion.input
              id="company"
              name="company"
              type="text"
              placeholder=" "
              whileFocus={{ scale: 1.01 }}
              className="peer w-full border-b-2 bg-transparent focus:outline-none py-3 text-sm md:text-base"
              style={{
                borderColor: "color-mix(in srgb, var(--color-outer) 80%, transparent)",
                color: "var(--color-content)",
              }}
            />
            <label
              htmlFor="company"
              className="pointer-events-none absolute left-0 top-3 text-sm transition-all duration-200
                        peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm
                        peer-focus:-top-3 peer-focus:text-xs
                        peer-focus:text-[color:var(--color-primary)]
                        peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-xs
                        peer-not-placeholder-shown:text-[color:var(--color-content-alter)]"
            >
              Company / Organization
            </label>

          </motion.div>

          {/* Phone */}
          <motion.div variants={item} className="relative">
            <motion.input
              id="phone"
              name="phone"
              type="tel"
              placeholder=" "
              whileFocus={{ scale: 1.01 }}
              className="peer w-full border-b-2 bg-transparent focus:outline-none py-3 text-sm md:text-base"
              style={{
                borderColor: "color-mix(in srgb, var(--color-outer) 80%, transparent)",
                color: "var(--color-content)",
              }}
              required
            />
            <label
            htmlFor="phone"
            className="pointer-events-none absolute left-0 top-3 text-sm transition-all duration-200
                      peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm
                      peer-focus:-top-3 peer-focus:text-xs
                      peer-focus:text-[color:var(--color-primary)]
                      peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-xs
                      peer-not-placeholder-shown:text-[color:var(--color-content-alter)]"
          >
            Phone Number<span className="text-red-500">*</span>
          </label>

          </motion.div>
        </motion.div>

        {/* Message */}
        <motion.div variants={item} className="md:col-span-2 relative mt-2">
          <motion.textarea
            id="message"
            name="message"
            placeholder=" "
            className="peer w-full border-b-2 bg-transparent focus:outline-none py-3 text-sm md:text-base h-28 resize-none"
            style={{
              borderColor: "color-mix(in srgb, var(--color-outer) 80%, transparent)",
              color: "var(--color-content)",
            }}
            rows={5}
            required
          />
          <label
            htmlFor="message"
            className="pointer-events-none absolute left-0 top-3 text-sm transition-all duration-200
                      peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm
                      peer-focus:-top-3 peer-focus:text-xs
                      peer-focus:text-[color:var(--color-primary)]
                      peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-xs
                      peer-not-placeholder-shown:text-[color:var(--color-content-alter)]"
          >
            Your Message<span className="text-red-500">*</span>
          </label>

        </motion.div>

        {/* Submit + Status */}
        <motion.div
          variants={item}
          className="md:col-span-2 flex flex-col items-center md:items-start gap-4 mt-4"
        >
          <motion.button
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97, y: 0 }}
            type="submit"
            disabled={isSubmitting}
            className="custom-gradient text-white text-[1rem] font-semibold py-3 px-6 rounded-2xl flex items-center gap-2 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition-all cursor-pointer"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <FaPaperPlane className="text-lg" />
          </motion.button>

          {/* Success Tick Animation */}
          {status.type === "success" && (
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 16 }}
              className="flex items-center gap-2 text-emerald-400 text-sm md:text-base"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-emerald-400/70 bg-emerald-500/10">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              <span>{status.message}</span>
            </motion.div>
          )}

          {/* Error Message */}
          {status.type === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm md:text-base text-red-400"
              aria-live="polite"
            >
              {status.message}
            </motion.p>
          )}
        </motion.div>
      </motion.form>
    </section>
  );
};

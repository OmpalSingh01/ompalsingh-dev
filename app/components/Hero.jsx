import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { HiOutlineViewGrid, HiDownload } from "react-icons/hi";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiDribbble, SiBehance } from "react-icons/si";


export const Hero = () => {

  //Icon Array

  const icons = [
    '/assets/icon/1.svg',
    '/assets/icon/2.svg',
    '/assets/icon/3.svg',
    '/assets/icon/4.svg',
    '/assets/icon/5.svg',
    '/assets/icon/6.svg',
    '/assets/icon/7.svg',
    '/assets/icon/8.svg',
    '/assets/icon/9.svg',
    '/assets/icon/10.svg',
    '/assets/icon/11.svg',
    '/assets/icon/12.svg',
    '/assets/icon/13.svg',
    '/assets/icon/14.svg',
    '/assets/icon/15.svg',
    '/assets/icon/16.svg',
    '/assets/icon/17.svg',
    '/assets/icon/18.svg',
    '/assets/icon/19.svg',
    '/assets/icon/20.svg',
    '/assets/icon/21.svg',
    '/assets/icon/22.svg',
    '/assets/icon/23.svg',
    '/assets/icon/24.svg',
    '/assets/icon/25.svg',
    '/assets/icon/26.svg',
    '/assets/icon/27.svg',
    '/assets/icon/28.svg',
    '/assets/icon/29.svg',
    '/assets/icon/30.svg',
    '/assets/icon/31.svg',
    '/assets/icon/32.svg',
    '/assets/icon/33.svg',

  ];

  // Animation Variants

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

    const item = {
      hidden: { opacity: 0, y: 30 },
      show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };
  

  return (
    <section>
        <motion.div 
        variants ={container}
        initial="hidden"
        animate="show"
        className='max-w-2xl m-auto flex flex-col items-center justify-center text-center pt-24 md:pt-36 px-4 md:px-0 pb-8 overflow-hidden'>

        {/* Profile Image */}

        <motion.div variants={item}>
            <Image 
            src="/assets/profile.gif" alt="Profile Image" 
            width={150}
            height={150}
            className='rounded-full mb-4'
            priority
            />
        </motion.div>

        {/* Name */}
        <motion.h3 variants={item} className='text-lg md:text-xl font-semibold flex items-center justify-center gap-2'>I'm Ompal Singh
          <span className='inline-block'>👋🏻</span>
        </motion.h3>

        {/* Status Badge */}
        <motion.div
          variants={item}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-xs md:text-sm font-medium shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/70 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-gray-700">
            Available for freelance &amp; remote roles
          </span>
        </motion.div>


        {/* Title */}
        <motion.h1 variants={item} className='text-3xl md:text-5xl font-semibold mt-2 leading-tight'>
          Full-Stack Developer <br className='md:hidden' /> and UI/UX Designer
        </motion.h1>

         {/* Short bio */}
        <motion.p
          variants={item}
          className="mt-4 max-w-2xl text-sm md:text-content text-gray-600"
        >
          I build modern, responsive web applications with clean code and
          thoughtful design. From wireframes to production, I help brands ship
          experiences that feel fast, polished, and easy to use.
        </motion.p>

        {/* Icon Swipe */}
        <motion.div 
        variants={item}
        className='relative my-6 md:my-8 w-full mask-r-from-50% mask-l-from-50% overflow-hidden'>
          <motion.div className='flex gap-4 w-max'
          animate={{ x: ['0%', '-50%'] }}
          transition ={{ repeat: Infinity, repeatType: "loop", duration: 50, ease: 'linear' }}
          >
            
          {/*Icon Loop */}
          {icons.concat(icons).map((icon, index) => (
          <Image
            src={icon} 
            key={index} 
            alt={`Icon ${index + 1}`}
            width={20}
            height={20}
            className='md:w-[50px] md:h-[50px]'
          />
          ))}
          </motion.div>
        </motion.div>

        {/* Button */}

        <motion.div 
        variants={item}
        className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
          <a href="#portfolio" className='custom-gradient w-full md:w-auto py-3 px-8 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300'> My Work <HiOutlineViewGrid className='text-lg ' /></a>

          <a
  href="/assets/Ompal_Singh_Resume.pdf"
  download
  className="ai-border-btn w-full md:w-auto py-3 px-8 rounded-full font-semibold bg-white text-gray-900 border border-gray-300 flex items-center justify-center gap-2 transition-shadow duration-300 hover:shadow-sm "
>
  Download CV
  <HiDownload className="text-lg" />
</a>

        </motion.div>

               {/* Socials */}
<motion.div
  variants={item}
  className="mt-6 flex items-center gap-4 text-sm text-gray-500"
>
  <span className="hidden md:inline-block text-xs uppercase tracking-[0.2em] text-gray-400">
    Find me on
  </span>

  <div className="flex items-center gap-3">
    {/* Dribbble */}
    <a
      href="https://dribbble.com/ompalsingh01"
      target="_blank"
      rel="noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
    >
      <SiDribbble className="text-[18px] text-[#EA4C89]" />
    </a>

    {/* Behance */}
    <a
      href="https://www.behance.net/mohitsingh448"
      target="_blank"
      rel="noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
    >
      <SiBehance className="text-[18px] text-[#1769FF]" />
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/OmpalSingh01"
      target="_blank"
      rel="noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
    >
      <FiGithub className="text-[18px] text-[#181717]" />
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/ompal-singh"
      target="_blank"
      rel="noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
    >
      <FiLinkedin className="text-[18px] text-[#0A66C2]" />
    </a>
  </div>
</motion.div>



          {/* Quick stats */}
<motion.div
  variants={item}
  className="mt-8 grid grid-cols-3 gap-4 w-full max-w-lg"
>
  {/* Stat Card */}
  <div className="group rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-[1px]">
    <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400">
      Experience
    </p>
    <p className="mt-1 text-lg md:text-xl font-semibold text-gray-900">
      01+ <span className="text-sm font-medium text-gray-500">Years</span>
    </p>
  </div>

  {/* Stat Card */}
  <div className="group rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-[1px]">
    <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400">
      Projects
    </p>
    <p className="mt-1 text-lg md:text-xl font-semibold text-gray-900">
      06+ <span className="text-sm font-medium text-gray-500">Shipped</span>
    </p>
  </div>

  {/* Stat Card */}
  <div className="group rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-[1px]">
    <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400">
      Focus
    </p>
    <p className="mt-1 text-lg md:text-xl font-semibold text-gray-900">
      Web <span className="text-sm font-medium text-gray-500">&amp; SaaS</span>
    </p>
  </div>
</motion.div>


        </motion.div>



    </section>
  )
}

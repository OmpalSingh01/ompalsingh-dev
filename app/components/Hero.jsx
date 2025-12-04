import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { HiOutlineViewGrid, HiDownload } from "react-icons/hi";


export const Hero = () => {

  //Icon Array

  const icons = [
    '/assets/icon-1.svg',
    '/assets/icon-2.svg',
    '/assets/icon-3.svg',
    '/assets/icon-4.svg',
    '/assets/icon-5.svg',
    '/assets/icon-6.svg',
    '/assets/icon-7.svg',
    '/assets/icon-8.svg',
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

        {/* Title */}
        <motion.h1 variants={item} className='text-3xl md:text-5xl font-semibold mt-2 leading-tight'>
          Full-Stack Developer <br className='md:hidden' /> and UI/UX Designer
        </motion.h1>

        {/* Icon Swipe */}
        <motion.div 
        variants={item}
        className='relative my-6 md:my-8 w-full mask-r-from-50% mask-l-from-50% overflow-hidden'>
          <motion.div className='flex gap-4 w-max'
          animate={{ x: ['0%', '-50%'] }}
          transition ={{ repeat: Infinity, repeatType: "loop", duration: 15, ease: 'linear' }}
          >
            
          {/*Icon Loop */}
          {icons.concat(icons).map((icon, index) => (
          <Image
            src={icon} 
            key={index} 
            alt={`Icon ${index + 1}`}
            width={40}
            height={40}
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

          <a href="/assets/Ompal_Singh_Resume.pdf" download className='w-full md:w-auto py-3 px-8 rounded-full font-semibold border border-gray-300 hover:border-gray-400 hover:shadow-sm transition-colors duration-300 flex items-center justify-center gap-2'> Download CV <HiDownload className='text-lg ' /></a>
        </motion.div>

        </motion.div>
    </section>
  )
}

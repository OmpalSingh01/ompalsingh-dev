import React from 'react'
import { HiDownload } from 'react-icons/hi';
import { PiStarFourFill } from "react-icons/pi";
import { motion } from 'framer-motion';

export const About = () => {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

    const item = {
      hidden: {opacity:0, y:30},
      show: {opacity:1, y:0, transition: {duration:0.6}}


  };
  return (
    <section className='mt-12 pb-8' id="about">

        {/* Heading */}
              <motion.div
              initial={{opacity:0, y:20}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:0.6}}
              viewport={{ once: true}}
              className="text-center">
                <p className="text-content font-semibold inline-flex items-center gap-1 border-1 border-outer py-1.5 px-3 rounded-2xl mb-4">
                  <PiStarFourFill className="text-lg" />
                  About Me
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8">
                  Turning ideas & Complex Problems<br /> into simple designs.
                </h2>
              </motion.div>

              {/* About Data */}

              <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true}}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

                {/* Card1 */}
                <motion.div
                variants={item}
                whileHover={{ scale: 1.05 }}
                className='bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-outer'>
                  <h3 className='text-5xl md:text-6xl font-bold text-gradient mb-2'>40+</h3>
                  <p className='text-gray-700 font-medium text-lg'>Happy Clients</p>
                </motion.div>

                {/* Card2 */}
                <motion.div
                variants={item}
                whileHover={{ scale: 1.05 }}
                className='bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-outer'>
                  <h3 className='text-5xl md:text-6xl font-bold text-gradient mb-2'>02+</h3>
                  <p className='text-gray-700 font-medium text-lg'>Years of Experience</p>
                </motion.div>

                {/* Card3 */}
                <motion.div 
                variants={item}
                whileHover={{ scale: 1.05 }}
                className='bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-outer'>
                  <h3 className='text-5xl md:text-6xl font-bold text-gradient mb-2'>20+</h3>
                  <p className='text-gray-700 font-medium text-lg'>Projects Completed</p>
                </motion.div>
              </motion.div>

              {/* Content Text */}
              <motion.div 
              initial={{opacity:0, y:40}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:0.8, delay:0.2}}
              viewport={{ once: true}}
              className='grid grid-cols-1 lg:grid-cols-3 gap-12 items-start'>
                <div className='lg:col-span-2 space-y-6'>
                  <motion.p 
                  initial={{opacity:0, y:-20}}
                  whileInView={{opacity:1, y:0}}
                  transition={{duration:0.6, delay:0.3}}
                  viewport={{ once: true}}
                  className='text-gray-600 text-lg leading-relaxed'>
                    Hello! I'm Om, a web developer based in India. I specialize in creating beautiful, functional, and user-friendly websites that help businesses and individuals establish a strong online presence.
                  </motion.p>

                  <motion.p 
                  initial={{opacity:0, y:-20}}
                  whileInView={{opacity:1, y:0}}
                  transition={{duration:0.6, delay:0.8}}
                  viewport={{ once: true}}
                  className='text-gray-600 text-lg leading-relaxed'>
                    I'm a passionate and dedicated web developer with a knack for creating stunning and user-friendly websites. With over 2 years of experience in the industry, I've had the privilege of working with more than 40 happy clients and successfully completing over 20 projects. My journey in web development has been fueled by a love for turning complex problems into simple, elegant designs that not only look great but also provide an exceptional user experience.
                  </motion.p>
                  {/*download Button*/}
                  <motion.a 
                  initial={{opacity:0, y:20}}
                  whileInView={{opacity:1, y:0}}
                  transition={{duration:0.6, delay:0.5}}
                  viewport={{ once: true}}
                  href="/assets/resume.pdf" download 
                  className='custom-gradient py-4 px-8 text-white rounded-full font-semibold flex items-center justify-center gap-2 w-max hover:opacity-90 transition-opacity duration-300'
                  > Download CV
                  <HiDownload className=" text-lg" />
                  </motion.a>
                </div>

                {/* Right Column */}

                <motion.div
                initial={{opacity:0, y:20}}
                  whileInView={{opacity:1, y:0}}
                  transition={{duration:0.5, delay:0.3}}
                  viewport={{ once: true}}
                className='lg:col-span-1 space-y-4'>
                  <motion.div
                  initial={{opacity:0, y:10}}
                  whileInView={{opacity:1, y:0}}
                  transition={{duration:0.8, delay:0.3}}
                  viewport={{ once: true}}>
                    <p className='text-gray-500 text-sm font-medium mb-1'>Name</p>
                    <p className='text-gray-800 text-xl font-semibold'>Ompal Singh</p>
                  </motion.div>

                  <motion.div
                  initial={{opacity:0, y:10}}
                  whileInView={{opacity:1, y:0}}
                  transition={{duration:0.5, delay:0.5}}
                  viewport={{ once: true}}>
                    <p className='text-gray-500 text-sm font-medium mb-1'>Phone</p>
                    <p className='text-gray-800 text-xl font-semibold'>+91 723-382-8073</p>
                  </motion.div>

                  <motion.div
                  initial={{opacity:0, y:10}}
                  whileInView={{opacity:1, y:0}}
                  transition={{duration:0.5, delay:0.6}}
                  viewport={{ once: true}}>
                    <p className='text-gray-500 text-sm font-medium mb-1'>Email</p>
                    <p className='text-gray-800 text-xl font-semibold'>ompalsingh@example.com</p>
                  </motion.div>

                  <motion.div
                  initial={{opacity:0, y:10}}
                  whileInView={{opacity:1, y:0}}
                  transition={{duration:0.5, delay:0.8}}
                  viewport={{ once: true}}>
                    <p className='text-gray-500 text-sm font-medium mb-1'>Locaton</p>
                    <p className='text-gray-800 text-xl font-semibold'>Kanpur India</p>
                  </motion.div>

                </motion.div>
              </motion.div>
    </section>
  )
}

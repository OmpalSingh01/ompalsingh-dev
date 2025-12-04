import React from 'react';
import { PiStarFourFill, PiGraduationCapFill, PiBriefcaseFill } from "react-icons/pi";
import { motion } from 'framer-motion';

export const Resume = () => {

  // Education Array
  const education = [
    {
      year: "2020 - 2024",
      title: "Bachelor of Technology in Computer Science",
      institution: "ABC University, India",
      description: "Studied core computer science subjects including algorithms, data structures, databases, and web development. Graduated with honors."
    },
    {
      year: "2018 - 2020",
      title: "Higher Secondary Education",
      institution: "XYZ School, India",
      description: "Completed higher secondary education with a focus on science and mathematics. Achieved top grades in all subjects."
    },
    {
      year: "2016 - 2018",
      title: "Secondary Education",
      institution: "ABC High School, India",
      description: "Completed secondary education with a focus on science and mathematics. Participated in various extracurricular activities."
    }
  ];

  // Experience Array (Using same data for demonstration)
  const workData = [
    {
        year: "2022 - Present",
        title: "Frontend Developer Intern",
        company: "Tech Solutions Pvt Ltd",
        description: "Worked on developing responsive web applications using React and Tailwind CSS. Collaborated with designers and backend developers to implement new features."
      },

        {
        year: "2021 - 2022",
        title: "Junior Web Developer",
        company: "Web Creators Inc",
        description: "Assisted in the development and maintenance of client websites. Gained experience in HTML, CSS, JavaScript, and version control using Git."
      },

        {
        year: "2020 - 2021",
        title: "IT Support Assistant",
        company: "XYZ Corporation",
        description: "Provided technical support to employees, troubleshooting hardware and software issues. Assisted in setting up new workstations and maintaining IT inventory."
      },
  ];

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
    <section className="mt-12 pb-8" id="resume">
      {/* Heading */}
      <motion.div 
      initial={{opacity:0, y:20}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:0.6}}
              viewport={{ once: true}}
      className="text-center">
        <p className="text-content font-semibold inline-flex items-center gap-1 border-1 border-outer py-1.5 px-3 rounded-2xl mb-4">
          <PiStarFourFill className="text-lg" />
          Resume
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8">
          Education and Practical <br /> Experience
        </h2>
      </motion.div>

      {/* Timeline Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-12">

        {/* Education */}
        <motion.div
        initial={{opacity:0, y:40}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:0.8}}
              viewport={{ once: true}}
        >
          <h3 className="text-xl md:text-2xl font-bold text-content mb-8">Education</h3>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 custom-gradient opacity-60"></div>

            <div className="relative flex-shrink-0 space-y-10">
              {education.map((item, index) => (
                <motion.div key={index}
                variants={item}
                whileHover={{x:10}}
                className="relative flex items-start gap-6">
                  
                  {/* Icon */}
                  <div className="w-8 h-8 custom-gradient rounded-full flex items-center justify-center flex-shrink-0">
                    <PiGraduationCapFill className="w-4 h-4 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex min-w-0 flex-col">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {item.year}
                      </span>
                    </div>

                    <h4 className='text-lg font-semibold text-content'>{item.title}</h4>
                    <p className='text-gray-600 mb-2'>{item.institution}</p>
                    <p className='text-gray-700 text-sm '>{item.description}</p>
                  </div>

                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

         {/* Experience */}
        <motion.div
        initial={{opacity:0, y:40}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:0.8}}
              viewport={{ once: true}}
        >
          <h3 className="text-xl md:text-2xl font-bold text-content mb-8">Work Experience</h3>

          <div 
          
          className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 custom-gradient opacity-60"></div>

            <div className="relative flex-shrink-0 space-y-10">
              {workData.map((item, index) => (
                <motion.div key={index} 
                variants={item}
                whileHover={{x:10}}
                className="relative flex items-start gap-6">
                  
                  {/* Icon */}
                  <div className="w-8 h-8 custom-gradient rounded-full flex items-center justify-center flex-shrink-0">
                    <PiBriefcaseFill className="w-4 h-4 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex min-w-0 flex-col">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {item.year}
                      </span>
                    </div>

                    <h4 className='text-lg font-semibold text-content'>{item.title}</h4>
                    <p className='text-gray-600 mb-2'>{item.company}</p>
                    <p className='text-gray-700 text-sm '>{item.description}</p>
                  </div>

                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div> {/* ✅ grid closed properly */}

    </section>
  );
};

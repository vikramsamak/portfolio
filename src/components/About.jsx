/* eslint-disable react/no-unknown-property */
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import PropTypes from 'prop-types';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Overview
        </h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] leading-[30px] w-full text-justify'>
        I&apos;m a beginner in web development with a Computer Science degree. I got into web development because I love turning ideas into digital reality.
        I&apos;ve been learning HTML, CSS, JavaScript, and Python, and I&apos;m now diving into React and Next.js to build modern websites. I enjoy solving problems, paying attention to details, and creating websites that people find easy to use.
        For me, web development is not just about coding; it&apos;s about making websites that make people&apos;s lives better.
        My goal is to continue growing as a developer and to become a full-stack developer specializing in the NEXT.js or MERN (MongoDB, Express.js, React, Node.js) stack. I see these stacks as powerful tools for creating dynamic and responsive web applications.
        As I continue learning and growing, I&apos;m excited to connect with professionals, work on exciting projects, and contribute to the ever-changing world of web development. I&apos;m not just a web developer; I&apos;m a creator, problem solver, and a big fan of the digital world&apos;s potential.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

ServiceCard.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  icon: PropTypes.string
}

export default SectionWrapper(About, "about")
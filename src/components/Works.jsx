import {Tilt} from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { ImNewTab } from "react-icons/im";

import PropTypes from 'prop-types'

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-fit rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              className='bg-tertiary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              onClick={() => window.open(source_code_link, "_blank")}>
              <ImNewTab className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px] text-justify'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-7'>
          {
            tags.map((tag) => (
              <p
                className={`text-[14px] ${tag.color}`}
                key={tag.name}>
                #{tag.name}
              </p>
            ))
          }
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={`${styles.sectionSubText}`}>
          My work
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Projects
        </h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          className='mt-3 text-secondary text-[17px] w-full leading-[30px] text-justify'
          variants={fadeIn("", "", 0.1, 1)}>
          These projects show what I can do in the real world. 
          They prove I&apos;m good at solving hard problems, using different technologies, and managing projects well. 
          You can try them out yourself with the live demos I&apos;ve provided.
        </motion.p>
      </div>
      <div
        className='mt-20 flex flex-wrap gap-7 w-full'
      >
        {
          projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}
            />
          ))
        }
      </div>
    </>
  )
}

ProjectCard.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.array,
  image: PropTypes.string,
  source_code_link: PropTypes.string
}

export default SectionWrapper(Works, "")
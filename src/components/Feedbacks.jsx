import { motion, spring } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'
import PropTypes from 'prop-types'

const FeedbackCard = ({ index, testimonial, name, designation, image }) => (
  <motion.div
    className={`bg-black-200 p-10 rounded-3xl ${testimonials.length === 1 ? 'w-full' : 'xs:w-[320px]'}`}
    variants={fadeIn("", spring, index * 0.5, 0.75)}>
    <p className='text-white font-black text-[48px]'>&quot;</p>
    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>
        {testimonial}
      </p>
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation}
          </p>
        </div>
        <img
          alt={`feedback by-${name}`}
          src={image}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>what others say</p>
          <h2 className={styles.sectionHeadText}>
            Testimonials
          </h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {
          testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))
        }
      </div>
    </div>
  )
}

FeedbackCard.propTypes = {
  index: PropTypes.number,
  testimonial: PropTypes.string,
  name: PropTypes.string,
  designation: PropTypes.string,
  image: PropTypes.string
}

export default SectionWrapper(Feedbacks, "");
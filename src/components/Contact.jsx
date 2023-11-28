import { useState, useRef } from "react"
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from "../utils/motion"
import emailjs from '@emailjs/browser'
import toast, { Toaster } from "react-hot-toast"

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name !== "" && form.email !== "" && form.message !== "") {
      setLoading(true);
      emailjs.send('service_uy9jk3v', 'template_zyez3qw', {
        from_name: form.name,
        to_name: 'Vikram',
        from_email: form.email,
        to_email: 'vikramsamak02@gmail.com',
        message: form.message
      },
        'kdNGWi5PBXOfD1ML1').then(() => {
          setLoading(false)
          toast.success("Thank You . I will get back to you as soon as posssible.", {
            duration: 5000,
            style:
            {
              marginTop: '64px',
              backgroundColor: "#0f0a1e",
              color: "#FFFF",
              border: "1px solid #915EFF"
            }
          },
          )
          setForm({
            name: '',
            email: '',
            message: ''
          })
        }, (error) => {
          setLoading(false)
          console.log(error)
          toast.error('Something went wrong.', {
            duration: 5000,
            style:
            {
              marginTop: '64px',
              backgroundColor: "#0f0a1e",
              color: "#FFFF",
              border: "1px solid #915EFF"
            }
          })
        })
    }
    else {
      toast.error('Please fill the all input fields..', {
        duration: 5000,
        style:
        {
          marginTop: '64px',
          backgroundColor: "#0f0a1e",
          color: "#FFFF",
          border: "1px solid #915EFF"
        }
      })
    }
  }

  return (
    <>
      <div className="mt-12">
        <Toaster
          position="top-center"
          reverseOrder={false} />
      </div>
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
          variants={slideIn('left', 'tween', 0.2, 1)}>
          <p className={`${styles.sectionSubText}`}>
            Get in touch
          </p>
          <h3 className={`${styles.sectionHeadText}`}>
            Contact
          </h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                Your Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 palceholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                Your Email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-4 px-6 palceholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                Your Message
              </span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 palceholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </motion.div>
        <motion.div
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
          variants={slideIn('right', 'tween', 0.2, 1)}>
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  )
}

export default SectionWrapper(Contact, "contact");
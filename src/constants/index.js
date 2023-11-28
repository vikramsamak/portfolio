import {
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  powerspot,
  talkgpt,
  codeverse,
  stmanager,
  kabinzz,
  opankys
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "OPANKYS INC",
    icon: opankys,
    iconBg: "#1d1836",
    date: "September 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }

];

const testimonials = [
  {
    testimonial:
      "Exceptional web developer! Exceeded expectations... Delivered outstanding results, and displayed excellent communication throughout the project. Highly recommended!",
    name: "Kabin Kashyap Saikia",
    designation: "Developer of ST Manager TTS Discord Bot",
    image: kabinzz,
  },
];

const projects = [
  {
    name: "P O W E R S P O T - EV Charging Station Locator",
    description:
      "User-friendly NEXTJS web app for finding electric vehicle charging stations with real-time availability, station details,and navigation features.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: powerspot,
    source_code_link: "https://powerspot.vercel.app/",
  },
  {
    name: "ST MANAGER",
    description:
      "User-friendly NEXTJS web app for TTS (Text To Speech) discord bot.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
    ],
    image: stmanager,
    source_code_link: "https://www.stmanager.xyz/",
  },
  {
    name: "CodeVerse - Online Code Compiler",
    description:
      "Online code compiler using ReactJs and CodeX-API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: codeverse,
    source_code_link: "https://codeverse-compiler.netlify.app/",
  },
  {
    name: "TalkGPT",
    description:
      "TalkGPT is a basic website built with Lumen framework (PHP)and JavaScript. The project utilizes the ChatGPT API,providing users with a seamless conversational AI experience.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: talkgpt,
    source_code_link: "https://talkgpt-y57t.onrender.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Vikram Samak",
  initials: "VS",
  url: "https://www.vikramsamak.com",
  jobTitle: "Senior Software Engineer",
  company: "Athang Infotech",
  location: "Satara, India",
  locationLink: "https://www.google.com/maps/place/satara",
  description:
    "Web developer with over 2 years of professional experience designing and delivering responsive, scalable web applications.",
  summary:
    "Web developer with over 2 years of professional experience designing and delivering responsive, scalable web applications using React.js, Next.js, Node.js, and MongoDB. Skilled in both frontend and backend development, with a strong focus on clean, maintainable code, user experience, and performance optimization. Rapid learner and effective collaborator, applying technical expertise to solve practical challenges.",
  avatarUrl: "/me.jpg",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Bootstrap",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Web Sockets",
    "MongoDB",
    "Prisma",
    "MySQL",
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "n8n",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "vikramsamak02@gmail.com",
    tel: "+919422609894",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/vikramsamak",
        icon: Icons.github,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:vikramsamak02@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Athang Infotech",
      href: "#",
      badges: [],
      location: "Satara, Maharashtra",
      title: "Senior Software Engineer",
      logoUrl: "",
      start: "Jan 2025",
      end: "Dec 2025",
      description:
        "Leading the development of full-stack web applications using Next.js, React.js, Node.js, and MongoDB. Actively involved in system design discussions, architecture planning, and feature development. Worked on optimizing performance and improving code quality through reviews and refactoring.",
    },
    {
      company: "Athang Infotech",
      href: "#",
      badges: [],
      location: "Satara, Maharashtra",
      title: "Software Engineer",
      logoUrl: "",
      start: "May 2024",
      end: "Jan 2025",
      description:
        "Worked on building backend services using Express.js and integrating them with React-based frontends. Gained experience with MySQL using Prisma ORM and MongoDB using Mongoose ORM. Contributed to a live GPS tracking feature using Web Sockets in one of the projects. Also acquired practical knowledge of hosting and deploying both frontend and backend applications on a VPS using GitHub Actions.",
    },
    {
      company: "Athang Infotech",
      href: "#",
      badges: [],
      location: "Satara, Maharashtra",
      title: "Web Development Intern",
      logoUrl: "",
      start: "Mar 2024",
      end: "May 2024",
      description:
        "Started learning Next.js and contributed to building static websites. Also worked on UI improvements using React.js and Tailwind CSS while gaining hands-on experience with version control and basic API integration.",
    },
    {
      company: "Opankys Inc",
      href: "#",
      badges: [],
      location: "Satara, Maharashtra",
      title: "Software Developer",
      logoUrl: "",
      start: "Sep 2023",
      end: "Jan 2024",
      description:
        "Developed a school management web application with key features such as student admission, fee management, Leaving Certificate and Bonafide certificate generation and admin panel controls. Built using HTML, CSS, JavaScript, and React.js in collaboration with a small development team.",
    },
  ],
  education: [
    {
      school: "Yashwantrao Chavan Institute of Science, Satara",
      href: "#",
      degree: "Bachelor of Science (B.Sc.) in Computer Science",
      logoUrl: "",
      start: "2021",
      end: "2023",
    },
    {
      school: "Satara Polytechnic, Satara",
      href: "#",
      degree: "Diploma in Industrial Electronics",
      logoUrl: "",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Attendance System",
      href: "#",
      dates: "Professional Project",
      active: true,
      description:
        "Built a GPS-based attendance system where employees can check in within a defined office radius. Includes salary reports, leave application, regularization for missed check-ins, event management, and subscription-based plans.",
      technologies: ["React.js", "Express.js", "MongoDB"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Billing System",
      href: "#",
      dates: "Professional Project",
      active: true,
      description:
        "Developed a billing and inventory management system with features like product CRUD, purchase entry, quotations, and invoice generation.",
      technologies: ["React.js", "ShadcnUI", "MySQL", "Prisma", "Express.js"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Auto-Blog Writer",
      href: "#",
      dates: "Professional Project",
      active: true,
      description:
        "Created an n8n workflow that fetches tech articles from RSS feeds, extracts content using JS, rewrites it using the Mistral 7B model, and auto-creates draft posts in WordPress for admin review.",
      technologies: ["n8n", "RSS", "JavaScript", "Mistral 7B", "WordPress"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Appointment Alert System",
      href: "#",
      dates: "Professional Project",
      active: true,
      description:
        "Built a webhook-based notification system in n8n that triggers after appointment booking on a website, makes a voice call to the admin via Vapi API, and sends a Telegram alert.",
      technologies: ["n8n", "Webhook", "Vapi API", "Telegram"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "React API Utils",
      href: "https://github.com/vikramsamak/react-api-utils",
      dates: "Personal Project",
      active: true,
      description:
        "Created a small utility library to make API requests easier in React apps. It uses React Query and Axios to handle things like caching, loading states, and refetching.",
      technologies: ["React.js", "React Query", "Axios"],
      links: [
        {
          type: "Source",
          href: "https://github.com/vikramsamak/react-api-utils",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "React Extended Hooks",
      href: "https://github.com/vikramsamak/react-extended-hooks",
      dates: "Personal Project",
      active: true,
      description:
        "Built a collection of reusable utility hooks for React that leverage modern browser APIs to enhance application functionality with minimal effort. The library includes hooks for accessing battery status, geolocation, speech synthesis, platform details, and clipboard interaction.",
      technologies: ["React.js", "JavaScript"],
      links: [
        {
          type: "Source",
          href: "https://github.com/vikramsamak/react-extended-hooks",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Powerspot - EV Charging Station Locator",
      href: "https://github.com/vikramsamak/powerspot",
      dates: "Personal Project",
      active: true,
      description:
        "Built a web application to help users find electric vehicle charging stations with ease. The app displays key details such as connector types, power output, and station speed. It also features real-time station availability, photo previews, and navigation support.",
      technologies: ["Next.js", "Tailwind CSS"],
      links: [
        {
          type: "Source",
          href: "https://github.com/vikramsamak/powerspot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Reanalysis System - Exam Result Analysis Tool",
      href: "#",
      dates: "Personal Project",
      active: true,
      description:
        "Designed a desktop application aimed at helping teachers analyze exam results efficiently. The system includes a modern UI, Telegram Bot integration for quick alerts, password-protected report access, and cloud storage for secure and centralized data handling.",
      technologies: ["Desktop Application", "Flask", "Python"],
      links: [],
      image: "",
      video: "",
    },
  ],
} as const;

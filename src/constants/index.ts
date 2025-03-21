import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  carrace,
  tripguide,
  portfolio,
  threejs,
  studyplanner,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Application Developer- web & Mobile",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "A.I. Entusiast",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Software Developer Intern",
    companyName: "Giglabs",
    icon: shopify,
    iconBg: "#12339a",
    date: "Feb 2025 - Present",
    points: [
      "Built scalable UIs with React.js & Vue.js, optimizing performance and state management.",
      "Developed FastAPI-based REST/WebSocket APIs with JWT, OAuth, and RBAC security.",
      "Integrated CI/CD pipelines (Docker, Kubernetes, GitHub Actions) for automated deployments.",
      "Optimized database queries (PostgreSQL, MongoDB, Redis) for high-speed data processing.",
      "Implemented SSR/SSG (Next.js/Nuxt.js) for better SEO and faster load times.",
    ],
  },
  
  {
    title: "Applpication Developer- Web & Mobile",
    companyName: "Rooman Technologies - Intern",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: " Oct 2024 - Feb 2025",
    points: [
      "Built and optimized React.js UIs, ensuring seamless state management and performance tuning.",
      "Integrated RESTful APIs with advanced error handling and async data fetching strategies.",
      "Worked with Git, CI/CD pipelines, and modular code architecture for scalable deployment",
      "Debugged and refactored JavaScript/ES6 code, enhancing execution efficiency.",
      "Implemented JWT authentication, API security, and responsive design best practices.",
    ],
  },
  {
    title: "Web Developer",
    companyName: "Intergrity Examination & Solutions",
    icon: starbucks,
    iconBg: "#FFFFFF",
    date: "Aug 2024 - Nov 2024",
    points: [
      "Developed and deployed a web application using React.js to streamline workforce management.",
      "Integrated Firebase for authentication, real-time data storage, and backend services.",
      "Implemented dynamic charts and reports using Chart.js and jsPDF, enabling visual data analysis and exportable reports.",
      "Built a responsive and intuitive UI with React Router, React Select, and React Spinners for a smooth user experience",
      "Optimized performance and security by configuring API handling with Axios and setting up environment variables for secure data access.."
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   companyName: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials: TTestimonial[] = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
];

const projects: TProject[] = [
  {
    name: "A.I Based Study Planner",
    description:
      "The AI-Based Study Planner uses AI and vector search to provide students with smart study recommendations, document-based Q&A, and an interactive chatbot for efficient learning.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "python",
        color: "purple-text-gradient",
      },
    ],
    image: studyplanner,
    sourceCodeLink: "https://github.com/mufeed16/backend_of-_finalyear",
  },
  {
    name: "Car Race Game",
    description:
      "The Car Racing Game is a C++-based racing simulation featuring user-controlled cars, obstacle avoidance, and smooth gameplay mechanics with efficient collision detection and real-time user input handling.",
    tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "Code::Blocks",
        color: "green-text-gradient",
      },
      {
        name: "OpenGL ",
        color: "pink-text-gradient",
      },
    ],
    image: carrace,
    sourceCodeLink: "https://github.com/mufeed16/Car_Race_game",
  },
  {
    name: "My Portfolio",
    description:
      "A sleek and modern portfolio website showcasing my skills, projects, and experience, with an interactive design, smooth animations, and a user-friendly interface to highlight my expertise in web development.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescriot",
        color: "green-text-gradient",
      },
      {
        name: "threejs",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "purple-text-gradient",
      },
    ],
    image: portfolio,
    sourceCodeLink: "https://github.com/mufeed16/3d_portfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };

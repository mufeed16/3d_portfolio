type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
  social: {
    whatsapp: string;
    linkedin: string;
    github: string;
    instagram: string;
  };
};

export const config: TConfig = {
  html: {
    title: "Mufeed-Portfolio",
    fullName: "Mufeed",
    email: "mufeeddaralmanar123@mail.com",
  },
  hero: {
    name: "Mufeed",
    p: ["I'm Mufeed, a software engineer and web developer passionate about AI and the MERN stack."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview...",
      content: `I'm a skilled software developer with experience in Python, JavaScript, and expertise in frameworks like React, 
      Vue.js, and Flask. I'm a quick learner and collaborate 
      closely with clients to build efficient, scalable, and AI-powered solutions. Let's innovate together!!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      // p: "What others say",
      // h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
 },
 social: {
   whatsapp: "https://wa.me/918921850186",
   linkedin: "https://www.linkedin.com/in/mufeed-09445027b",
   github: "https://github.com/mufeed16",
   instagram: "https://instagram.com/mu._fyy",
  },
};

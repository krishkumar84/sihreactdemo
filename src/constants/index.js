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
    tripguide,
    threejs,
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
      title: "contact",
    },
  ];
  
  const services = [
    {
      title: "Fullstack Developer",
      icon: backend,
    },
    {
      title: "React JS",
      icon: reactjs,
    },
    {
      title: "MongoDB",
      icon: mongodb,
    },
    {
      title: "git",
      icon: git,
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
  
  const experiences = [
    {
      title: "Done Schooling",
      company_name: "",
      icon: mobile,
      iconBg: "#383E56",
      date: "April 2022",
      points: [
        "Knowledge and problem-solving: Thirst for knowledge and passion for problem-solving.",
        "Learning and critical thinking: Deep appreciation for learning and critical thinking.",
        "Technology: Fascinated with technology and its transformative potential.",
        "Beginning of a journey  eager to continue learning and using their skills to make a difference in the world. ",
      ],
    },
    {
      title: "B.Tech In Computer Science",
      company_name: "",
      icon: creator,
      iconBg: "#E6DEDD",
      date: "2022 -  2026",
      points: [
        "Journey: My journey into Computer Science began here.",
        "Immersion: I immersed myself in programming, algorithms, and software engineering.",
        "Skills: I honed my skills in turning concepts into functional applications.",
        "Foundation: The experiences and knowledge gained have provided me with a strong foundation.",
      ],
    },
    {
      title: "Web Developer Intern ",
      company_name: "Codesoft",
      icon: mobile,
      iconBg: "#383E56",
      date: "June 2023 - July 2023",
      points: [
        "Collaboration: Collaborated with a cross-functional team to develop responsive web apps using React.js and Node.js.",
        "Technologies: Gained practical experience with React.js and Node.js, implementing dynamic features and enhancing UI.",
        "Features: Contributed to UI enhancements and implemented dynamic features.",
        "Coding: Refined coding skills and learned best practices in version control and code review.",
      ],
    },
    {
      title: " Web Development Projects",
      company_name: "Freelance",
      icon: web,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Present",
      points: [
        "Client-oriented: Worked with diverse clients to bring their digital visions to life.",
        "Technical expertise: Proficient in HTML, CSS, JavaScript, and various frameworks.",
        "Communication and project management: Refined communication and project management skills.",
        "Client satisfaction: Ensured that each project aligned with the client's goals and exceeded their expectations.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "News Web",
      description:
        "Web application made with Node.js and React.js that uses the News API to render news dynamically and show it to users. The frontend is very good and provides a convenient and efficient way to consume news.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "rest api",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://news-express-ppgi.onrender.com/",
    },
    {
      name: "Frontend Web",
      description:" I created a banking web application with a great user interface using React, Tailwind, Vite, and Node.js. The application is built on a React frontend with Tailwind CSS for styling. Vite is used to speed up the development process, and Node.js ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://krishfirstreactproject.netlify.app/",
    },
    {
      name: "QR Reader & Generator",
      description:
        " developed a web app that can create QR codes, read QR codes, and has parallax scrolling, all with HTML, CSS, and JavaScript with qr code generator and reador api with faq section and fully reasponsive to any device.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "parallax",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://krishkumar84.github.io/qrgenerator-reader/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
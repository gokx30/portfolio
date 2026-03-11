/**
 * Portfolio Data — All personal info, skills, projects, experience, etc.
 * Based on Gokul's actual resume.
 */

export const personalInfo = {
  name: "Gokul",
  role: "MERN Stack Developer",
  tagline: "Building modern, scalable web applications with passion and precision.",
  email: "gokxey009@gmail.com",
  phone: "+91 8848177812",
  location: "Kollam, Kerala, India",
  linkedin: "www.linkedin.com/in/g-gokul-795102368",
  github: "https://github.com/gokx30",
  twitter: "#",
  resumeLink: "/Gokul_Resume.pdf",
  bio: `I'm Gokul, a passionate MERN Stack Developer from Kerala, India. I recently completed my Bachelor of Computer Applications from Sree Narayana College of Technology with a GPA of 7.5. With experience in full-stack development and a specific internship focusing on Odoo development, I specialize in crafting user-friendly interfaces and robust backend systems using the MERN stack and other modern technologies.`,
};

export const skills = {
  frontend: [
    { name: "JavaScript", level: 90 },
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "Bootstrap", level: 85 },
    { name: "React.js", level: 85 },
    { name: "PHP", level: 70 },
  ],
  backend: [
    { name: "MySQL", level: 85 },
    { name: "Python", level: 80 },
    { name: "Java", level: 75 },
    { name: "C++ / C", level: 75 },
    { name: "Git & GitHub", level: 85 },
    { name: "SQL", level: 80 },
  ],
  softSkills: [
    "Teamwork",
    "Problem Solving",
    "Multi-Tasking",
    "Analytical Thinking",
    "Communication",
  ],
};

export const journey = [
  {
    year: "2019",
    title: "High School Graduation",
    description: "Completed Plus Two (Science) from MG Memorial Government High School, Kerala.",
    icon: "education",
  },
  {
    year: "2022 - 2025",
    title: "Bachelor of Computer Applications",
    description: "Sree Narayana College of Technology, Kollam. Cumulative GPA: 7.5/10.",
    icon: "education",
  },
  {
    year: "2025",
    title: "Odoo Developer Intern",
    description: "Completed 2 months internship at Alphalize Technologies Pvt Limited, gaining hands-on ERP development experience.",
    icon: "work",
  },
  {
    year: "2025",
    title: "Building Medicare & TravelMate",
    description: "Developed major full-stack and frontend projects, focusing on hospital management and travel solutions.",
    icon: "rocket",
  },
];

export const experience = [
  {
    company: "Alphalize Technologies Pvt Limited",
    role: "Odoo Developer Intern",
    duration: "2 Months",
    description: "Gained practical experience in Odoo development, focusing on ERP customization and module management.",
    technologies: ["Python", "XML", "PostgreSQL", "Odoo Framework", "Git"],
    highlights: [
      "Assisted in customizing ERP modules to meet client requirements",
      "Worked on backend logic using Python and XML for view definitions",
      "Learned Odoo ORM and database management",
      "Collaborated with senior developers on project tasks",
    ],
  },
];

export const projects = [
  {
    title: "Medicare",
    description: "Hospital management system with disease prediction. Built a responsive UI and collaborated on ML integration for predictions.",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap", "Python (ML)", "MySQL"],
    image: "/projects/medicare.jpg",
    github: "https://github.com/Gokulr08/medicare",
    liveDemo: "#",
    featured: true,
    role: "Front-End Developer",
  },
  {
    title: "TRAVELMATE",
    description: "Travel Management Website featuring interactive booking and dynamic content display from database.",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: "/projects/travelmate.jpg",
    github: "https://github.com/Gokulr08/travelmate",
    liveDemo: "#",
    featured: true,
    role: "Front-End Developer & Database Contributor",
  },
  {
    title: "ConnectSphere",
    description: "A real-time social media platform enabling users to connect and interact via dynamic feeds. (Personal Mini-Project)",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: "/projects/connectsphere.jpg",
    github: "https://github.com/Gokulr08/connectsphere",
    liveDemo: "#",
    featured: false,
  },
];

export const education = {
  college: "Sree Narayana College of Technology – Kollam, KERALA",
  degree: "Bachelor of Computer Applications",
  year: "June 2025",
  gpa: "7.5/10",
  coursework: [
    "Data Structures and Algorithms",
    "Database Management Systems (DBMS)",
    "Operating Systems",
    "Object-Oriented Programming",
    "Web Application Development",
  ],
};

export const certifications = [
  "Python for Everybody – Coursera",
  "Web Development Bootcamp – Udemy",
  "SQL Basics – HackerRank",
];

export const achievements = [
  "Final year project presented to college faculty panel.",
  "Volunteered in inter-college tech fest as coordinator.",
  "Built personal mini-projects (Bank App Demo, Coffee Shop System).",
];

export const testimonials = [
  {
    name: "Faculty Panel",
    role: "Sree Narayana College",
    quote: "Gokul presented an impressive hospital management system with integrated machine learning features, demonstrating strong analytical and development skills.",
    avatar: "SN",
  },
];

export const blogPosts = [
  {
    title: "Transitioning from PHP to the MERN Stack",
    excerpt: "Reflecting on my journey starting with PHP/MySQL and moving towards building modern applications with React and Node.js.",
    date: "Feb 2025",
    category: "Web Development",
    readTime: "5 min read",
  },
];


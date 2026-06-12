export const personalInfo = {
  name: "Faraz Akram",
  title: "Frontend Engineer",
  location: "Bengaluru, India",
  email: "farazakram2024@gmail.com",
  phone: "+91 8603778367",
  linkedin: "https://linkedin.com/in/farazakram031",
  github: "https://github.com/faraz-2023",
  summary:
    "I'm a Computer Science Engineering student at Ghousia College of Engineering with a strong passion for frontend development and modern web technologies. I specialize in building responsive user interfaces using React.js and have experience working with backend frameworks such as Django and FastAPI. Beyond web development, I enjoy exploring Artificial Intelligence, data-driven applications, and software solutions that solve real-world problems.",
};

export const heroTagline =
  "I build modern, responsive, and scalable web applications with a focus on performance, user experience, and clean code. Passionate about React.js, full-stack development, and AI-powered solutions, I enjoy turning complex problems into intuitive digital products.";

export const stats = [
  { label: "Projects Completed", value: 4, suffix: "+" },
  { label: "Technologies Used", value: 15, suffix: "+" },
  { label: "Hackathons", value: 2, suffix: "" },
  { label: "Research Publications", value: 1, suffix: "" },
];

export const education = {
  cgpa: "8.08",
  institution: "Ghousia College of Engineering",
  degree: "Bachelor of Engineering (Computer Science & Engineering)",
  year: "2023 – 2027",
  location: "Bangalore, Karnataka",
};

export const experience = [
  {
    title: "Frontend Engineer Intern",
    company: "IncodeVision",
    period: "May 2026 – June 2026",
    type: "Internship",
    achievements: [
      "Developed modular and reusable UI components using React.js and modern JavaScript.",
      "Built responsive landing pages optimized for desktop and mobile devices.",
      "Collaborated with developers using Git and GitHub workflows.",
      "Improved application performance and maintainability through code optimization.",
      "Contributed to creating intuitive and user-friendly web experiences.",
    ],
  },
];

export const skills = {
  "Frontend Development": [
    { name: "React.js", level: 90, icon: "⚛️" },
    { name: "JavaScript", level: 88, icon: "🟨" },
    { name: "TypeScript", level: 78, icon: "🔷" },
    { name: "HTML5", level: 95, icon: "🌐" },
    { name: "CSS3", level: 92, icon: "🎨" },
    { name: "Tailwind CSS", level: 90, icon: "💨" },
  ],
  "Backend Development": [
    { name: "Django", level: 72, icon: "🐍" },
    { name: "FastAPI", level: 70, icon: "⚡" },
    { name: "Python", level: 78, icon: "🐍" },
  ],
  "Databases": [
    { name: "SQL", level: 70, icon: "🗄️" },
    { name: "MongoDB", level: 75, icon: "🍃" },
  ],
  "Tools & Platforms": [
    { name: "Git", level: 88, icon: "🔀" },
    { name: "GitHub", level: 88, icon: "🐙" },
    { name: "VS Code", level: 95, icon: "💻" },
    { name: "Vercel", level: 82, icon: "▲" },
    { name: "Figma", level: 70, icon: "🎭" },
  ],
};

export const projects = [
  {
    id: 1,
    name: "Artysy",
    subtitle: "Artist E-Commerce Platform",
    description:
      "Built a modern e-commerce platform for artists featuring product browsing and search, authentication system, admin dashboard, order management, and a fully responsive user interface.",
    features: [
      "Product browsing and search",
      "Authentication system",
      "Admin dashboard",
      "Order management",
      "Responsive user interface",
    ],
    tech: ["React.js", "Vite", "Tailwind CSS", "JavaScript", "Context API", "React Router DOM"],
    liveUrl: "https://artysy.vercel.app",
    githubUrl: "https://github.com/faraz-2023/artysy",
    status: "live",
    gradient: "from-red-900/30 to-red-600/10",
    accentColor: "#DC143C",
  },
  {
    id: 2,
    name: "Medmindr",
    subtitle: "Medicine Reminder Platform",
    description:
      "Developed a medication reminder platform that helps users manage medicine schedules efficiently with intelligent scheduling, notifications, and comprehensive medication tracking.",
    features: [
      "Reminder scheduling",
      "Notification management",
      "Medication tracking",
      "User-friendly responsive design",
    ],
    tech: ["Python", "Flask", "SQLite", "HTML5", "CSS3"],
    liveUrl: null,
    githubUrl: "https://github.com/faraz-2023/medmindr",
    status: "coming-soon",
    gradient: "from-slate-900/50 to-slate-800/20",
    accentColor: "#6366f1",
  },
  {
    id: 3,
    name: "School Management System",
    subtitle: "Academic Management Platform",
    description:
      "Designed and developed a comprehensive academic management platform for educational institutions with student records, attendance tracking, performance monitoring, and administrative dashboards.",
    features: [
      "Student record management",
      "Attendance tracking",
      "Performance monitoring",
      "Administrative dashboards",
    ],
    tech: ["Django", "Python", "MongoDB", "HTML5", "CSS3"],
    liveUrl: null,
    githubUrl: "https://github.com/faraz-2023/school-management",
    status: "coming-soon",
    gradient: "from-emerald-900/30 to-teal-800/10",
    accentColor: "#10b981",
  },
  {
    id: 4,
    name: "Online Payment Fraud Detection",
    subtitle: "AI-Powered Fraud Detection System",
    description:
      "Developed an AI-powered fraud detection system capable of real-time transaction analysis, risk assessment, and automated workflows using LangGraph and Llama AI.",
    features: [
      "Real-time fraud detection",
      "Transaction risk assessment",
      "AI-powered analysis",
      "Automated workflows",
    ],
    tech: ["LangGraph", "Llama AI", "Python", "FastAPI", "REST APIs"],
    liveUrl: null,
    githubUrl: "https://github.com/faraz-2023/fraud-detection",
    status: "coming-soon",
    gradient: "from-amber-900/30 to-orange-800/10",
    accentColor: "#f59e0b",
  },
];

export const achievements = [
  {
    id: 1,
    title: "Published IEEE Conference Paper",
    description: "Published research paper on PRNG Performance Analysis at an IEEE conference.",
    icon: "📄",
    color: "#DC143C",
    year: "2025",
  },
  {
    id: 2,
    title: "ASCENT'26 Anvil Hackathon",
    description: "Participated in ASCENT'26 Anvil Hackathon, building innovative solutions under pressure.",
    icon: "⚒️",
    color: "#f59e0b",
    year: "2026",
  },
  {
    id: 3,
    title: "Top 1000 – HackWithIndia METANOVA 2026",
    description: "Achieved Top 1000 Team status among 3000+ participating teams at HackWithIndia METANOVA 2026.",
    icon: "🏆",
    color: "#10b981",
    year: "2026",
  },
  {
    id: 4,
    title: "NLP with Azure AI Certification",
    description: "Completed NLP with Azure AI Certification from CloudThat, specializing in Natural Language Processing.",
    icon: "🤖",
    color: "#6366f1",
    year: "2025",
  },
];

export const typingStrings = [
  "Frontend Engineer",
  "React Developer",
  "Software Engineer",
  "UI Enthusiast",
  "Problem Solver",
];

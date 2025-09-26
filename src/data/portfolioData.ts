import { Project, Experience, Certification, Skill } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Data Formulator with AI",
    description: "Developed an AI-powered data analysis tool using Python and GPT models that processes natural language queries and generates context-sensitive data visualizations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    technologies: ["Python", "NLP", "GPT models", "Vega-Lite"],
    githubUrl: "https://github.com/Devraj1612/Data-Formulator-AI",
    category: "AI/ML"
  },
  {
    id: 2,
    title: "Ecom Website Automation",
    description: "Developed a Python-based automation system for an e-commerce website using Selenium and BeautifulSoup to perform real-time product scraping and inventory updates.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    technologies: ["Python", "Selenium", "BeautifulSoup", "Flask"],
    githubUrl: "https://github.com/Devraj1612/Ecommerce-Py_Automation.git",
    category: "Automation"
  },
  {
    id: 3,
    title: "Thirftstore",
    description: "React-based e-commerce website for buying and selling second-hand items with a clean, responsive interface and component-based architecture.",
    image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    technologies: ["React", "JavaScript", "CSS", "E-commerce"],
    githubUrl: "https://github.com/Devraj1612/Thirftstore",
    category: "Web Development"
  },
  {
    id: 4,
    title: "Blinkit Database Management System",
    description: "A SQL-based database system inspired by Blinkit/Grocery delivery apps, focusing on schema design and management with automated stock updates.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    technologies: ["SQL", "Database Design", "Triggers", "Stored Procedures"],
    githubUrl: "https://github.com/Devraj1612/Grocery-DB-SQL",
    category: "Database"
  },
  {
    id: 5,
    title: "Real-time E-commerce Analytics Dashboard",
    description: "A real-time analytics dashboard for grocery/orders with live order tracking and dynamic revenue monitoring using React and Node.js.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1175&q=80",
    technologies: ["React", "Node.js", "WebSockets", "Redis"],
    githubUrl: "https://github.com/Devraj1612/Real-time-Ecommerce-Dashboard",
    category: "Dashboard"
  },
  {
    id: 6,
    title: "Interactive Data Visualization Dashboard",
    description: "Created an interactive dashboard using Streamlit supporting CSV, Excel, and JSON file uploads with data cleaning features and automated visualization generation.",
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&auto=format&fit=crop&w=1332&q=80",
    technologies: ["Python", "Streamlit", "Pandas", "Plotly"],
    githubUrl: "https://github.com/Devraj1612/Complete-Data-DashBoard.git",
    category: "Data Visualization"
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    position: "Application Developer Intern",
    company: "Roman Technologies",
    location: "Bengaluru",
    duration: "Sep 2024 – Feb 2025",
    responsibilities: [
      "Developed full-stack web applications using React.js, Python, and SQL, improving application performance by 25%",
      "Implemented Python libraries for backend functionality, reducing data processing time by 30%",
      "Collaborated with team members using Git version control, following Agile development methodologies",
      "Gained experience in DevOps practices including CI/CD pipelines and cloud deployment"
    ]
  },
  {
    id: 2,
    position: "Escalation Lead",
    company: "ShadowFax Technologies Pvt. Ltd",
    location: "Bengaluru",
    duration: "May 2021 – Mar 2022",
    responsibilities: [
      "Served as the Assistant Team Lead, supporting day-to-day operations, mentoring team members, and coordinating issue resolution efforts",
      "Handled escalations via email and chat from delivery partners and Hub Team Leads, ensuring prompt resolution",
      "Collaborated with cross-functional teams to streamline escalation handling processes",
      "Designed and implemented Standard Operating Procedures (SOPs) to establish clear workflows",
      "Pulled and analyzed data using SQL to identify root causes, monitor KPIs, and provide actionable insights"
    ]
  },
  {
    id: 3,
    position: "CCA – Client: Narayana Health",
    company: "EbixCash Pvt. Ltd.",
    location: "Bengaluru",
    duration: "Mar 2022 – Mar 2023",
    responsibilities: [
      "Handled inbound calls from Narayana Health patients for doctor appointment bookings and patient detail verification",
      "Assisted patients by providing information on health check-ups and hospital services",
      "Promoted to Temporary RTM (Real Time Management) after 6 months",
      "Prepared daily/weekly/monthly reports on employee performance and productivity",
      "Conducted day-to-day analysis of employee data using MS Excel and created presentations for management review"
    ]
  }
];

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Foundations of Cybersecurity",
    issuer: "Coursera",
    certificateUrl: "https://drive.google.com/file/d/1wAzg28lTQdGn90rsvBYpyTDNTJmcHQvY/view"
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    issuer: "DevMind's",
    certificateUrl: "https://drive.google.com/file/d/1ycn_Uc9rcGbGz8_9aO2dBykvvHwDpybC/view"
  },
  {
    id: 3,
    title: "IT-ITeS Sector Skill Council",
    issuer: "Certificate for Skill Competency",
    certificateUrl: "#"
  },
  {
    id: 4,
    title: "Completion of C Training",
    issuer: "Programming Fundamentals",
    certificateUrl: "#"
  },
  {
    id: 5,
    title: "Wadhwani Foundation",
    issuer: "Certificate of Completion",
    certificateUrl: "#"
  },
  {
    id: 6,
    title: "Machine Learning Foundation",
    issuer: "ML Fundamentals",
    certificateUrl: "#"
  }
];

export const skills: Skill[] = [
  {
    category: "Programming",
    skills: ["Python", "SQL", "JavaScript", "React.js"]
  },
  {
    category: "Data Analysis",
    skills: ["Pandas, NumPy", "Power BI, Excel", "Statistical Analysis", "Machine Learning"]
  },
  {
    category: "Tools & Technologies",
    skills: ["Git, GitHub", "AWS Cloud", "Flask, Streamlit", "Selenium"]
  }
];

import { Github, Linkedin, Mail, Twitter, Phone, Globe, Code2, Terminal, Cpu } from "lucide-react";

export const personalInfo = {
    name: "Suryaprakash S",
    role: "Full-Stack MERN Developer",
    location: "Coimbatore, India",
    email: "ssathiskumar641@gmail.com",
    phone: "+91 63834 56066",
    about: "Results-driven Full-Stack MERN Developer with strong expertise in designing, developing, and deploying scalable web applications. Experienced in building secure RESTful APIs, implementing JWT authentication, optimizing application performance, and managing CI/CD pipelines. Proven ability to deliver production-ready systems with high availability and performance. Passionate about clean architecture, reusable components, and modern UI/UX practices.",
    social: [
        {
            name: "GitHub",
            url: "https://github.com/Suryaprakash20038",
            icon: Github
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/suryaprakash-s-11478b28b/",
            icon: Linkedin
        },
        {
            name: "Netlify Projects",
            url: "https://app.netlify.com/teams/ssathiskumar641/projects",
            icon: Globe
        },
        {
            name: "Email",
            url: "mailto:ssathiskumar641@gmail.com",
            icon: Mail
        }
    ]
};

export const skills = [
    {
        category: "Frontend",
        icon: Code2,
        items: ["React.js", "Redux", "TypeScript", "Tailwind CSS", "Next.js", "HTML5", "CSS3", "Bootstrap", "Framer Motion", "GSAP"]
    },
    {
        category: "Backend",
        icon: Terminal,
        items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "JWT Auth"]
    },
    {
        category: "DevOps & Tools",
        icon: Cpu,
        items: ["Git", "GitHub Actions", "Docker", "Render", "Netlify", "Jest", "Mocha"]
    }
];

export const experience = [
    {
        company: "INFOLEXUS SOLUTION",
        location: "Coimbatore",
        role: "MERN Stack Developer Intern",
        period: "Nov 2025 – Present",
        achievements: [
            "Developed scalable full-stack MERN applications serving 200+ active users.",
            "Designed reusable React components improving development efficiency by 30%.",
            "Built secure RESTful APIs with JWT authentication and MongoDB integration.",
            "Reduced frontend load time by 25% through code splitting and lazy loading.",
            "Automated CI/CD deployment using GitHub Actions and Render."
        ]
    },
    {
        company: "KGiSL MicroCollege",
        location: "Coimbatore",
        role: "MERN Stack Developer Intern",
        period: "May 2025 – Nov 2025",
        achievements: [
            "Engineered and deployed three full-stack MERN applications.",
            "Implemented authentication, role-based access control, and protected routes.",
            "Reduced manual deployment effort by 40% via CI/CD automation."
        ]
    },
    {
        company: "ProPlus Logic",
        location: "Coimbatore",
        role: "Front-End Developer Intern",
        period: "Jun 2023 – Jul 2023",
        achievements: [
            "Designed responsive UI systems using HTML, CSS, JavaScript, and Bootstrap.",
            "Enhanced application performance by 20%.",
            "Collaborated in Agile sprints and participated in code reviews."
        ]
    }
];

export const projects = [
    {
        title: "Crewly – Enterprise HRM System",
        description: "Enterprise-grade HRM system with Role-Based Access Control, real-time task tracking, and AI-driven workflows.",
        tech: ["React.js", "Node.js", "Socket.IO", "MongoDB"],
        liveUrl: "https://hrm-rykg.onrender.com",
        githubUrl: "#",
        year: "2025"
    },
    {
        title: "InfoLexus – Corporate Web Portal",
        description: "Premium corporate portal with resume uploads, email automation, and performance optimization.",
        tech: ["React.js v19", "Node.js", "Nodemailer", "Multer"],
        liveUrl: "https://infolexus.com",
        githubUrl: "#",
        year: "2026"
    },
    {
        title: "Pet Care Web Application",
        description: "Pet adoption and appointment management system with optimized backend queries.",
        tech: ["MERN Stack", "Express", "MongoDB"],
        liveUrl: "#",
        githubUrl: "#",
        year: "2025"
    },
    {
        title: "Flight Booking Application",
        description: "Real-time search and dynamic filtering for flight bookings.",
        tech: ["React", "CSS", "API Integration"],
        liveUrl: "#",
        githubUrl: "#",
        year: "2024"
    }
];

export const education = {
    degree: "B.E. Computer Science and Engineering",
    institution: "PPG Institute of Technology, Anna University, Coimbatore",
    period: "2021 – 2025",
    description: "CGPA: 7.8 / 10"
};

export const certifications = [
    "MERN Stack Developer — KGiSL MicroCollege (May 2025 – Nov 2025)",
    "Front-End Developer — ProPlus Logic (Jun 2023 – Jul 2023)"
];

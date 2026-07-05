import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { Layers3, Code2 } from "lucide-react";

const portfolioData = {

  personal: {
    name: "Mridul Kar",
    title: "Senior Software Engineer",
    subtitle: "Backend-focused Full Stack Engineer",
    description: "Backend-focused Full-Stack Engineer with nearly 5 years of experience building scalable web applications. Specialized in Laravel, PHP, REST APIs, database optimization, and system design with a strong focus on clean architecture, performance, and maintainability.",
    shortDescription: "Passionate about creating scalable and high-performance software solutions. Specialized in Laravel, PHP, React, Node.js and cloud-based SaaS systems.",
    skills: "Laravel • PHP • SaaS Architecture • AWS • Linux Server Management",
    email: "mridulkar.connect@gmail.com",
    phone: "+880 1620249494",
    location: "Dhaka, Bangladesh",
    profileImage: "/profile.jpg",
    resume: "/resume.pdf",
    availableForWork: true,
  },

  summary : {
    experience: "+5",
    projects: "+20",
    clients: "+100"
  },

  cards: [
    {
      title: "Specialized In",
      className: "relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 p-8 min-h-[260px]",
      subTitle: "Enterprise Business Solutions",
      icon: Layers3,
      items: [
        "Multi-Tenant SaaS",
        "ERP",
        "CRM",
        "Inventory",
        "POS",
        "HRMS",
        "Accounting",
        "Ecommerce",
        "Websites",
      ],
    },
    {
      title: "Technology Stack",
      className: "relative overflow-hidden rounded-3xl bg-[#d9ff38] text-black p-8 min-h-[260px]",
      subTitle: "Modern Web Technologies",
      icon: Code2,
      items: [
        "Laravel",
        "PHP",
        "React",
        "Node.js",
        "MySQL",
        "PostgreSQL",
        "Redis",
        "KAFKA",
        "AWS",
        "Docker",
      ],
    },
  ],

  experiences: [
    {
      year: "Feb 2026 - July 2026",
      company: "Huixin Global Ltd",
      role: "Senior Software Engineer  (Contractual)",
      location: "Uttara Sector 7, Dhaka, Bangladesh",
      achievement: "Key Achievement:",
      description:
        "Implemented APK hardening and obfuscation techniques to enhance mobile application security, preventing code manipulation, reverse engineering, and unauthorized access. Also developed a fully dynamic CPA marketing monitoring and analytics system for real-time data analysis, performance tracking, and interactive reporting dashboards.",
    },

    {
      year: "Sep 2023 - Feb 2025",
      company: "BDTASK",
      role: "Software Engineer & Team Lead",
      location: "Khilkhet, Dhaka, Bangladesh",
      achievement: "Key Achievement:",
      description:
        "Architected and implemented a Multi Tenant SaaS platform utilizing a single codebase with hybrid database switching logic (Session-based for Web / Token-based for Mobile), Implemented Attendance, Accounting, Catering Module",
    },

    {
      year: "Jan 2022 - Sep 2023",
      company: "STITBD",
      role: "Web Application Developer & Product Owner",
      location: "Kolabagan, Dhaka, Bangladesh",
      achievement: "Key Achievement:",
      description:
        "Successfully integrated a hybrid Offline & Online POS System across 16 restaurant branches, ensuring real-time data synchronization. Besides this worked on multiple HRMS, Supershop, Pharmacy POS, Food Ordering & Ecommerce Platforms",
    },

    {
      year: "Oct 2021 - Dec 2021",
      company: "Soft IT Security",
      role: "Intern Web Developer",
      location: "Mohammadpur, Dhaka, Bangladesh",
      achievement: "Key Achievement:",  
      description:
        "Assisted in developing web features and gained hands-on experience in the PHP/Laravel ecosystem.",
    },
  ],

  projects: [
    {
      title: "Multi Tenant Restora ERP | BDTASK",
      image: "/projects/restora.jpg",
      description:
        "Multi-tenant Restaurant ERP platform featuring Attendance, Accounting, Catering, Inventory, POS and Restaurant Management modules.",

      technologies: [
        "Laravel",
        "CodeIgniter3",
        "MySQL",
        "JWT Auth",
        "REST API",
        "AWS",
      ],

      github: '#',

      live: "http://restorapos.com/",

      live_status: true,

      github_status: false,

      caseStudy: "https://www.linkedin.com/pulse/how-i-built-multi-tenant-saas-web-mobile-apps-using-single-mridul-kar-kz94c/",

      caseStudy_status: true
    },

    {
      title: "Enterprise HRMS Platform | STITBD",
      image: "/projects/hrms.png",
      description:
        "Enhanced and customized enterprise HRMS modules including Leave Management, Attendance, Payroll, and Requisition workflows. Implemented GPS-based attendance tracking, payroll automation, REST API integrations, backend optimization, and role-based access control while maintaining stability in production environments.",

      technologies: [
        "CodeIgniter3",
        "MySQL",
        "REST API",
      ],

      github: '#',

      live: "https://stithr.com/",

      live_status: true,

      github_status: false,

      caseStudy: "https://www.linkedin.com/pulse/building-enhancing-enterprise-hrms-platform-mridul-kar-16lwc/",

      caseStudy_status: true
    },

    {
      title: "SaaS Skull | Personal Project",
      image: "/projects/saasskull.jpg",

      description:
        "Architected a multi-tenant ERP platform using Hexagonal Architecture and DDD principles with modular monolith design and microservice-ready boundaries.",

      technologies: [
        "Laravel",
        "MySQL",
        "Redis",
        "Kafka",
        "JWT Auth",
        "REST API"
      ],

      github:
        "https://github.com/theMridulKar/saas-skull",

      live: "#",

      live_status: false,

      github_status: true,

      caseStudy: "#",

      caseStudy_status: false
    },

    {
      title: "Open Source Monica CRM | Engineering Case Study",
      image: "/projects/monica-crm.jpg",

      description:
        "Built a scalable CRM tagging module using DDD and the Repository Pattern. Improved performance with Redis caching, containerized development with Docker (Laravel Sail), and maintained 90%+ unit test coverage.",

      technologies: [
        "Laravel",
        "MySQL",
        "Redis",
        "Docker(Laravel Sail)"
      ],

      github:
        "https://github.com/theMridulKar/monica-crm-advanced-tag-system",

      live: "#",

      live_status: false,

      github_status: true,

      caseStudy: "#",
      
      caseStudy_status: false
    },

    {
      title: "Multi-Branch Restaurant Management System (Khanas) | STITBD",
      image: "/projects/khanas.jpg",

      description:
        "Developed and integrated a hybrid Offline & Online POS system across 16 restaurant branches with real-time data synchronization. Coordinated deployment activities, conducted client training sessions, monitored live implementation, and provided post-launch operational support.",

      technologies: [
        "Laravel",
        "MySQL",
        "REST API"
      ],

      github: "#",

      live: "#",

      live_status: false,

      github_status: false,

      caseStudy: "https://www.linkedin.com/pulse/building-multi-branch-restaurant-management-system-from-mridul-kar-be4wc/",

      caseStudy_status: true,
    },
  ],

  otherProjects: [
    {
      title: "E-Commerce Platform",
      tech: ["Laravel", "MySQL"],
      modules: [
        "Product Management",
        "Cart",
        "Order",
        "Inventory",
        "Payment Gateway",
      ],
      links: [
        {
          name: "TipTop Mart",
          url: "https://tiptopmartbd.com/",
        },
        {
          name: "ES Trading",
          url: "https://estradingbd.com/",
        },
      ],
    },

    {
      title: "POS",
      tech: ["Laravel", "MySQL"],
      modules: [
        "Sales",
        "Purchase",
        "Customer",
        "Supplier",
        "Stock Management",
        "Reports",
      ],
      industry: [
        "Retail",
        "SuperShop",
        "Restaurant",
        "Pharmacy",
        "Grocery",
      ],
      links: [
        {
          name: "STITBD POS",
          url: "https://stpos.stitbd.app/",
        },
      ],
    },
  ],

  journey : [
    {
      image: "/journey/a2i.jpg",
      title: "a2i - Govt. Project Meeting | BDTASK",
      description: "Attended a meeting with the a2i project team to discuss the implementation of digital solutions for government services.",
    },
    {
      image: "/journey/basis.jpg",
      title: "Basis - Soft Expo 2023 Presentation | STITBD",
      description: "Basis Soft Expo 2023 presentation showcasing innovative software solutions and technologies.",
    },
    {
      image: "/journey/basis-2.jpg",
      title: "Basis - Soft Expo 2023 Presentation | STITBD",
      description: "Basis Soft Expo 2023 presentation showcasing innovative software solutions and technologies.",
    },
    {
      image: "/journey/khanas-restaurant-pos.jpg",
      title: "Khanas - Restaurant POS System | STITBD",
      description: "Developed a hybrid Offline & Online POS system for Khanas restaurant chain.",
    },
    {
      image: "/journey/new-year-gift.jpg",
      title: "New Year Gift | STITBD",
      description: "Received a thoughtful New Year gift from the STITBD team, symbolizing appreciation and camaraderie.",
    },
    {
      image: "/journey/microfinance-project.jpg",
      title: "Microfinance Project | PC Lick IT Palli Ltd.",
      description: "Worked on the microfinance project, implementing innovative solutions for financial inclusion.",
    },
  ],

  clients: [

    {
      name: "Ispahani Agro",
      logo: "/clients/ispahani.png",
    },
    {
      name: "Kachchi Bhai",
      logo: "/clients/kachchibhai.jpg",
    },
    {
      name: "Khanas Restaurant",
      logo: "/clients/khanas.jpg",
    },
    {
      name: "Sea Shell Restaurant",
      logo: "/clients/sea-shell.jpg",
    },
    {
      name: "Al Kabab Restaurant",
      logo: "/clients/al-kabab.jpg",
    },
    {
      name: "Unicom Textiles Ltd.",
      logo: "/clients/unicom.png",
    },
    {
      name: "FMC",
      logo: "/clients/fmc.jpg",
    },
    {
      name: "JCX Developments",
      logo: "/clients/jcx.jpg",
    },
  ],

  skillCategories: [
    {
      title: "Software Architecture",
      skills: [
        "Clean Architecture",
        "Hexagonal",
        "Repository Pattern",
        "MVC",
        "HMVC",
        "Multi-Tenant SaaS",
        "Microservices",
      ],
    },

    {
      title: "Backend & APIs",
      skills: [
        "Laravel",
        "PHP",
        "CodeIgniter",
        "Node.js",
        "REST API",
        "GraphQL",
        "JWT",
        "Passport",
        "Sanctum",
      ],
    },

    {
      title: "Database & Messaging",
      skills: [
        "PostgreSQL",
        "MySQL",
        "Redis",
        "Kafka",
        "Queue",
        "Performance",
      ],
    },

    {
      title: "Frontend",
      skills: [
        "React",
        "Redux",
        "JavaScript",
        "TypeScript",
        "Tailwind",
        "Bootstrap",
        "HTML5",
        "CSS3",
      ],
    },

    {
      title: "DevOps & Cloud",
      skills: [
        "Docker",
        "AWS",
        "Git",
        "Linux",
        "Nginx",
        "Apache",
        "Postman",
        "Valet",
      ],
    },

    {
      title: "Project Management",
      skills: [
        "Agile",
        "Scrum",
        "Kanban",
        "SDLC",
        "Requirement Gathering",
        "Sprint Planning",
        "Stakeholder Management",
        "Risk Management",
      ],
    },
  ],

  social: [
      {
        name: "GitHub",
        icon: FaGithub, 
        url: "https://github.com/theMridulKar",
      },
      {
        name: "LinkedIn",
        icon: FaLinkedin,     
        url: "https://linkedin.com/in/theMridulKar",
      },
      {
        name: "YouTube",
        icon: FaYoutube,
        url: "https://www.youtube.com/@MridulsDevJournal",
      },
  ],

  recommendations: [

    {
        name: "Md. Anikul Islam Binju",
        position: "Senior Software Engineer",
        company: "Huixin Global Ltd.",

        image: "/recommendations/anik.jpg",

        linkedin: "https://www.linkedin.com/in/md-anikul-islam-binju/",

        message:
          "I had the pleasure of working with Mridul Kar and I can confidently say he is a highly dedicated, skilled, and professional individual. His ability to handle responsibilities with focus and efficiency always stood out. He consistently brings positive energy to the team, communicates clearly, and approaches challenges with a problem-solving mindset. Mridul is not only technically capable but also dependable and cooperative, making him a great person to work with in any professional environment. His commitment to quality and continuous improvement is truly impressive. I highly recommend Mridul Kar for any organization or project looking for a talented and responsible professional.",
    },

    {
        name: "Arif Hossain",
        position: "Senior Business Executive",
        company: "BDTASK",

        image: "/recommendations/arif.jpg",

        linkedin: "https://www.linkedin.com/in/arif-hossain-7a833419a/",

        message:
          "Working with Mridul was a great experience. From a support team perspective, he was always cooperative, calm under pressure, and focused on solving problems quickly. He made our work much easier. He is also very friendly, positive, and maintains great relationships with everyone on the team. His attitude and approachability make collaboration smooth and enjoyable.",
    },

    {
        name: "Nityananda (Apu) Sardar",
        position: "Senior Software Engineer",
        company: "Technovicinity Limited",

        image: "/recommendations/apu.jpg",

        linkedin: "https://www.linkedin.com/in/apusardar/",

        message:
          "As a developer he is a very good team player and expertise in Critical Development. His personality is mind blowing! Has very good positive thinking capability."
    },

    {
        name: "Michael Karmoker",
        position: "Mobile Application Developer",
        company: "SK Soft Solutions Inc.",

        image: "/recommendations/michael.jpg",

        linkedin: "https://www.linkedin.com/in/michael-karmoker-7b909a114/",

        message:
          "Mridul is the best person among all the people I have worked with. He is responsible in his development tasks and I always get help for my api related problems. I recommend him as a good backend develoeper."
    },

  ],

};

export default portfolioData;
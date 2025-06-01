export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  dateOfBirth: string;
  linkedin: string;
    github: string;
    website: string;
}
export interface EducationItem {
    institution: string;
    degree: string;
    startDate: string;
    endDate: string;
    description?: string;
    location?: string;
}
export interface WorkExperienceItem {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    achievements: string[];
    description?: string;
}
export interface CV {
    name: string;
    title: string;
    summary: string;
    profilePictureUrl: string;
    workExperienceTitle:string;
    contactInfo: ContactInfo;
    educationTitle: string;
    education: EducationItem[];
    workExperience: WorkExperienceItem[];
    summaryTitle: string;
    skillsTitle: string;
    skills: string[];
    languageSkills: LanguageSkill[];
    languageSkillsTitle: string;
}
export interface LanguageSkill{
    language: string;
    level: string;
}
export const mockCV: CV = {
  name: "Joaquín García",
  title: "Senior Software Developer",
  workExperienceTitle: "WORK EXPERIENCE",
  educationTitle: "EDUCATION",
  summaryTitle: "PROFESSIONAL SUMMARY",
  skillsTitle: "TECHNICAL SKILLS",
  languageSkillsTitle: "LANGUAGE SKILLS",
  summary: "Experienced software developer with over 8 years of experience in full-stack development and Dev-Ops. Specialized in Node.JS with Typescript and .Net with C#. Passionate about creating efficient, scalable, and user-friendly applications.",
  profilePictureUrl: "https://github.com/jokogarcia/jokogarcia/blob/main/assets/Perfil.png?raw=true",
  contactInfo: {
    email: "joaquin.garcia@irazu.com.ar",
    phone: "+491573906833",
    address: "Merkststraße 12C. 82405 Wessobrunn, Germany",
    dateOfBirth: "1983-07-29",
    linkedin: "www.linkedin.com/in/joaquin-garcia-ml",
    github: "github.com/jokogarcia",
    website: "joaquin.irazu.com.ar"
  },
  education: [
    {
      institution: "Universidad Tecnológica Nacional (UTN)",
      degree: "Bachelor's Degree in Electronic Engineering",
      startDate: "2002-03",
      endDate: "2015-12",
      description: "ANABIM Equivalence: ¨Studienrichtung: Ingenieurwessen (Elektronik). Abschlussklasse: A5¨",
      location: "La Rioja, Argentina"
    },
    {
      institution: "Colegio Provincial Número 1 'Joaquín V. González'",
      degree: "High School Diploma with a Specialization in Physics and Mathematics",
      startDate: "2000-03",
      endDate: "2001-12",
      description: "Graduated with honors. Minor in Physics and Mathematics.",
      location: "La Rioja, Argentina"
    }
  ],
  workExperience: [
    {
      company: "Edugo.AI",
      position: "Senior Backend Engineer",
      startDate: "2024-01",
      endDate: "Present",
      achievements: [
"Improved stability by migrating from a monolith to a microservices-based architecture orchestrated with Kubernetes.",
"Enhanced data security by implementing recommendations from an independent security audit.",
"Increased developer productivity by implementing CI/CD pipelines.",
"Improved availability and stability of in-platform video calls.",
"Developed an in-house, multi-user feature for live-annotating PDF documents during video calls.",
"Increased code quality and reliability by advocating for and implementing unit testing.",
"Led efforts to establish and document best practices and code style guides for internal use.",
"Conducted stress and load tests on the backend to ensure readiness for increased user demand, identifying and addressing bottlenecks.",
"Served as Point of Contact to Key Customers.",
],
      description: "Sole Backend Specialist in a team of 5, focusing on the development of AI-driven educational platforms."
    },
    {
      company: "Accenture",
      position: ".NET Developer",
      startDate: "2021-04",
      endDate: "2021-09",
      achievements: [
        "Developed the feature 'Adaptive View' reducing development time for new features by eliminating the need to create new views for each feature.",
      ],
      description: "Assigned to customer Banco Galicia (https://www.bancogalicia.com.ar/), working on the e-bank portal for businesses."
    },
    {
        company: "TPS S.A.",
        position: "Semi-Senior Software Developer",
        startDate: "2019-10",
        endDate: "2021-04",
        description: "Started as a Junior Mobile Developer and transitioned to a more senior, Full Stack position and customer Point of Contact.",
        achievements: 
        [
            "Created Application Cross-Platform application for loyalty points tracking \"Interpuntos\" for customer Intermex (intermexonline.com).",
            "Succesfully integrated with the client's backend based on SQL Server Stored Procedures and with their Auth Service based on IdentityServer 4.",
            "Migrated the Frontend of the internal tool 'CheckDirect' (for the same custommer) from a Delphi-based Windows Application to an Angular-based Web Application."
        ]
    },
    {
        company: "Quanta Iluminación",
        position: "Embedded Systems Designer",
        startDate: "2013-01",
        endDate: "2016-04",
        description: "Power electronics design and Embedded Software development for LED lighting systems.",
        achievements: [
            "Designed and implemented a variety of digital and analog RGB light controllers for LED lights.",
            "Created a robust communication protocol for synchronizing and addressing individual Lamps, supporting Wireless, Wired and Hybrid networks.",
            "Implemented DMX512-compatible light controllers.",
            "Developed GUIs for programming and live control of RGB lights."
        ]
    }
  ],

  skills: [
    "C#",
    ".Net",
    "JavaScript",
    "TypeScript",
    "Python",
    "Go",
    "React",
    "Node.js",
    "Docker",
    "Kubernetes",
    "MongoDB",
    "PostgreSQL",
    "CI/CD",
    "C",
    "Git",
    "Agile/Scrum",
    "Unit Testing",
    "System Architecture",
    "SQL Server",
    "SQLite",
    "Tkinter",
    ".Net MAUI",
    "Xamarin",
    "Github Actions",
    "Performance Optimization",
    "ArgoCD",
    "Jira",
    "Google Cloud Platform",
    "Zoom SDK",
    "RESTful APIs",
  ],
    languageSkills: [
        {language: "Spanish", level: "Native"},
        {language: "English", level: "C2"},
        {language: "German", level: "A2"},
    ]
};
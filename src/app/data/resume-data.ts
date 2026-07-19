export interface Profile {
  name: string;
  title: string;
  tagline: string;
  roles: string[];
  location: string;
  phone: string;
  email: string;
  github: string;
  githubUser: string;
  summary: string;
  resumeFile: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  start: string;
  end: string;
  current?: boolean;
  points: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  start: string;
  end: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export const PROFILE: Profile = {
  name: 'Ahmed Yasser',
  title: 'Senior Software Engineer',
  tagline:
    'I build fast, scalable full-stack applications — from Angular & Vue.js front-ends to ASP.NET Core APIs.',
  roles: [
    'Angular Developer',
    'Full-Stack Engineer',
    '.NET Backend Developer',
    'Vue.js Developer',
  ],
  location: 'Hadayek Al-Ahram, Al Jizah, Egypt',
  phone: '+20-1097700741',
  email: 'dev.ahmedyasser@gmail.com',
  github: 'https://github.com/DevMidoz',
  githubUser: 'DevMidoz',
  summary:
    'Senior Software Engineer with 8+ years of experience specializing in front-end development using Angular, Vue.js, and modern JavaScript technologies. Recently expanded into full-stack development with ASP.NET Core, contributing to backend API development and end-to-end enterprise applications. Experienced in building scalable, high-performance web applications, real-time communication platforms using LiveKit, and leveraging AI-powered development tools to accelerate software delivery. Passionate about clean architecture, SOLID principles, performance optimization, and creating maintainable software.',
  resumeFile: 'assets/Ahmed_Yasser_CV.pdf',
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Senior Software Engineer',
    company: 'INVENTO',
    start: 'Jul 2025',
    end: 'Present',
    current: true,
    points: [
      'Developed and maintained enterprise applications using Angular 17–20 and NgRx for scalable state management.',
      'Designed and implemented RESTful APIs and business logic using ASP.NET Core, supporting multiple enterprise modules and end-to-end application features.',
      'Built real-time meeting features including audio/video communication using LiveKit.',
      'Collaborated across the full stack to integrate front-end and backend services, ensuring performance, scalability, and maintainability.',
      'Leveraged AI agents such as Claude, GPT, and Gemini to accelerate development and improve code quality.',
      'Utilized modern AI-powered developer tools including Cursor, Claude Code, and Antigravity to streamline development workflows.',
    ],
  },
  {
    role: 'Senior Front End Engineer',
    company: 'FRBIM LIMITED',
    start: 'Jun 2024',
    end: 'May 2025',
    points: [
      'Developed Autodesk Forge web-based applications using Vue.js, ensuring seamless user experiences.',
      'Integrated multiple Forge APIs — Model Derivative, Design Automation, and BIM360 API — to enhance data visualization and streamline automation workflows.',
      'Collaborated with cross-functional teams to align technical solutions with business needs in an Agile development environment.',
    ],
  },
  {
    role: 'Senior Front End Engineer',
    company: 'CleverSys',
    start: 'May 2023',
    end: 'Jun 2024',
    points: [
      'Applied Agile development practices, contributing to efficient workflows and delivering robust solutions using Vue.js, PHP, Laravel, and SQL.',
      'Optimized the codebase, achieving a 30% reduction in page load times and a 50% improvement in program stability through rigorous testing and refinement.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'GLOBAL AL-MOTAKAMEL',
    start: 'Feb 2022',
    end: 'May 2023',
    points: [
      'Helped implement Agile practices, ensuring the application stayed scalable and easy to maintain as new features were added.',
      'Ran thorough testing to catch and fix bugs early, leading to a 25% decrease in issues and a smoother user experience.',
      'Applied targeted optimizations that increased site speed by 87%, making the platform more efficient and responsive.',
    ],
  },
  {
    role: 'Front End Engineer',
    company: 'T-Tech',
    start: 'Feb 2021',
    end: 'Feb 2022',
    points: [
      'Responsible for developing ERP systems, a loyalty platform, and a dine-in system using Angular.',
      'Focused on creating intuitive and responsive user interfaces that improved functionality and user experience.',
      'Worked in an Agile environment, collaborating with teams to build scalable solutions that met business needs.',
    ],
  },
  {
    role: 'Front End Engineer',
    company: 'SimpleTouch',
    start: 'Jan 2019',
    end: 'Jan 2021',
    points: [
      'Helped improve user experience by optimizing software solutions with AngularJS and ASP.NET Boilerplate, reducing customer support inquiries.',
      'Developed scalable and maintainable front-end features, ensuring smooth functionality and performance.',
      'Worked closely with teams in an Agile environment, contributing to continuous improvements and efficient workflows.',
      'Participated in feature development and iterative design, refining the application based on evolving user needs.',
    ],
  },
  {
    role: 'Front End Engineer',
    company: 'Tindall Media',
    start: 'Dec 2017',
    end: 'Nov 2018',
    points: [
      'Built and maintained responsive, user-friendly websites using HTML, CSS, and JavaScript, ensuring optimal user experience.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'NTG Clarity',
    start: 'Feb 2017',
    end: 'Nov 2017',
    points: [
      'Analyzed and improved site speed using Google PageSpeed Insights, ensuring smooth and efficient user experiences.',
      'Wrote modular, well-documented code, prioritizing readability and long-term scalability.',
      'Implemented best practices for a fully testable codebase, enabling efficient software testing and high-quality development.',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Bachelor of Science (B.S.) — Computer Sciences',
    school: 'Modern Academy, Cairo',
    start: 'Oct 2012',
    end: 'May 2016',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Object Oriented Programming',
    issuer: 'Information Technology Institute',
    year: '2013',
  },
];

export const SKILLS: SkillGroup[] = [
  {
    category: 'Frontend',
    icon: 'code',
    skills: [
      'Angular (17–20)',
      'TypeScript',
      'JavaScript (ES6+)',
      'Vue.js',
      'React',
      'HTML5',
      'CSS3 / SCSS',
    ],
  },
  {
    category: 'UI Components & Design Systems',
    icon: 'box',
    skills: ['Angular Material', 'Ant Design', 'Vuetify', 'PrimeNG'],
  },
  {
    category: 'State Management',
    icon: 'layers',
    skills: ['NgRx', 'RxJS', 'Vuex'],
  },
  {
    category: 'Backend',
    icon: 'server',
    skills: [
      'ASP.NET Core',
      'C#',
      'RESTful APIs',
      'Entity Framework Core',
      'LINQ',
      'Dependency Injection',
      'JWT Authentication',
      'Node.js',
      'NestJS',
      'ExpressJS',
      'Fastify',
      'Laravel',
      'PHP',
    ],
  },
  {
    category: 'Databases',
    icon: 'database',
    skills: ['SQL Server', 'PostgreSQL'],
  },
  {
    category: 'Architecture',
    icon: 'git-branch',
    skills: [
      'SOLID Principles',
      'Clean Architecture',
      'Repository Pattern',
      'Scalable Application Design',
    ],
  },
  {
    category: 'Testing',
    icon: 'check-circle',
    skills: ['Jest', 'Jasmine', 'Karma', 'TDD'],
  },
  {
    category: 'DevOps',
    icon: 'tool',
    skills: ['Git', 'Azure DevOps', 'CI/CD', 'Angular CLI', 'NPM'],
  },
  {
    category: 'AI Productivity',
    icon: 'cpu',
    skills: [
      'Claude',
      'ChatGPT',
      'Gemini',
      'Cursor',
      'Claude Code',
      'GitHub Copilot',
      'Antigravity',
    ],
  },
];

export const FEATURED_REPOS: string[] = [
  'zain-tawseel',
  'Falazat',
  'Project-EDUCATE',
  'SimplleTouch_New',
  'Thomas-Patisserie',
];

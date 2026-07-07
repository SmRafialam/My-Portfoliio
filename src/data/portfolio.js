// ============================================================
//  Single source of truth for all portfolio content.
//  Edit here to update the site — no component changes needed.
// ============================================================

export const profile = {
  name: 'S. M. Rafi Alam',
  firstName: 'Rafi',
  role: 'Software Engineer',
  tagline: 'Full-Stack Engineer building scalable enterprise web apps & automation.',
  location: 'Dhaka, Bangladesh',
  email: 'smrafialam007@gmail.com',
  workEmail: 'shahriar.shuvo@ibos.io',
  resume: '/assets/Rafi_Alam_Resume.pdf',
  photo: '/assets/about-graduation.jpg',
  summary:
    "I'm a software engineer with 5+ years of experience shipping full-stack products — from Product Information Management systems to enterprise document workflows and business-automation platforms. I work across the stack with Angular, Node.js, Nest.js and Django, and I love turning messy requirements into clean, fast, maintainable software.",
  typewriter: [
    'Software Engineer',
    'Full-Stack Developer',
    'Angular Specialist',
    'Automation Builder',
  ],
  stats: [
    { label: 'Years experience', value: '5+' },
    { label: 'Companies', value: '3' },
    { label: 'Products shipped', value: '10+' },
    { label: 'Research paper', value: '1' },
  ],
}

export const socials = [
  { name: 'GitHub', url: 'https://github.com/SmRafialam', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sm-rafi', icon: 'linkedin' },
  { name: 'ResearchGate', url: 'https://www.researchgate.net/profile/Rafi-Alam', icon: 'research' },
  { name: 'Email', url: 'mailto:smrafialam007@gmail.com', icon: 'mail' },
  { name: 'Fiverr', url: 'https://www.fiverr.com/sm_rafi', icon: 'fiverr' },
]

export const skillGroups = [
  {
    title: 'Automation & Workflow',
    icon: 'automation',
    items: ['n8n', 'Workflow Automation', 'KPI Reporting', 'API Integration', 'Node.js Scripting', 'CI/CD'],
  },
  {
    title: 'Languages',
    icon: 'code',
    items: ['JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS', 'Git'],
  },
  {
    title: 'Frameworks & Runtime',
    icon: 'layers',
    items: ['Angular', 'Node.js', 'Express.js', 'Nest.js', 'React', 'Next.js', 'Django', 'Bootstrap'],
  },
  {
    title: 'Databases',
    icon: 'database',
    items: ['MongoDB', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'Tools & DevOps',
    icon: 'tool',
    items: ['Docker', 'Azure DevOps', 'CI/CD', 'n8n', 'Swagger', 'Knex', 'JWT', 'LaTeX'],
  },
  {
    title: 'Familiar',
    icon: 'sparkle',
    items: ['Java', '.NET', 'PHP', 'Laravel', 'WordPress', 'EJS', 'Assembly', 'Arduino Uno'],
  },
  {
    title: 'Ways of working',
    icon: 'users',
    items: ['Testing', 'Debugging', 'Agile', 'Self-management', 'UX & requirements'],
  },
]

export const experience = [
  {
    company: 'AKIJ iBOS Limited',
    role: 'Software Engineer',
    period: 'Sep 2025 — Present',
    location: 'Dhaka, Bangladesh',
    current: true,
    points: [
      'Build complex interactive frontends with Angular and WordPress across the AKIJ product suite.',
      'Deliver across Akij iBOS, Akij Consumer Electronics, Carnival Casino BINGO, People-Desk, Managerium, Trackforce, AeroDrop and AeroApp.',
      'Own requirements, UX and n8n automation workflows end-to-end.',
    ],
    tags: ['Angular', 'WordPress', 'n8n', 'UX'],
  },
  {
    company: 'Meraki Innovations Ltd. (Grameen Telecom)',
    role: 'Software Engineer',
    period: 'Dec 2024 — Sep 2025',
    location: 'Dhaka, Bangladesh',
    points: [
      'Developed and maintained enterprise web applications for the Atheeb Group.',
      'Built Angular frontends integrated with Django / PostgreSQL backends.',
    ],
    tags: ['Angular', 'Django', 'PostgreSQL'],
  },
  {
    company: 'Zecodeek IT Ltd.',
    role: 'Software Engineer (Full Stack)',
    period: 'Jul 2022 — Nov 2024',
    location: 'Dhaka, Bangladesh',
    points: [
      'Built and managed a Product Information Management system on the MEAN stack (MongoDB, Express, Angular, Node, Nest.js).',
      'Centralized product data and improved data accuracy by 20%.',
    ],
    tags: ['MongoDB', 'Express', 'Angular', 'Node.js', 'Nest.js'],
  },
]

export const projects = [
  {
    title: 'Enterprise Web & Automation Systems',
    org: 'AKIJ iBOS Limited',
    category: 'Enterprise Platforms',
    year: '2025',
    image: '/assets/proj-ibos.png',
    description:
      'Scalable WordPress platforms and high-performance Angular apps with automated KPI reporting, n8n workflows, Node.js reporting tools and API-driven business automation.',
    tags: ['Angular', 'WordPress', 'n8n', 'Node.js', 'Automation'],
    featured: true,
  },
  {
    title: 'AeroDrop & AeroApp',
    org: 'AKIJ iBOS Limited',
    category: 'Enterprise Platforms',
    year: '2025',
    image: '/assets/proj-aero.png',
    description:
      'Interactive product frontends within the AKIJ suite — delivery, requirements and UX for the Aero platform experiences.',
    tags: ['Angular', 'UX', 'Frontend'],
  },
  {
    title: 'Managerium',
    org: 'AKIJ iBOS Limited',
    category: 'Enterprise Platforms',
    year: '2025',
    image: '/assets/proj-managerium.png',
    description:
      'Management platform frontend in the AKIJ product ecosystem, focused on clean interactive workflows and reporting.',
    tags: ['Angular', 'Dashboard', 'Reporting'],
  },
  {
    title: 'AIMS — Dynamic Document Management System',
    org: 'Meraki Innovations',
    category: 'Data & Document Systems',
    year: '2025',
    image: '/assets/proj-ss.png',
    description:
      'Robust document classification, dynamic configuration, workflow automation, theme customization and external integrations for end-to-end document & process management.',
    tags: ['Angular', 'Django', 'PostgreSQL', 'Workflow'],
    featured: true,
  },
  {
    title: 'PIM — Product Information Management',
    org: 'Zecodeek IT',
    category: 'Data & Document Systems',
    year: '2023',
    image: '/assets/proj-ss2.png',
    description:
      'Centralized Product Inventory Management system built with Angular, Node.js, Nest.js and MongoDB for efficient, accurate operations at scale.',
    tags: ['Angular', 'Nest.js', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Volcano Project API',
    org: 'Personal',
    category: 'APIs & Backends',
    year: '2023',
    image: '/assets/proj-aerodrop.png',
    description:
      'Scalable REST API built with Node.js, Express, MySQL, Swagger, Knex and JWT auth — including unit testing for reliable backend functionality.',
    tags: ['Node.js', 'Express', 'MySQL', 'JWT', 'Swagger'],
    link: 'https://github.com/SmRafialam',
  },
  {
    title: 'Trend Up — Fashion E-Commerce',
    org: 'Trend Up',
    category: 'E-Commerce',
    year: '2026',
    image: '/assets/proj-trendup.jpg',
    description:
      'Full-stack fashion e-commerce store with a Next.js frontend and Node.js backend — product catalog, cart, wishlist, discounts and checkout in a fast, modern UI.',
    tags: ['Next.js', 'Node.js', 'E-Commerce', 'Full-Stack'],
    featured: true,
    link: 'https://e-commerce-site-two-steel.vercel.app',
  },
  {
    title: 'ORCA Electronics Store',
    org: 'AKIJ Resource',
    category: 'E-Commerce',
    year: '2025',
    image: '/assets/proj-orca.jpg',
    description:
      'E-commerce platform for ORCA (Akij) delivering global electronics brands in Bangladesh — product catalog, categories, search, wishlist and cart.',
    tags: ['WordPress', 'WooCommerce', 'E-Commerce', 'PHP'],
    link: 'https://akijce.com',
  },
  {
    title: 'Brain Forward — Learning Platform',
    org: 'Brain Forward',
    category: 'Web & WordPress',
    year: '2025',
    image: '/assets/proj-brainforward.jpg',
    description:
      'Brain-training & e-learning platform (Bangla) with course catalog, blog and enrollment — built and customized on WordPress.',
    tags: ['WordPress', 'LMS', 'Elementor', 'PHP'],
    featured: true,
    link: 'https://brainforward.com.bd',
  },
  {
    title: 'Travilo — Travel Tech Platform',
    org: 'Travilo',
    category: 'Web & WordPress',
    year: '2025',
    image: '/assets/proj-travilo.jpg',
    description:
      'Marketing & product site for a travel-technology SaaS (booking, ticketing, B2B) — modern responsive design built on WordPress.',
    tags: ['WordPress', 'Landing Page', 'UI/UX', 'Responsive'],
    link: 'https://travilo.io',
  },
  {
    title: 'Sea Sky — Fashion Store',
    org: 'Sea Sky',
    category: 'E-Commerce',
    year: '2025',
    image: '/assets/proj-seasky.jpg',
    description:
      "Men's fashion & lifestyle e-commerce store built on WordPress/WooCommerce — product catalog, categories, filters, wishlist and cart.",
    tags: ['WordPress', 'WooCommerce', 'E-Commerce', 'PHP'],
    link: 'https://seasky.com.bd',
  },
  {
    title: 'Tampa Buzz 360 — News & Blog',
    org: 'Tampa Buzz 360',
    category: 'Web & WordPress',
    year: '2026',
    image: '/assets/proj-tampabuzz.jpg',
    description:
      'News & lifestyle magazine site covering Tampa Bay — categorized stories, events and guides with a clean, content-first WordPress build.',
    tags: ['WordPress', 'Blog', 'Magazine', 'SEO'],
    link: 'https://tampabuzz360.com',
  },
]

// Ordered project categories (used for grouping in the Work section).
export const projectCategories = [
  'Enterprise Platforms',
  'E-Commerce',
  'Web & WordPress',
  'Data & Document Systems',
  'APIs & Backends',
]

export const achievements = [
  {
    year: '2022',
    title: 'PHP with Laravel Framework',
    org: 'BASIS · SEIP',
    type: 'Certification',
  },
  {
    year: '2022',
    title: 'Professional English Communication Skill',
    org: 'WSDA, New Zealand',
    type: 'Certification',
  },
  {
    year: '2018',
    title: 'Inter-Department Programming Contest',
    org: 'University of Asia Pacific',
    type: 'Contest',
  },
  {
    year: '2015',
    title: 'National Programming Contest (NPC)',
    org: 'ICT Division, Bangladesh',
    type: 'Contest',
  },
]

export const research = {
  title: 'Image Analysis using Deep Learning for Smart Traffic Control System',
  conference: 'The 2nd International Conference on Computing Advancements (ICCA 2022)',
  publisher: 'ACM Digital Library',
  link: 'https://dl.acm.org/doi/10.1145/3542954.3542973',
  blurb:
    'Applied deep-learning-based image analysis to real-time traffic signal control, aiming to reduce congestion through adaptive, vision-driven decision making.',
}

export const education = [
  {
    school: 'University of Asia Pacific',
    degree: 'BSc in Computer Science',
    year: '2021',
    location: 'Dhaka, Bangladesh',
    courses: [
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networking',
      'Functional Programming',
      'Computer Graphics',
      'Unix Tools & Scripting',
    ],
  },
  {
    school: 'Amritalal Dey College',
    degree: 'Higher Secondary Certificate',
    year: '2016',
    location: 'Barisal, Bangladesh',
  },
  {
    school: 'Barisal Zilla School',
    degree: 'Secondary School Certificate',
    year: '2014',
    location: 'Barisal, Bangladesh',
  },
]

// Starter blog entries — replace links/content with your real posts anytime.
export const blogs = [
  {
    title: 'Building maintainable Angular apps at enterprise scale',
    excerpt:
      'Lessons from shipping large Angular frontends across multiple products — state, module boundaries, and keeping bundles small.',
    date: 'Coming soon',
    tags: ['Angular', 'Architecture'],
    readTime: '6 min',
    link: '#',
  },
  {
    title: 'Automating KPI reports with n8n and Node.js',
    excerpt:
      'How low-code automation and small Node services combine to replace hours of manual reporting with reliable pipelines.',
    date: 'Coming soon',
    tags: ['n8n', 'Automation', 'Node.js'],
    readTime: '5 min',
    link: '#',
  },
  {
    title: 'Designing a Product Information Management system on the MEAN stack',
    excerpt:
      'A walkthrough of the data model and API design that improved product-data accuracy by 20%.',
    date: 'Coming soon',
    tags: ['MongoDB', 'Nest.js', 'System Design'],
    readTime: '8 min',
    link: '#',
  },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Awards', href: '#awards' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

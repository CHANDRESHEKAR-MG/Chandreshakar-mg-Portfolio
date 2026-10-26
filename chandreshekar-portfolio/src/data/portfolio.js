import resumePdf from '../../ChandreshekarM-g-resume (1).pdf'

export const profile = {
  name: 'Chandreshekar M. G.',
  title: 'Aspiring Software Development Engineer (SDE)',
  headline: 'Aspiring Software Developer (SDE) | Full-Stack Developer | AI Engineering',
  introduction:
    'Computer Science engineering student building software development foundations through full-stack projects while exploring AI engineering, Generative AI, DevOps, and AWS cloud.',
  location: 'Mandya, Karnataka, India',
  email: 'chandangowdachandu550@gmail.com',
  resumePdf,
  github: 'https://github.com/CHANDRESHEKAR-MG/',
  linkedin: 'https://www.linkedin.com/in/chandreshekar-mg-5501b332a',
  whatsappNumber: '8867082993',
  whatsapp: 'https://wa.me/918867082993',
  leetcode: 'https://leetcode.com/u/Chandreshekar_mg/',
}

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Coding Profiles', href: '#profiles' },
  { label: 'Contact', href: '#contact' },
]

export const skillGroups = [
  {
    name: 'Programming',
    number: '01',
    skills: [
      { name: 'Java', learning: true },
      { name: 'C' },
      { name: 'JavaScript' },
      { name: 'SQL' },
      { name: 'Data Structures & Algorithms', learning: true },
    ],
  },
  {
    name: 'Frontend',
    number: '02',
    skills: [{ name: 'HTML' }, { name: 'CSS' }, { name: 'React' }],
  },
  {
    name: 'Backend',
    number: '03',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'Spring Boot', learning: true },
    ],
  },
  {
    name: 'Databases',
    number: '04',
    skills: [{ name: 'MongoDB' }, { name: 'MySQL' }],
  },
  {
    name: 'Tools',
    number: '05',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'Maven' },
    ],
  },
  {
    name: 'AI Engineering & GenAI',
    number: '06',
    skills: [
      { name: 'Machine Learning', learning: true },
      { name: 'Deep Learning', learning: true },
      { name: 'Generative AI', learning: true },
      { name: 'LLMs', learning: true },
      { name: 'Retrieval-Augmented Generation (RAG)', learning: true },
      { name: 'Model Fine-tuning', learning: true },
    ],
  },
  {
    name: 'DevOps & Cloud',
    number: '07',
    skills: [
      { name: 'Docker', learning: true },
      { name: 'Kubernetes', learning: true },
      { name: 'CI/CD', learning: true },
      { name: 'AWS', learning: true },
    ],
  },
]

export const projects = [
  {
    number: '01',
    name: 'Employee Management System',
    category: 'Frontend application',
    problem:
      'Employee information can become difficult to organize as routine records grow.',
    description:
      'A React application concept for bringing employee records and everyday management workflows into a clear interface.',
    contribution: 'Implementation details to be confirmed',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
    status: 'Details to confirm',
    repository: '',
    accent: 'violet',
  },
  {
    number: '02',
    name: 'Centralized API-Integrated System',
    category: 'Full-stack application',
    problem:
      'Information spread across APIs can be harder to access from a single workflow.',
    description:
      'A MERN stack project focused on a centralized interface for API-integrated information.',
    contribution: 'Implementation details to be confirmed',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    status: 'Details to confirm',
    repository: '',
    accent: 'cyan',
  },
  {
    number: '03',
    name: 'Public Transport Tracking Application',
    category: 'Planned project',
    problem:
      'Passengers need a simple way to follow public transport journeys.',
    description:
      'A planned full-stack application to explore transport tracking workflows using React and Node.js.',
    contribution: 'Planned individual project',
    technologies: ['React', 'Node.js', 'Planned'],
    status: 'Planned',
    repository: '',
    accent: 'blue',
  },
]

export const learningInterests = [
  'SDE & Full-Stack Development',
  'AI & Generative AI Engineering',
  'DevOps & AWS Cloud',
  'Java & Spring Boot',
  'Data Structures & Algorithms',
]

export const education = [
  {
    degree: 'Bachelor of Engineering',
    subject: 'Computer Science and Engineering',
    institution: 'PES College of Engineering',
    location: 'Mandya',
    details: 'CGPA: 7 / 10 · Graduation: May 2027',
    current: true,
  },
  {
    degree: 'Diploma',
    subject: 'Mechanical Engineering',
    institution: 'Government Polytechnic',
    location: 'Turuvekere',
    details: 'CGPA: 8.32 / 10',
    current: false,
  },
]

export const codingProfiles = [
  {
    name: 'GitHub',
    handle: 'CHANDRESHEKAR-MG',
    href: profile.github,
    description: 'Code, projects, and experiments.',
    mark: 'GH',
    accent: 'violet',
  },
  {
    name: 'LinkedIn',
    handle: 'Chandreshekar M. G.',
    href: profile.linkedin,
    description: 'Professional profile and connections.',
    mark: 'in',
    accent: 'blue',
  },
  {
    name: 'LeetCode',
    handle: 'Chandreshekar_mg',
    href: profile.leetcode,
    description: 'Problem-solving practice.',
    mark: 'LC',
    accent: 'amber',
  },
]

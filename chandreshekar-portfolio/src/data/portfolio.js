import resumePdf from '../../ChandreshekarMGresume (1).pdf'

export const profile = {
  name: 'Chandreshekar M. G.',
  headline: 'Software Engineering | Java & Full-Stack Development',
  introduction:
    "I'm a Computer Science student passionate about building practical software applications. I work with Java, React, and full-stack technologies while strengthening my problem-solving skills and exploring cloud deployment and DevOps.",
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
      { name: 'Java', status: 'primary' },
      { name: 'C', status: 'basic' },
      { name: 'JavaScript', status: 'basic', projectListed: true },
      { name: 'SQL', status: 'basic' },
      { name: 'Data Structures & Algorithms', status: 'practicing' },
    ],
  },
  {
    name: 'Frontend',
    number: '02',
    skills: [
      { name: 'HTML', status: 'basic', projectListed: true },
      { name: 'CSS', status: 'basic', projectListed: true },
      { name: 'React', status: 'basic', projectListed: true },
    ],
  },
  {
    name: 'Backend',
    number: '03',
    skills: [
      { name: 'Node.js', status: 'basic', projectListed: true },
      { name: 'Express.js', status: 'basic', projectListed: true },
      { name: 'Spring Boot', status: 'learning' },
    ],
  },
  {
    name: 'Databases',
    number: '04',
    skills: [
      { name: 'MongoDB', status: 'basic', projectListed: true },
      { name: 'MySQL', status: 'basic' },
    ],
  },
  {
    name: 'Developer Tools',
    number: '05',
    skills: [
      { name: 'Git', status: 'basic' },
      { name: 'GitHub', status: 'basic' },
      { name: 'VS Code', status: 'basic' },
      { name: 'Maven', status: 'basic' },
    ],
  },
  {
    name: 'Cloud and DevOps',
    number: '06',
    skills: [
      { name: 'Docker', status: 'learning' },
      { name: 'Kubernetes', status: 'learning' },
      { name: 'CI/CD', status: 'learning' },
      { name: 'AWS', status: 'learning' },
    ],
  },
  {
    name: 'AI and Machine Learning',
    number: '07',
    skills: [
      { name: 'Python', status: 'interest' },
      { name: 'Machine Learning', status: 'interest' },
      { name: 'Deep Learning', status: 'interest' },
      { name: 'Generative AI', status: 'interest' },
      { name: 'LLMs', status: 'interest' },
    ],
  },
]

export const projects = [
  {
    number: '01',
    name: 'Employee Management System',
    category: 'Frontend concept',
    problem:
      'Employee information can become difficult to organize as routine records grow.',
    description:
      'A React project concept for presenting employee records and everyday management workflows in a clear interface.',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
    repository: '',
  },
  {
    number: '02',
    name: 'Centralized API-Integrated System',
    category: 'Full-stack project',
    problem:
      'Information spread across APIs can be harder to access from a single workflow.',
    description:
      'A MERN stack project exploring a centralized interface for working with API-integrated information.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    repository: '',
  },
  {
    number: '03',
    name: 'Public Transport Tracking Application',
    category: 'Upcoming project',
    problem:
      'Passengers need a simple way to follow public transport journeys.',
    description:
      'A planned full-stack application to explore public transport tracking workflows with React and Node.js. Live tracking is not implemented.',
    technologies: ['React', 'Node.js'],
    repository: '',
    planned: true,
  },
]

export const learningInterests = [
  'Java & Spring Boot',
  'Full-Stack Development',
  'AI and Machine Learning',
  'Cloud & DevOps',
  'Data Structures & Algorithms',
]

export const education = [
  {
    degree: 'Bachelor of Engineering',
    subject: 'Computer Science and Engineering',
    institution: 'PES College of Engineering',
    location: 'Mandya',
    details: 'CGPA: 7 / 10 · Expected graduation: May 2027',
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

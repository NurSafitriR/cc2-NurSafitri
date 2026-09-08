import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { VscAzureDevops } from 'react-icons/vsc';
import blogCardDesign from '../assets/design-figma1.png';
import perfumeCardDesign from '../assets/design-figma2.png';
import profilePhoto from '../assets/profile-avatar.jpeg';
import todoListApp from '../assets/todo-list.png';
import type { ExperienceItem, Project, Skill, Testimonial } from '../types';

export const heroData = {
  name: 'Nur Safitri Rahmalina',
  jobTitle: 'Full-Stack Web Developer',
  photoUrl: profilePhoto,
  intro:
    'I build scalable, high-performance web applications that help businesses grow. Focused on React, Node.js, and clean user experience.',
};

export const aboutMeData = {
  bio: 'I am a developer who loves learning new things in web development. Interested in React since I first started coding, and now deepening my full-stack skills through a bootcamp. I enjoy solving problems and crafting interfaces that feel great to use.',
  coreSkills: [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Tailwind CSS',
    'Git',
  ],
  keyValues: [
    { title: 'Timeliness', description: 'Always aiming to deliver on schedule' },
    { title: 'Attention to Detail', description: 'Careful when writing and reviewing code' },
    { title: 'Clear Communication', description: 'Sharing progress clearly and honestly' },
  ],
};

export const skillsData: { category: string; skills: Skill[] }[] = [
  {
    category: 'Front-End',
    skills: [
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'React', icon: FaReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    category: 'Back-End',
    skills: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express', icon: SiExpress },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
    ],
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'Docker', icon: FaDocker },
      { name: 'AWS', icon: FaAws },
      { name: 'CI/CD', icon: VscAzureDevops },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: 'blog-article-card-figma',
    title: 'Blog Article Card — UI Design',
    technologies: ['Figma', 'UI/UX Design'],
    shortDescription:
      'A desktop blog/article card component designed in Figma, featuring a category tag, publish date, and author byline.',
    imageUrl: blogCardDesign,
    star: {
      situation:
        'As part of practicing UI design fundamentals, I wanted to design a reusable article/blog card component that could fit into a content or learning platform.',
      task: 'Design a clean, readable card layout that highlights the article thumbnail, category tag, title, excerpt, and author, with consistent spacing and typography.',
      action:
        'Using Figma, I built the card with a rounded image thumbnail, a colored category badge, a clear typographic hierarchy for the headline and excerpt, and an author row with avatar and name, paying close attention to spacing, shadow, and contrast. I also set up an interactive prototype so the title changes color on hover, giving it a clickable feel.',
      result:
        'The result is a reusable card component I can drop into future blog or learning-platform designs, and it strengthened my understanding of visual hierarchy and component-based design thinking.',
    },
  },
  {
    id: 'perfume-product-card-figma',
    title: 'Perfume Product Card — Mobile E-commerce UI',
    technologies: ['Figma', 'UI/UX Design', 'Mobile Design'],
    shortDescription:
      'A mobile product card design for an e-commerce perfume listing, with pricing, a discount, and an add-to-cart action.',
    imageUrl: perfumeCardDesign,
    star: {
      situation:
        'I wanted to practice designing a mobile-first e-commerce UI, focused on a single product card that had to communicate product info and pricing clearly on a small screen.',
      task: 'Design a mobile product card for a perfume listing showing the product image, category, name, short description, price with a discount, and a clear call-to-action.',
      action:
        'In Figma, I designed the card at mobile width, using a product photo at the top, a category label, product title, short description, a price section showing both the discounted and original price, and a full-width "Add to cart" button with an icon. I prototyped hover states so both the title and the "Add to cart" button change color on interaction, making the design feel more tangible.',
      result:
        'The design gave me hands-on practice with mobile UI constraints, price and discount presentation patterns, and building clear, action-oriented e-commerce components.',
    },
  },
  {
    id: 'todo-list-app',
    title: 'To-Do List App',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    shortDescription:
      'A task management app with filtering, sorting, search, bulk actions, and dark mode, built with a group during a bootcamp module.',
    imageUrl: todoListApp,
    githubUrl: 'https://github.com/NurSafitriR/todo-app',
    star: {
      situation:
        'For a bootcamp group project, my team needed to build a functional to-do list app to practice React state management and component composition together.',
      task: 'I worked with my group to design and build a to-do app that goes beyond basic CRUD, adding filtering, sorting, search, and bulk actions for a more complete task management experience.',
      action:
        'Using React, TypeScript, and Tailwind CSS, we implemented task creation with optional descriptions, inline editing via double-click, filtering by status (all/pending/completed), sorting by newest/oldest, a live search bar, multi-select with bulk complete/delete, and a dark mode toggle.',
      result:
        'We delivered a fully working app that reinforced our understanding of React state, derived data (filtering, sorting, and searching together), and collaborating on a shared codebase as a team.',
    },
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    jobTitle: 'Teacher — Tata Kecantikan & IPAS',
    company: 'SMK Swasta',
    duration: '2024 - Present',
    responsibilities: [
      'Teach Tata Kecantikan (Beauty) vocational classes, covering both theory and hands-on practicals to prepare students for the beauty industry',
      'Since 2026, also teach IPAS (Ilmu Pengetahuan Alam dan Sosial / Natural and Social Sciences) alongside Beauty classes',
      'Design lesson plans, practical assessments, and student portfolios tailored to each subject',
      'Mentor students through practical exams and encourage them to build real, practice-ready skills',
    ],
  },
  {
    id: 'exp-2',
    jobTitle: 'Web Development Bootcamp Student',
    company: 'Purwadhika Bootcamp',
    duration: '2026 - Present',
    responsibilities: [
      'Learned JavaScript, React, and Node.js fundamentals intensively',
      'Completed various code challenges and group projects',
      'Built several portfolio projects from scratch',
    ],
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Andi Pratama',
    role: 'Product Manager, XYZ Retail',
    quote:
      'A pleasure to work with. Clear communication and tidy results, delivered on the agreed deadline.',
    avatarUrl: 'https://placehold.co/100x100/f97316/ffffff?text=AP',
  },
  {
    id: 'test-2',
    name: 'Sarah Wijaya',
    role: 'CEO, Small Startup',
    quote:
      'Very detail-oriented and quick to respond to revisions. Recommended for web development projects.',
    avatarUrl: 'https://placehold.co/100x100/10b981/ffffff?text=SW',
  },
  {
    id: 'test-3',
    name: 'Budi Santoso',
    role: 'Bootcamp Teammate',
    quote:
      'Always ready to help teammates who are stuck. Strong grasp of the fundamentals for a beginner.',
    avatarUrl: 'https://placehold.co/100x100/3b82f6/ffffff?text=BS',
  },
];

export const contactData = {
  email: 'fitrinsr15@gmail.com',
  linkedin: 'https://www.linkedin.com/',
  github: 'https://github.com/NurSafitriR',
};

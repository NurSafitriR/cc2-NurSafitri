export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface ProjectStar {
  situation: string;
  task: string;
  action: string;
  result: string;
}

export interface Project {
  id: string;
  title: string;
  technologies: string[];
  shortDescription: string;
  imageUrl?: string;
  githubUrl?: string;
  star: ProjectStar;
}

export interface ExperienceItem {
  id: string;
  jobTitle: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatarUrl: string;
}

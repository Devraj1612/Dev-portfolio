export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  category: string;
}

export interface Experience {
  id: number;
  position: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: string[];
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  certificateUrl: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface Skill {
  category: string;
  skills: string[];
}
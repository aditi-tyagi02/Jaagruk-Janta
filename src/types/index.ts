export interface NavItem {
  title: string;
  href: string;
  icon: string;
}

export interface Campaign {
  id: string;
  title: string;
  description: string;
  goal: number;
  raised: number;
  daysLeft: number;
  image: string;
}

export interface Resource {
  id: string;
  type: string;
  name: string;
  location: string;
  quantity: number;
  status: 'available' | 'requested';
  contact: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Volunteer {
  id: string;
  name: string;
  skills: string[];
  location: string;
  availability: {
    days: string[];
    timeSlots: string[];
  };
  areasOfInterest: string[];
  email: string;
  phone: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  status: 'pending' | 'in-progress' | 'completed';
  assignedTo?: string;
}

export interface EducationalResource {
  id: string;
  title: string;
  type: 'article' | 'video' | 'guide';
  topic: string;
  description: string;
  url: string;
  thumbnail?: string;
  duration?: string;
}

export interface Webinar {
  id: string;
  title: string;
  speaker: string;
  date: string;
  time: string;
  description: string;
  registrationUrl: string;
  thumbnail?: string;
}

export interface SuccessStory {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  author: string;
  impact: string;
}

export interface HeroProfile {
  id: string;
  name: string;
  image: string;
  contribution: string;
  hoursServed: number;
  tasksCompleted: number;
  badges: {
    id: string;
    name: string;
    icon: string;
  }[];
  location: string;
  joinedDate: string;
}
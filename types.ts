
export type UserRole = 'student' | 'teacher' | null;

export interface ModuleInfo {
  id: string;
  title: string;
  description: string;
  icon: string;
  accent: string;
  path: string;
}

export interface Comment {
  id: string;
  user: string;
  text: string;
  timestamp: string;
  position: number; // percentage along timeline
}

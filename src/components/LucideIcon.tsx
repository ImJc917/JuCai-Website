import {
  User, BookOpen, Calendar, MessageSquare,
  Triangle, Code2,
  School, GraduationCap, Landmark,
  Moon, Sun, Gem, Leaf,
  Smile, ArrowUp, Mail, ExternalLink, Globe,
} from 'lucide-react';
import type { LucideProps } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  User, BookOpen, Calendar, MessageSquare,
  Triangle, Code2,
  School, GraduationCap, Landmark,
  Moon, Sun, Gem, Leaf,
  Smile, ArrowUp, Mail, ExternalLink, Globe,
};

export default function LucideIcon({ name, ...props }: { name: string } & LucideProps) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon {...props} />;
}

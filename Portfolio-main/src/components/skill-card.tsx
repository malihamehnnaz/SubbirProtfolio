

"use client";

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import React from 'react';
import Image from 'next/image';
import {
  ReactJs, NextJs, NodeJs, TypeScript, JavaScript, MongoDb, PostgreSql, TailwindCss, Html, Python, FastApi,
  HTML5, CSS3, Chroma
} from "@/components/icons";

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  "React": ReactJs,
  "Next.js": NextJs,
  "Node.js": NodeJs,
  "TypeScript": TypeScript,
  "JavaScript": JavaScript,
  "MongoDB": MongoDb,
  "PostgreSQL": PostgreSql,
  "Tailwind CSS": TailwindCss,
  "HTML/CSS": Html,
  "Python": Python,
  "FastAPI": FastApi,
  "HTML5": HTML5,
  "CSS3": CSS3,
  "Chroma": Chroma,
  "Scikit-learn": () => <div className='h-10 w-10' />,
  "OpenCV": () => <div className='h-10 w-10' />,
  "Flask/FastAPI": () => <div className='h-10 w-10' />,
  "Java": () => <div className='h-10 w-10' />,
  "C++/C": () => <div className='h-10 w-10' />,
  "Pandas & NumPy": () => <div className='h-10 w-10' />,
  "Data Visualization": () => <div className='h-10 w-10' />,
  "Statistical Analysis": () => <div className='h-10 w-10' />,
  "SQL": () => <div className='h-10 w-10' />,
  "Jupyter Notebooks": () => <div className='h-10 w-10' />,
  "Matplotlib/Seaborn": () => <div className='h-10 w-10' />,
  "Data Preprocessing": () => <div className='h-10 w-10' />,
  "Model Deployment": () => <div className='h-10 w-10' />,
  "API Integration": () => <div className='h-10 w-10' />,
  "LLM APIs": () => <div className='h-10 w-10' />,
  "CI/CD Pipelines": () => <div className='h-10 w-10' />,
  "Model Monitoring": () => <div className='h-10 w-10' />,
  "Git/GitHub": () => <div className='h-10 w-10' />,
  "Cloud Platforms": () => <div className='h-10 w-10' />,
  "Machine Learning": () => <div className='h-10 w-10' />,
  "Deep Learning": () => <div className='h-10 w-10' />,
  "Neural Networks": () => <div className='h-10 w-10' />,
  "Computer Vision": () => <div className='h-10 w-10' />,
  "NLP": () => <div className='h-10 w-10' />,
  "Model Fine-Tuning": () => <div className='h-10 w-10' />,
  "Feature Engineering": () => <div className='h-10 w-10' />,
  "Pretrained Models": () => <div className='h-10 w-10' />,
  "Data Analysis": () => <div className='h-10 w-10' />,
};


type Skill = {
    name: string;
    category: string;
    logoUrl?: string;
};

type SkillCardProps = {
  skill: Skill;
  compact?: boolean;
};

// Deterministic pseudo-proficiency generator (returns 70-98) used to derive level (kept for consistency)
function computeProficiency(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const normalized = Math.abs(hash) % 29; // 0-28
  return 70 + normalized; // 70 - 98
}

function levelLabel(pct: number) {
  if (pct >= 90) return 'Expert';
  if (pct >= 82) return 'Advanced';
  if (pct >= 74) return 'Intermediate';
  return 'Beginner';
}

export default function SkillCard({ skill, compact }: SkillCardProps) {
  const IconComponent = iconMap[skill.name];
  const pct = computeProficiency(skill.name);
  const label = levelLabel(pct);

  // Map level to 0-3 filled dots for a compact visual (no bars)
  const dots = pct >= 90 ? 3 : pct >= 82 ? 2 : pct >= 74 ? 1 : 0;

  if (compact) {
    return (
      <div className="flex flex-col items-center text-center p-2">
        <div className="flex items-center justify-center rounded-md bg-card/60 dark:bg-card/50 w-14 h-14">
          {skill.logoUrl ? (
            <Image src={skill.logoUrl} alt={`${skill.name} logo`} width={40} height={40} className="object-contain" />
          ) : IconComponent ? (
            <IconComponent className={cn('h-8 w-8', skill.name === 'Next.js' && 'dark:text-white text-black')} />
          ) : (
            <div className="h-8 w-8 flex items-center justify-center text-lg font-bold text-primary">?</div>
          )}
        </div>
        <p className="mt-2 text-xs font-medium">{skill.name}</p>
      </div>
    );
  }

  return (
    <Card className={cn(
      'relative overflow-hidden p-4 rounded-2xl transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl',
      'bg-gradient-to-br from-white/60 to-white/10 dark:from-card/60 dark:to-card/20 border border-border/10'
    )}>
      {/* subtle colored orb */}
      <div className="absolute -right-8 -top-6 w-36 h-36 rounded-full opacity-20 bg-gradient-to-br from-primary/40 to-indigo-200 blur-3xl" aria-hidden />

      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center justify-center rounded-full bg-white/80 dark:bg-card/70 w-16 h-16 shadow-sm">
          {skill.logoUrl ? (
            <Image src={skill.logoUrl} alt={`${skill.name} logo`} width={48} height={48} className="object-contain" />
          ) : IconComponent ? (
            <IconComponent className={cn('h-10 w-10', skill.name === 'Next.js' && 'dark:text-white text-black')} />
          ) : (
            <div className="h-10 w-10 flex items-center justify-center text-xl font-bold text-primary">?</div>
          )}
        </div>

        <div className="text-center">
          <p className="text-sm font-semibold leading-tight">{skill.name}</p>
          <div className="mt-1 flex items-center gap-2 justify-center">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">{label}</span>
            <div className="flex items-center gap-1">
              {Array.from({ length: 3 }).map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    'w-2 h-2 rounded-full transition-colors',
                    i < dots ? 'bg-primary' : 'bg-muted-foreground/30'
                  )}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full mt-2 text-center">
          <span className="text-[11px] text-muted-foreground opacity-80">{skill.category}</span>
        </div>
      </div>
    </Card>
  );
}

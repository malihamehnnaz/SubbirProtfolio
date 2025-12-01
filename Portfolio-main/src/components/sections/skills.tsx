
"use client";

import { skills } from '@/lib/data';
import { AnimatedDiv } from '../animated-div';
import { Card, CardContent } from '../ui/card';

const skillCategories = [
  { name: "AI & Machine Learning", short: 'AI' },
  { name: "Programming & Frameworks", short: 'DEV' },
  { name: "Data Science & Analytics", short: 'DATA' },
  { name: "MLOps & Integration", short: 'OPS' },
];

const skillStyles: Record<string, { color: string; bg?: string }> = {
  React: { color: '#61dafb' },
  'Next.js': { color: '#000000' },
  Python: { color: '#3776AB' },
  TensorFlow: { color: '#FF6F00' },
  PyTorch: { color: '#EE4C2C' },
  Docker: { color: '#2496ED' },
  'Git/GitHub': { color: '#181717' },
  MongoDB: { color: '#47A248' },
  PostgreSQL: { color: '#336791' },
  'Tailwind CSS': { color: '#38B2AC' },
  JavaScript: { color: '#F7DF1E' },
  TypeScript: { color: '#3178C6' },
  HTML5: { color: '#E34F26' },
  CSS3: { color: '#1572B6' },
  FastAPI: { color: '#009688' },
  OpenAI: { color: '#6f42c1' },
  RAG: { color: '#8b5cf6' },
  'Machine Learning': { color: '#7c3aed' },
};

export default function SkillsSection() {
  return (
  <section id="skills" className="w-full py-8 md:py-12">
      <div className="container mx-auto max-w-6xl px-4 lg:px-8">
        <AnimatedDiv className="flex flex-col items-center text-center mb-8">
          <h2 className="text-lg font-bold tracking-tight sm:text-xl">Technical Skills</h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-2xl">A curated set of my technical strengths</p>
        </AnimatedDiv>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <AnimatedDiv key={category.name} delay={`${idx * 80}ms`}>
              <Card className="group h-full shadow-sm rounded-xl transition-shadow duration-200 hover:shadow-md">
                <CardContent className="p-4 border-l-4 border-primary/30 dark:border-primary/40"> 
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold">{category.name}</h3>
                    <div className="text-sm text-muted-foreground">{skills.filter(s => s.category === category.name).length}</div>
                  </div>

                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {skills
                      .filter((s) => s.category === category.name)
                      .map((skill) => {
                        const style = skillStyles[skill.name] || { color: 'rgba(99,102,241,1)' };
                        return (
                          <div
                            key={skill.name}
                            className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-muted/10 dark:bg-card/40 text-sm text-foreground/90 hover:bg-primary/5 hover:shadow-sm hover:translate-y-0.5 transition duration-150 cursor-pointer"
                          >
                            <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary" />
                            <span className="leading-tight">{skill.name}</span>
                          </div>
                        );
                      })}
                  </div>
                </CardContent>
              </Card>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

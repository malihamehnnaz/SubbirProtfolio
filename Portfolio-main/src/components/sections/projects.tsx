
'use client';

import { useState } from 'react';
import { projects } from '@/lib/data';
import { extendedProjectData } from '@/lib/projects-extended';
import ProjectCard from '../project-card';
import { AnimatedDiv } from '../animated-div';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Company categories based on work experience
  const categories = [
    'All',
    'InnStar Ltd',
    'Concord Group',
    'Nassa Group',
    'Volumezero Ltd',
    'Welcast Properties'
  ];

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === 'All') return true;
    
    // Generate slug for project to match extended data
    const slug = project.title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[()]/g, '')
      .replace(/--+/g, '-')
      .replace(/^-|-$/g, '');
    
    const extended = extendedProjectData[slug];
    return extended?.company === selectedCategory;
  });

  return (
  <section id="projects" className="w-full py-8 md:py-12">
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedDiv className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl section-header">COMPLETED PROJECTS</h2>
          <p className="mt-2 text-sm text-muted-foreground">Browse projects organized by the companies I've worked with</p>
        </AnimatedDiv>

        <AnimatedDiv delay="0.1s" className="mt-8 mb-12 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                selectedCategory === category
                  ? 'bg-secondary text-secondary-foreground shadow-sm'
                  : 'text-muted-foreground hover:bg-secondary/80'
              )}
            >
              {category}
            </Button>
          ))}
        </AnimatedDiv>
        
        {selectedCategory !== 'All' && (
          <div className="mt-4 mb-6 text-center">
            <p className="text-sm text-muted-foreground">
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} from {selectedCategory}
            </p>
          </div>
        )}

        <div className="mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {filteredProjects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

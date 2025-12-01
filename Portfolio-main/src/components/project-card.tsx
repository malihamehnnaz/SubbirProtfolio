
"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { AnimatedDiv } from './animated-div';
import { useRouter } from 'next/navigation';

type ProjectCardProps = {
  project: {
    title: string;
    description: string;
    tags: string[];
    githubUrl: string;
    liveUrl: string;
    image?: string; // unused in simplified card
  assignment?: string[] | null;
  };
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  // Determine current grid columns to create a row-wise cascade
  const [cols, setCols] = useState(1);
  useEffect(() => {
    const calcCols = () => {
      const w = window.innerWidth;
      if (w >= 1024) setCols(4); // lg:grid-cols-4
      else if (w >= 768) setCols(2); // md:grid-cols-2
      else setCols(1); // mobile
    };
    calcCols();
    window.addEventListener('resize', calcCols);
    return () => window.removeEventListener('resize', calcCols);
  }, []);

  const colIndex = index % cols;
  const rowIndex = Math.floor(index / cols);
  // Row-first then left-to-right within row for a natural cascade
  const delayMs = Math.min(rowIndex * 140 + colIndex * 90, 1000);
  const delay = `${delayMs}ms`;

  const hasGithub = Boolean(project.githubUrl && project.githubUrl !== '#');
  const hasLive = Boolean(project.liveUrl && project.liveUrl !== '#');
  const showFooter = hasGithub || hasLive;

  // Simple slug generator for project detail route
  const slug = project.title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

  // Basic 3D tilt state
  const [tiltStyle, setTiltStyle] = useState({ transform: 'perspective(600px) rotateX(0deg) rotateY(0deg)' });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = e.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within element
    const y = e.clientY - rect.top; // y position within element
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = (x - cx) / cx; // -1 .. 1
    const dy = (y - cy) / cy; // -1 .. 1
    const rotateY = dx * 6; // degrees
    const rotateX = -dy * 6; // degrees
    setTiltStyle({ transform: `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)` });
  };

  const handleMouseLeave = () => setTiltStyle({ transform: 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)' });
  
  const router = useRouter();

  return (
    <div className="group relative">
      {/* Animated shadow border: subtle always-on glow, brighter + animated on hover (more visible in dark mode) */}
      <div className="pointer-events-none absolute -inset-[1.5px] rounded-2xl opacity-30 dark:opacity-60 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/25 to-primary/25 dark:from-primary/40 dark:to-primary/40 via-transparent group-hover:animate-[spin_12s_linear_infinite]" />
        <div className="absolute inset-0 rounded-2xl blur-[4px] dark:blur-[6px] bg-primary/15 dark:bg-primary/25" />
      </div>
  <AnimatedDiv
    delay={delay}
  className="relative w-full h-full flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card px-6 pt-6 pb-6 shadow-sm transition-all duration-500 ease-out will-change-transform hover:shadow-lg hover:border-primary/40 hover:-translate-y-1 hover:scale-[1.02] focus-within:ring-1 focus-within:ring-primary/40 cursor-pointer"
    onClick={() => router.push(`/projects/${slug}`)}
  >
      {/* 3D image (click to open project details) */}
      <div className="mt-4">
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transition: 'transform 150ms ease-out', willChange: 'transform' }}
            className="h-40 md:h-36 w-full rounded-xl overflow-hidden bg-gradient-to-tr from-primary/8 to-primary/2 border border-border/30 shadow-sm"
          >
            <div className="h-full w-full flex items-center justify-center text-foreground/80 font-semibold text-sm md:text-base"
              style={tiltStyle as React.CSSProperties}
            >
              {/* If an image URL is provided, show next/image; otherwise show project title as placeholder */}
              {project.image ? (
                <div className="relative h-full w-full">
                  <Image src={project.image} alt={project.title} fill className="object-cover h-full w-full scale-125" />
                </div>
              ) : (
                <div className="h-full w-full flex items-center justify-center p-4">
                  <div className="text-center">
                    <div className="text-sm md:text-base font-medium">{project.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">Click to view details</div>
                  </div>
                </div>
              )}
            </div>
          </div>
      </div>

      {/* Header: title only for a cleaner look */}
      <h3 className="text-[1.05rem] md:text-lg font-semibold text-foreground tracking-tight transition-colors group-hover:text-primary">
        {project.title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm text-muted-foreground line-clamp-3 md:line-clamp-5">
        {project.description}
      </p>

      {/* Technologies / tags (visible) */}
      {project.tags?.length ? (
        <div className="mt-4 flex flex-wrap gap-2.5">
          {project.tags.slice(0, 4).map((tag, i) => (
            <Badge
              key={tag}
              variant="secondary"
              className="transform-gpu relative rounded-full border border-primary/20 bg-gradient-to-r from-primary/10 to-transparent text-foreground/90 text-[11px] px-2.5 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,.04)] backdrop-blur-sm transition-all duration-300 ease-out opacity-90 hover:opacity-100 hover:scale-[1.03] group-hover:-translate-y-0.5 group-hover:border-primary/40 group-hover:from-primary/20"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {tag}
            </Badge>
          ))}
          {project.tags.length > 4 && (
            <Badge
              variant="outline"
              className="transform-gpu text-[11px] border-primary/30 text-foreground/80 hover:text-foreground hover:border-primary/50 transition-all duration-300 ease-out"
              style={{ transitionDelay: `${4 * 40}ms` }}
            >
              +{project.tags.length - 4}
            </Badge>
          )}
        </div>
      ) : null}

      {/* Top-left assignment labels hidden per user request */}

      {/* Footer: actions */}
      {showFooter && (
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {hasGithub && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-primary transition-colors"
                aria-label="Open GitHub repository"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
            )}
          </div>
          {hasLive && (
            <Button asChild variant="outline" size="sm" className="gap-1">
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                Live <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </Button>
          )}
        </div>
      )}

      {/* Bottom-right company/platform cue */}
      {Array.isArray(project.assignment) && (
        <div className="absolute bottom-3 right-3">
          {project.assignment.includes('Github') && (
            <div className="inline-flex items-center justify-center rounded-full bg-card/80 p-2 border border-border/30 shadow-sm" aria-hidden={false}>
              <Github className="h-4 w-4 text-muted-foreground" />
              <span className="sr-only">GitHub</span>
            </div>
          )}
          {project.assignment.includes('Dexian') && (
            <div className="inline-flex items-center gap-2 rounded-full bg-card/80 px-2 py-1 border border-border/30 shadow-sm">
              <Image src="/logos/dexian.jpg" alt="Dexian" width={20} height={20} className="rounded-full object-contain" />
              <span className="sr-only">Dexian</span>
            </div>
          )}
        </div>
      )}
      </AnimatedDiv>
    </div>
  );
}

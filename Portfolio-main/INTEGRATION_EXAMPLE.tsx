/**
 * INTEGRATION EXAMPLE
 * 
 * This file shows how to integrate the new ProjectSpecifications component
 * into the existing project detail page.
 * 
 * File: src/app/projects/[slug]/page.tsx
 */

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { projects } from '@/lib/data';
import { ProjectSpecifications } from '@/components/project-specifications';
import { Badge } from '@/components/ui/badge';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => {
    const slug = p.title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[()]/g, '')
      .replace(/--+/g, '-');
    return slug === params.slug;
  });

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Project Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Project Images */}
      {project.images && project.images.length > 0 && (
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.images.map((img, idx) => (
              <div key={idx} className="relative aspect-video">
                <Image
                  src={img}
                  alt={`${project.title} - Image ${idx + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Basic Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {project.location && (
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Location</h3>
            <p className="font-semibold">{project.location}</p>
          </div>
        )}
        {project.type && (
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Type</h3>
            <p className="font-semibold">{project.type}</p>
          </div>
        )}
        {project.floors && (
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Floors</h3>
            <p className="font-semibold">{project.floors}</p>
          </div>
        )}
        {project.area && (
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Area</h3>
            <p className="font-semibold">{project.area}</p>
          </div>
        )}
      </div>

      {/* Project Details */}
      {project.details && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Project Details</h2>
          <p className="text-muted-foreground leading-relaxed">{project.details}</p>
        </div>
      )}

      {/* Key Features */}
      {project.features && project.features.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <span className="mr-2 mt-1 text-primary">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ===== ADD THIS SECTION ===== */}
      {/* Comprehensive Technical Specifications */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
        <ProjectSpecifications projectSlug={params.slug} />
      </div>
      {/* ===== END OF NEW SECTION ===== */}

      {/* Assignment (if needed) */}
      {project.assignment && project.assignment.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Assignment</h2>
          <div className="flex flex-wrap gap-2">
            {project.assignment.map((item, idx) => (
              <Badge key={idx}>{item}</Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * ALTERNATIVE: Quick Stats Bar at the Top
 * 
 * You can also add a quick stats bar right after the header
 * that shows key financial and technical highlights
 */

/*
import { extendedProjectData } from '@/lib/projects-extended';

// ... inside the component, after finding the project ...

const extendedData = extendedProjectData[params.slug];

// Add this after the header and before images:

{extendedData && (
  <div className="bg-muted rounded-lg p-6 mb-8">
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
      {extendedData.companyProjectValue && (
        <div>
          <p className="text-sm text-muted-foreground">Project Value</p>
          <p className="text-xl font-bold">{extendedData.companyProjectValue}</p>
        </div>
      )}
      {extendedData.certified && (
        <div>
          <p className="text-sm text-muted-foreground">Certification</p>
          <Badge variant="default" className="mt-1">{extendedData.certified}</Badge>
        </div>
      )}
      {extendedData.duration && (
        <div>
          <p className="text-sm text-muted-foreground">Duration</p>
          <p className="text-xl font-bold">{extendedData.duration}</p>
        </div>
      )}
      {extendedData.timeSaved && extendedData.timeSaved !== '0%' && (
        <div>
          <p className="text-sm text-muted-foreground">Time Saved</p>
          <p className="text-xl font-bold text-green-600">{extendedData.timeSaved}</p>
        </div>
      )}
      {extendedData.solar && (
        <div>
          <p className="text-sm text-muted-foreground">Solar Power</p>
          <p className="text-xl font-bold">{extendedData.solar.match(/(\d+(?:\.\d+)?)\s*KW/i)?.[1] || ''}KW</p>
        </div>
      )}
    </div>
  </div>
)}
*/

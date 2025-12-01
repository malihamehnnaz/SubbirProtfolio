import { projects } from '@/lib/data';
import { ProjectSpecifications } from '@/components/project-specifications';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { 
  Calendar, Building2, Layers, Ruler, Car, CheckCircle2, 
  Wifi, Shield, Zap, Users, Home, Package, Smartphone,
  Sun, Droplets, Wind, Leaf, Lock, Camera, Battery,
  Cpu, Globe, Clock, Award, Star, Heart, Music,
  Coffee, Utensils, Dumbbell, Tv, Gamepad, MapPin,
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

type Params = { params: { slug: string } };

// ---------------------------------------------
// Helpers
// ---------------------------------------------
function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function resolveImage(item: any) {
  // item can be a string (placeholder id or path) or an object { id, caption }
  const id = typeof item === 'string' ? item : item?.id;
  if (!id) return null;
  // if it's an absolute or relative path (starts with / or http) return directly
  if (typeof id === 'string' && (id.startsWith('/') || id.startsWith('http'))) {
    return { src: id, description: id };
  }

  const img = PlaceHolderImages.find((p: any) => p.id === id);
  if (img) return { src: img.imageUrl, description: img.description };
  return null;
}

// Parse a details string into a short summary and key/value pairs.
function parseDetails(details: string | undefined) {
  if (!details) return { summary: '', pairs: [] as Array<[string, string]> };
  const lines = details.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const pairs: Array<[string, string]> = [];
  const rest: string[] = [];

  for (const line of lines) {
    // If line looks like "Key: Value" split it out, otherwise keep as body text
    const idx = line.indexOf(':');
    if (idx > 0) {
      const key = line.slice(0, idx).trim();
      const val = line.slice(idx + 1).trim();
      if (key && val) {
        pairs.push([key, val]);
        continue;
      }
    }
    rest.push(line);
  }

  return { summary: rest.join('\n\n'), pairs };
}

// map common detail keys to icons for a cleaner UI
const DetailKeyIconMap: Record<string, React.ComponentType<any>> = {
  timeline: Calendar,
  duration: Calendar,
  client: Building2,
  owner: Building2,
  company: Building2,
  location: Building2,
  type: Layers,
  floors: Ruler,
  area: Ruler,
  parking: Car,
};

// Map common features to icons
function getFeatureIcon(feature: string): React.ComponentType<any> {
  const lowerFeature = feature.toLowerCase();
  
  // Connectivity & Technology
  if (lowerFeature.includes('wifi') || lowerFeature.includes('internet') || lowerFeature.includes('wireless')) return Wifi;
  if (lowerFeature.includes('smart') || lowerFeature.includes('automation') || lowerFeature.includes('technology') || lowerFeature.includes('digital')) return Smartphone;
  
  // Security
  if (lowerFeature.includes('security') || lowerFeature.includes('secure')) return Shield;
  if (lowerFeature.includes('cctv') || lowerFeature.includes('surveillance') || lowerFeature.includes('camera')) return Camera;
  if (lowerFeature.includes('lock') || lowerFeature.includes('access')) return Lock;
  
  // Energy & Environment
  if (lowerFeature.includes('solar')) return Sun;
  if (lowerFeature.includes('energy') || lowerFeature.includes('power')) return Zap;
  if (lowerFeature.includes('battery') || lowerFeature.includes('backup')) return Battery;
  if (lowerFeature.includes('efficient') || lowerFeature.includes('green') || lowerFeature.includes('eco') || lowerFeature.includes('sustainable')) return Leaf;
  if (lowerFeature.includes('water')) return Droplets;
  if (lowerFeature.includes('hvac') || lowerFeature.includes('ventilation') || lowerFeature.includes('air')) return Wind;
  
  // Amenities
  if (lowerFeature.includes('gym') || lowerFeature.includes('fitness')) return Dumbbell;
  if (lowerFeature.includes('pool') || lowerFeature.includes('swimming')) return Droplets;
  if (lowerFeature.includes('parking') || lowerFeature.includes('garage')) return Car;
  if (lowerFeature.includes('elevator') || lowerFeature.includes('lift')) return Layers;
  if (lowerFeature.includes('lobby') || lowerFeature.includes('reception')) return Home;
  if (lowerFeature.includes('lounge') || lowerFeature.includes('cafe') || lowerFeature.includes('coffee')) return Coffee;
  if (lowerFeature.includes('restaurant') || lowerFeature.includes('dining') || lowerFeature.includes('kitchen')) return Utensils;
  if (lowerFeature.includes('entertainment') || lowerFeature.includes('theater') || lowerFeature.includes('cinema') || lowerFeature.includes('tv')) return Tv;
  if (lowerFeature.includes('game') || lowerFeature.includes('play')) return Gamepad;
  if (lowerFeature.includes('music') || lowerFeature.includes('audio')) return Music;
  
  // Community & Services
  if (lowerFeature.includes('community') || lowerFeature.includes('social') || lowerFeature.includes('meeting') || lowerFeature.includes('conference')) return Users;
  
  // Quality & Certification
  if (lowerFeature.includes('premium') || lowerFeature.includes('luxury') || lowerFeature.includes('quality')) return Award;
  if (lowerFeature.includes('certified') || lowerFeature.includes('certified') || lowerFeature.includes('approved')) return Star;
  
  // Time related
  if (lowerFeature.includes('hour') || lowerFeature.includes('time') || lowerFeature.includes('24/7')) return Clock;
  
  // Default
  return CheckCircle2;
}

// Map stat5Label to appropriate icons
function getStat5Icon(label: string): React.ComponentType<any> {
  const lowerLabel = label.toLowerCase();
  
  // Basement/Structure related
  if (lowerLabel.includes('basement')) return Layers;
  
  // Apartments/Units
  if (lowerLabel.includes('apartment') || lowerLabel.includes('unit') || lowerLabel.includes('flat')) return Home;
  
  // Elevators/Lifts
  if (lowerLabel.includes('lift') || lowerLabel.includes('elevator')) return Layers;
  
  // Certification
  if (lowerLabel.includes('leed') || lowerLabel.includes('certification') || lowerLabel.includes('certified')) return Award;
  
  // Power/Generator
  if (lowerLabel.includes('kva') || lowerLabel.includes('generator') || lowerLabel.includes('dg') || lowerLabel.includes('power')) return Zap;
  
  // Default
  return CheckCircle2;
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((p) => slugify(p.title) === slug);

  if (!project) {
    return (
      <main className="container mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <p className="mt-4 text-muted-foreground">No project matched the requested URL.</p>
        <Link href="/" className="mt-6 inline-block text-primary">Return home</Link>
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen bg-background relative z-10">
      <div className="container mx-auto py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 max-w-6xl space-y-8 md:space-y-12 relative z-10">

      {/* --------------------------------------------- */}
      {/* HEADER SECTION – title, location, type */}
      {/* --------------------------------------------- */}
      <section className="relative z-10 space-y-4 md:space-y-6 border-b-2 border-gray-300 dark:border-gray-700 pb-8">
        <div className="w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-black dark:text-white leading-tight break-words">
            {project.title}
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap gap-6 text-gray-700 dark:text-gray-300 text-base md:text-lg font-medium">
          {project.location && (
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Building2 style={{ width: '28px', height: '28px' }} className="text-blue-700 dark:text-blue-400" strokeWidth={1.5} />
              </div>
              <span>{project.location}</span>
            </div>
          )}

          {project.type && (
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Layers style={{ width: '28px', height: '28px' }} className="text-blue-700 dark:text-blue-400" strokeWidth={1.5} />
              </div>
              <span>{project.type}</span>
            </div>
          )}
        </div>
      </section>

      {/* --------------------------------------------- */}
      {/* IMAGE CAROUSEL */}
      {/* --------------------------------------------- */}
      {project.images?.length ? (
        <section className="relative z-10 w-full">
          <Carousel className="w-full">
            <CarouselContent>
              {project.images.map((item: any, i: number) => {
                const caption = typeof item === 'string' ? undefined : item.caption;
                const resolved = resolveImage(item);
                if (!resolved) return null;

                return (
                  <CarouselItem key={i}>
                    <div className="rounded-xl overflow-hidden border-2 border-gray-300 dark:border-gray-700 shadow-lg">
                      <div className="relative w-full h-56 sm:h-72 md:h-96 lg:h-[500px]">
                        <Image 
                          src={resolved.src} 
                          alt={resolved.description || project.title} 
                          fill 
                          className="object-contain bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900" 
                          priority={i === 0}
                        />
                      </div>
                    </div>
                    {caption && (
                      <p className="mt-3 text-sm md:text-base text-gray-600 dark:text-gray-400 text-center font-medium">{caption}</p>
                    )}
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="left-4 h-12 w-12 md:h-14 md:w-14" />
            <CarouselNext className="right-4 h-12 w-12 md:h-14 md:w-14" />
          </Carousel>
        </section>
      ) : null}

      {/* --------------------------------------------- */}
      {/* STATISTICS GRID */}
      {/* --------------------------------------------- */}
      <section className="relative z-10 grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3">
        <StatCard icon={<Building2 style={{ width: '24px', height: '24px' }} className="text-blue-600 dark:text-blue-400" strokeWidth={1.5} />} label="Project Type" value={project.type || '-'} />
        <StatCard icon={<Layers style={{ width: '24px', height: '24px' }} className="text-blue-600 dark:text-blue-400" strokeWidth={1.5} />} label="Floors" value={project.floors || '-'} />
        <StatCard icon={<Ruler style={{ width: '24px', height: '24px' }} className="text-blue-600 dark:text-blue-400" strokeWidth={1.5} />} label="Area" value={project.area || '-'} />
        <StatCard icon={<Car style={{ width: '24px', height: '24px' }} className="text-blue-600 dark:text-blue-400" strokeWidth={1.5} />} label="Parking" value={project.parking || '-'} />
        {project.stat5Label && (
          <StatCard 
            icon={
              (() => {
                const Stat5Icon = getStat5Icon(project.stat5Label);
                return <Stat5Icon style={{ width: '24px', height: '24px' }} className="text-blue-600 dark:text-blue-400" strokeWidth={1.5} />;
              })()
            } 
            label={project.stat5Label} 
            value={project.stat5Value || '-'} 
          />
        )}
      </section>

      {/* --------------------------------------------- */}
      {/* OVERVIEW */}
      {/* --------------------------------------------- */}
      <section className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-black dark:text-white">Project Overview</h2>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-base md:text-lg whitespace-pre-wrap">{project.description}</p>
      </section>

      {/* --------------------------------------------- */}
      {/* DETAILS WITH ICONS */}
      {/* --------------------------------------------- */}
      {project.details && (
        <section className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-black dark:text-white">Detailed Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* left: summary text */}
            <div className="md:col-span-2 bg-gray-50 dark:bg-gray-900/50 p-6 md:p-8 rounded-xl border-2 border-gray-300 dark:border-gray-700 shadow-md leading-relaxed whitespace-pre-line text-base md:text-lg text-gray-800 dark:text-gray-200">
              {parseDetails(project.details).summary || project.details}
            </div>

            {/* right: key/value pairs with icons */}
            <div className="bg-gray-50 dark:bg-gray-900/50 p-6 md:p-8 rounded-xl border-2 border-gray-300 dark:border-gray-700 shadow-md">
              <ul className="flex flex-col gap-5 md:gap-6">
                {parseDetails(project.details).pairs.map(([k, v], i) => {
                  const iconKey = k.toLowerCase();
                  const Icon = DetailKeyIconMap[iconKey] || Building2;
                  return (
                    <li key={i} className="flex items-start gap-3 md:gap-4">
                      <div className="flex-none mt-1">
                        <div className="w-14 h-14 rounded-xl bg-blue-200 dark:bg-blue-900/40 flex items-center justify-center flex-shrink-0">
                          <Icon style={{ width: '24px', height: '24px' }} className="text-blue-700 dark:text-blue-400" strokeWidth={1.5} />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-bold uppercase tracking-wide">{k}</p>
                        <p className="text-base md:text-lg font-semibold text-black dark:text-white break-words mt-1">{v}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* --------------------------------------------- */}
      {/* FEATURES LIST */}
      {/* --------------------------------------------- */}
      {project.features?.length ? (
        <section className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-black dark:text-white">Key Features</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {project.features.map((f: any, i: number) => {
              const FeatureIcon = getFeatureIcon(f);
              return (
                <li key={i} className="flex items-start gap-4 p-5 md:p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/20 hover:shadow-lg transition-all">
                  <div className="flex-none flex-shrink-0 mt-1">
                    <div className="w-14 h-14 rounded-xl bg-blue-200 dark:bg-blue-900/40 flex items-center justify-center">
                      <FeatureIcon style={{ width: '28px', height: '28px' }} className="text-blue-700 dark:text-blue-400" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-base md:text-lg font-semibold text-black dark:text-white leading-snug">{f}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      {/* --------------------------------------------- */}
      {/* COMPREHENSIVE TECHNICAL SPECIFICATIONS */}
      {/* --------------------------------------------- */}
      <section className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-black dark:text-white">Technical Specifications</h2>
        <ProjectSpecifications projectSlug={slug} />
      </section>

      {/* --------------------------------------------- */}
      {/* AWARDS SECTION */}
      {/* --------------------------------------------- */}
      {project.awards?.length ? (
        <section className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-black dark:text-white">Awards & Achievements</h2>
          <ul className="space-y-4 md:space-y-6">
            {project.awards.map((award: any, i: number) => {
              const isString = typeof award === 'string';
              const title = isString ? award : award.title;
              const year = isString ? null : award.year;
              const organization = isString ? null : award.organization;
              
              return (
                <li key={i} className="flex items-start gap-4 md:gap-6 p-5 md:p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20">
                  <div className="flex-none flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-amber-200 dark:bg-amber-900/40 flex items-center justify-center">
                      <Award style={{ width: '24px', height: '24px' }} className="text-amber-700 dark:text-amber-400" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-base md:text-lg font-semibold text-black dark:text-white break-words">{title}</p>
                    {(organization || year) && (
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mt-2 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                        {organization && (
                          <span className="flex items-center gap-2">
                            <Building2 style={{ width: '16px', height: '16px' }} strokeWidth={2} />
                            {organization}
                          </span>
                        )}
                        {year && (
                          <span className="flex items-center gap-2">
                            <Calendar style={{ width: '16px', height: '16px' }} strokeWidth={2} />
                            {year}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      {/* --------------------------------------------- */}
      {/* EDUCATION SECTION */}
      {/* --------------------------------------------- */}
      {project.education?.length ? (
        <section className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-black dark:text-white">Education & Certifications</h2>
          <ul className="space-y-4 md:space-y-6">
            {project.education.map((edu: any, i: number) => {
              const isString = typeof edu === 'string';
              const title = isString ? edu : edu.title;
              const institution = isString ? null : edu.institution;
              const year = isString ? null : edu.year;
              const description = isString ? null : edu.description;
              
              return (
                <li key={i} className="flex items-start gap-4 md:gap-6 p-5 md:p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20">
                  <div className="flex-none flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-emerald-200 dark:bg-emerald-900/40 flex items-center justify-center">
                      <Star style={{ width: '24px', height: '24px' }} className="text-emerald-700 dark:text-emerald-400" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-base md:text-lg font-semibold text-black dark:text-white break-words">{title}</p>
                    {description && (
                      <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mt-1">{description}</p>
                    )}
                    {(institution || year) && (
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mt-2 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                        {institution && (
                          <span className="flex items-center gap-2">
                            <Building2 style={{ width: '16px', height: '16px' }} strokeWidth={2} />
                            {institution}
                          </span>
                        )}
                        {year && (
                          <span className="flex items-center gap-2">
                            <Calendar style={{ width: '16px', height: '16px' }} strokeWidth={2} />
                            {year}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      {/* --------------------------------------------- */}
      {/* ACTION BUTTONS */}
      {/* --------------------------------------------- */}
      <section className="relative z-10 flex flex-col sm:flex-row gap-4 md:gap-6 pt-8 border-t-2 border-gray-300 dark:border-gray-700">
        {project.githubUrl && project.githubUrl !== '#' && (
          <Link href={project.githubUrl} target="_blank" className="inline-flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 border-2 border-gray-400 dark:border-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition text-base md:text-lg font-semibold text-black dark:text-white">View Repository</Link>
        )}
        {project.liveUrl && project.liveUrl !== '#' && (
          <Link href={project.liveUrl} target="_blank" className="inline-flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 border-2 border-gray-400 dark:border-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition text-base md:text-lg font-semibold text-black dark:text-white">View Live</Link>
        )}
      </section>
      </div>
    </main>
  );
}

// -----------------------------------------
// StatCard Component
// -----------------------------------------
function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="p-3 md:p-4 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 shadow-sm flex flex-col items-start gap-2 hover:shadow-md transition-shadow">
      <div>{icon}</div>
      <p className="text-xs md:text-sm text-gray-700 dark:text-gray-400 font-semibold uppercase tracking-wide leading-tight">{label}</p>
      <p className="text-base md:text-lg font-bold text-black dark:text-white">{value}</p>
    </div>
  );
}
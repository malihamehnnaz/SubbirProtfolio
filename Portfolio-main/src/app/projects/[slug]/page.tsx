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
  BarChart3, PieChart, TrendingUp,
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
      <div className="container mx-auto py-4 md:py-6 px-4 sm:px-6 md:px-8 max-w-6xl space-y-4 md:space-y-6 relative z-10">

      {/* --------------------------------------------- */}
      {/* HEADER - Title + Key Stats in One Section */}
      {/* --------------------------------------------- */}
      <section className="relative z-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-black dark:text-white mb-3">
          {project.title}
        </h1>
        <div className="flex items-center gap-3 text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-4">
          {project.type && (
            <div className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5" />
              <span>{project.type}</span>
            </div>
          )}
          {project.location && (
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>{project.location}</span>
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
                    <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
                      <div className="relative w-full h-48 sm:h-56 md:h-72 lg:h-80">
                        <Image 
                          src={resolved.src} 
                          alt={resolved.description || project.title} 
                          fill 
                          className="object-contain bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800" 
                          priority={i === 0}
                        />
                      </div>
                    </div>
                    {caption && (
                      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center">{caption}</p>
                    )}
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="left-4 h-8 w-8 md:h-10 md:w-10" />
            <CarouselNext className="right-4 h-8 w-8 md:h-10 md:w-10" />
          </Carousel>
        </section>
      ) : null}

      {/* --------------------------------------------- */}
      {/* KEY PROJECT STATS - Below Images */}
      {/* --------------------------------------------- */}
      <section className="relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {project.area && (
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-2.5 rounded-lg border border-blue-200 dark:border-blue-800/40 hover:shadow-lg transition-all group">
              <div className="flex items-center gap-1.5 mb-1.5">
                <div className="p-1 bg-blue-500 dark:bg-blue-600 rounded group-hover:scale-110 transition-transform">
                  <Ruler className="w-3 h-3 text-white" strokeWidth={2.5} />
                </div>
                <p className="text-[10px] font-medium text-blue-700 dark:text-blue-300">Area</p>
              </div>
              <p className="text-xs font-bold text-blue-900 dark:text-blue-100 leading-tight">{project.area}</p>
            </div>
          )}
          {project.floors && (
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-2.5 rounded-lg border border-blue-200 dark:border-blue-800/40 hover:shadow-lg transition-all group">
              <div className="flex items-center gap-1.5 mb-1.5">
                <div className="p-1 bg-blue-500 dark:bg-blue-600 rounded group-hover:scale-110 transition-transform">
                  <Layers className="w-3 h-3 text-white" strokeWidth={2.5} />
                </div>
                <p className="text-[10px] font-medium text-blue-700 dark:text-blue-300">Floors</p>
              </div>
              <p className="text-xs font-bold text-blue-900 dark:text-blue-100 leading-tight">{project.floors}</p>
            </div>
          )}
          {project.parking && (
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-2.5 rounded-lg border border-blue-200 dark:border-blue-800/40 hover:shadow-lg transition-all group">
              <div className="flex items-center gap-1.5 mb-1.5">
                <div className="p-1 bg-blue-500 dark:bg-blue-600 rounded group-hover:scale-110 transition-transform">
                  <Car className="w-3 h-3 text-white" strokeWidth={2.5} />
                </div>
                <p className="text-[10px] font-medium text-blue-700 dark:text-blue-300">Parking</p>
              </div>
              <p className="text-xs font-bold text-blue-900 dark:text-blue-100 leading-tight">{project.parking}</p>
            </div>
          )}
          {project.stat5Label && project.stat5Value && (
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-2.5 rounded-lg border border-blue-200 dark:border-blue-800/40 hover:shadow-lg transition-all group">
              <div className="flex items-center gap-1.5 mb-1.5">
                <div className="p-1 bg-blue-500 dark:bg-blue-600 rounded group-hover:scale-110 transition-transform">
                  {(() => {
                    const Stat5Icon = getStat5Icon(project.stat5Label);
                    return <Stat5Icon className="w-3 h-3 text-white" strokeWidth={2.5} />;
                  })()}
                </div>
                <p className="text-[10px] font-medium text-blue-700 dark:text-blue-300">{project.stat5Label}</p>
              </div>
              <p className="text-xs font-bold text-blue-900 dark:text-blue-100 leading-tight">{project.stat5Value}</p>
            </div>
          )}
        </div>
      </section>

      {/* --------------------------------------------- */}
      {/* PROJECT DETAILS */}
      {/* --------------------------------------------- */}
      <section className="relative z-10">
        <h2 className="text-sm md:text-base font-bold mb-2 text-black dark:text-white">Project Details</h2>
        <div className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-200 dark:border-gray-800 text-xs md:text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
          {project.details || project.description}
        </div>
      </section>

      {/* --------------------------------------------- */}
      {/* TECHNICAL SPECIFICATIONS WITH ICONS */}
      {/* --------------------------------------------- */}
      <ProjectSpecifications projectSlug={project.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')} />

      {/* --------------------------------------------- */}
      {/* KEY FEATURES */}
      {/* --------------------------------------------- */}
      {project.features?.length ? (
        <section className="relative z-10">
          <h2 className="text-sm md:text-base font-bold mb-3 text-black dark:text-white flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-600" strokeWidth={2.5} />
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {project.features.map((f: any, i: number) => {
              const FeatureIcon = getFeatureIcon(f);
              return (
                <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-md transition-all group">
                  <div className="p-1.5 bg-blue-100 dark:bg-blue-900/40 rounded-lg group-hover:bg-blue-500 dark:group-hover:bg-blue-600 transition-colors">
                    <FeatureIcon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 group-hover:text-white flex-shrink-0" strokeWidth={2} />
                  </div>
                  <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 font-medium leading-relaxed">{f}</p>
                </div>
              );
            })}
          </div>
        </section>
      ) : null}

      {/* --------------------------------------------- */}
      {/* AWARDS & ACHIEVEMENTS */}
      {/* --------------------------------------------- */}
      {(project as any).awards?.length ? (
        <section className="relative z-10">
          <h2 className="text-lg md:text-xl font-bold mb-4 text-black dark:text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-600" strokeWidth={2.5} />
            Awards & Achievements
          </h2>
          <div className="space-y-3">
            {(project as any).awards.map((award: any, i: number) => {
              const isString = typeof award === 'string';
              const title = isString ? award : award.title;
              const year = isString ? null : award.year;
              const organization = isString ? null : award.organization;
              
              return (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800/40 hover:shadow-lg transition-all group">
                  <div className="p-2.5 bg-amber-100 dark:bg-amber-900/40 rounded-full group-hover:bg-amber-500 dark:group-hover:bg-amber-600 transition-colors">
                    <Award className="w-5 h-5 text-amber-600 dark:text-amber-400 group-hover:text-white flex-shrink-0" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm md:text-base font-bold text-amber-900 dark:text-amber-100">{title}</p>
                    {(organization || year) && (
                      <div className="flex flex-wrap items-center gap-3 mt-1.5">
                        {organization && (
                          <span className="flex items-center gap-1.5 text-xs text-amber-700 dark:text-amber-300">
                            <Building2 className="w-3.5 h-3.5" strokeWidth={2} />
                            {organization}
                          </span>
                        )}
                        {year && (
                          <span className="flex items-center gap-1.5 text-xs text-amber-700 dark:text-amber-300">
                            <Calendar className="w-3.5 h-3.5" strokeWidth={2} />
                            {year}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ) : null}

      {/* --------------------------------------------- */}
      {/* EDUCATION & CERTIFICATIONS */}
      {/* --------------------------------------------- */}
      {(project as any).education?.length ? (
        <section className="relative z-10">
          <h2 className="text-lg md:text-xl font-bold mb-4 text-black dark:text-white flex items-center gap-2">
            <Star className="w-5 h-5 text-emerald-600" strokeWidth={2.5} />
            Education & Certifications
          </h2>
          <div className="space-y-3">
            {(project as any).education.map((edu: any, i: number) => {
              const isString = typeof edu === 'string';
              const title = isString ? edu : edu.title;
              const institution = isString ? null : edu.institution;
              const year = isString ? null : edu.year;
              const description = isString ? null : edu.description;
              
              return (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-200 dark:border-emerald-800/40 hover:shadow-lg transition-all group">
                  <div className="p-2.5 bg-emerald-100 dark:bg-emerald-900/40 rounded-full group-hover:bg-emerald-500 dark:group-hover:bg-emerald-600 transition-colors">
                    <Star className="w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:text-white flex-shrink-0" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm md:text-base font-bold text-emerald-900 dark:text-emerald-100">{title}</p>
                    {description && (
                      <p className="text-xs md:text-sm text-emerald-700 dark:text-emerald-300 mt-1">{description}</p>
                    )}
                    {(institution || year) && (
                      <div className="flex flex-wrap items-center gap-3 mt-1.5">
                        {institution && (
                          <span className="flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-300">
                            <Building2 className="w-3.5 h-3.5" strokeWidth={2} />
                            {institution}
                          </span>
                        )}
                        {year && (
                          <span className="flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-300">
                            <Calendar className="w-3.5 h-3.5" strokeWidth={2} />
                            {year}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ) : null}

      {/* --------------------------------------------- */}
      {/* ACTION BUTTONS */}
      {/* --------------------------------------------- */}
      {(project.githubUrl && project.githubUrl !== '#') || (project.liveUrl && project.liveUrl !== '#') ? (
        <section className="relative z-10 flex flex-wrap gap-3 pt-6 border-t border-gray-200 dark:border-gray-800">
          {project.githubUrl && project.githubUrl !== '#' && (
            <Link href={project.githubUrl} target="_blank" className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all text-sm font-semibold text-gray-900 dark:text-white group">
              <Globe className="w-4 h-4 group-hover:scale-110 transition-transform" strokeWidth={2.5} />
              View Repository
            </Link>
          )}
          {project.liveUrl && project.liveUrl !== '#' && (
            <Link href={project.liveUrl} target="_blank" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg shadow-md hover:shadow-xl transition-all text-sm font-semibold group">
              <Zap className="w-4 h-4 group-hover:scale-110 transition-transform" strokeWidth={2.5} />
              View Live
            </Link>
          )}
        </section>
      ) : null}
      </div>
    </main>
  );
}

// -----------------------------------------
// StatCard Component
// -----------------------------------------
function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="p-2.5 md:p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 shadow-sm flex flex-col items-start gap-1.5 hover:shadow-md transition-shadow">
      <div>{icon}</div>
      <p className="text-[10px] md:text-xs text-gray-700 dark:text-gray-400 font-semibold uppercase tracking-wide leading-tight">{label}</p>
      <p className="text-sm md:text-base font-bold text-black dark:text-white">{value}</p>
    </div>
  );
}
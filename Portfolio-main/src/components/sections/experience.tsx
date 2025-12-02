
import { experiences } from '@/lib/data';
import { AnimatedDiv } from '../animated-div';
import { Badge } from '../ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ExperienceSection() {
  return (
  <section id="experience" className="w-full py-8 md:py-12">
      <div className="container mx-auto max-w-6xl px-4 lg:px-8">
        {/* Header (aligned with other sections) */}
        <AnimatedDiv className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl section-header">Experience</h2>
        </AnimatedDiv>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 gap-8">
          {experiences.map((exp, index) => (
            <AnimatedDiv key={index} delay={`${index * 80}ms`}>
              <Link href={exp.companyUrl} target="_blank" rel="noopener noreferrer">
                <div className="group relative cursor-pointer">
                  {/* Card */}
                  <div className="relative rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-primary/50 hover:bg-card/80 hover:shadow-xl hover:shadow-primary/10">
                    {/* Animated glow top border */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="p-8 md:p-10">
                      <div className="flex flex-col md:flex-row md:items-start gap-8">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                          <div className="h-24 w-24 rounded-xl flex items-center justify-center bg-card border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                            <Image
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              width={80}
                              height={80}
                              className="h-20 w-20 object-contain"
                              priority
                            />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-grow">
                          {/* Title & Period */}
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                            <div>
                              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                                {exp.role}
                              </h3>
                              <p className="text-lg text-primary font-semibold group-hover:text-primary/90 transition-colors">
                                {exp.company}
                              </p>
                              {exp.companyDetail && (
                                <p className="text-sm text-muted-foreground mt-1">
                                  {exp.companyDetail}
                                </p>
                              )}
                            </div>
                            <Badge
                              variant="outline"
                              className="w-fit h-fit text-xs font-medium bg-primary/5 border-primary/30 text-primary whitespace-nowrap"
                            >
                              {exp.period}
                            </Badge>
                          </div>

                          {/* Description */}
                          {exp.description && (
                            (() => {
                              // If description contains a double-newline block, treat the first block as the tenure
                              const parts = exp.description.split(/\r?\n\s*\r?\n/);
                              if (parts.length > 1) {
                                const [tenure, ...rest] = parts;
                                const restText = rest.join('\n\n');
                                return (
                                  <div className="mt-4">
                                    <p className="text-sm font-semibold text-primary mb-2">{tenure}</p>
                                    <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-line">{restText}</p>
                                  </div>
                                );
                              }
                              // Fallback: render as before
                              return (
                                <p className="text-base text-muted-foreground leading-relaxed mt-4 whitespace-pre-line">
                                  {exp.description}
                                </p>
                              );
                            })()
                          )}

                          {/* Key achievements grid */}
                          {(exp.responsibilities?.length > 0 || exp.achievements?.length > 0) && (
                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {[...(exp.responsibilities || []), ...(exp.achievements || [])].slice(0, 4).map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                  <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                    {item}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

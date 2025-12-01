import { education } from '@/lib/data';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedDiv } from '../animated-div';
import { Badge } from '../ui/badge';
import { GraduationCap } from 'lucide-react';
import Image from 'next/image';
import { Separator } from '../ui/separator';

export default function EducationSection() {
  return (
  <section id="education" className="w-full py-8 md:py-12">
      <div className="container mx-auto max-w-4xl px-4 lg:px-8">
        <AnimatedDiv className="flex flex-col items-center text-center">
          <h2 className="text-lg font-bold tracking-tight sm:text-xl section-header">Education</h2>
        </AnimatedDiv>

        <div className="relative mt-12 space-y-8">
          {education.map((edu, index) => (
            <AnimatedDiv key={index}>
              <Card className="w-full overflow-hidden shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30 border border-border">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className='flex-shrink-0 p-3 bg-secondary rounded-md'>
                      {edu.logo ? (
                        <Image src={edu.logo} alt={`${edu.institution} logo`} width={32} height={32} className="h-8 w-8 object-contain" />
                      ) : (
                        <GraduationCap className="h-8 w-8 text-primary" />
                      )}
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                         <CardTitle className="text-xl">{edu.degree}</CardTitle>
                         <Badge variant="outline" className="mt-1 sm:mt-0 border-primary/50 text-primary">{edu.period}</Badge>
                      </div>
                      <p className="font-semibold text-muted-foreground">{edu.institution}</p>
                      {edu.thesis && (
                        <p className="mt-1 text-sm italic text-muted-foreground">Thesis: {edu.thesis}</p>
                      )}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

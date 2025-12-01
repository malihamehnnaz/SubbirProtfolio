import Image from 'next/image';
import { companies } from '@/lib/data';
import { AnimatedDiv } from '../animated-div';

export default function CompaniesSection() {
  return (
  <section id="companies" className="w-full py-8 md:py-12"> 
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedDiv className="flex justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {companies.map((company, index) => (
            <AnimatedDiv key={company.name} delay={`${index * 100}ms`}>
              <div className="grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={120}
                  height={40}
                  className="object-contain h-10 w-auto"
                />
              </div>
            </AnimatedDiv>
          ))}
        </AnimatedDiv>
      </div>
    </section>
  );
}

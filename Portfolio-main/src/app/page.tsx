
'use client';

import React from 'react';
import Header from '@/components/header';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import SkillsSection from '@/components/sections/skills';
import ExperienceSection from '@/components/sections/experience';
import EducationSection from '@/components/sections/education';
import LanguageProficiencySection from '@/components/sections/language-proficiency';
import ProjectsSection from '@/components/sections/projects';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/footer';
import Spinner from '@/components/spinner';

export default function Home() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate loading for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="flex flex-col min-h-dvh bg-background relative z-10">
        <Header />
        <main className="flex-grow">
          <div id="home" className="scroll-mt-24">
            <HeroSection />
          </div>
          <div id="about" className="scroll-mt-24">
            <AboutSection />
          </div>
          <div id="experience" className="scroll-mt-24">
            <ExperienceSection />
          </div>
          <div id="projects" className="scroll-mt-24">
            <ProjectsSection />
          </div>
          <div id="education" className="scroll-mt-24">
            <EducationSection />
          </div>
          <div id="skills" className="scroll-mt-24">
            <SkillsSection />
          </div>
          <div id="language-proficiency" className="scroll-mt-24">
            <LanguageProficiencySection />
          </div>
          <div id="contact" className="scroll-mt-24">
            <ContactSection />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

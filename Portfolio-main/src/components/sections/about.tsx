
import { AnimatedDiv } from '../animated-div';
import { Card } from '../ui/card';
import { ChevronRight } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { value: '13+ Years', label: 'Experience' },
    { value: '11', label: 'Projects Delivered' },
    { value: '143K Sqm', label: 'Build Area' },
    { value: '244M USD', label: 'Total Project Value' },
  ];

  const expertise = [
    "Full lifecycle project management",
    "RCC & Steel Building project delivery",
    "Multidisciplinary team leadership",
    "Master scheduling & planning",
    "Value-engineering implementation",
    "Drawing interpretation expertise",
    "BOQ, Cost estimation & budgeting",
    "Procurement and negotiation skills",
    "Contract administration proficiency",
    "Invoice and documentation control",
    "Consultant–contractor coordination",
    "Regulatory and design compliance",
    "WHS and quality assurance",
    "Site inspection oversight",
    "Risk identification & mitigation",
    "Stakeholder communication management",
    "Residential & Commercial Building Expert",
    "Progress tracking & reporting",
  ];

  return (
    <section id="about" className="w-full py-8 md:py-12">
      <div className="container mx-auto max-w-5xl px-4 lg:px-8">
        <AnimatedDiv className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl section-header">About Me</h2>
        </AnimatedDiv>

        <div className="space-y-8">
            <div>
                <AnimatedDiv delay="0.1s">
                    <p className="text-sm text-muted-foreground text-left mb-4">
                        I am a Professional Construction Project Manager with over 13 years of specialized experience in the building construction sector, supported by a strong academic foundation including an M.Engg in Structural Engineering from BUET. My career spans five leading real estate and construction companies in Bangladesh, where I have successfully delivered high-rise RCC and steel residential and commercial buildings up to 32 stories with 5 basements. I have a demonstrated capability to lead and execute complex building projects across the full lifecycle, from inception to completion and handover.
                    </p>
                </AnimatedDiv>
            </div>

            <div>
                <AnimatedDiv delay="0.2s" className="max-w-4xl mx-auto">
                    <h3 className="text-lg font-semibold mb-3 text-center">Key Expertise</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto -ml-3">
                        {expertise.map((item, index) => (
                            <li key={index} className="flex items-start text-sm text-muted-foreground">
                                <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedDiv>
            </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat, index) => (
                <AnimatedDiv key={stat.label} delay={`${index * 100 + 300}ms`}>
                    <Card className="p-4 h-full flex flex-col justify-center items-center text-center shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30 border border-border">
                        <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-blue-600 to-blue-900 bg-clip-text text-transparent">{stat.value}</p>
                        <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                    </Card>
                </AnimatedDiv>
            ))}
        </div>
      </div>
    </section>
  );
}

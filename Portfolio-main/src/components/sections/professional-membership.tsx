"use client";

import { professionalMemberships } from '@/lib/data';
import { AnimatedDiv } from '../animated-div';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Award, Building2, Calendar } from 'lucide-react';

export default function ProfessionalMembershipSection() {
  return (
    <section id="professional-membership" className="w-full py-8 md:py-12">
      <div className="container mx-auto max-w-6xl px-4 lg:px-8">
        <AnimatedDiv className="flex flex-col items-center text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl section-header">Professional Membership</h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-2xl">Engineering specifications and standards</p>
        </AnimatedDiv>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {professionalMemberships.map((membership, idx) => (
            <AnimatedDiv key={idx} delay={`${idx * 100}ms`}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-200">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold leading-tight">{membership.title}</h3>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{membership.organization}</span>
                  </div>
                  {membership.membershipNumber && (
                    <div className="text-xs font-medium text-primary">
                      {membership.membershipNumber}
                    </div>
                  )}
                  {membership.description && (
                    <p className="text-xs text-muted-foreground pt-1">{membership.description}</p>
                  )}
                </CardContent>
              </Card>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

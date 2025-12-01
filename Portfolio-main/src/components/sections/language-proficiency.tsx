"use client";

import { AnimatedDiv } from '../animated-div';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';

export default function LanguageProficiencySection() {
  const items = [
    {
      title: 'PTE Academic',
      overall: '72',
      details: [
        { label: 'Listening', value: '71' },
        { label: 'Reading', value: '75' },
        { label: 'Speaking', value: '65' },
        { label: 'Writing', value: '81' },
      ],
      note: 'Overall Score: 72',
      reportCode: 'Score Report Code: 26d63cI93B'
    },
    {
      title: 'IELTS General',
      overall: '6.5',
      details: [
        { label: 'Listening', value: '7' },
        { label: 'Reading', value: '7' },
        { label: 'Speaking', value: '6' },
        { label: 'Writing', value: '6' },
      ],
      note: 'Overall Score: 6.5',
      reportCode: 'TRF Number: 21BD026799HARM050G'
    }
  ];

  return (
  <section id="language-proficiency" className="w-full py-8 md:py-12">
      <div className="container mx-auto max-w-4xl px-4 lg:px-8">
        <AnimatedDiv className="flex flex-col items-center text-center mb-12">
          <h2 className="text-lg font-bold tracking-tight sm:text-xl section-header">Language Proficiency</h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl">Scores for major English proficiency tests.</p>
        </AnimatedDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((test) => (
            <AnimatedDiv key={test.title}>
              <Card className="h-full shadow-lg rounded-2xl bg-card/50 border border-border/40">
                <CardHeader className="px-6 pt-6">
                  <div className="flex items-center justify-between w-full">
                    <CardTitle className="text-xl font-semibold">{test.title}</CardTitle>
                    <div className="text-3xl font-bold text-foreground">{test.overall}</div>
                  </div>
                  {test.note && <p className="mt-2 text-sm font-medium text-foreground">{test.note}</p>}
                  {test.reportCode && <p className="mt-1 text-xs text-muted-foreground font-mono">{test.reportCode}</p>}
                </CardHeader>
                <CardContent className="px-6 pb-6 pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    {test.details.map((d) => (
                      <div key={d.label} className="flex flex-col">
                        <span className="text-sm text-muted-foreground">{d.label}</span>
                        <span className="text-lg font-medium text-foreground">{d.value}</span>
                        <div className="mt-2 h-2 w-full bg-border rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary"
                            style={{ width: `${Math.min(100, Number(parseFloat(String(d.value)) / (test.title.includes('IELTS') ? 9 : 90) * 100)).toFixed(0)}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedDiv>
          ))}
        </div>

        <Separator className="my-10" />
      </div>
    </section>
  );
}

"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatedDiv } from '../animated-div';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Download, ExternalLink, Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function HeroSection() {
    const heroImage = PlaceHolderImages.find((img) => img.id === 'profile-hero');
    const publicProfileSrc = '/my-picture.jpeg';
    const [hasPublicImage, setHasPublicImage] = useState(false);
    const [publicProfileSrcV, setPublicProfileSrcV] = useState(`${publicProfileSrc}?v=${Date.now()}`);

    useEffect(() => {
        // Probe the public URL to see if the user has added their image to /public/my-picture.jpeg
        let mounted = true;
        const img = new window.Image();
        img.onload = () => {
            if (mounted) {
                setHasPublicImage(true);
                setPublicProfileSrcV(`${publicProfileSrc}?v=${Date.now()}`);
            }
        };
        img.onerror = () => {
            if (mounted) setHasPublicImage(false);
        };
        img.src = publicProfileSrc;
        return () => {
            mounted = false;
        };
    }, []);
    useEffect(() => {
        // Probe the public URL with a HEAD request and use the Last-Modified header as a cache-buster.
        // This ensures replacing the file in /public updates immediately in the browser without manual restarts.
        let mounted = true;

        const probe = async () => {
            try {
                const res = await fetch(publicProfileSrc, { method: 'HEAD', cache: 'no-store' });
                if (!mounted) return;
                if (res.ok) {
                    setHasPublicImage(true);
                    const lm = res.headers.get('last-modified') || String(Date.now());
                    setPublicProfileSrcV(`${publicProfileSrc}?v=${encodeURIComponent(lm)}`);
                } else {
                    setHasPublicImage(false);
                }
            } catch (e) {
                if (!mounted) return;
                setHasPublicImage(false);
            }
        };

        probe();
        return () => {
            mounted = false;
        };
    }, []);

  return (
    <section id="home" className="relative w-full py-8 md:py-12 lg:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <AnimatedDiv className="relative flex lg:hidden justify-center" delay="0.4s">
                        <div className="relative w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] overflow-hidden rounded-full bg-secondary/5 p-1">
                            {hasPublicImage ? (
                                <Image
                                    src={publicProfileSrcV}
                                    alt="Profile picture"
                                    fill
                                    className="rounded-full shadow-2xl border-4 border-primary/20 transform scale-70 sm:scale-70"
                                    priority
                                    style={{ objectFit: 'cover', transformOrigin: 'center' }}
                                />
                            ) : (
                                heroImage && (
                                                                                    <>
                                                                                        <Image
                                                                                            src={heroImage.imageUrl}
                                                                                            alt={heroImage.description}
                                                                                            fill
                                                                                            className="rounded-full shadow-2xl border-4 border-primary/20 transform scale-90 sm:scale-90"
                                                                                            data-ai-hint={heroImage.imageHint}
                                                                                            priority
                                                                                            style={{ objectFit: 'cover', transformOrigin: 'center' }}
                                                                                        />
                                                                                        <div className="absolute inset-0 rounded-full border-4 border-primary/50 animate-pulse-slow"></div>
                                                                                    </>
                                )
                            )}
                            {hasPublicImage && <div className="absolute inset-0 rounded-full border-4 border-primary/50 animate-pulse-slow"></div>}
                        </div>
                    </AnimatedDiv>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <AnimatedDiv>
                <h1 className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl md:text-3xl">
                    MD SUBBIR BIN HARUN
                </h1>
            </AnimatedDiv>
            <AnimatedDiv delay="0.1s">
                <p className="mt-3 text-2xl font-semibold bg-gradient-to-r from-blue-400 via-blue-600 to-blue-900 bg-clip-text text-transparent">
                    Construction Project Manager
                </p>
            </AnimatedDiv>
            <AnimatedDiv delay="0.2s">
                <p className="mt-4 max-w-xl text-md text-muted-foreground">
                13 years experienced with multi basements LEED Projects || Professional Civil Engineer (M.Engg) || High-Rise RCC &
Steel Structure Specialist || Project Planning & Operation Strategist || Cost & Budget Control Analyst || Construction &
MEP Management Expert | Proficient in Contract & Procurement Management || Multidisciplinary team leadership
maintaining client satisfaction ||

                </p>
            </AnimatedDiv>
            
                        <AnimatedDiv delay="0.4s" className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                                <a
                                    href="mailto:subbirharun0510@gmail.com"
                                    aria-label="Send email to subbirharun0510@gmail.com"
                                    className="flex flex-col items-center justify-center gap-2 px-10 py-5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border-2 border-slate-300 dark:border-slate-600 transition-all shadow-sm min-w-0"
                                >
                                    <Mail className="h-6 w-6 text-slate-700 dark:text-slate-300 flex-shrink-0" />
                                    <span className="text-xs font-medium text-slate-900 dark:text-slate-100 text-center whitespace-nowrap">subbirharun0510@gmail.com</span>
                                </a>

                                <a
                                    href="tel:+610423057885"
                                    aria-label="Call phone number +610423057885"
                                    className="flex flex-col items-center justify-center gap-2 px-10 py-5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border-2 border-slate-300 dark:border-slate-600 transition-all shadow-sm min-w-0"
                                >
                                    <Phone className="h-6 w-6 text-slate-700 dark:text-slate-300 flex-shrink-0" />
                                    <span className="text-xs font-medium text-slate-900 dark:text-slate-100 text-center whitespace-nowrap">+610423057885</span>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/subbirbinharun/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Open LinkedIn profile"
                                    className="flex flex-col items-center justify-center gap-2 px-10 py-5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border-2 border-slate-300 dark:border-slate-600 transition-all shadow-sm min-w-0"
                                >
                                    <Linkedin className="h-6 w-6 text-slate-700 dark:text-slate-300 flex-shrink-0" />
                                    <span className="text-xs font-medium text-slate-900 dark:text-slate-100 text-center whitespace-nowrap">/in/subbirbinharun</span>
                                </a>
          </AnimatedDiv>
          </div>
                    <AnimatedDiv className="relative hidden lg:flex justify-center" delay="0.4s">
                        <div className="relative w-[380px] h-[380px] overflow-hidden rounded-full bg-secondary/5 p-1">
                            {hasPublicImage ? (
                                <Image
                                    src={publicProfileSrcV}
                                    alt="Profile picture"
                                    fill
                                    className="rounded-full shadow-2xl border-4 border-primary/20 transform scale-70"
                                    priority
                                    style={{ objectFit: 'cover', transformOrigin: 'center' }}
                                />
                            ) : (
                                heroImage && (
                                    <>
                                        <Image
                                            src={heroImage.imageUrl}
                                            alt={heroImage.description}
                                            fill
                                            className="rounded-full shadow-2xl border-4 border-primary/20 transform scale-90"
                                            data-ai-hint={heroImage.imageHint}
                                            priority
                                            style={{ objectFit: 'cover', transformOrigin: 'center' }}
                                        />
                                        <div className="absolute inset-0 rounded-full border-4 border-primary/50 animate-pulse-slow"></div>
                                    </>
                                )
                            )}
                            {hasPublicImage && <div className="absolute inset-0 rounded-full border-4 border-primary/50 animate-pulse-slow"></div>}
                        </div>
                    </AnimatedDiv>
        </div>
      </div>
    </section>
  );
}

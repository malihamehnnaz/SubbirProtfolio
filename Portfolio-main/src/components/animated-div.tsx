"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

type AnimatedDivProps = {
  children: React.ReactNode;
  className?: string;
  delay?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function AnimatedDiv({ children, className, delay, ...props }: AnimatedDivProps) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        inView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95",
        className
      )}
      style={{ transitionDelay: delay }}
      {...props}
    >
      {children}
    </div>
  );
}

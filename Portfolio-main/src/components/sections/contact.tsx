
import { AnimatedDiv } from '../animated-div';
import { ContactForm } from '../contact-form';

export default function ContactSection() {
  return (
  <section id="contact" className="w-full py-8 md:py-12">
      <div className="container mx-auto max-w-4xl px-4 lg:px-8">
        <AnimatedDiv className="flex flex-col items-center text-center">
            <h2 className="text-lg font-bold tracking-tight sm:text-xl section-header">Get in Touch</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Feel free to reach out.
          </p>
        </AnimatedDiv>
        <AnimatedDiv delay="0.1s" className="mt-12">
          <ContactForm />
        </AnimatedDiv>
      </div>
    </section>
  );
}

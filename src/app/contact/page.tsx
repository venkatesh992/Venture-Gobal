import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Venturoedge for overseas jobs, visa assistance, training, and career counselling.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Let’s talk about your next move"
        description="Share a few details and our team will get back to you with next steps for jobs, visas, training, or counselling."
      />

      <section className="section bg-surface">
        <div className="container-custom grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="font-display text-3xl font-semibold text-foreground">
              Get in touch
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              Prefer email or phone? Reach us directly — or send a message using
              the form.
            </p>

            <ul className="mt-10 space-y-5">
              <li className="flex gap-3 text-[15px] text-foreground">
                <MapPin className="mt-0.5 shrink-0 text-primary" size={18} />
                <span>
                  123 Business District
                  <br />
                  City, State — 500001
                </span>
              </li>
              <li className="flex items-center gap-3 text-[15px] text-foreground">
                <Phone className="shrink-0 text-primary" size={18} />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-3 text-[15px] text-foreground">
                <Mail className="shrink-0 text-primary" size={18} />
                <span>info@vgrecruitment.com</span>
              </li>
            </ul>

            <div className="mt-10">
              <h3 className="mb-4 text-sm font-semibold text-foreground">Follow Us</h3>
              <div className="flex items-center gap-4">
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-[var(--radius-lg)] bg-background p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

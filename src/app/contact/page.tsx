import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact VG Recruitment for overseas jobs, visa assistance, training, and career counselling.",
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
          </div>

          <div className="rounded-[var(--radius-lg)] bg-background p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

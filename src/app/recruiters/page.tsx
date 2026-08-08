import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { RecruiterForm } from "@/components/forms/RecruiterForm";

export const metadata: Metadata = {
  title: "Recruiters | VG Recruitment Agency",
  description: "Join our network of recruiters and help us connect top talent with global opportunities.",
};

export default function RecruitersPage() {
  return (
    <>
      <PageHero
        title="Join Our Recruiter Network"
        description="Partner with us to source, vet, and place top-tier professionals."
      />

      <section className="section bg-surface">
        <div className="container-custom max-w-2xl">
          <div className="rounded-[var(--radius-lg)] bg-background p-6 shadow-sm md:p-10">
            <h2 className="font-display mb-6 text-2xl font-semibold text-foreground">
              Recruiter Application
            </h2>
            <RecruiterForm />
          </div>
        </div>
      </section>
    </>
  );
}

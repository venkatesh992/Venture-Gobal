import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SubmitCVForm } from "@/components/forms/SubmitCVForm";

export const metadata: Metadata = {
  title: "Submit CV | VG Recruitment Agency",
  description: "Submit your resume / profile for general application and our recruitment team will get in touch.",
};

export default function SubmitCVPage() {
  return (
    <>
      <PageHero
        title="Submit your resume / profile"
        description="Looking for an opportunity but don't see a specific role? Drop your CV here and we'll match you with upcoming positions."
      />

      <section className="section bg-surface">
        <div className="container-custom max-w-2xl">
          <div className="rounded-[var(--radius-lg)] bg-background p-6 shadow-sm md:p-10">
            <h2 className="font-display mb-6 text-2xl font-semibold text-foreground">
              General Application
            </h2>
            <SubmitCVForm />
          </div>
        </div>
      </section>
    </>
  );
}

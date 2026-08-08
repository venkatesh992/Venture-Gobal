import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Mail, Phone, MessageSquare } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function ContactDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const contact = await prisma.contactSubmission.findUnique({
    where: { id },
  });

  if (!contact) {
    notFound();
  }

  const dateFormatted = new Intl.DateTimeFormat('en-US', { 
    month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' 
  }).format(new Date(contact.createdAt));

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-10">
      <div className="flex items-center justify-between">
        <Link 
          href="/admin/contacts" 
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors font-medium"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Contacts
        </Link>
        <div className="flex items-center gap-3">
          <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
            contact.status === 'unread' ? 'bg-blue-100 text-blue-700' :
            contact.status === 'replied' ? 'bg-emerald-100 text-emerald-700' :
            'bg-slate-100 text-slate-700'
          }`}>
            {contact.status}
          </span>
        </div>
      </div>

      <header className="rounded-xl border border-border bg-surface p-6 md:p-8 shadow-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-800 text-2xl font-bold text-white shadow-sm">
                {contact.name.charAt(0)}
              </div>
              <div>
                <h1 className="font-display text-3xl font-bold text-foreground">
                  {contact.name}
                </h1>
                <p className="text-muted font-medium mt-1">
                  {contact.subject || "No Subject provided"}
                </p>
              </div>
            </div>
            
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-muted font-medium">
              <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-muted-light" /> Received on {dateFormatted}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contact Info */}
        <section className="rounded-xl border border-border bg-surface p-6 shadow-sm md:col-span-1 h-fit">
          <h3 className="text-[15px] font-bold text-foreground border-b border-border pb-3 mb-5 flex items-center gap-2">
            <Mail className="h-5 w-5 text-muted-light" /> Contact Details
          </h3>
          <div className="space-y-4">
            <DetailRow label="Email" value={contact.email} />
            <DetailRow label="Phone" value={contact.phone} />
          </div>
        </section>

        {/* Message */}
        <section className="rounded-xl border border-border bg-surface p-6 shadow-sm md:col-span-2">
          <h3 className="text-[15px] font-bold text-foreground border-b border-border pb-3 mb-5 flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-muted-light" /> Message Content
          </h3>
          <div className="prose prose-sm max-w-none text-muted leading-relaxed bg-slate-50/50 p-5 rounded-lg border border-border">
            {contact.message ? (
              <p className="whitespace-pre-wrap font-medium text-foreground">{contact.message}</p>
            ) : (
              <p className="italic">No message provided.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string | null | undefined }) {
  return (
    <div className="flex flex-col gap-1 py-1">
      <span className="text-[11px] font-bold uppercase tracking-wider text-muted-light">{label}</span>
      <span className="text-[14px] text-foreground font-semibold">{value || <span className="text-muted-light italic font-normal">Not provided</span>}</span>
    </div>
  );
}

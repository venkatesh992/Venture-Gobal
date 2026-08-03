import { prisma } from "@/lib/prisma";
import { Download, ExternalLink, Filter, Search } from "lucide-react";
import { Application } from "@prisma/client";

export const dynamic = "force-dynamic";

export default async function AdminApplicationsPage() {
  let applications: Application[] = [];
  try {
    applications = await prisma.application.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Failed to fetch applications:", error);
    // Database connection failed, use empty array
  }

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold text-foreground">Applications</h1>
          <p className="mt-1 text-sm text-muted">Manage CV submissions and candidate applications.</p>
        </div>
      </header>

      {/* Filters (UI Only) */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 rounded-lg border border-white/5 bg-background p-4">
        <div className="relative flex-1 max-w-full sm:max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="text"
            placeholder="Search candidates..."
            className="flex h-[34px] w-full rounded-md border border-white/10 bg-surface pl-9 pr-3 text-[12px] text-foreground focus:border-primary focus:outline-none"
          />
        </div>
        <button className="btn btn-secondary h-[34px] px-4 text-[12px] shrink-0">
          <Filter className="mr-2 h-4 w-4 inline-block" />
          Filter
        </button>
      </div>

      {/* Data Table */}
      <div className="rounded-lg border border-white/5 bg-background shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-muted">
            <thead className="border-b border-white/5 bg-surface/50 text-xs uppercase text-muted-foreground">
              <tr>
                <th className="px-6 py-4 font-medium">Candidate Name</th>
                <th className="px-6 py-4 font-medium">Job Ref</th>
                <th className="px-6 py-4 font-medium">Contact</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {applications.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-muted">
                    No applications found.
                  </td>
                </tr>
              ) : (
                applications.map((app) => (
                  <tr key={app.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4 font-medium text-foreground">{app.fullName}</td>
                    <td className="px-6 py-4">{app.jobId || "General"}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span>{app.email}</span>
                        <span className="text-xs">{app.phone}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        app.status === 'pending' ? 'bg-yellow-500/10 text-yellow-500' :
                        app.status === 'shortlisted' ? 'bg-green-500/10 text-green-500' :
                        app.status === 'rejected' ? 'bg-red-500/10 text-red-500' :
                        'bg-blue-500/10 text-blue-500'
                      }`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">{new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(app.createdAt))}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {app.resumeUrl && (
                          <a
                            href={app.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted hover:text-primary"
                            title="View Resume"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                        {app.passportCopy && (
                          <a
                            href={app.passportCopy}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted hover:text-primary"
                            title="View Passport"
                          >
                            <Download className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

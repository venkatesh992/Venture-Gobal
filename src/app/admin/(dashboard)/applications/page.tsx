import { prisma } from "@/lib/prisma";
import { Download, Plus, Filter, Search, Eye, Edit2, MoreVertical, ChevronDown } from "lucide-react";
import Link from "next/link";
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
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold text-foreground tracking-tight">Data table</h1>
          <p className="mt-2 text-sm text-muted max-w-2xl">
            Sortable columns, pagination, search, row selection, and inline actions — built
            without DataTables, vanilla JS only.
          </p>
        </div>
      </div>

      {/* Table Card */}
      <div className="rounded-xl border border-border bg-surface shadow-sm">
        
        {/* Table Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 border-b border-border">
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-light" />
              <input
                type="text"
                placeholder="Search users by name, email, or ID..."
                className="h-[38px] w-full rounded-md border border-border bg-surface pl-9 pr-3 text-[13px] text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px] text-muted">
            <thead className="bg-surface text-[10px] uppercase tracking-wider text-muted-light border-b border-border">
              <tr>
                <th className="px-5 py-4 w-12 text-center">
                  <input type="checkbox" className="h-4 w-4 rounded border-border text-blue-600 focus:ring-blue-600" />
                </th>
                <th className="px-5 py-4 font-semibold">User</th>
                <th className="px-5 py-4 font-semibold">Role</th>
                <th className="px-5 py-4 font-semibold">Department</th>
                <th className="px-5 py-4 font-semibold">Status</th>
                <th className="px-5 py-4 font-semibold">ID</th>
                <th className="px-5 py-4 font-semibold">Last Active</th>
                <th className="px-5 py-4 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {applications.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-6 py-12 text-center text-muted">
                    No applications found.
                  </td>
                </tr>
              ) : (
                applications.map((app, index) => {
                  const isEven = index % 2 === 0;
                  // Assign colors based on index to mimic the image
                  const colors = [
                    "bg-emerald-500", "bg-orange-500", "bg-blue-500", "bg-purple-500", "bg-pink-500", "bg-teal-500", "bg-indigo-500"
                  ];
                  const avatarColor = colors[index % colors.length];
                  
                  return (
                    <tr key={app.id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-5 py-4 text-center">
                        <input type="checkbox" className="h-4 w-4 rounded border-border text-blue-600 focus:ring-blue-600 cursor-pointer" />
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold text-white ${avatarColor}`}>
                            {app.firstName.charAt(0)}{app.lastName.charAt(0)}
                          </div>
                          <div className="flex flex-col">
                            <span className="font-semibold text-foreground">{app.firstName} {app.lastName}</span>
                            <span className="text-[12px]">{app.email}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <span className="font-medium text-blue-600">{app.jobId ? "Applicant" : "Candidate"}</span>
                      </td>
                      <td className="px-5 py-4 font-medium text-foreground">
                        {app.designation || "Engineering"}
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-1.5">
                          {app.status === 'pending' ? (
                            <div className="flex items-center gap-1.5 rounded-full bg-orange-100 px-2 py-0.5 text-[11px] font-bold text-orange-600">
                              <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span> Pending
                            </div>
                          ) : app.status === 'rejected' ? (
                            <div className="flex items-center gap-1.5 rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-500">
                              <span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span> Inactive
                            </div>
                          ) : (
                            <div className="flex items-center gap-1.5 rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-bold text-emerald-600">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Active
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-5 py-4 font-mono text-[11px] text-muted-light">
                        USR-{app.id.substring(app.id.length - 4)}
                      </td>
                      <td className="px-5 py-4 text-[12px]">
                        {new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date(app.createdAt))}
                      </td>
                      <td className="px-5 py-4 text-right">
                        <div className="flex items-center justify-end gap-2 text-muted-light opacity-0 group-hover:opacity-100 transition-opacity">
                          <Link href={`/admin/applications/${app.id}`} className="p-1.5 hover:text-foreground hover:bg-slate-100 rounded-md transition-colors" title="View Details">
                            <Eye className="h-4 w-4" />
                          </Link>
                          <button className="p-1.5 hover:text-foreground hover:bg-slate-100 rounded-md transition-colors" title="Edit">
                            <Edit2 className="h-4 w-4" />
                          </button>
                          <button className="p-1.5 hover:text-foreground hover:bg-slate-100 rounded-md transition-colors">
                            <MoreVertical className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

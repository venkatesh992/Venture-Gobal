import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Search, Eye, Filter, Download, MoreVertical, MessageSquare } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function ContactsPage() {
  const contacts = await prisma.contactSubmission.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            Contact Submissions
          </h1>
          <p className="text-sm text-muted mt-1">
            Manage inquiries and messages from the contact page.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-light" />
            <input
              type="text"
              placeholder="Search messages..."
              className="h-10 rounded-md border border-border bg-surface pl-9 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary shadow-sm w-full md:w-64"
            />
          </div>
          <button className="flex h-10 items-center justify-center gap-2 rounded-md border border-border bg-surface px-4 text-sm font-medium text-foreground hover:bg-slate-50 transition-colors shadow-sm">
            <Filter className="h-4 w-4" />
            <span className="hidden sm:inline">Filter</span>
          </button>
          <button className="flex h-10 items-center justify-center gap-2 rounded-md border border-border bg-surface px-4 text-sm font-medium text-foreground hover:bg-slate-50 transition-colors shadow-sm">
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50/80 text-xs uppercase text-muted font-semibold border-b border-border">
              <tr>
                <th className="px-5 py-4 w-12">
                  <input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" />
                </th>
                <th className="px-5 py-4">Name</th>
                <th className="px-5 py-4">Subject</th>
                <th className="px-5 py-4">Date</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {contacts.length > 0 ? (
                contacts.map((contact) => (
                  <tr key={contact.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-5 py-4">
                      <input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" />
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 font-bold text-xs">
                          {contact.name.substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{contact.name}</p>
                          <p className="text-xs text-muted truncate max-w-[200px]">{contact.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <div className="font-medium text-foreground truncate max-w-[200px]">
                        {contact.subject || "No Subject"}
                      </div>
                    </td>
                    <td className="px-5 py-4 text-muted">
                      {new Date(contact.createdAt).toLocaleDateString('en-US', {
                        month: 'short', day: 'numeric', year: 'numeric'
                      })}
                    </td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
                        contact.status === 'unread' ? 'bg-blue-100 text-blue-700' :
                        contact.status === 'replied' ? 'bg-emerald-100 text-emerald-700' :
                        'bg-slate-100 text-slate-700'
                      }`}>
                        {contact.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 text-muted-light">
                        <Link href={`/admin/contacts/${contact.id}`} className="p-1.5 hover:text-foreground hover:bg-slate-100 rounded-md transition-colors" title="View Details">
                          <Eye className="h-4 w-4" />
                        </Link>
                        <button className="p-1.5 hover:text-foreground hover:bg-slate-100 rounded-md transition-colors">
                          <MoreVertical className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-5 py-16 text-center text-muted">
                    <div className="flex flex-col items-center justify-center">
                      <MessageSquare className="h-10 w-10 text-slate-200 mb-3" />
                      <p className="text-base font-medium text-foreground">No messages found</p>
                      <p className="text-sm mt-1">When users submit the contact form, they will appear here.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination placeholder */}
        <div className="flex items-center justify-between border-t border-border bg-slate-50/50 px-5 py-3">
          <p className="text-xs text-muted font-medium">
            Showing <span className="font-semibold text-foreground">{contacts.length}</span> results
          </p>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1 text-xs font-medium border border-border rounded-md bg-white text-muted hover:text-foreground hover:bg-slate-50 disabled:opacity-50">Previous</button>
            <button className="px-3 py-1 text-xs font-medium border border-border rounded-md bg-white text-muted hover:text-foreground hover:bg-slate-50 disabled:opacity-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

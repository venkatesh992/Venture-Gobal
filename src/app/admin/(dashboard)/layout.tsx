import Link from "next/link";
import { Briefcase, FileText, Settings, Users, LayoutDashboard, LogOut, Search, Bell, Moon, ChevronRight, MessageSquare } from "lucide-react";
import { auth, signOut } from "@/auth";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="flex w-full lg:w-64 flex-col border-b lg:border-b-0 lg:border-r border-border bg-surface shrink-0">
        {/* Brand */}
        <div className="p-6">
          <Link href="/admin" className="flex items-center gap-2 font-display text-xl font-bold">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-white text-sm">
              VG
            </div>
            Adminator
          </Link>
          <p className="text-xs text-muted mt-1 ml-10">v3.1 - preview</p>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-8 overflow-y-auto pb-6">
          <div>
            <p className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-light mb-3">Workspace</p>
            <div className="space-y-1">
              <Link href="/admin" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted hover:bg-slate-50 hover:text-foreground transition-colors">
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Link>
            </div>
          </div>

          <div>
            <p className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-light mb-3">Components</p>
            <div className="space-y-1">
              <Link href="/admin/applications" className="flex items-center gap-3 rounded-lg hover:bg-slate-50 hover:text-foreground px-3 py-2 text-sm font-medium text-muted transition-colors">
                <FileText className="h-4 w-4" />
                Applications
              </Link>
              <Link href="/admin/recruiters" className="flex items-center gap-3 rounded-lg hover:bg-slate-50 hover:text-foreground px-3 py-2 text-sm font-medium text-muted transition-colors">
                <Users className="h-4 w-4" />
                Recruiters
              </Link>
              <Link href="/admin/contacts" className="flex items-center gap-3 rounded-lg hover:bg-slate-50 hover:text-foreground px-3 py-2 text-sm font-medium text-muted transition-colors">
                <MessageSquare className="h-4 w-4" />
                Contacts
              </Link>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Topbar */}
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-border bg-surface px-6">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm text-muted">
            <span className="hover:text-foreground cursor-pointer transition-colors">Components</span>
            <ChevronRight className="mx-2 h-4 w-4 text-muted-light" />
            <span className="hover:text-foreground cursor-pointer transition-colors">Tables</span>
            <ChevronRight className="mx-2 h-4 w-4 text-muted-light" />
            <span className="font-medium text-foreground">Data</span>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 border-l border-border pl-4">
              {session?.user && (
                <div className="relative ml-2 group cursor-pointer">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-sm font-bold text-white">
                    {session.user.name?.substring(0, 2).toUpperCase() || 'AD'}
                  </div>
                  {/* Logout Dropdown logic would go here, using form for now for simplicity */}
                  <form
                    action={async () => {
                      "use server";
                      await signOut({ redirectTo: "/admin/login" });
                    }}
                    className="absolute right-0 top-full mt-2 hidden w-48 rounded-md border border-border bg-surface py-1 shadow-lg group-hover:block"
                  >
                    <button
                      type="submit"
                      className="flex w-full items-center gap-2 px-4 py-2 text-sm text-destructive hover:bg-slate-50 transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                      Sign Out
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

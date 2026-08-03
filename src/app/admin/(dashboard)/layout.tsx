import Link from "next/link";
import { Briefcase, FileText, Settings, Users, LayoutDashboard, LogOut } from "lucide-react";
import { auth, signOut } from "@/auth";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-surface">
      {/* Sidebar */}
      <aside className="flex w-full lg:w-64 flex-col border-b lg:border-b-0 lg:border-r border-white/5 bg-background p-4 lg:p-6 shrink-0">
        <Link href="/admin" className="flex items-center gap-2 font-display text-xl font-bold">
          <span className="text-primary">VG</span> Admin
        </Link>
        
        <nav className="mt-6 lg:mt-10 flex lg:flex-1 items-center space-x-2 lg:space-x-0 lg:items-stretch lg:flex-col lg:space-y-2 overflow-x-auto pb-2 lg:pb-0 hide-scrollbar">
          <Link href="/admin" className="flex shrink-0 items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted hover:bg-white/5 hover:text-foreground">
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </Link>
          <Link href="/admin/applications" className="flex shrink-0 items-center gap-3 rounded-md bg-white/5 px-3 py-2 text-sm font-medium text-foreground">
            <FileText className="h-4 w-4" />
            Applications
          </Link>
        </nav>

        {session?.user && (
          <div className="mt-4 lg:mt-auto flex items-center lg:flex-col lg:items-stretch justify-between lg:justify-start border-t border-white/5 pt-4 lg:pt-6">
            <div className="lg:mb-4 px-3">
              <p className="text-sm font-medium text-foreground">{session.user.name}</p>
              <p className="text-xs text-muted hidden lg:block">{session.user.email}</p>
            </div>
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/admin/login" });
              }}
              className="shrink-0"
            >
              <button
                type="submit"
                className="flex items-center gap-2 lg:w-full lg:gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-destructive/10 hover:text-destructive"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden lg:inline">Sign Out</span>
              </button>
            </form>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full p-4 md:p-6 lg:p-10 overflow-hidden">
        {children}
      </main>
    </div>
  );
}

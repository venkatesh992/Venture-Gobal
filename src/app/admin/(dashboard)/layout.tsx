import Link from "next/link";
import { Briefcase, FileText, Settings, Users, LayoutDashboard, LogOut } from "lucide-react";
import { auth, signOut } from "@/auth";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  return (
    <div className="flex min-h-screen bg-surface">
      {/* Sidebar */}
      <aside className="flex w-64 flex-col border-r border-white/5 bg-background p-6">
        <Link href="/admin" className="flex items-center gap-2 font-display text-xl font-bold">
          <span className="text-primary">VG</span> Admin
        </Link>
        
        <nav className="mt-10 flex-1 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted hover:bg-white/5 hover:text-foreground">
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </Link>
          <Link href="/admin/applications" className="flex items-center gap-3 rounded-md bg-white/5 px-3 py-2 text-sm font-medium text-foreground">
            <FileText className="h-4 w-4" />
            Applications
          </Link>
        </nav>

        {session?.user && (
          <div className="mt-auto border-t border-white/5 pt-6">
            <div className="mb-4 px-3">
              <p className="text-sm font-medium text-foreground">{session.user.name}</p>
              <p className="text-xs text-muted">{session.user.email}</p>
            </div>
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/admin/login" });
              }}
            >
              <button
                type="submit"
                className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-destructive/10 hover:text-destructive"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </button>
            </form>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        {children}
      </main>
    </div>
  );
}

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import GreetingDashboard from "./GreetingDashboard";

export default async function AdminDashboardPage() {
  const session = await auth();

  // Fetch some quick stats for the dashboard overview
  const [
    totalJobs,
    activeJobs,
    totalApplications,
    pendingApplications,
    newMessages,
  ] = await Promise.all([
    prisma.job.count(),
    prisma.job.count({ where: { isActive: true } }),
    prisma.application.count(),
    prisma.application.count({ where: { status: "pending" } }),
    prisma.contactSubmission.count({ where: { status: "unread" } }),
  ]);

  const stats = {
    totalJobs,
    activeJobs,
    totalApplications,
    pendingApplications,
    newMessages,
  };

  return (
    <div className="w-full">
      <GreetingDashboard 
        userName={session?.user?.name || "Admin"} 
        userRole={session?.user?.role || "ADMIN"}
        stats={stats}
      />
    </div>
  );
}

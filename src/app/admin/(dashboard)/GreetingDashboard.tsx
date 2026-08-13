"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  FileText, 
  Users, 
  MessageSquare,
  TrendingUp,
  Clock
} from "lucide-react";

interface Stats {
  totalJobs: number;
  activeJobs: number;
  totalApplications: number;
  pendingApplications: number;
  newMessages: number;
}

interface GreetingDashboardProps {
  userName: string;
  userRole: string;
  stats: Stats;
}

export default function GreetingDashboard({ userName, userRole, stats }: GreetingDashboardProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Get time of day for greeting
  const hour = new Date().getHours();
  const greetingText = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  return (
    <motion.div 
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Greeting Section */}
      <motion.div 
        variants={itemVariants}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-xl"
      >
        <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl" />
        
        <div className="relative z-10 flex flex-col justify-between md:flex-row md:items-end">
          <div>
            <div className="mb-2 flex items-center space-x-2">
              <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium text-blue-200 backdrop-blur-md border border-white/10">
                {userRole}
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {greetingText}, {userName}! 👋
            </h1>
            <p className="mt-2 text-slate-300 max-w-xl">
              Here is what's happening with your recruitment platform today. You have <span className="font-semibold text-white">{stats.pendingApplications}</span> pending applications needing review.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <p className="text-sm text-slate-400">Current Date</p>
            <p className="font-medium text-slate-200">
              {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <StatCard
          title="Active Jobs"
          value={stats.activeJobs.toString()}
          subtitle={`Out of ${stats.totalJobs} total`}
          icon={<Briefcase className="h-5 w-5 text-blue-400" />}
          trend="+2 this week"
        />
        <StatCard
          title="Total Applications"
          value={stats.totalApplications.toString()}
          subtitle="All time submissions"
          icon={<Users className="h-5 w-5 text-indigo-400" />}
          trend={<span className="text-emerald-400 flex items-center"><TrendingUp className="w-3 h-3 mr-1"/> Up 12%</span>}
        />
        <StatCard
          title="Pending Reviews"
          value={stats.pendingApplications.toString()}
          subtitle="Require your attention"
          icon={<Clock className="h-5 w-5 text-amber-400" />}
          trend={`${stats.pendingApplications > 0 ? 'Action needed' : 'All caught up'}`}
          highlight={stats.pendingApplications > 0}
        />
        <StatCard
          title="Unread Messages"
          value={stats.newMessages.toString()}
          subtitle="From contact form"
          icon={<MessageSquare className="h-5 w-5 text-pink-400" />}
          trend={`${stats.newMessages} new today`}
        />
      </motion.div>
    </motion.div>
  );
}

function StatCard({ 
  title, 
  value, 
  subtitle, 
  icon, 
  trend,
  highlight = false 
}: { 
  title: string; 
  value: string; 
  subtitle: string; 
  icon: React.ReactNode; 
  trend: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`relative overflow-hidden rounded-xl border p-6 shadow-sm backdrop-blur-sm transition-all
        ${highlight 
          ? 'border-amber-200/50 bg-amber-50/50 dark:border-amber-900/30 dark:bg-amber-900/10' 
          : 'border-slate-200 bg-white/60 dark:border-slate-800 dark:bg-slate-900/50'
        }`}
    >
      <div className="flex items-center justify-between">
        <div className={`rounded-lg p-2.5 ${highlight ? 'bg-amber-100 dark:bg-amber-900/50' : 'bg-slate-100 dark:bg-slate-800'}`}>
          {icon}
        </div>
        <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
          {trend}
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</h3>
        <p className="mt-1 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{value}</p>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{subtitle}</p>
      </div>
    </motion.div>
  );
}

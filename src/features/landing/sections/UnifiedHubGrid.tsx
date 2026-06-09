// src/features/landing/sections/UnifiedHubGrid.tsx
import React from "react";
import { useUniversityTheme } from "@/app/providers/ThemeProvider";
import {
  Megaphone,
  Calendar,
  Clock,
  MapPin,
  ChevronRight,
  Bell,
  Tag,
} from "lucide-react";

export const UnifiedHubGrid: React.FC = () => {
  const { tenant } = useUniversityTheme();

  // Simulated live high-priority announcements
  const announcements = [
    {
      id: 1,
      title: "First Semester Exam Timetable Draft Released",
      excerpt:
        "The preliminary draft for the upcoming faculty examinations is out. All department reps are requested to submit clashes before Friday.",
      date: "June 8, 2026",
      category: "Academic",
      urgent: true,
    },
    {
      id: 2,
      title: "Faculty Student Union Elections: Voting Guidelines",
      excerpt:
        "The independent electoral committee has published the mandatory bio-verification guidelines for all qualified student voters.",
      date: "June 7, 2026",
      category: "Elections",
      urgent: false,
    },
    {
      id: 3,
      title: "Hostel Maintenance & Power Interruption Notice",
      excerpt:
        "Please note that there will be a temporary power outage across the male and female hostels this Saturday due to transformer service upgrades.",
      date: "June 5, 2026",
      category: "Campus Life",
      urgent: false,
    },
  ];

  // Simulated operational campus events
  const events = [
    {
      id: 1,
      title: "Annual Faculty Engineering Summit 2026",
      date: "June 12, 2026",
      time: "10:00 AM WAT",
      location: "Main Auditorium Kompleks",
      speaker: "Prof. O. A. Adebayo",
    },
    {
      id: 2,
      title: "Tech Career Fair & Technical Interview Hacking",
      date: "June 18, 2026",
      time: "11:30 AM WAT",
      location: "University ICT Innovation Center",
      speaker: "Google & CampusFlow Teams",
    },
    {
      id: 3,
      title: "Student Representative Congress (Plenary Sitting)",
      date: "June 22, 2026",
      time: "02:00 PM WAT",
      location: "Senate Building Conference Hall",
      speaker: "SRC Speaker presiding",
    },
  ];

  return (
    <section
      id="announcements"
      className="w-full bg-white dark:bg-slate-950 py-20 border-b border-slate-200/60 dark:border-slate-900 px-4 sm:px-6 lg:px-8 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Operational Intelligence Hub
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-2xl">
            Real-time critical feeds keeping the entire student body, governors,
            and faculty leadership perfectly synchronized.
          </p>
        </div>

        {/* Asymmetric 12-Column Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* 📢 Left Side: Live Announcements Feed (7 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-900 pb-4">
              <div className="flex items-center gap-2.5 text-slate-900 dark:text-white font-bold text-sm tracking-wider uppercase">
                <Megaphone className="w-4 h-4 text-[var(--primary)]" />
                <h3>Live Notice Board</h3>
              </div>
              <span className="text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer flex items-center gap-1">
                View All <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>

            <div className="space-y-4">
              {announcements.map((item) => (
                <div
                  key={item.id}
                  className={`p-5 rounded-xl border transition-all hover:shadow-md ${
                    item.urgent
                      ? "bg-rose-50/40 dark:bg-rose-950/10 border-rose-200/80 dark:border-rose-900/40"
                      : "bg-slate-50/50 dark:bg-slate-900/40 border-slate-200/60 dark:border-slate-800/80"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider ${
                        item.urgent
                          ? "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400"
                          : "bg-slate-200/80 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                      }`}
                    >
                      <Tag className="w-3 h-3" />
                      {item.category}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {item.date}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-tight hover:text-[var(--primary)] transition-colors cursor-pointer">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 font-normal leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 📅 Right Side: Upcoming Events Schedule Matrix (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-900 pb-4">
              <div className="flex items-center gap-2.5 text-slate-900 dark:text-white font-bold text-sm tracking-wider uppercase">
                <Calendar className="w-4 h-4 text-amber-500" />
                <h3>Upcoming Timelines</h3>
              </div>
            </div>

            <div className="relative border-l border-slate-200 dark:border-slate-800 pl-4 ml-2 space-y-6">
              {events.map((event) => (
                <div key={event.id} className="relative group">
                  {/* Timeline Node Point Dot */}
                  <div className="absolute -left-[21px] top-1 w-3.5 h-3.5 rounded-full bg-white dark:bg-slate-950 border-2 border-amber-500 group-hover:bg-amber-500 transition-colors" />

                  <div className="space-y-1.5">
                    <div className="flex items-center gap-3 text-[11px] font-bold tracking-wide text-slate-400 uppercase">
                      <span>{event.date}</span>
                      <span>•</span>
                      <span className="text-slate-500 dark:text-slate-300">
                        {event.time}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight group-hover:text-[var(--primary)] transition-colors cursor-pointer">
                      {event.title}
                    </h4>

                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                      <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                      <span>{event.location}</span>
                    </div>

                    <p className="text-[10px] text-[var(--primary)] font-bold uppercase tracking-wider mt-1">
                      Host: {event.speaker}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

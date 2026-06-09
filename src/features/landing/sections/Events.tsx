// src/features/landing/sections/Events.tsx
import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  User,
  Download,
  X,
  Image as ImageIcon,
} from "lucide-react";

interface CampusEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  organizer: string;
  flyerUrl: string; // Dynamic path for uploaded event flyers
  category: string;
}

export const Events: React.FC = () => {
  const [selectedFlyer, setSelectedFlyer] = useState<string | null>(null);

  // Simulated structured event entries (with high-quality architecture/campus media placeholders)
  const featuredEvents: CampusEvent[] = [
    {
      id: "ev-1",
      title: "Faculty of Engineering Grand Dinner & Awards",
      date: "Friday, June 19, 2026",
      time: "06:00 PM WAT",
      location: "Grand Ball Room, University Guest House",
      organizer: "UESC Executive Body",
      flyerUrl:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000",
      category: "Socials",
    },
    {
      id: "ev-2",
      title: "National Conference on Artificial Intelligence Applications",
      date: "July 2 - July 4, 2026",
      time: "09:00 AM Daily",
      location: "Professor Ade-Ajayi Auditorium",
      organizer: "Department of Computer Science",
      flyerUrl:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000",
      category: "Academic",
    },
    {
      id: "ev-3",
      title: "Inter-Faculty Athletics Championship Finals",
      date: "Wednesday, July 15, 2026",
      time: "10:00 AM WAT",
      location: "University Sports Center Main Bowl",
      organizer: "Sports Directorate",
      flyerUrl:
        "https://images.unsplash.com/photo-1502012658156-9511b275114f?q=80&w=1000",
      category: "Sports",
    },
  ];

  return (
    <section
      id="events"
      className="w-full bg-slate-50 dark:bg-slate-900/40 py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 dark:border-slate-900 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-slate-900 dark:text-white uppercase tracking-tight">
              Featured Campus Flyers
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-xl">
              Official posters and media updates for verified upcoming faculty,
              department, and union programs.
            </p>
          </div>
          <div className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">
            Managed via University Admin Panel
          </div>
        </div>

        {/* Dynamic Flyers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* 🖼️ Event Flyer Cover Box */}
              <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden shrink-0">
                <img
                  src={event.flyerUrl}
                  alt={`${event.title} Poster`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Visual Category Label */}
                <div className="absolute top-4 left-4 z-10 bg-slate-950/80 backdrop-blur-md text-white font-black text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-md border border-white/10">
                  {event.category}
                </div>

                {/* Overlaid Click View Interaction Shield */}
                <div
                  onClick={() => setSelectedFlyer(event.flyerUrl)}
                  className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer gap-2 backdrop-blur-[2px]"
                >
                  <button className="bg-white text-slate-950 px-4 py-2 rounded-lg text-[11px] font-bold uppercase tracking-wider shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <ImageIcon className="w-3.5 h-3.5" />
                    Expand Flyer
                  </button>
                </div>
              </div>

              {/* Event Text Description Base */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-bold text-base text-slate-900 dark:text-white leading-snug tracking-tight group-hover:text-amber-500 transition-colors">
                    {event.title}
                  </h3>

                  {/* Detailed Icon Specifications Matrix */}
                  <div className="space-y-1.5 pt-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 line-clamp-1" />
                      <span className="truncate">{event.location}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Organizer Badge */}
                <div className="border-t border-slate-100 dark:border-slate-800/60 pt-4 flex items-center gap-2 text-[11px]">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-slate-400">By:</span>
                  <span className="font-bold text-slate-600 dark:text-slate-300 truncate max-w-[180px]">
                    {event.organizer}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🌌 High-End Lightbox Modal for Full View Flyer Inspection */}
      {selectedFlyer && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 transition-all animate-in fade-in duration-200">
          <div className="relative max-w-3xl w-full max-h-[85vh] flex flex-col items-center">
            {/* Modal Control Layer */}
            <div className="absolute -top-12 right-0 flex items-center gap-4 text-white">
              <a
                href={selectedFlyer}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg border border-white/10 transition-colors"
              >
                <Download className="w-3.5 h-3.5" /> Direct Link
              </a>
              <button
                onClick={() => setSelectedFlyer(null)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Expanded Flyer Frame */}
            <img
              src={selectedFlyer}
              alt="Expanded Poster View"
              className="w-full h-full object-contain rounded-xl shadow-2xl max-h-[80vh]"
            />
          </div>
        </div>
      )}
    </section>
  );
};

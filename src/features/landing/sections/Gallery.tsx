// src/features/landing/sections/Gallery.tsx
import React, { useState } from "react";
import { useUniversityTheme } from "@/app/providers/ThemeProvider";
import { Maximize2, X, Image as ImageIcon, Sparkles } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  size: "normal" | "tall" | "wide"; // Dictates asymmetric masonry positioning
}

export const Gallery: React.FC = () => {
  const { tenant } = useUniversityTheme();
  const [activeMedia, setActiveMedia] = useState<GalleryItem | null>(null);

  // Curated campus life visual snapshots
  const visualHighlights: GalleryItem[] = [
    {
      id: "gal-1",
      title: "54th Convocation Ceremony",
      description:
        "Celebrating academic excellence across our graduating cohorts inside the Main Auditorium.",
      category: "Convocation",
      imageUrl:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200",
      size: "wide",
    },
    {
      id: "gal-2",
      title: "Main Campus Senate Infrastructure",
      description:
        "The authoritative structural pillar of institutional administrative leadership.",
      category: "Campus Architecture",
      imageUrl:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800",
      size: "tall",
    },
    {
      id: "gal-3",
      title: "Innovative Robotics Plenary Lab",
      description:
        "Engineering students configuring advanced embedded systems frameworks.",
      category: "Research",
      imageUrl:
        "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=800",
      size: "normal",
    },
    {
      id: "gal-4",
      title: "Inter-Faculty Football Tournament",
      description:
        "The exhilarating moment the clinical sciences squad locked down the championship title line.",
      category: "Athletics",
      imageUrl:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800",
      size: "normal",
    },
    {
      id: "gal-5",
      title: "Annual Faculty Dinner Night Gala",
      description:
        "A premium gathering of student leaders and academics honoring honorary career laureates.",
      category: "Social Life",
      imageUrl:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200",
      size: "wide",
    },
  ];

  return (
    <section
      id="campus-life"
      className="w-full bg-slate-50 dark:bg-slate-900/40 py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 dark:border-slate-900 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading Block */}
        <div className="mb-12 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-black uppercase tracking-widest mb-3">
            <Sparkles className="w-3 h-3" /> Visual Repository
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Campus Life & Institutional Highlights
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-2xl">
            A dynamic visual snapshot across the historical timelines, student
            activities, and landmarks of{" "}
            {tenant?.formalName || "our university"}.
          </p>
        </div>

        {/* 🧱 Advanced Asymmetric Grid / Masonry Layout Track */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[240px]">
          {visualHighlights.map((item) => {
            // Setup responsive dynamic Tailwind grid span logic
            const spanClass =
              item.size === "wide"
                ? "lg:col-span-2"
                : item.size === "tall"
                  ? "lg:row-span-2"
                  : "";

            return (
              <div
                key={item.id}
                onClick={() => setActiveMedia(item)}
                className={`group relative rounded-2xl overflow-hidden border border-slate-200/60 dark:border-slate-800/60 bg-slate-900 shadow-sm cursor-pointer transition-all duration-300 hover:shadow-xl ${spanClass}`}
              >
                {/* 🖼️ High-Resolution Cover Asset */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  loading="lazy"
                />

                {/* Smooth Dark Vignette Filter Layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Top Category Tag Badge */}
                <span className="absolute top-4 left-4 z-10 bg-white/10 backdrop-blur-md text-white text-[9px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md border border-white/10">
                  {item.category}
                </span>

                {/* Bottom Media Text Layout Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-white transform transition-transform duration-300">
                  <h3 className="font-bold text-base tracking-tight leading-snug flex items-center justify-between gap-2">
                    <span>{item.title}</span>
                    <Maximize2 className="w-4 h-4 shrink-0 text-slate-400 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100" />
                  </h3>
                  <p className="text-xs text-slate-300 font-normal mt-1.5 line-clamp-2 opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto transition-all duration-300 overflow-hidden leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 🌌 High-Performance Cinematic Lightbox Overlay Player */}
      {activeMedia && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveMedia(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col justify-center items-center"
            onClick={(e) => e.stopPropagation()} // Stop overlay click from closing when image content is clicked
          >
            {/* Upper Dismissal Header Control Panel */}
            <div className="absolute -top-12 right-0 left-0 flex items-center justify-between text-white px-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-300">
                <ImageIcon className="w-4 h-4 text-amber-400" />
                <span>{activeMedia.category} Archive</span>
              </div>
              <button
                onClick={() => setActiveMedia(null)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cinematic Expanded Image Frame */}
            <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl">
              <img
                src={activeMedia.imageUrl}
                alt={activeMedia.title}
                className="w-full h-auto max-h-[70vh] object-contain mx-auto"
              />
              {/* Context Text Footer inside Lightbox */}
              <div className="bg-slate-950 p-6 border-t border-white/5 text-left">
                <h4 className="text-base font-bold text-white tracking-tight font-serif">
                  {activeMedia.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 font-normal leading-relaxed">
                  {activeMedia.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

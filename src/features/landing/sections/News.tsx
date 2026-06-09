// src/features/landing/sections/News.tsx
import React from "react";
import { useUniversityTheme } from "@/app/providers/ThemeProvider";
import { Clock, BookOpen, ArrowUpRight, Share2 } from "lucide-react";

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
  tag: string;
}

export const News: React.FC = () => {
  const { tenant } = useUniversityTheme();

  // Simulated professional campus press articles
  const articles: NewsArticle[] = [
    {
      id: "art-1",
      title: `${tenant?.name || "University"} Secures Major NUC Full Accreditation Status for New Engineering Disciplines`,
      excerpt:
        "Following a rigorous assessment by the National Universities Commission panel, four primary core programs have officially achieved tier-one compliance authorization.",
      date: "June 6, 2026",
      readTime: "4 min read",
      imageUrl:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800",
      tag: "Accreditation",
    },
    {
      id: "art-2",
      title:
        "Senate Approves Revised Academic Calendar and Convocation Timelines",
      excerpt:
        "The governing senate committee concluded its 312th plenary sitting, confirming the official schedule adjustments for graduating cohorts and incoming streams.",
      date: "June 4, 2026",
      readTime: "3 min read",
      imageUrl:
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800",
      tag: "Administration",
    },
    {
      id: "art-3",
      title:
        "Research Cohort Unveils Low-Cost Smart Irrigation Framework for Local Farmers",
      excerpt:
        "A team of postgraduate innovators from the agricultural engineering cluster has deployed a functional telemetry framework powered by sustainable cells.",
      date: "May 28, 2026",
      readTime: "6 min read",
      imageUrl:
        "https://images.unsplash.com/photo-1464175055903-56c91587ae58?q=80&w=800",
      tag: "Innovation",
    },
  ];

  return (
    <section
      id="news"
      className="w-full bg-white dark:bg-slate-950 py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 dark:border-slate-900 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-slate-100 dark:border-slate-900 pb-6 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-slate-900 dark:text-white uppercase tracking-tight">
              Campus Press & Journalism
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-xl">
              Official publications, corporate releases, and academic highlights
              streaming directly from the media desk.
            </p>
          </div>
          <button className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors shrink-0">
            Visit Newsroom
          </button>
        </div>

        {/* Articles Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col justify-between h-full bg-transparent overflow-hidden"
            >
              <div className="space-y-4">
                {/* 🖼️ Editorial Image Container */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800/60">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  />

                  {/* Floating Topic Tag */}
                  <span className="absolute bottom-3 left-3 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md text-slate-900 dark:text-white font-black text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-md border border-slate-200/20 shadow-sm">
                    {article.tag}
                  </span>
                </div>

                {/* Metadata Tracking */}
                <div className="flex items-center gap-4 text-[11px] font-bold text-slate-400 uppercase tracking-wide">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3 h-3" /> {article.readTime}
                  </span>
                </div>

                {/* Title & Excerpt Summary */}
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold font-serif text-slate-900 dark:text-white leading-snug tracking-tight group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors cursor-pointer flex items-start justify-between gap-2">
                    <span className="line-clamp-2">{article.title}</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0 text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors mt-1" />
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Share & Quick Action Row */}
              <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-100 dark:border-slate-900">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors cursor-pointer">
                  Read Full Coverage
                </span>
                <button className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all">
                  <Share2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

import { Megaphone, FileText } from "lucide-react";
import type { Announcement } from "../types/dashboard.types";

interface Props {
  announcements: Announcement[];
}

export const AnnouncementsWidget = ({
  announcements,
}: Props) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-900">
            Announcements
          </h3>

          <p className="text-sm text-slate-500">
            Latest university updates
          </p>
        </div>

        <button className="text-sm font-medium text-blue-600 hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="rounded-2xl border border-slate-100 p-4 transition hover:bg-slate-50"
          >
            <div className="flex gap-4">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                  announcement.type === "IMPORTANT"
                    ? "bg-red-50 text-red-600"
                    : "bg-blue-50 text-blue-600"
                }`}
              >
                {announcement.type === "IMPORTANT" ? (
                  <Megaphone size={20} />
                ) : (
                  <FileText size={20} />
                )}
              </div>

              <div className="flex-1">
                <div className="mb-2 flex items-center gap-2">
                  <span
                    className={`rounded-full px-2 py-1 text-[10px] font-bold uppercase ${
                      announcement.type === "IMPORTANT"
                        ? "bg-red-100 text-red-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {announcement.type}
                  </span>

                  <span className="text-xs text-slate-400">
                    {announcement.createdAt}
                  </span>
                </div>

                <h4 className="font-semibold text-slate-900">
                  {announcement.title}
                </h4>

                <p className="mt-1 text-sm text-slate-500">
                  {announcement.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
// src/features/dashboard/sidebarpages/CoursesPage.tsx
import React from 'react';
import { BookOpen, FileText, GraduationCap } from 'lucide-react';

export const CoursesPage: React.FC = () => {
  const courses = [
    { code: 'CSC201', title: 'Data Structures', pdfs: 5 },
    { code: 'PHY201', title: 'General Physics', pdfs: 3 },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Courses & Materials</h1>
        <p className="text-slate-500">Access your course PDFs and official past questions.</p>
      </div>

      {/* Course Materials Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div key={course.code} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                <BookOpen size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-900">{course.code}: {course.title}</p>
                <p className="text-sm text-slate-500">{course.pdfs} PDF files available</p>
              </div>
            </div>
            <button className="text-sm font-bold text-indigo-600 hover:underline">View Files</button>
          </div>
        ))}
      </div>

      {/* Past Questions Bank Section */}
      <div className="bg-slate-900 rounded-2xl p-8 text-white">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <GraduationCap /> Past Question Bank
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <QuestionCategory title="Governor's Collection" icon={<FileText />} />
          <QuestionCategory title="Deputy Gov's Collection" icon={<FileText />} />
          <QuestionCategory title="Past Years" icon={<FileText />} />
        </div>
      </div>
    </div>
  );
};

const QuestionCategory = ({ title, icon }: { title: string, icon: React.ReactNode }) => (
  <div className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-colors cursor-pointer border border-slate-700">
    <div className="mb-4 opacity-75">{icon}</div>
    <p className="font-semibold">{title}</p>
    <button className="text-xs mt-2 text-indigo-400">Browse collection →</button>
  </div>
);
import React from 'react';
import { User, Calendar, BarChart2, Smile, Shield } from 'lucide-react';

const avatars = [
  {
    name: 'Ava',
    role: 'Recruiter Bot',
    color: 'from-blue-500 to-blue-700',
    ring: 'ring-blue-200',
    bg: 'bg-blue-50',
    icon: User,
    tagline: 'Finds the right talent, faster.'
  },
  {
    name: 'Hugo',
    role: 'Scheduler Bot',
    color: 'from-teal-500 to-teal-700',
    ring: 'ring-teal-200',
    bg: 'bg-teal-50',
    icon: Calendar,
    tagline: 'Books interviews while you sleep.'
  },
  {
    name: 'Mira',
    role: 'Insights Bot',
    color: 'from-purple-500 to-purple-700',
    ring: 'ring-purple-200',
    bg: 'bg-purple-50',
    icon: BarChart2,
    tagline: 'Turns data into decisions.'
  },
  {
    name: 'Leo',
    role: 'Engagement Bot',
    color: 'from-yellow-400 to-amber-500',
    ring: 'ring-yellow-200',
    bg: 'bg-yellow-50',
    icon: Smile,
    tagline: 'Keeps candidates and teams smiling.'
  },
  {
    name: 'Nora',
    role: 'Compliance Bot',
    color: 'from-emerald-500 to-emerald-700',
    ring: 'ring-emerald-200',
    bg: 'bg-emerald-50',
    icon: Shield,
    tagline: 'Peace of mind, built-in.'
  }
];

export default function Squad() {
  return (
    <section className="relative" id="squad">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Meet Your HR Squad</h2>
          <p className="mt-3 text-slate-600">
            Friendly AI avatars, each mastering a core HR function — working together so your team can focus on humans.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {avatars.map(({ name, role, color, icon: Icon, tagline, ring, bg }) => (
            <div
              key={name}
              className={`group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${ring}`}
            >
              <div className={`relative h-24 w-full overflow-hidden rounded-xl ${bg}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-white/70 p-3 shadow-md">
                    <Icon className="text-slate-700" size={28} />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
                <p className="text-sm text-slate-500">{role}</p>
                <p className="mt-2 text-sm text-slate-600">{tagline}</p>
              </div>
              <div className="mt-4 h-1 w-0 rounded-full bg-gradient-to-r from-transparent via-slate-200 to-transparent transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

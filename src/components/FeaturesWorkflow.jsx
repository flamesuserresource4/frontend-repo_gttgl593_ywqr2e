import React from 'react';
import { CheckCircle2, Calendar, BarChart2, Bell, Users, Workflow } from 'lucide-react';

const features = [
  {
    title: 'Smart Screening',
    desc: 'AI ranks candidates by role fit using skills, experience, and signals.',
    icon: CheckCircle2,
    color: 'text-blue-600',
  },
  {
    title: 'Auto Scheduling',
    desc: 'One-click calendar sync, timezone-aware invites, and reminders.',
    icon: Calendar,
    color: 'text-teal-600',
  },
  {
    title: 'Live Insights',
    desc: 'Diversity, pipeline health, and hiring velocity in real-time.',
    icon: BarChart2,
    color: 'text-purple-600',
  },
  {
    title: 'Lifecycle Management',
    desc: 'From offer to onboarding to internal mobility — fully automated.',
    icon: Users,
    color: 'text-emerald-600',
  },
  {
    title: 'Notifications',
    desc: 'Stay in the loop across Slack, Email, and SMS with smart alerts.',
    icon: Bell,
    color: 'text-amber-600',
  },
];

const steps = [
  { step: 1, title: 'Post Job', text: 'Connect your ATS/HRIS and publish roles.' },
  { step: 2, title: 'Screen & Schedule', text: 'Ava scores candidates, Hugo books interviews.' },
  { step: 3, title: 'Engage & Decide', text: 'Leo keeps everyone aligned. Offers go out faster.' },
  { step: 4, title: 'Analyze & Improve', text: 'Mira reveals bottlenecks, Nora ensures compliance.' },
];

export default function FeaturesWorkflow() {
  return (
    <section className="relative" id="how-it-works">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Features grid */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-slate-900">Core Features</h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map(({ title, desc, icon: Icon, color }) => (
                <div key={title} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:shadow-md">
                  <div className={`inline-flex items-center justify-center rounded-xl bg-slate-50 p-3 ${color}`}>
                    <Icon size={22} />
                  </div>
                  <h4 className="mt-4 text-lg font-semibold text-slate-900">{title}</h4>
                  <p className="mt-2 text-sm text-slate-600">{desc}</p>
                </div>
              ))}
            </div>

            {/* Avatar profiles with alternating accents */}
            <div className="mt-12 space-y-6">
              {[
                { name: 'Ava — Recruiter Bot', accent: 'from-blue-50 to-white', text: 'Sifts resumes, ranks fit, and chats with applicants.' },
                { name: 'Hugo — Scheduler Bot', accent: 'from-teal-50 to-white', text: 'Finds the perfect slot across timezones — instantly.' },
                { name: 'Mira — Insights Bot', accent: 'from-purple-50 to-white', text: 'Brings clarity with real-time analytics and forecasts.' },
                { name: 'Leo — Engagement Bot', accent: 'from-yellow-50 to-white', text: 'Keeps candidates warm and teammates informed.' },
                { name: 'Nora — Compliance Bot', accent: 'from-emerald-50 to-white', text: 'Monitors processes and flags risks before they appear.' },
              ].map((card, idx) => (
                <div key={card.name} className={`rounded-2xl bg-gradient-to-r ${card.accent} p-6 ring-1 ring-slate-100`}> 
                  <div className={`flex flex-col items-start justify-between gap-4 sm:flex-row ${idx % 2 === 0 ? '' : 'sm:flex-row-reverse'}`}>
                    <div className="max-w-xl">
                      <h4 className="text-lg font-semibold text-slate-900">{card.name}</h4>
                      <p className="mt-2 text-sm text-slate-600">{card.text}</p>
                    </div>
                    <div className="h-20 w-full max-w-sm rounded-xl bg-white/70 p-4 text-sm text-slate-500 ring-1 ring-slate-100">
                      Demo: Ask anything about a candidate and get instant, sourced answers.
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Workflow timeline */}
          <div className="lg:pl-6">
            <h3 className="text-2xl font-semibold text-slate-900">Workflow Timeline</h3>
            <ol className="mt-6 space-y-6">
              {steps.map((s) => (
                <li key={s.step} className="relative rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                  <div className="absolute left-5 top-5 h-7 w-7 rounded-lg bg-blue-600 text-center text-sm font-semibold leading-7 text-white">
                    {s.step}
                  </div>
                  <div className="pl-12">
                    <h4 className="text-lg font-semibold text-slate-900">{s.title}</h4>
                    <p className="mt-1 text-sm text-slate-600">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

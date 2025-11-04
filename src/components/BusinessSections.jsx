import React, { useEffect, useState } from 'react';
import { CheckCircle2, Zap, Linkedin, Twitter, Mail, Shield, Users } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    highlight: false,
    features: ['Up to 2 roles', 'Basic screening', 'Email support'],
  },
  {
    name: 'Pro',
    price: '$49/mo',
    highlight: true,
    features: ['Unlimited roles', 'Auto scheduling', 'Slack + Email alerts', 'Advanced analytics'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    highlight: false,
    features: ['SAML/SSO', 'Dedicated support', 'Custom workflows'],
  },
];

const testimonials = [
  {
    quote: 'Hire HR cut our time-to-hire by 45% and candidates love the experience.',
    name: 'Priya S.',
    title: 'Head of People, FinchPay'
  },
  {
    quote: 'It feels like giving our HR team superpowers without adding headcount.',
    name: 'Daniel R.',
    title: 'COO, NovaOps'
  },
  {
    quote: 'From job post to offer in days, not weeks. The insights are gold.',
    name: 'Maya L.',
    title: 'Talent Lead, Craftly'
  }
];

const team = [
  { initials: 'AL', name: 'Alicia', role: 'CEO' },
  { initials: 'JM', name: 'Jamal', role: 'CTO' },
  { initials: 'SZ', name: 'Sofia', role: 'Head of Design' },
  { initials: 'TK', name: 'Taku', role: 'ML Lead' },
  { initials: 'RB', name: 'Rina', role: 'Product' },
  { initials: 'EV', name: 'Evan', role: 'Growth' },
];

export default function BusinessSections() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* About + Vision & Mission */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-3xl font-bold text-slate-900">Human-Centered HR Automation</h3>
              <p className="mt-4 text-slate-600">
                We combine AI efficiency with human empathy. Your AI squad works behind the scenes while your people stay in control — transparent, explainable, and aligned with your values.
              </p>
              <div className="mt-6 flex items-center gap-4 rounded-2xl bg-gradient-to-r from-blue-50 to-teal-50 p-5 ring-1 ring-slate-100">
                <Shield className="text-blue-600" />
                <p className="text-sm text-slate-700">Privacy-first by design. SOC2-ready, GDPR aligned, and configurable data retention.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <h4 className="text-lg font-semibold text-slate-900">Vision</h4>
                <p className="mt-2 text-sm text-slate-600">To empower every company with AI that understands people.</p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <h4 className="text-lg font-semibold text-slate-900">Mission</h4>
                <p className="mt-2 text-sm text-slate-600">To automate the tedious so HR can focus on humans.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-3xl font-bold text-slate-900">Simple, transparent pricing</h3>
            <p className="mt-3 text-slate-600">Start free. Upgrade as your team grows.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl border p-6 shadow-sm ring-1 ${
                  p.highlight
                    ? 'border-blue-200 ring-blue-200 bg-gradient-to-b from-blue-50 to-white'
                    : 'border-slate-100 ring-slate-100 bg-white'
                }`}
              >
                <div className="flex items-baseline justify-between">
                  <h4 className="text-xl font-semibold text-slate-900">{p.name}</h4>
                  {p.highlight && (
                    <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">Popular</span>
                  )}
                </div>
                <div className="mt-4 text-3xl font-extrabold text-slate-900">{p.price}</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="text-emerald-600" size={18} /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`mt-6 inline-flex w-full items-center justify-center rounded-2xl px-4 py-2 font-medium transition ${
                    p.highlight
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 hover:bg-blue-700'
                      : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                  }`}
                >
                  Choose {p.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900">The Team</h3>
              <p className="mt-2 text-slate-600">A diverse group of builders, researchers, and people leaders.</p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-xs text-slate-600 ring-1 ring-slate-100">
                <Users className="text-blue-600" size={16} /> We collaborate with leading HR teams worldwide
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {team.map((m) => (
                <div key={m.name} className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-4 text-center shadow-sm">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg">
                    {m.initials}
                  </div>
                  <div className="mt-3 text-sm font-semibold text-slate-900">{m.name}</div>
                  <div className="text-xs text-slate-500">{m.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials carousel */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white shadow-lg">
            <div className="flex items-start justify-between gap-6">
              <div className="max-w-3xl">
                <p className="text-lg leading-relaxed">“{testimonials[index].quote}”</p>
                <div className="mt-4 text-sm opacity-90">
                  — {testimonials[index].name}, {testimonials[index].title}
                </div>
              </div>
              <div className="hidden gap-3 sm:flex">
                <button onClick={() => setIndex((index + testimonials.length - 1) % testimonials.length)} className="rounded-xl bg-white/10 px-3 py-2 text-white transition hover:bg-white/20">Prev</button>
                <button onClick={() => setIndex((index + 1) % testimonials.length)} className="rounded-xl bg-white/10 px-3 py-2 text-white transition hover:bg-white/20">Next</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="text-lg font-semibold">Hire HR</div>
              <p className="mt-3 text-sm text-slate-400">AI that understands people. Automate hiring to engagement with a friendly, trustworthy experience.</p>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Product</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                <li><a href="#how-it-works" className="hover:text-white">How it works</a></li>
                <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
                <li><a href="#squad" className="hover:text-white">HR Squad</a></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Company</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Stay in the loop</div>
              <form className="mt-3 flex gap-2">
                <input type="email" placeholder="Your email" className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button type="submit" className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Subscribe</button>
              </form>
              <div className="mt-4 flex items-center gap-3 text-slate-400">
                <a href="#" aria-label="Twitter" className="rounded-lg p-2 hover:bg-slate-800 hover:text-white"><Twitter size={18} /></a>
                <a href="#" aria-label="LinkedIn" className="rounded-lg p-2 hover:bg-slate-800 hover:text-white"><Linkedin size={18} /></a>
                <a href="#" aria-label="Email" className="rounded-lg p-2 hover:bg-slate-800 hover:text-white"><Mail size={18} /></a>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500">© {new Date().getFullYear()} Hire HR. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}

import React from 'react';
import { Rocket, PlayCircle } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 sm:pt-20 lg:pt-24 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-blue-100">
              <Rocket size={16} /> AI-Powered HR Platform
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              AI That Runs Your HR Department
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Hire HR automates the entire HR workflow — from sourcing and screening to scheduling, engagement, and analytics — with friendly AI avatars specialized for every HR function.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
              >
                Get Started for Free
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-6 py-3 text-slate-700 transition hover:bg-slate-50"
              >
                <PlayCircle className="text-blue-600" size={20} /> See How It Works
              </a>
            </div>
            <div className="mt-8 text-xs text-slate-500">
              No credit card required • SOC2-ready • Works with your ATS/HRIS
            </div>
          </div>

          <div className="relative h-[420px] w-full rounded-2xl bg-gradient-to-b from-blue-50 to-white ring-1 ring-blue-100/60">
            {/* 3D Spline scene */}
            <div className="absolute inset-0">
              <Spline
                scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            {/* Soft gradient accents */}
            <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-teal-300/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 bottom-10 h-56 w-56 rounded-full bg-purple-300/20 blur-3xl" />
          </div>
        </div>
      </div>

      {/* Background decor */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 -z-0 h-72 bg-gradient-to-b from-blue-50 to-transparent" />
    </section>
  );
}

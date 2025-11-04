import React from 'react';
import Hero from './components/Hero.jsx';
import Squad from './components/Squad.jsx';
import FeaturesWorkflow from './components/FeaturesWorkflow.jsx';
import BusinessSections from './components/BusinessSections.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Hero />
      <Squad />
      <FeaturesWorkflow />
      <BusinessSections />
    </div>
  );
}

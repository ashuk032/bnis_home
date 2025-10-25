"use client";
import { ArrowRight, Building2 } from "lucide-react";
import useAnimateOnScroll from "@/lib/useAnimateOnScroll";

export default function Hero() {
  useAnimateOnScroll();
  return (
    <section className="pt-40 pb-32 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-100/50 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-neutral-200 rounded-full text-sm text-neutral-700 mb-8 shadow-sm animate-on-scroll fade-in-up">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            Join 50,000+ creators and brands
          </div>
          <h1 className="text-6xl lg:text-7xl font-semibold tracking-tighter mb-6 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-600 bg-clip-text text-transparent leading-[1.1] animate-on-scroll fade-in-up stagger-1">Connect Influencers with Sponsors</h1>
          <p className="text-xl text-neutral-600 mb-12 leading-relaxed max-w-2xl mx-auto font-light animate-on-scroll fade-in-up stagger-2">Complete marketplace with secure wallet payments, campaign management, and performance analytics. 1.5% fee, full transparency.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll fade-in-up stagger-3">
            <button className="group px-8 py-4 bg-neutral-900 text-white font-medium rounded-full hover:bg-neutral-800 transition-all hover:shadow-xl hover:shadow-neutral-900/20 inline-flex items-center justify-center hover:scale-105">
              I'm an Influencer
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white text-neutral-900 font-medium rounded-full border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all inline-flex items-center justify-center hover:scale-105">
              I'm a Sponsor
              <Building2 className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { FileText, Clock, PlayCircle, CheckCircle, Check } from "lucide-react";
import useAnimateOnScroll from "@/lib/useAnimateOnScroll";

const stages = [
  { icon: FileText, title: "Draft", desc: "Create campaign", filled: true },
  { icon: Clock, title: "Pending", desc: "Submit for review" },
  { icon: PlayCircle, title: "Live", desc: "Content published" },
  { icon: CheckCircle, title: "Completed", desc: "All approved" },
  { icon: Check, title: "Paid", desc: "Auto-released", filled: true },
];

export default function CampaignFlow() {
  useAnimateOnScroll();
  return (
    <section className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-5xl font-semibold tracking-tighter mb-5 animate-on-scroll fade-in-up">Campaign workflow</h2>
          <p className="text-lg text-neutral-600 font-light animate-on-scroll fade-in-up stagger-1">From creation to payment, every step is tracked</p>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute top-6 left-6 right-6 h-px bg-neutral-200 hidden lg:block" />
          <div className="grid lg:grid-cols-5 gap-8 relative">
            {stages.map((s, i) => (
              <div key={s.title} className="group text-center">
                <div className={`w-12 h-12 ${s.filled ? 'bg-neutral-900 text-white' : 'bg-white border border-neutral-900 text-neutral-900'} rounded-xl flex items-center justify-center mx-auto mb-4 relative z-10 animate-on-scroll scale-in stagger-${i}` }>
                  <s.icon className="w-5 h-5" />
                </div>
                <h4 className={`font-medium mb-2 text-sm animate-on-scroll fade-in stagger-${i}`}>{s.title}</h4>
                <p className={`text-xs text-neutral-500 font-light animate-on-scroll fade-in stagger-${i+1}`}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

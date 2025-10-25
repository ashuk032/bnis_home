"use client";
import useAnimateOnScroll from "@/lib/useAnimateOnScroll";

export default function Stats() {
  useAnimateOnScroll();
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-32 max-w-5xl mx-auto">
      {[
        ["50K+", "Active Influencers"],
        ["1,200+", "Brand Partners"],
        ["$45M+", "Deals Closed"],
        ["1.5%", "Platform Fee"],
      ].map(([value, label], i) => (
        <div key={label} className={`text-center group animate-on-scroll scale-in stagger-${i+1}`}>
          <div className="text-5xl font-semibold tracking-tighter mb-2 bg-gradient-to-br from-neutral-900 to-neutral-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">{value}</div>
          <div className="text-sm text-neutral-500 font-light">{label}</div>
        </div>
      ))}
    </div>
  );
}

"use client";
import useAnimateOnScroll from "@/lib/useAnimateOnScroll";

function Steps({ title, steps, side }) {
  return (
    <div>
      <div className={`inline-flex items-center px-4 py-2 bg-neutral-100 rounded-full text-sm font-medium mb-10 border border-neutral-200 animate-on-scroll ${side === 'left' ? 'slide-in-left' : 'slide-in-right'}`}>
        {title}
      </div>
      <div className="space-y-10">
        {steps.map((s, i) => (
          <div key={i} className={`flex gap-6 group animate-on-scroll fade-in-up ${i>0 ? `stagger-${i}` : ''}`}>
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-neutral-900 to-neutral-700 text-white rounded-2xl flex items-center justify-center font-semibold text-lg group-hover:scale-110 transition-transform">{i+1}</div>
            <div>
              <h4 className="font-semibold text-lg mb-2 tracking-tight">{s.title}</h4>
              <p className="text-neutral-600 leading-relaxed font-light">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HowItWorks() {
  useAnimateOnScroll();
  const influencers = [
    { title: "Create & Verify Profile", desc: "Sign in with Google, complete KYC (PAN/Aadhaar), connect your social accounts and build your portfolio." },
    { title: "Get Matched or Browse", desc: "Our algorithm matches you with relevant brands or browse open campaigns and submit bids." },
    { title: "Create & Deliver Content", desc: "Work on milestones, upload proof of work, get approvals or revisions via secure messaging." },
    { title: "Get Paid Instantly", desc: "Receive payment in your wallet automatically. Withdraw via UPI or reinvest in collaborations." },
  ];
  const sponsors = [
    { title: "Create Campaign & Deposit", desc: "Define goals, budget, deliverables and deposit funds in secure wallet escrow." },
    { title: "Find Perfect Influencers", desc: "Get algorithmic recommendations or browse verified profiles with engagement data and portfolios." },
    { title: "Track Progress & Approve", desc: "Monitor milestones, request revisions, approve deliverables and release payments." },
    { title: "Analyze & Reinvest", desc: "View performance analytics, calculate ROI and reinvest in high-performing creators." },
  ];
  return (
    <section id="how-it-works" className="py-32 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-5xl font-semibold tracking-tighter mb-5 animate-on-scroll fade-in-up">How BNIS works</h2>
          <p className="text-lg text-neutral-600 font-light animate-on-scroll fade-in-up stagger-1">A simple process to create meaningful partnerships</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <Steps title="For Influencers" steps={influencers} side="left" />
          <Steps title="For Sponsors" steps={sponsors} side="right" />
        </div>
      </div>
    </section>
  );
}

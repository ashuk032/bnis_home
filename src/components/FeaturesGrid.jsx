"use client";
import { Store, Wallet, ClipboardList, BarChart3, Handshake, MessageSquare, ShieldCheck, GitBranch, Settings } from "lucide-react";
import useAnimateOnScroll from "@/lib/useAnimateOnScroll";

const items = [
  { icon: Store, title: "Marketplace", desc: "Verified profiles with connected social accounts. Algorithmic matching based on niche, engagement, budget & location.", chips: ["Bidding", "Direct Hire"] },
  { icon: Wallet, title: "Secure Wallet", desc: "Pre-deposit funds, auto-release on completion. Withdraw via UPI, bank transfer, Paytm or Razorpay.", chips: ["1.5% fee", "Escrow"], highlight: true },
  { icon: ClipboardList, title: "Campaign Management", desc: "End-to-end tracking with milestone approvals. Draft → Pending → Live → Completed → Paid.", chips: ["Revisions", "Proof Upload"] },
  { icon: BarChart3, title: "Performance Analytics", desc: "Auto-sync metrics via YouTube & Instagram APIs. View reach, engagement, and ROI with comparison tools.", chips: ["Live Sync", "Rankings"] },
  { icon: Handshake, title: "Barter & Collab", desc: "Product-for-promo deals, micro-influencer collabs, with negotiation flow & conversion to paid options.", chips: ["No Fee", "Flexible"] },
  { icon: MessageSquare, title: "Messaging System", desc: "1:1 and group chats with file sharing, read receipts, and encrypted messages via Supabase RLS.", chips: ["Encrypted", "Real-time"] },
  { icon: ShieldCheck, title: "Verification System", desc: "Google Sign-In, KYC via PAN/Aadhaar/GST, multi-platform linking, ratings & public portfolios.", chips: ["KYC", "Verified Badge"] },
  { icon: GitBranch, title: "Smart Matching", desc: "Algorithmic recommendations based on niche, engagement, budget & history. Transparent scoring system.", chips: ["No AI", "Transparent"] },
  { icon: Settings, title: "Admin Dashboard", desc: "Verify users, manage disputes, monitor campaigns, fraud detection & platform analytics.", chips: ["Full Control", "Insights"] },
];

export default function FeaturesGrid() {
  useAnimateOnScroll();
  return (
    <section id="features" className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-5xl font-semibold tracking-tighter mb-5 animate-on-scroll fade-in-up">Complete platform for influencer marketing</h2>
          <p className="text-lg text-neutral-600 font-light animate-on-scroll fade-in-up stagger-1">Everything you need from discovery to payment in one place</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div key={item.title} className={`group bg-white p-10 rounded-3xl border border-neutral-200 hover:border-neutral-300 hover:shadow-xl hover:shadow-neutral-900/5 transition-all duration-300 animate-on-scroll fade-in-up stagger-${(idx%6)+1} hover:-translate-y-1`}>
              <div className={`w-14 h-14 ${item.highlight ? 'bg-gradient-to-br from-emerald-600 to-emerald-500' : 'bg-gradient-to-br from-neutral-900 to-neutral-700'} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">{item.title}</h3>
              <p className="text-neutral-600 leading-relaxed font-light mb-4">{item.desc}</p>
              <div className="flex flex-wrap gap-2 text-xs">
                {item.chips.map((c) => (
                  <span key={c} className={`px-2 py-1 ${c.includes('%') ? 'bg-emerald-50 text-emerald-700 font-medium' : 'bg-neutral-100 text-neutral-600'} rounded-full`}>{c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { Lock, Zap, Repeat } from "lucide-react";
import useAnimateOnScroll from "@/lib/useAnimateOnScroll";

export default function Wallet() {
  useAnimateOnScroll();
  return (
    <section className="py-32 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-6 border border-emerald-100 animate-on-scroll slide-in-left">
              Secure Payment System
            </div>
            <h2 className="text-5xl font-semibold tracking-tighter mb-6 animate-on-scroll slide-in-left stagger-1">Built-in wallet with escrow protection</h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-10 font-light animate-on-scroll slide-in-left stagger-2">Sponsors deposit funds before campaigns start. Payments auto-release when deliverables are approved. Only 1.5% convenience fee.</p>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-neutral-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 tracking-tight">Pre-deposit Security</h4>
                  <p className="text-sm text-neutral-600 font-light">Funds are held in escrow until work is completed and approved</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-neutral-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 tracking-tight">Instant Withdrawals</h4>
                  <p className="text-sm text-neutral-600 font-light">Cash out via UPI, bank transfer, Paytm or Razorpay instantly</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-neutral-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Repeat className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 tracking-tight">Wallet Reusability</h4>
                  <p className="text-sm text-neutral-600 font-light">Use wallet balance for barter deals or reinvest in new campaigns</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 p-10 rounded-3xl border border-neutral-200 animate-on-scroll slide-in-right">
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-neutral-500 font-light">Available Balance</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-xs text-emerald-600 font-medium">Active</span>
                </div>
              </div>
              <div className="text-4xl font-semibold tracking-tight mb-8">₹45,240.00</div>
              <div className="grid grid-cols-2 gap-3">
                <button className="px-4 py-3 bg-neutral-900 text-white text-sm font-medium rounded-xl hover:bg-neutral-800 transition-all">
                  Deposit
                </button>
                <button className="px-4 py-3 bg-white border border-neutral-200 text-sm font-medium rounded-xl hover:border-neutral-300 transition-all">
                  Withdraw
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-white rounded-xl p-5 border border-neutral-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Campaign #2847</span>
                  <span className="text-sm font-semibold text-emerald-600">+₹12,000</span>
                </div>
                <div className="text-xs text-neutral-500 font-light">Completed • 2 hours ago</div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-neutral-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Campaign #2841</span>
                  <span className="text-sm text-neutral-900 font-semibold">₹25,000</span>
                </div>
                <div className="text-xs text-neutral-500 font-light">In Progress • Milestone 2/3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <nav className="fixed top-0 w-full bg-neutral-50/70 backdrop-blur-xl border-b border-neutral-200/50 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-semibold tracking-tighter">BNIS</Link>
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/features" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">Features</Link>
            <Link href="/how-it-works" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">How It Works</Link>
            <Link href="/pricing" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">Pricing</Link>
            <Link href="/sign-in" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">Sign In</Link>
            <button className="px-5 py-2 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-all hover:shadow-lg hover:shadow-neutral-900/20">Get Started</button>
          </div>
          <button className="md:hidden" aria-label="Open menu">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}

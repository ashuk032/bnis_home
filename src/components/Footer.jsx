"use client";
import Link from "next/link";
import { Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200 py-16 px-6 lg:px-8 mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="text-xl font-semibold tracking-tighter mb-4">BNIS</div>
            <p className="text-sm text-neutral-600 leading-relaxed font-light">Connecting influencers with sponsors for authentic partnerships.</p>
          </div>
          <div>
            <div className="text-sm font-semibold mb-5 tracking-tight">Product</div>
            <div className="space-y-3">
              <Link href="/features" className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-light">Features</Link>
              <Link href="/pricing" className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-light">Pricing</Link>
              <Link href="/case-studies" className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-light">Case Studies</Link>
              <Link href="/reviews" className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-light">Reviews</Link>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold mb-5 tracking-tight">Company</div>
            <div className="space-y-3">
              <Link href="/about" className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-light">About</Link>
              <Link href="/blog" className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-light">Blog</Link>
              <Link href="/careers" className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-light">Careers</Link>
              <Link href="/contact" className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-light">Contact</Link>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold mb-5 tracking-tight">Legal</div>
            <div className="space-y-3">
              <Link href="/privacy" className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-light">Privacy</Link>
              <Link href="/terms" className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-light">Terms</Link>
              <Link href="/security" className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-light">Security</Link>
              <Link href="/cookies" className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-light">Cookies</Link>
              <Link href="/aup" className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-light">Acceptable Use</Link>
              <Link href="/dpa" className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-light">DPA</Link>
              <Link href="/refunds" className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-light">Refunds</Link>
              <Link href="/disclaimer" className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-light">Disclaimer</Link>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-neutral-600 font-light"> {new Date().getFullYear()} BNIS. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

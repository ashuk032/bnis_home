"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="min-h-screen grid lg:grid-cols-2 bg-neutral-50">
      {/* Left Panel - Branding */}
      <section className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-neutral-900 via-black to-neutral-950 text-white p-12 lg:p-20 relative overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900/50 via-transparent to-neutral-800/30 pointer-events-none"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <Link href="/" className="inline-block group">
            <h1 className="text-2xl font-semibold tracking-tight group-hover:opacity-80 transition-all duration-300">
              BNIS
            </h1>
          </Link>
        </div>
        
        <div className="space-y-8 relative z-10">
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] max-w-lg">
              Connect with sponsors,{" "}
              <span className="text-neutral-400">seamlessly</span>
            </h2>
            <p className="text-neutral-400 text-lg max-w-md leading-relaxed">
              Manage campaigns and get paid with ease. Join thousands of creators building their brand.
            </p>
          </div>
          
          {/* Stats or features */}
          <div className="flex gap-8 pt-4">
            <div>
              <div className="text-3xl font-semibold">10K+</div>
              <div className="text-sm text-neutral-500">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-semibold">$2M+</div>
              <div className="text-sm text-neutral-500">Paid Out</div>
            </div>
          </div>
        </div>

        <div className="text-xs text-neutral-600 relative z-10">
          © {new Date().getFullYear()} BNIS. All rights reserved.
        </div>
      </section>

      {/* Right Panel - Sign In */}
      <section className="flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-12">
            <Link href="/" className="inline-block">
              <h1 className="text-2xl font-semibold tracking-tight text-black">
                BNIS
              </h1>
            </Link>
          </div>

          {/* Card Container */}
          <div className="bg-white rounded-2xl shadow-xl shadow-black/5 border border-neutral-200/50 p-8 lg:p-10 space-y-8">
            {/* Header */}
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-semibold text-black tracking-tight">
                Welcome back
              </h2>
              <p className="text-neutral-500 text-sm">
                Sign in to continue to your account
              </p>
            </div>

            {/* Sign-in Button */}
            <div className="space-y-6">
              <button
                onClick={() => signIn("google", { callbackUrl: "/" })}
                className="group w-full flex items-center justify-center gap-3 px-6 py-4 bg-black text-white text-sm font-medium rounded-xl hover:bg-neutral-800 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-black/10"
              >
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-neutral-200"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-4 bg-white text-xs text-neutral-400 font-medium">
                    SECURE SIGN-IN
                  </span>
                </div>
              </div>

              {/* Security Badge */}
              <div className="flex items-center justify-center gap-2 text-xs text-neutral-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Protected by industry-standard encryption</span>
              </div>
            </div>

            {/* Terms */}
            <p className="text-xs text-center text-neutral-500 leading-relaxed">
              By continuing, you agree to our{" "}
              <Link
                href="/terms"
                className="text-black font-medium hover:underline underline-offset-2 transition-all"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="text-black font-medium hover:underline underline-offset-2 transition-all"
              >
                Privacy Policy
              </Link>
            </p>
          </div>

          {/* Sign Up Link */}
          <div className="text-center mt-6">
            <p className="text-sm text-neutral-600">
              New to BNIS?{" "}
              <button
                onClick={() => signIn("google", { callbackUrl: "/" })}
                className="text-black font-semibold hover:underline underline-offset-2 transition-all"
              >
                Create an account
              </button>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

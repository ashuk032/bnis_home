export const metadata = { title: "BNIS - Cookie Policy" };

export default function CookiesPage() {
  return (
    <main className="px-6 lg:px-8">
      <div className="max-w-3xl mx-auto pt-40 pb-24">
        <h1 className="text-5xl font-semibold tracking-tighter mb-4">Cookie Policy</h1>
        <div className="text-sm text-neutral-500 mb-10">Last updated: {new Date().toLocaleDateString()}</div>

        <section className="space-y-6">
          <p className="text-neutral-700">This Cookie Policy explains how BNIS uses cookies and similar technologies to recognize you when you visit our websites and use our Services.</p>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">What Are Cookies?</h2>
            <p className="text-neutral-700">Cookies are small data files placed on your device. They help us operate the Services, analyze usage, and personalize content.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">Types of Cookies We Use</h2>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li><span className="font-medium">Strictly Necessary</span>: required for core functionality (authentication, security, preferences).</li>
              <li><span className="font-medium">Performance/Analytics</span>: help us understand usage to improve the Services.</li>
              <li><span className="font-medium">Functional</span>: remember choices and enhance features.</li>
              <li><span className="font-medium">Advertising</span>: used to deliver relevant ads; only with consent where required.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">Managing Cookies</h2>
            <p className="text-neutral-700">You can manage cookies through your browser settings and, where implemented, our in-product consent manager. Disabling some cookies may impact functionality.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">Third-Party Cookies</h2>
            <p className="text-neutral-700">We may use third-party analytics and advertising partners that set cookies on our Services. These providers have their own privacy policies.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">Do Not Track</h2>
            <p className="text-neutral-700">Our Services currently do not respond to browser "Do Not Track" signals. You can use industry opt-outs for advertising where available.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">Contact</h2>
            <p className="text-neutral-700">Questions? Contact us via <a href="/contact" className="underline">/contact</a>.</p>
          </div>
        </section>
      </div>
    </main>
  );
}

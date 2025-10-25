export const metadata = { title: "BNIS - Contact" };

export default function ContactPage() {
  return (
    <main className="px-6 lg:px-8">
      <div className="max-w-5xl mx-auto pt-40 pb-24">
        <h1 className="text-5xl font-semibold tracking-tighter mb-3">Contact us</h1>
        <p className="text-neutral-600 mb-10">We’d love to hear from you. Choose the right channel and we’ll get back within 1–2 business days.</p>

        <div className="grid md:grid-cols-2 gap-10">
          <section>
            <div className="bg-white border border-neutral-200 rounded-2xl p-6 mb-6">
              <h2 className="font-semibold tracking-tight mb-2">Company</h2>
              <div className="text-neutral-700 text-sm">BNIS Technologies Pvt. Ltd.</div>
              <div className="text-neutral-700 text-sm">Registered address (placeholder)</div>
              <div className="text-neutral-700 text-sm">City, State, Country</div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl p-6 mb-6">
              <h2 className="font-semibold tracking-tight mb-2">Support</h2>
              <ul className="text-neutral-700 text-sm space-y-1">
                <li>General: <span className="font-mono">support@example.com</span></li>
                <li>Privacy: <span className="font-mono">privacy@example.com</span></li>
                <li>Security: <a className="underline" href="/security">Report a vulnerability</a></li>
              </ul>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl p-6">
              <h2 className="font-semibold tracking-tight mb-2">Follow</h2>
              <ul className="text-neutral-700 text-sm space-y-1">
                <li>Twitter/X</li>
                <li>LinkedIn</li>
                <li>Instagram</li>
              </ul>
            </div>
          </section>

          <section>
            <form className="bg-white border border-neutral-200 rounded-2xl p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input className="w-full border border-neutral-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-neutral-300" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" className="w-full border border-neutral-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-neutral-300" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Topic</label>
                <select className="w-full border border-neutral-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-neutral-300">
                  <option>General</option>
                  <option>Privacy</option>
                  <option>Security</option>
                  <option>Partnerships</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea rows="6" className="w-full border border-neutral-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-neutral-300" placeholder="How can we help?" />
              </div>
              <button type="button" className="px-4 py-2 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800">Send message</button>
              <div className="text-xs text-neutral-500">By submitting, you agree to our <a href="/privacy" className="underline">Privacy Policy</a>.</div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

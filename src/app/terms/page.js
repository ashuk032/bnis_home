export const metadata = { title: "BNIS - Terms of Service" };

export default function TermsPage() {
  return (
    <main className="px-6 lg:px-8">
      <div className="max-w-3xl mx-auto pt-40 pb-24">
        <h1 className="text-5xl font-semibold tracking-tighter mb-4">Terms of Service</h1>
        <div className="text-sm text-neutral-500 mb-10">Last updated: {new Date().toLocaleDateString()}</div>

        <section className="space-y-6">
          <p className="text-neutral-700">These Terms of Service ("Terms") govern your access to and use of BNIS and our Services. By creating an account or using the Services, you agree to these Terms.</p>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">1. Accounts</h2>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li>You must be at least the age of majority in your jurisdiction to use the Services.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>Provide accurate, current information; do not impersonate others or misrepresent affiliations.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">2. Use of Services</h2>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li>Comply with all applicable laws and our policies.</li>
              <li>Do not engage in fraud, spamming, scraping, reverse engineering, or security violations.</li>
              <li>We may suspend or terminate accounts for violations or risks to users or the platform.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">3. Campaigns and Transactions</h2>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li>Funds may be held in escrow and released upon milestone completion and approvals.</li>
              <li>Fees: a platform fee may apply to certain transactions as disclosed in pricing.</li>
              <li>Disputes: we may request evidence and make a fair determination; our decision may be final for platform actions.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">4. Content and IP</h2>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li>You retain rights to your content. By posting, you grant us a limited license to host and display it for operating the Services.</li>
              <li>Do not post unlawful, infringing, or harmful content.</li>
              <li>Respect third-party rights, including trademarks and copyrights.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">5. KYC and Compliance</h2>
            <p className="text-neutral-700">We may require identity verification (e.g., PAN/Aadhaar/GST) to prevent fraud and meet legal obligations. Failure to complete KYC may limit access to features, withdrawals, or payments.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">6. Privacy</h2>
            <p className="text-neutral-700">Our <a className="underline" href="/privacy">Privacy Policy</a> explains how we process your data. By using the Services, you consent to such processing.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">7. Warranties and Disclaimers</h2>
            <p className="text-neutral-700">The Services are provided on an "as is" and "as available" basis. We disclaim all warranties to the extent permitted by law.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">8. Limitation of Liability</h2>
            <p className="text-neutral-700">To the maximum extent permitted by law, BNIS is not liable for indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">9. Termination</h2>
            <p className="text-neutral-700">You may stop using the Services at any time. We may suspend or terminate the Services or your account with notice where feasible, including for violations of these Terms.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">10. Changes to Terms</h2>
            <p className="text-neutral-700">We may update these Terms. Material changes will be notified by reasonable means. Continued use after changes indicates acceptance.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">11. Contact</h2>
            <p className="text-neutral-700">Questions about these Terms? Contact us via <a href="/contact" className="underline">/contact</a>.</p>
          </div>
        </section>
      </div>
    </main>
  );
}

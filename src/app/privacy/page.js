export const metadata = { title: "BNIS - Privacy Policy" };

export default function PrivacyPage() {
  return (
    <main className="px-6 lg:px-8">
      <div className="max-w-3xl mx-auto pt-40 pb-24">
        <h1 className="text-5xl font-semibold tracking-tighter mb-4">Privacy Policy</h1>
        <div className="text-sm text-neutral-500 mb-10">Last updated: {new Date().toLocaleDateString()}</div>

        <section className="space-y-10">
          <p className="text-neutral-700">This Privacy Policy explains how BNIS ("we", "us", "our") collects, uses, discloses, and safeguards your information when you use our website and services (collectively, the "Services").</p>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">Information We Collect</h2>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li><span className="font-medium">Account Data</span>: name, email, profile information, connected social handles.</li>
              <li><span className="font-medium">KYC Data</span>: identifiers required for verification (e.g., PAN/Aadhaar/GST) where applicable and lawful.</li>
              <li><span className="font-medium">Payment Data</span>: transaction and wallet information processed via PCI-DSS compliant providers.</li>
              <li><span className="font-medium">Usage Data</span>: device, browser, IP, pages viewed, and interactions for analytics and security.</li>
              <li><span className="font-medium">Communications</span>: messages, attachments, and support inquiries.</li>
            </ul>
            <p className="text-neutral-700 mt-3">We collect information directly from you, automatically through your use of the Services, and from third parties you connect (e.g., social platforms).</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">How We Use Information</h2>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li>Provide and improve the Services, including matching, messaging, campaigns, and analytics.</li>
              <li>Verify identity and maintain platform safety, fraud prevention, and compliance.</li>
              <li>Process payments, withdrawals, and provide invoices/receipts.</li>
              <li>Communicate updates, service announcements, and support.</li>
              <li>Analyze usage to improve features and user experience.</li>
            </ul>
            <div className="mt-4">
              <h3 className="font-semibold">Lawful Bases (GDPR)</h3>
              <ul className="list-disc pl-6 text-neutral-700 space-y-1 mt-2">
                <li>Performance of a contract (providing the Services).</li>
                <li>Legitimate interests (security, fraud prevention, product improvement).</li>
                <li>Consent (marketing communications, certain analytics/cookies).</li>
                <li>Legal obligations (tax, accounting, KYC/AML where applicable).</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">Sharing and Disclosure</h2>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li>With service providers (e.g., hosting, payments, analytics) under contractual safeguards.</li>
              <li>With other users as necessary to complete campaigns (e.g., profiles, portfolios, ratings).</li>
              <li>For legal reasons: to comply with laws, legal requests, or to protect rights, safety, and integrity.</li>
              <li>In a business transfer (e.g., merger), subject to continued protections.</li>
            </ul>
            <p className="text-neutral-700 mt-3">We maintain a list of material subprocessors and will provide notice of changes where required.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">Data Retention</h2>
            <p className="text-neutral-700">We retain data for as long as needed to provide the Services, meet legal obligations, resolve disputes, and enforce agreements. Examples:</p>
            <ul className="list-disc pl-6 text-neutral-700 space-y-1 mt-2">
              <li>Account and transaction records: typically 7 years for tax/accounting.</li>
              <li>Support communications: up to 3 years, unless required longer.</li>
              <li>Backups: retained per rolling schedules and securely purged.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">Your Rights</h2>
            <p className="text-neutral-700">Subject to applicable law, you may access, correct, delete, object, restrict processing, or request portability of your personal data.</p>
            <div className="mt-3">
              <h3 className="font-semibold">CCPA/CPRA (California)</h3>
              <ul className="list-disc pl-6 text-neutral-700 space-y-1 mt-2">
                <li>Right to know, delete, correct, and opt-out of sale/sharing of personal information.</li>
                <li>We do not sell personal information. We may share for cross-context behavioral advertising only with consent.</li>
              </ul>
              <h3 className="font-semibold mt-4">Submitting a Request</h3>
              <p className="text-neutral-700">To exercise rights, contact us via <a href="/contact" className="underline">/contact</a>. We may need to verify your identity before fulfilling requests.</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">International Transfers</h2>
            <p className="text-neutral-700">Where data is transferred across borders, we implement safeguards such as Standard Contractual Clauses (SCCs) and supplementary measures as needed.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">Security</h2>
            <p className="text-neutral-700">We use organizational and technical measures to protect data. No method is 100% secure, but we continuously improve our controls.</p>
            <p className="text-neutral-700 mt-2">For more details, see our <a href="/security" className="underline">Security</a> page.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">Children</h2>
            <p className="text-neutral-700">The Services are not directed to individuals under the age of 13 (or applicable minimum age). We do not knowingly collect such data.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">Contact</h2>
            <p className="text-neutral-700">Questions about this policy can be sent via the contact page at <a href="/contact" className="underline">/contact</a>. You may also contact our privacy team or DPO at <span className="font-mono">privacy@example.com</span>.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">Cookies</h2>
            <p className="text-neutral-700">We use essential and optional cookies for functionality, analytics, and advertising (with consent). Learn more and manage preferences in our <a href="/cookies" className="underline">Cookie Policy</a>.</p>
          </div>
        </section>
      </div>
    </main>
  );
}

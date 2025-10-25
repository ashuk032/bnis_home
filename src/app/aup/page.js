export const metadata = { title: "BNIS - Acceptable Use Policy" };

export default function AUPPage() {
  return (
    <main className="px-6 lg:px-8">
      <div className="max-w-3xl mx-auto pt-40 pb-24">
        <h1 className="text-5xl font-semibold tracking-tighter mb-4">Acceptable Use Policy</h1>
        <div className="text-sm text-neutral-500 mb-10">Last updated: {new Date().toLocaleDateString()}</div>

        <section className="space-y-6">
          <p className="text-neutral-700">To keep BNIS safe and reliable, users must follow this Acceptable Use Policy ("AUP"). Violations may result in content removal, account suspension, or termination.</p>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">Prohibited Content</h2>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li>Illegal content, hate speech, threats, harassment, exploitation, or incitement of violence.</li>
              <li>Infringing content (copyright, trademark, privacy, publicity) or unauthorized use of others’ data.</li>
              <li>Malware, phishing, scams, or attempts to deceive users.</li>
              <li>Sexually explicit content involving minors or non-consensual content.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">Prohibited Conduct</h2>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li>Attempting to break or bypass security; probing, scanning, or testing vulnerabilities without authorization.</li>
              <li>Scraping, bulk data extraction, or automated access beyond documented APIs.</li>
              <li>Spam, fraud, misrepresentation, or manipulation of campaigns, ratings, or analytics.</li>
              <li>Buying or selling accounts or badges; evading enforcement actions.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">Reporting</h2>
            <p className="text-neutral-700">Report violations via <a href="/contact" className="underline">/contact</a>. We review reports and take appropriate action, including notifying authorities where required.</p>
          </div>
        </section>
      </div>
    </main>
  );
}

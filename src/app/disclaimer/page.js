export const metadata = { title: "BNIS - Disclaimer" };

export default function DisclaimerPage() {
  return (
    <main className="px-6 lg:px-8">
      <div className="max-w-3xl mx-auto pt-40 pb-24">
        <h1 className="text-5xl font-semibold tracking-tighter mb-4">Disclaimer</h1>
        <div className="text-sm text-neutral-500 mb-10">Last updated: {new Date().toLocaleDateString()}</div>

        <section className="space-y-6">
          <p className="text-neutral-700">The information provided by BNIS on our website and Services is for general informational purposes only. All information is provided in good faith; however, we make no representation or warranty of any kind regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information.</p>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">No Professional Advice</h2>
            <p className="text-neutral-700">BNIS does not provide legal, financial, or tax advice. You should consult your own advisors before making decisions.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">External Links</h2>
            <p className="text-neutral-700">The Services may contain links to third-party websites that are not controlled or operated by BNIS. We are not responsible for the content or practices of any third-party sites.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">Limitation of Liability</h2>
            <p className="text-neutral-700">Under no circumstance shall BNIS have any liability to you for any loss or damage of any kind incurred as a result of the use of the Services or reliance on any information provided.</p>
          </div>
        </section>
      </div>
    </main>
  );
}

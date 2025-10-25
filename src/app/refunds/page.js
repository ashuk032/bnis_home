export const metadata = { title: "BNIS - Refunds & Cancellations" };

export default function RefundsPage() {
  return (
    <main className="px-6 lg:px-8">
      <div className="max-w-3xl mx-auto pt-40 pb-24">
        <h1 className="text-5xl font-semibold tracking-tighter mb-4">Refunds & Cancellations</h1>
        <div className="text-sm text-neutral-500 mb-10">Last updated: {new Date().toLocaleDateString()}</div>

        <section className="space-y-6">
          <p className="text-neutral-700">This policy explains eligibility and process for refunds and cancellations related to campaigns, wallet deposits, and subscriptions.</p>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">Campaign Payments</h2>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li><span className="font-medium">Escrow Protection</span>: Funds remain in escrow until milestones are completed and approved.</li>
              <li><span className="font-medium">Cancellations</span>: Either party may request cancellation before milestone approval; funds are returned to the sponsor minus any applicable fees.</li>
              <li><span className="font-medium">Disputes</span>: Provide evidence within stated timelines. BNIS may determine a partial or full refund based on deliverables and communications.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">Wallet Deposits & Withdrawals</h2>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li>Deposits are available for use immediately after confirmation.</li>
              <li>Withdrawals are typically irreversible once processed by payment partners.</li>
              <li>Erroneous transactions should be reported promptly via <a href="/contact" className="underline">/contact</a>.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">Subscriptions</h2>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li>Subscriptions renew automatically unless cancelled prior to the renewal date.</li>
              <li>Pro-rated or partial refunds are generally not provided after the billing period begins, unless required by law.</li>
              <li>Cancel any time from account settings to stop future charges.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">How to Request a Refund</h2>
            <p className="text-neutral-700">Contact support via <a href="/contact" className="underline">/contact</a> with your campaign ID, transaction details, and a description of the issue. We will acknowledge receipt and respond with next steps.</p>
          </div>
        </section>
      </div>
    </main>
  );
}

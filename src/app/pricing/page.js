export const metadata = { title: "BNIS - Pricing" };

export default function PricingPage() {
  return (
    <main className="px-6 lg:px-8">
      <div className="max-w-7xl mx-auto pt-40 pb-24">
        <h1 className="text-5xl font-semibold tracking-tighter mb-6">Simple pricing</h1>
        <p className="text-neutral-600 max-w-2xl">BNIS charges a flat <span className="font-semibold">1.5% platform fee</span> on secure wallet transactions. Barter and collab deals are free.</p>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="bg-white border border-neutral-200 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-2">Wallet Transactions</h3>
            <p className="text-neutral-600">1.5% fee, escrow protection, instant withdrawals</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-2">Barter & Collab</h3>
            <p className="text-neutral-600">No platform fee, optional conversion to paid</p>
          </div>
        </div>
      </div>
    </main>
  );
}

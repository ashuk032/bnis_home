export const metadata = { title: "BNIS - Reviews" };

const items = [
  { name: "Sarah Mitchell", role: "Lifestyle Influencer", text: "The wallet system is genius! I get paid as soon as campaigns complete and the 1.5% fee is the lowest I've seen.", rating: 5 },
  { name: "Marcus Chen", role: "Marketing Director, TechCo", text: "Matching is spot on. Auto-synced analytics from Instagram and YouTube save hours.", rating: 5 },
  { name: "Jessica Rodriguez", role: "Fashion Creator", text: "KYC gave me instant credibility. Barter system helped me land my first major brand deal.", rating: 5 },
];

export default function ReviewsPage() {
  return (
    <main className="px-6 lg:px-8">
      <div className="max-w-7xl mx-auto pt-40 pb-24">
        <h1 className="text-5xl font-semibold tracking-tighter mb-3">Reviews</h1>
        <p className="text-neutral-600 mb-8 max-w-2xl">What creators and brands say about building partnerships on BNIS.</p>

        <div className="bg-white border border-neutral-200 rounded-2xl p-6 mb-8 flex items-center justify-between">
          <div>
            <div className="text-sm text-neutral-500">Average Rating</div>
            <div className="text-3xl font-semibold tracking-tight">5.0</div>
          </div>
          <div className="flex gap-2">
            {["All","Creators","Brands"].map(x => (
              <button key={x} className="px-3 py-1.5 border border-neutral-200 rounded-full text-sm hover:border-neutral-300">{x}</button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((r) => (
            <div key={r.name} className="bg-white p-8 rounded-2xl border border-neutral-200">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({length: r.rating}).map((_,i)=>(
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
              <p className="text-neutral-700 leading-relaxed mb-6">“{r.text}”</p>
              <div className="border-t border-neutral-100 pt-4">
                <div className="font-medium text-sm">{r.name}</div>
                <div className="text-sm text-neutral-500">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export const metadata = { title: "BNIS - Case Studies" };

const studies = [
  { brand: "TechCo", summary: "Product launch with YouTube creators", metrics: [{k:"Reach", v:"3.1M"}, {k:"CTR", v:"4.2%"}, {k:"CAC", v:"-28%"}], tags:["YouTube","Tech","Awareness"] },
  { brand: "FitFuel", summary: "Instagram reels for new flavor", metrics: [{k:"Views", v:"1.8M"}, {k:"Saves", v:"62k"}, {k:"CPA", v:"-19%"}], tags:["Instagram","CPG","Performance"] },
  { brand: "EduPlus", summary: "UGC + affiliate program", metrics: [{k:"Enrollments", v:"+2.3x"}, {k:"ROI", v:"3.7x"}, {k:"AOV", v:"+15%"}], tags:["UGC","Affiliate","Edtech"] },
];

export default function CaseStudiesPage() {
  return (
    <main className="px-6 lg:px-8">
      <div className="max-w-7xl mx-auto pt-40 pb-24">
        <h1 className="text-5xl font-semibold tracking-tighter mb-3">Case Studies</h1>
        <p className="text-neutral-600 mb-8 max-w-2xl">Examples of creators and brands partnering on BNIS to drive measurable outcomes.</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {["All","YouTube","Instagram","UGC","Affiliate","Tech","CPG","Edtech"].map(t => (
            <button key={t} className="px-3 py-1.5 border border-neutral-200 rounded-full text-sm hover:border-neutral-300">{t}</button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studies.map(cs => (
            <article key={cs.brand} className="bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-sm text-neutral-500 mb-1">{cs.brand}</div>
              <h3 className="font-semibold tracking-tight mb-3">{cs.summary}</h3>
              <div className="flex gap-3 mb-4">
                {cs.metrics.map(m => (
                  <div key={m.k} className="bg-neutral-50 border border-neutral-200 rounded-xl px-3 py-2">
                    <div className="text-xs text-neutral-500">{m.k}</div>
                    <div className="text-sm font-medium">{m.v}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {cs.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-neutral-100 rounded-full text-xs text-neutral-700">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

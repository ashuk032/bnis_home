export const metadata = { title: "BNIS - About" };

export default function AboutPage() {
  return (
    <main className="px-6 lg:px-8">
      <div className="max-w-5xl mx-auto pt-40 pb-24">
        <h1 className="text-5xl font-semibold tracking-tighter mb-6">Our mission</h1>
        <p className="text-neutral-700 text-lg leading-relaxed mb-12">BNIS connects influencers and brands to create authentic, performance-driven partnerships with transparency, secure payments, and measurable results.</p>

        <section className="grid md:grid-cols-3 gap-6 mb-16">
          {[{title:'Trust', desc:'Escrow wallet, KYC, and transparent workflows ensure fair, on-time payments.'}, {title:'Performance', desc:'Real-time analytics to optimize ROI across campaigns and creators.'}, {title:'Access', desc:'A level playing field for micro to enterprise—barter to paid.'}].map((v)=> (
            <div key={v.title} className="bg-white border border-neutral-200 rounded-2xl p-6">
              <h3 className="font-semibold tracking-tight mb-2">{v.title}</h3>
              <p className="text-neutral-700 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Our story</h2>
          <p className="text-neutral-700 leading-relaxed">Started by creators and marketers, BNIS grew from a simple idea: collaborations should be simple, secure, and data-driven. From early pilots to a thriving marketplace, we continue to invest in safety, tooling, and insights.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Timeline</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4"><div className="w-2 h-2 rounded-full bg-neutral-900 mt-2"/><div><div className="font-medium">2023</div><div className="text-neutral-700">Prototype with early creators and brands</div></div></div>
            <div className="flex items-start gap-4"><div className="w-2 h-2 rounded-full bg-neutral-900 mt-2"/><div><div className="font-medium">2024</div><div className="text-neutral-700">Wallet escrow and analytics launched</div></div></div>
            <div className="flex items-start gap-4"><div className="w-2 h-2 rounded-full bg-neutral-900 mt-2"/><div><div className="font-medium">2025</div><div className="text-neutral-700">Marketplace scale, verification, and advanced insights</div></div></div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Leadership</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[{name:'Founder & CEO', bio:'Creator-turned-operator focused on safe, transparent monetization for influencers.'}, {name:'Head of Product', bio:'Built data tools for marketers; now crafting BNIS workflows and insights.'}].map((m)=> (
              <div key={m.name} className="bg-white border border-neutral-200 rounded-2xl p-6">
                <div className="font-medium mb-1">{m.name}</div>
                <div className="text-neutral-700 text-sm">{m.bio}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

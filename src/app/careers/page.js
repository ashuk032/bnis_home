export const metadata = { title: "BNIS - Careers" };

const benefits = [
  { title: "Remote-first", desc: "Work from anywhere with flexible hours." },
  { title: "Competitive comp", desc: "Salary + meaningful equity." },
  { title: "Wellness", desc: "Health benefits and mental health stipend." },
  { title: "Learning", desc: "Annual budget for courses and conferences." },
];

const roles = [
  { title: "Senior Full-Stack Engineer", team: "Engineering", location: "Remote / India", type: "Full-time" },
  { title: "Product Designer", team: "Design", location: "Remote / India", type: "Full-time" },
  { title: "Creator Partnerships Manager", team: "Growth", location: "Remote / India", type: "Contract / Full-time" },
];

export default function CareersPage() {
  return (
    <main className="px-6 lg:px-8">
      <div className="max-w-7xl mx-auto pt-40 pb-24">
        <h1 className="text-5xl font-semibold tracking-tighter mb-3">Join BNIS</h1>
        <p className="text-neutral-600 mb-12 max-w-2xl">We’re building safer, more transparent creator-brand partnerships. Join us to ship impactful tools used by creators and marketers worldwide.</p>

        <section className="grid md:grid-cols-4 gap-6 mb-16">
          {benefits.map((b) => (
            <div key={b.title} className="bg-white border border-neutral-200 rounded-2xl p-6">
              <div className="font-medium mb-1">{b.title}</div>
              <div className="text-neutral-700 text-sm">{b.desc}</div>
            </div>
          ))}
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Open roles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((r) => (
              <div key={r.title} className="bg-white border border-neutral-200 rounded-2xl p-6">
                <div className="text-sm text-neutral-500 mb-1">{r.team}</div>
                <h3 className="font-semibold tracking-tight mb-2">{r.title}</h3>
                <div className="text-sm text-neutral-600 mb-4">{r.location} • {r.type}</div>
                <button className="px-3 py-2 border border-neutral-200 rounded-xl text-sm hover:border-neutral-300">View details</button>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Hiring process</h2>
          <ol className="list-decimal pl-6 text-neutral-700 space-y-2">
            <li>Application review and recruiter screen</li>
            <li>Technical/functional interview</li>
            <li>Practical exercise or portfolio walkthrough</li>
            <li>Panel interviews and founder chat</li>
            <li>Offer and onboarding</li>
          </ol>
        </section>
      </div>
    </main>
  );
}

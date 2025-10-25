export const metadata = { title: "BNIS - Data Processing Addendum" };

export default function DpaPage() {
  return (
    <main className="px-6 lg:px-8">
      <div className="max-w-3xl mx-auto pt-40 pb-24">
        <h1 className="text-5xl font-semibold tracking-tighter mb-4">Data Processing Addendum (DPA)</h1>
        <div className="text-sm text-neutral-500 mb-10">Last updated: {new Date().toLocaleDateString()}</div>

        <section className="space-y-6">
          <p className="text-neutral-700">This DPA forms part of the agreement between BNIS (the "Processor") and the customer (the "Controller") and governs BNIS' processing of personal data on behalf of the Controller in connection with the Services.</p>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">1. Subject Matter and Duration</h2>
            <p className="text-neutral-700">Processing relates to the provision of the Services and shall continue for the term of the agreement, unless otherwise required by law.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">2. Nature and Purpose</h2>
            <p className="text-neutral-700">BNIS processes personal data to provide and improve the Services, including account management, campaign operations, messaging, analytics, and payments.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">3. Types of Personal Data and Data Subjects</h2>
            <p className="text-neutral-700">Data may include identifiers, contact details, profile data, transaction data, usage data; data subjects may include the Controller's employees, contractors, creators, and end-users.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">4. Controller Instructions</h2>
            <p className="text-neutral-700">BNIS shall process personal data only on documented instructions from the Controller, unless required by law. BNIS will notify the Controller if an instruction appears unlawful.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">5. Confidentiality and Personnel</h2>
            <p className="text-neutral-700">BNIS ensures personnel are bound by confidentiality and receive appropriate training regarding data protection and security.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">6. Security</h2>
            <p className="text-neutral-700">BNIS implements appropriate technical and organizational measures as described on our <a href="/security" className="underline">Security</a> page.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">7. Subprocessors</h2>
            <p className="text-neutral-700">BNIS may engage subprocessors subject to contractual obligations no less protective than those in this DPA. Upon request, BNIS will provide a list of current subprocessors and notify of material changes where required.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">8. International Transfers</h2>
            <p className="text-neutral-700">Where personal data is transferred outside of the originating jurisdiction, BNIS will ensure appropriate safeguards, including Standard Contractual Clauses (SCCs) where applicable.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">9. Assistance and Data Subject Requests</h2>
            <p className="text-neutral-700">Taking into account the nature of processing, BNIS will assist the Controller by appropriate technical and organizational measures in fulfilling obligations to respond to data subject requests.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">10. Incident Notification</h2>
            <p className="text-neutral-700">BNIS will notify the Controller without undue delay after becoming aware of a personal data breach, providing information reasonably necessary for the Controller to meet its obligations.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">11. Return or Deletion</h2>
            <p className="text-neutral-700">At termination, BNIS will, at the Controller's choice and subject to legal obligations, delete or return personal data and delete existing copies within reasonable timeframes.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">12. Audits</h2>
            <p className="text-neutral-700">BNIS will make available information necessary to demonstrate compliance and allow for audits by the Controller or an auditor mandated by the Controller, under reasonable confidentiality and security controls.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">13. Miscellaneous</h2>
            <p className="text-neutral-700">In case of conflict between this DPA and the agreement, this DPA shall prevail regarding processing of personal data. The parties agree to execute SCCs where required.</p>
          </div>
        </section>
      </div>
    </main>
  );
}

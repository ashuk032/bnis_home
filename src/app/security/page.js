export const metadata = { title: "BNIS - Security" };

export default function SecurityPage() {
  return (
    <main className="px-6 lg:px-8">
      <div className="max-w-3xl mx-auto pt-40 pb-24">
        <h1 className="text-5xl font-semibold tracking-tighter mb-4">Security</h1>
        <div className="text-sm text-neutral-500 mb-10">Last updated: {new Date().toLocaleDateString()}</div>

        <section className="space-y-6">
          <p className="text-neutral-700">We take the security of our platform and users seriously. This page outlines our technical and organizational measures to protect data and maintain service integrity.</p>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">Application & Infrastructure</h2>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li>Encryption in transit via HTTPS/TLS for all client–server communications.</li>
              <li>Encryption at rest where supported by underlying cloud providers and services.</li>
              <li>Network segmentation and principle of least privilege for internal services.</li>
              <li>Dependency management and security patching on a regular schedule.</li>
              <li>Environment separation for development, staging, and production.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">Data Protection</h2>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li>Access controls with role-based permissions and audit trails for sensitive actions.</li>
              <li>Minimal data collection aligned with our <a href="/privacy" className="underline">Privacy Policy</a>.</li>
              <li>Secure handling of payment information via vetted third-party processors.</li>
              <li>Backups and recovery procedures tested periodically.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">Operational Security</h2>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li>Security reviews during development and code review processes.</li>
              <li>Least-privilege access and MFA for administrative accounts.</li>
              <li>Employee security awareness and onboarding/offboarding procedures.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">Incident Response</h2>
            <p className="text-neutral-700">We investigate and respond to security incidents with defined procedures for triage, containment, remediation, and user notification where required by law.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">Responsible Disclosure</h2>
            <p className="text-neutral-700">If you believe you have discovered a vulnerability, please report it to us responsibly. Include details and steps to reproduce. We request that you refrain from public disclosure until we have addressed the issue.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">Your Responsibilities</h2>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li>Use strong, unique passwords and enable MFA where available.</li>
              <li>Keep your devices and browsers updated.</li>
              <li>Be cautious with links and attachments; report suspicious activity.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">Contact</h2>
            <p className="text-neutral-700">To report a security concern, contact us via <a href="/contact" className="underline">/contact</a>.</p>
          </div>
        </section>
      </div>
    </main>
  );
}

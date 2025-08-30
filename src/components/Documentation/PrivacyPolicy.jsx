import React from "react";

// INAI Privacy Policy Page (React + Tailwind CSS)
// - Responsive two-column layout with sticky Table of Contents on lg+
// - Anchored sections for deep links
// - Accessible headings & semantic markup

export default function PrivacyPolicy() {

    document.title = 'INAI : Privacy Policy';

  const lastUpdated = "20th JULY 2025";

  const toc = [
    { id: "scope", label: "1. Scope of the Policy" },
    { id: "information-we-collect", label: "2. Information We Collect" },
    { id: "how-we-use", label: "3. How We Use Your Information" },
    { id: "chat-deletion", label: "4. Chat Elimination Regimen" },
    { id: "data-retention", label: "5. Personal Data Retention" },
    { id: "disclosure", label: "6. Personal Data Publication" },
    { id: "data-transfers", label: "7. Data Transfers" },
    { id: "security", label: "8. Security Measures" },
    { id: "cookies", label: "9. Tracking & Cookies" },
    { id: "minors", label: "10. Minors & Personal Data" },
    { id: "user-rights", label: "11. Users Rights (India)" },
    { id: "deactivation", label: "12. Deactivation & Deletion" },
    { id: "india-privacy", label: "13. India Privacy Rights (DPDP)" },
    { id: "third-party", label: "14. Third‑Party Links" },
    { id: "updates", label: "15. Policy Updates" },
    { id: "contact", label: "16. Contact Us" },
  ];

  return (
    <main className="min-h-screen bg-neutral-900 text-neutral-100">
      {/* Header */}
      <section className="bg-neutral-950 border-b border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            INAI Privacy Policy
          </h1>
          <p className="mt-3 text-sm md:text-base text-neutral-400">
            Last Updated: <time dateTime="2025-07-20">{lastUpdated}</time>
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 py-8 md:py-12 grid gap-8 lg:grid-cols-[260px_1fr]">
        {/* TOC */}
        <nav aria-label="Table of contents" className="hidden lg:block">
          <div className="sticky top-6 rounded-2xl border border-neutral-800 bg-neutral-950 p-4">
            <p className="text-sm font-semibold text-neutral-300 mb-3">
              On this page
            </p>
            <ul className="space-y-2">
              {toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block rounded-lg px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-600"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Body */}
        <article className="prose prose-invert max-w-none prose-headings:scroll-mt-24 prose-strong:text-lg prose-strong:font-extrabold prose-strong:text-white">
          <p>
            This is the Privacy Policy of <strong>INAI Worlds PVT. LTD.</strong>{" "}
            ("INAI", "we", "our", or "us"). We care deeply about your privacy
            and the security of your data ("Personal Data"). This Policy
            describes how we collect, use, process, disclose, and secure your
            data when you access the <strong>INAI application</strong>
            ("INAI App" or "App") and related features, tools, and services
            (collectively, the "Services"). By installing, accessing, or using
            the App, you acknowledge that you have read and agree to this
            Policy. If you do not agree, please do not use the Services.
          </p>
          <br />

          <h2 id="scope" className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            1. Scope of the Policy
          </h2>

          <ul className="list-disc list-inside space-y-3">
            <li>
              This Policy covers all users of the INAI App and Services on any
              platform, including Android and Web.
            </li>
            <li>
              <strong className="text-lg font-semibold">“Personal Data”</strong>{" "}
              means any information relating to an identified or identifiable
              natural person. Examples include name, email address, mobile
              number, location data, voice recordings, or online identifiers.
            </li>
            <li>
              The INAI App includes the following modes:
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>Love Mode (18+ only)</li>
                <li>Friend Mode (18+ only)</li>
                <li>Elder Mode (open to everyone)</li>
                <li>Info Mode (open, text)</li>
              </ul>
            </li>
            <li>
              This Policy regulates processing of Personal Data obtained via all
              of the above modes.
            </li>
          </ul>
          <br />

          <h2
            id="information-we-collect"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            2. Information that we collect:
          </h2>
          <p>
            The information collected about you when you use our Services will
            fall into the following categories:
          </p>

          <h3 className="font-semibold mt-4">
            a. Account and Registration Details:
          </h3>
          <p>If you sign in with the Google Sign-In then we have:</p>
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>Name</li>
            <li>Email address</li>
            <li>Google profile picture</li>
            <li>Authentication tokens</li>
          </ul>

          <h3 className="font-semibold mt-4">
            b. Data on Chat and Communication:
          </h3>
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>Transcripts of a text-based chat or voice chat</li>
            <li>Content that is uploaded (e.g., documents in Info View)</li>
            <li>Emotional tones or markers that are recorded by voice</li>
            <li>The choice of mode and preferences in conversation</li>
          </ul>

          <h3 className="font-semibold mt-4">
            c. Technical and Device Information:
          </h3>
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>IP address</li>
            <li>Model of the device, version of the OS</li>
            <li>App version</li>
            <li>Usage traces and crash logs</li>
            <li>General geographic region (non-GPS)</li>
          </ul>

          <h3 className="font-semibold mt-4">
            d. Payment Details (if applicable):
          </h3>
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>
              Billing information via secure third-party services (e.g., Stripe
              / Google Pay)
            </li>
            <li>We do not store full card numbers</li>
          </ul>

          <h3 className="font-semibold mt-4">e. Optional User Feedback:</h3>
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>Support queries</li>
            <li>Feedback and suggestions</li>
            <li>Survey responses (if any)</li>
          </ul>
          <br />

          <h2
            id="how-we-use"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            3. How We Use Your Information
          </h2>

          <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>Provide AI-assisted dialogues based on selected modes</li>
            <li>Personalize interactions and responses</li>
            <li>Improve AI behavioral and emotional intelligence</li>
            <li>Enforce age-based access controls</li>
            <li>Test, monitor, and support app functionality</li>
            <li>Send system alerts and notifications</li>
            <li>Enforce Terms of Use and prevent abuse or fraud</li>
          </ul>

          <p className="list-disc list-inside space-y-3">
            We <strong>do not sell or rent</strong> your Personal Data. We use
            it solely to provide, protect, and enhance our Services.
          </p>

          <h2
            id="chat-deletion"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            4. Chat Elimination Regimen
          </h2>

          <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>
              Users can delete conversations anytime within the chat interface.
            </li>
            <li>
              Backups may be securely retained for up to 90 days for quality
              assurance, abuse investigation, and AI model improvement.
            </li>
            <li>Backups auto-delete or are anonymized after 90 days.</li>
          </ul>
          <br />

          <h2
            id="data-retention"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            5. Personal Data Retention
          </h2>

          <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>
              We retain Personal Data for the shortest period necessary,
              including while you have an active account, or for
              legal/operational/research needs, unless you exercise your
              deletion right.
            </li>
            <li>
              Upon account deletion request, data is queued for removal within
              90 days. Certain system logs may persist in anonymized/aggregate
              form for analytics.
            </li>
          </ul>
          <br />

          <h2
            id="disclosure"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            6. Personal Data Publication (Disclosure)
          </h2>

          <p className="mb-4">
            We do not disclose Personal Data except in the following situations:
          </p>

          <h3 className="font-semibold mt-4">
            6.a. Authorized Service Providers
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-5">
            <li>Cloud hosting (e.g., Firebase)</li>
            <li>Payment processors</li>
            <li>Performance and crash analytics tools</li>
          </ul>

          <h3 className="font-semibold mt-4">6.b. Legal Requirements</h3>
          <ul className="list-disc list-inside space-y-2 ml-5">
            <li>To comply with laws, court orders, or government requests</li>
            <li>
              To investigate potential violations of our Terms or abusive
              behavior
            </li>
            <li>To protect rights, property, or personal safety</li>
          </ul>

          <h3 className="font-semibold mt-4">6.c. Business Transfers</h3>
          <p className="mb-6">
            In connection with a merger, acquisition, or asset sale, your
            information may be transferred as part of business assets. All
            partners/vendors are bound by strict confidentiality and processing
            agreements.
          </p>

          <h2
            id="data-transfers"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            7. Data Transfers
          </h2>
          <p>
            Your data may be processed or stored in other countries (e.g.,
            Singapore). We ensure lawful transfers using appropriate safeguards
            such as standard contractual clauses and data processing agreements.
          </p>
          <br />

          <h2
            id="security"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            8. Security Measures
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Encryption at rest and in transit (e.g., AES/TLS)</li>
            <li>Strong authentication controls</li>
            <li>Role-based employee access</li>
            <li>Periodic penetration tests and annual audits</li>
          </ul>
          <p className="mt-4">
            While we strive for strong security, no system is foolproof. If a
            breach occurs, we will notify affected users in accordance with
            applicable laws.
          </p>
          <br />

          <h2
            id="cookies"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            9. Tracking & Cookies
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Authentication / session cookies</li>
            <li>Non-personally identifiable crash and usage analytics</li>
          </ul>
          <p className="mt-4">
            You may clear cookies in your browser settings; some features may
            not function correctly afterward.
          </p>
          <br />

          <h2 id="minors" className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            10. Minors & Personal Data
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              We do not knowingly collect data from users under 18 for Love and
              Friend Modes. If we discover a minor using restricted modes, we
              will promptly lock the account and delete such data.
            </li>
            <li>
              Elder Mode and Info Mode are open to everyone; we still apply
              additional safeguards for children.
            </li>
          </ul>
          <br />

          <h2
            id="user-rights"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            11. Users Rights
          </h2>

          <p className="mb-3">
            If you are based in India, you may have rights under the{" "}
            <span className="font-semibold">
              Digital Personal Data Protection Act, 2023
            </span>
            , including:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-semibold">Right to Access:</span> obtain a
              copy of your Personal Data held by INAI
            </li>
            <li>
              <span className="font-semibold">Right to Correction:</span>{" "}
              request correction of inaccurate or outdated information
            </li>
            <li>
              <span className="font-semibold">Right to Erasure:</span> request
              deletion, subject to legal/operational needs
            </li>
            <li>
              <span className="font-semibold">
                Right to Grievance Redressal:
              </span>{" "}
              escalate to our Grievance Officer if dissatisfied
            </li>
            <li>
              <span className="font-semibold">
                Right to Consent Withdrawal:
              </span>{" "}
              withdraw consent where processing is based on consent
            </li>
          </ul>

          <p className="mt-3">
            To exercise your rights, contact us at{" "}
            <a
              href="mailto:help@inaiworlds.com"
              className="text-blue-600 hover:underline"
            >
              help@inaiworlds.com
            </a>
            . We aim to acknowledge and respond within 30 days, consistent with
            Indian data protection laws.
          </p>
          <br />

          <h2
            id="deactivation"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            12. Deactivation & Deletion of an Account
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Deactivate anytime:</strong> Your account can be
              deactivated at any time. Data may be retained for up to{" "}
              <span className="font-medium">90 days</span>.
            </li>
            <li>
              <strong>Re-activate:</strong> You can re-activate your account
              using your registered <span className="font-medium">email</span>{" "}
              or <span className="font-medium">mobile number</span>.
            </li>
            <li>
              <strong>Delete account:</strong> Once deleted, your data will be{" "}
              <span className="italic">permanently deleted</span> or anonymized
              and{" "}
              <span className="text-red-600 font-medium">
                cannot be recovered
              </span>
              .
            </li>
          </ul>

          <br />

          <h2
            id="india-privacy"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            13. India Privacy Rights (DPDP Act, 2023)
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Know what data we collect, why, and how it is processed.</li>
            <li>Request a copy of your data or permanent deletion.</li>
            <li>Correct inaccurate or incomplete personal information.</li>
            <li>Withdraw consent for data use where applicable.</li>
            <li>Seek fair & equitable resolution of complaints.</li>
          </ul>

          <br />

          <h2
            id="third-party"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            14. Third-Party Links
          </h2>

          <div className="bg-gray-50 border-l-4  p-4 rounded-md shadow-sm">
            <p className="text-gray-700 leading-relaxed">
              The <strong>INAI App</strong> may contain links to third-party
              websites or services. We are <strong>not responsible</strong> for
              their privacy practices or content. We strongly encourage you to
              review the <strong>privacy policies</strong> of any third-party
              services you choose to access.
            </p>
          </div>

          <br />

          <h2
            id="updates"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            15. Policy Updates
          </h2>

          <p className="mt-3">
            We may update this Policy to reflect changes to our{" "}
            <strong>Services</strong>
            or <strong>legal requirements</strong>. Updates will always be
            posted in the
            <strong>App</strong> and on our <strong>website</strong> with a
            revised
            <em> "Last Updated"</em> date. <br />
            <br />
            Your continued use of the Services after such updates will
            constitute your <strong>acceptance</strong> of those changes.
          </p>

          <br />

          <h2
            id="contact"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            16. Contact Us
          </h2>

          <address className="not-italic mt-3 space-y-2">
            <p className="font-semibold">INAI Worlds Pvt. Ltd.</p>

            <p>
              Email:{" "}
              <a href="mailto:help@inaiworlds.com" className="text-blue-500 underline">
                help@inaiworlds.com
              </a>
            </p>

            <p>
              Website:{" "}
              <a
                href="https://www.inaiworlds.com"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                www.inaiworlds.com
              </a>
            </p>

            <p>Grievance/Privacy Officer contact available on request.</p>
          </address>

          <br />

          <div className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-950 p-4 text-sm text-neutral-300">
            <p>
              <strong>Note:</strong> This page summarizes your privacy rights
              and our practices. It should be read together with our Terms of
              Use.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}

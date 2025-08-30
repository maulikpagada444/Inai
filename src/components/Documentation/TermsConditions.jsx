import React from "react";

// INAI Terms & Conditions Page (React + Tailwind CSS)
// - Responsive two-column layout with sticky Table of Contents on lg+
// - Anchored sections for deep links
// - Accessible headings & semantic markup

export default function TermsConditions() {
    document.title = 'INAI : Terms & Conditions';

  const effectiveDate = "20th AUGUST 2025";

  const toc = [
    { id: "acceptance", label: "1. Acceptance of Terms" },
    { id: "modes", label: "2. Modes of Interaction (ALPHA-1)" },
    { id: "registration", label: "3. Registration" },
    { id: "age", label: "4. Age Requirements" },
    { id: "privacy", label: "5. Data Privacy" },
    { id: "pricing", label: "6. Pricing & Availability" },
    { id: "conduct", label: "7. User Conduct" },
    { id: "ip", label: "8. Intellectual Property" },
    { id: "termination", label: "9. Suspension or Termination" },
    { id: "liability", label: "10. Liability Disclaimer" },
    { id: "updates", label: "11. Terms Updates" },
    { id: "law", label: "12. Governing Law" },
    { id: "consent", label: "13. User Consent" },
    { id: "contact", label: "14. Contact Us" },
  ];

  return (
    <main className="min-h-screen bg-neutral-900 text-neutral-100">
      {/* Header */}
      <section className="bg-neutral-950 border-b border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            INAI Terms & Conditions
          </h1>
          <p className="mt-3 text-sm md:text-base text-neutral-400">
            Effective from: <time dateTime="2025-08-20">{effectiveDate}</time>
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
            These Terms & Conditions govern your use of{" "}
            <strong>INAI Worlds PVT. LTD.</strong> application (“INAI”, “we”,
            “our”, or “us”). By installing, registering, or using INAI, you
            agree to abide by these Terms. If you do not agree, please do not
            use the App.
          </p>
          <br />

          <h2 id="acceptance" className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            1. Acceptance of Terms
          </h2>
          <p>
            By installing, registering, or using INAI, you agree to these Terms.
            INAI is an AI-powered voice and text chat app simulating emotional
            and helpful conversations through multiple modes.
          </p>

          <h2 id="modes" className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            2. Modes of Interaction (ALPHA-1)
          </h2>
          <table className="w-full border border-neutral-700 text-sm">
            <thead className="bg-neutral-800">
              <tr>
                <th className="border border-neutral-700 px-3 py-2">Mode</th>
                <th className="border border-neutral-700 px-3 py-2">Description</th>
                <th className="border border-neutral-700 px-3 py-2">Eligibility</th>
                <th className="border border-neutral-700 px-3 py-2">Chat Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-3 py-2">Love</td>
                <td className="border px-3 py-2">Romantic, caring AI interaction</td>
                <td className="border px-3 py-2">18+</td>
                <td className="border px-3 py-2">Voice & Text</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Friend</td>
                <td className="border px-3 py-2">Supportive, humorous AI friend</td>
                <td className="border px-3 py-2">18+</td>
                <td className="border px-3 py-2">Voice & Text</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Elder</td>
                <td className="border px-3 py-2">Guidance and moral support</td>
                <td className="border px-3 py-2">All Ages</td>
                <td className="border px-3 py-2">Voice & Text</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Info</td>
                <td className="border px-3 py-2">Study aid, coding, content help</td>
                <td className="border px-3 py-2">All Ages</td>
                <td className="border px-3 py-2">Text</td>
              </tr>
            </tbody>
          </table>

          <h2 id="registration" className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            3. Registration
          </h2>
          <p>
            To use INAI, registration via Google Sign-In and mobile number
            verification is mandatory. Accurate details must be provided.
          </p>

          <h2 id="age" className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            4. Age Requirements
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Love & Friend Mode: 18+ only</li>
            <li>Elder & Info Mode: Open to all ages</li>
          </ul>

          <h2 id="privacy" className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            5. Data Privacy
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Collected: Chat logs, usage data, device info</li>
            <li>Purpose: Improve AI, personalize experience, ensure stability</li>
            <li>
              Deletion: Users can delete chats; deleted chats remain stored securely (non-restorable)
            </li>
            <li>Security: Encrypted storage and strict privacy protocols</li>
          </ul>
          <p>
            <strong>“Your emotions are respected. Your privacy is protected. Your data stays confidential.”</strong>
          </p>

          <h2 id="pricing" className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            6. Pricing & Availability
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Free to use</li>
            <li>Alpha: India-only</li>
            <li>Beta: Global access</li>
          </ul>

          <h2 id="conduct" className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            7. User Conduct
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Use responsibly and follow mode guidelines</li>
            <li>No abusive, illegal, or harmful activity</li>
            <li>Report bugs or misuse promptly</li>
          </ul>

          <h2 id="ip" className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            8. Intellectual Property
          </h2>
          <p>
            All content and technology are owned by INAI Worlds Pvt. Ltd.
            Unauthorized use is strictly prohibited.
          </p>

          <h2 id="termination" className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            9. Suspension or Termination
          </h2>
          <p>
            INAI reserves the right to suspend or terminate accounts for
            violations including:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Violating Terms</li>
            <li>Age fraud</li>
            <li>Misuse or hacking attempts</li>
          </ul>

          <h2 id="liability" className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            10. Liability Disclaimer
          </h2>
          <p>
            INAI is designed for AI-simulated interactions and is not a
            substitute for real relationships or professional advice.
          </p>

          <h2 id="updates" className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            11. Terms Updates
          </h2>
          <p>
            Terms may change over time. Continued use of INAI indicates
            acceptance of updated Terms.
          </p>

          <h2 id="law" className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            12. Governing Law
          </h2>
          <p>
            These Terms are governed by the laws of India, with jurisdiction in
            Surat, Gujarat.
          </p>

          <h2 id="consent" className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            13. User Consent
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>You meet the age requirement for your selected mode</li>
            <li>You consent to data collection for AI improvement</li>
            <li>You understand the AI is simulated and to be used responsibly</li>
          </ul>

          <h2 id="contact" className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            14. Contact Us
          </h2>
          <p>
            Email:{" "}
            <a
              href="mailto:info@inaiworlds.com"
              className="text-blue-500 underline"
            >
              info@inaiworlds.com
            </a>
            <br />
            Website:{" "}
            <a
              href="https://www.inaiworlds.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              www.inaiworlds.com
            </a>
            <br />
            INAI Worlds Pvt. Ltd., Surat - INDIA
          </p>

        </article>
      </section>
    </main>
  );
}

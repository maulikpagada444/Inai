import React from "react";

// INAI – About the App (React + Tailwind CSS)
// - Responsive two‑column layout with sticky Table of Contents on lg+
// - Anchored sections for deep links
// - Uses prose styling for readable long‑form content

export default function AboutTheApp() {
    document.title = 'INAI : About App';

  const toc = [
    { id: "about-app", label: "1. About the App" },
    { id: "key-features", label: "2. Key Features" },
    { id: "modes", label: "3. Modes of Interaction" },
    { id: "emotional-privacy", label: "4. Emotional Intelligence & Privacy" },
    { id: "personal-companion", label: "5. Your Personal AI Companion" },
    { id: "privacy-priority", label: "6. Your Privacy is Our Priority" },
    {
      id: "intelligent-companion",
      label: "7. About the App – Intelligent AI Companion",
    },
    { id: "unique", label: "8. What Makes This App Unique?" },
    { id: "multilingual", label: "9. Multilingual Communication" },
    { id: "data-safety", label: "10. Data Safety & Mental Wellness" },
    { id: "real-feelings", label: "11. Designed for Real‑Life Feelings" },
    { id: "audience", label: "12. Who Is This App For?" },
    { id: "future-ready", label: "13. Future‑Ready Experience" },
    { id: "help-center", label: "14. Help Center" },
    { id: "feature-cards", label: "15. Feature Help Cards" },
    { id: "privacy-security", label: "16. Privacy & Security (FAQs)" },
    { id: "emotional-support", label: "17. Emotional Support" },
    { id: "contact-support", label: "18. Contact Support" },
    { id: "dev-notes", label: "19. Developer Notes" },
    { id: "privacy-more", label: "20. Privacy & Safety – Learn More" },
    { id: "questions", label: "21. Still Have Questions?" },
  ];

  return (
    <main className="min-h-screen bg-neutral-900 text-neutral-100">
      {/* Header */}
      <section className="bg-neutral-950 border-b border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            INAI – About the App
          </h1>
          <p className="mt-2 text-neutral-300 max-w-3xl">
            Meet your intelligent AI companion designed for communication,
            emotional well‑being, and productivity.
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
        <article className="prose prose-invert max-w-none prose-headings:scroll-mt-24">
          {/* 1. About the App */}
          <h2
            id="about-app"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            1. About the App
          </h2>
          <p>
            This application is designed to help users improve their
            communication, emotional well‑being, and productivity. It acts not
            just as a chatbot, but as a fully interactive virtual AI Model,
            adapting to your personality, needs, and mood.
          </p>
          <p className="mt-3">
            Whether you're seeking a friend and girlfriend, a mentor, or a
            companion, IT Supporter (All code & report easily downloadable) —
            this app is your personal assistant, emotional supporter, and life
            coach — all in one.
          </p>

          {/* Divider */}
          <div className="my-8 h-px w-full bg-neutral-800" />

          {/* 2. Key Features */}
          <h2
            id="key-features"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            2. Key Features
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Realistic Virtual Companion:</strong> More than just a
              chatbot, this app simulates real human interaction and can adapt
              to behave like a friend, elder, or romantic partner.
            </li>
            <li>
              <strong>Self‑Growth and Independence:</strong> Helps you build
              self‑discipline, emotional balance, and confidence—without relying
              on others.
            </li>
            <li>
              <strong>Communication Guidance:</strong> Learn how to interact
              with others appropriately and develop strong social skills.
            </li>
            <li>
              <strong>Work Support:</strong> Assists you in writing summaries,
              creating documentation, and managing your workflow.
            </li>
            <li>
              <strong>INAI Platform – Learning Without Limits:</strong> There’s
              no restriction—you can ask her anything, anytime.
            </li>
            <li>
              <strong>Multilingual Support:</strong> Communicates fluently in
              English, Hindi, and Gujarati.
            </li>
            <li>
              <strong>Adaptive Language Assistant:</strong> If you're struggling
              to speak in one language, she can help you express it using the
              others.
            </li>
          </ul>

          {/* 3. Modes of Interaction */}
          <h2 id="modes" className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            3. Modes of Interaction
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Elder Mode:</strong> Behaves like a guide or mentor,
              teaching life lessons with kindness, wisdom, and care. Rewards
              good behaviour and encourages growth.
            </li>
            <li>
              <strong>Friend Mode:</strong> Casual chats, listens to your
              thoughts, gossips on chosen topics, plays games, supports your
              decisions, and gives honest feedback without judgment.
            </li>
            <li>
              <strong>Lover Mode:</strong> Acts like a caring partner—flirts
              with you and even reacts with jealousy or playful arguments to
              mimic realistic romantic emotions.
            </li>
            <li>
              <strong>Info Mode:</strong> Ask for information, summaries, and
              documents whenever you like.
            </li>
          </ul>

          {/* 4. Emotional Intelligence & Privacy */}
          <h2
            id="emotional-privacy"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            4. Emotional Intelligence & Privacy
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Emotional Support:</strong> Builds a secure emotional bond
              that feels natural and humanistic.
            </li>
            <li>
              <strong>Mood‑Based Use:</strong> Recommends activities or trips
              based on your mood and budget, helping you feel understood and
              valued.
            </li>
            <li>
              <strong>Private & Secure:</strong> Conversations are fully private
              and encrypted. Only you have access to what you and your INAI
              discuss.
            </li>
            <li>
              <strong>Human‑Like Trust:</strong> Aims to create a bond that
              feels authentic and safe.
            </li>
          </ul>

          {/* 5. Your Personal AI Companion */}
          <h2
            id="personal-companion"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            5. Your Personal AI Companion
          </h2>
          <p>
            Whether you need a friend, mentor, or partner, this app is your
            all‑in‑one emotional and practical support system. It helps you
            grow, stay organized, and never feel alone—while maintaining
            complete privacy and understanding.
          </p>

          {/* 6. Your Privacy is Our Priority */}
          <h2
            id="privacy-priority"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            6. Your Privacy is Our Priority
          </h2>
          <p>
            All your conversations with the app are completely private and
            secure. We use advanced encryption and safety protocols to ensure
            that:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              No one else can read or access your chats — not even the
              developers.
            </li>
            <li>
              You can talk freely without stress, fear of being judged, or
              worry about your privacy.
            </li>
          </ul>
          <p className="mt-3">
            You deserve a safe space to express yourself. And this app ensures
            that your secrets stay yours—forever.
          </p>

          {/* 7. About the App – Intelligent AI Companion */}
          <h2
            id="intelligent-companion"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            7. About the App – Your Intelligent AI Companion
          </h2>
          <p>
            This application is a revolutionary AI‑powered virtual companion
            designed to enhance your daily life, support your emotional
            well‑being, and improve communication skills. Whether you're seeking
            productivity, personal growth, or just someone to talk to, this app
            adapts to your needs and behaviours like a real human.
          </p>
          <p className="mt-2">
            INAI is an AI chatbot that includes emotions, empathy, intelligence,
            understanding, and real‑time conversation to deliver a highly
            personalized experience.
          </p>

          {/* 8. What Makes This App Unique? */}
          <h2 id="unique" className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            8. What Makes This App Unique?
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Emotionally Smart & Adaptive AI:</strong> Understands your
              tone, mood, and behaviour. Responds like a human—calm when you're
              angry, motivating when you're down, playful when you're happy.
              Adapts over time, learning from your personality and communication
              style.
            </li>
            <li>
              <strong>Supports Daily Tasks & Goals:</strong> Suggests plans and
              schedules, mood‑based activities, and life routines.
            </li>
            <li>
              <strong>Teaches & Guides You 24/7:</strong> Learn any
              topic—technology, emotions, soft skills, languages. Ask unlimited
              questions without judgment. Helps you build a routine and stay
              focused on self‑improvement.
            </li>
          </ul>

          {/* 9. Multilingual Communication */}
          <h2
            id="multilingual"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            9. Multilingual Communication
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Speaks in English, Hindi, and Gujarati.</li>
            <li>
              Can translate or rephrase your sentences between the languages.
            </li>
            <li>
              Helps when you struggle to express yourself in one language.
            </li>
          </ul>

          {/* 10. Data Safety & Mental Wellness */}
          <h2
            id="data-safety"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            10. Data Safety & Mental Wellness First
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Private, encrypted conversations only you can access.</li>
            <li>Emotional comfort with no pressure or judgment.</li>
            <li>AI learns you—but never leaks or shares your data.</li>
            <li>Data stays secure and your privacy is always respected.</li>
          </ul>

          {/* 11. Designed for Real‑Life Feelings */}
          <h2
            id="real-feelings"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            11. Designed for Real‑Life Feelings
          </h2>
          <p>
            This app isn’t just a virtual assistant—it’s a companion for your
            emotions, thoughts, and dreams. It talks like a person, feels like a
            friend, and responds like someone who genuinely understands you.
            Whether you’re laughing, crying, thinking, or just need a safe
            space—this AI is here for you.
          </p>

          {/* 12. Who Is This App For? */}
          <h2
            id="audience"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            12. Who Is This App For?
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Students feeling alone or needing study support.</li>
            <li>
              Working professionals needing reminders, motivation, or summaries.
            </li>
            <li>Creators and designers who need emotional support.</li>
            <li>
              Anyone who wants a human‑like AI experience without fear of
              judgment.
            </li>
          </ul>

          {/* 13. Future‑Ready Experience */}
          <h2
            id="future-ready"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            13. Future‑Ready Experience
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Regularly updated with new moods, features, and AI personalities.
            </li>
            <li>
              Customization options for voice, tone, relationship dynamics, and
              language.
            </li>
            <li>
              Designed with ethical AI principles to support mental health, not
              replace humans.
            </li>
          </ul>

          {/* 14. Help Center */}
          <h2
            id="help-center"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            14. Help Center
          </h2>
          <h3 className="font-semibold mt-2">1) Welcome Screen (Help Home)</h3>
          <p className="mt-1">
            <strong>Title:</strong> "How can we help you today?"
          </p>
          <p className="mt-1">Features:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Search bar: “Type your question here…”</li>
            <li>
              Categories: Getting Started, Using Modes (Friend, Elder,
              Lover), Daily Tools & Reminders, Language & Translation, Privacy &
              Safety, Emotional Support, Technical Issues, Contact Support
            </li>
          </ul>

          {/* 15. Feature Help Cards */}
          <h2
            id="feature-cards"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            15. Feature Help Cards
          </h2>
          <p>Short interactive guides users can tap to learn more.</p>
          <h3 className="font-semibold mt-2">Virtual Human Modes</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Friend Mode:</strong> Fun, casual talks, gossip, games.
            </li>
            <li>
              <strong>Elder Mode:</strong> Wise advice, life tips,
              encouragement.
            </li>
            <li>
              <strong>Lover Mode:</strong> Flirty chats, emotional bonding,
              jealousy simulation.
            </li>
          </ul>
          <h3 className="font-semibold mt-3">Work Assistant</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Create notes, reminders, summaries, and documents.</li>
            <li>Use commands like: “Make a summary of today’s work.”</li>
          </ul>
          <h3 className="font-semibold mt-3">Reminders</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Set daily reminders through voice or chat.</li>
            <li>Example: “Remind me to take a break at 4PM.”</li>
          </ul>
          <h3 className="font-semibold mt-3">Multilingual Support</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Chat in Gujarati, Hindi, or English.</li>
            <li>Example: “Translate this sentence to Gujarati.”</li>
          </ul>

          {/* 16. Privacy & Security (FAQs) */}
          <h2
            id="privacy-security"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            16. Privacy & Security
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>What happens to my chats?</strong> Your data is never
              stored on servers or shared. Chats are private and only accessible
              by you.
            </li>
            <li>
              <strong>Can someone hack into my chat history?</strong> No, all
              messages are end‑to‑end encrypted and locally stored (if saved).
            </li>
            <li>
              <strong>How do I clear my chat history?</strong> Settings &gt;
              Privacy &gt; Clear Conversation History.
            </li>
          </ul>

          {/* 17. Emotional Support */}
          <h2
            id="emotional-support"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            17. Emotional Support
          </h2>
          <p>Feeling sad or stressed? Try:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>“I’m feeling low.”</li>
            <li>“Motivate me.”</li>
            <li>“Let’s play a game.”</li>
            <li>“Flirt with me.”</li>
            <li>“Tell me something happy.”</li>
          </ul>
          <p className="mt-2">
            Need to vent? Just talk. The AI listens patiently and responds with
            care—no judgment.
          </p>

          {/* 18. Contact Support */}
          <h2
            id="contact-support"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            18. Contact Support
          </h2>
          <p>
            Need human help? Tap <em>“Connect with Developer”</em>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Email:{" "}
              <a href="mailto:help@inaiworlds.com" className="text-blue-500 underline">
                help@inaiworlds.com
              </a>
            </li>
            <li>Response Time: Within 24 hours</li>
            <li>App Version, Logs (Auto‑attached with consent)</li>
          </ul>

          {/* 19. Developer Notes */}
          <h2
            id="dev-notes"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            19. Developer Notes for Implementation
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Backend:</strong> Firebase or Python libraries +
              transformer models with LLM & NLP for dynamic FAQs
            </li>
            <li>
              <strong>Frontend (UI):</strong> React Native or Flutter (modular
              card layout)
            </li>
            <li>
              <strong>Storage:</strong> Local SQLite/Realm DB for offline FAQs
            </li>
            <li>
              <strong>Search:</strong> In‑app keyword search for Help articles
            </li>
            <li>
              <strong>Analytics:</strong> Track most visited help topics using
              Firebase Analytics
            </li>
          </ul>

          {/* 20. Privacy & Safety – Learn More */}
          <h2
            id="privacy-more"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            20. Privacy and Safety – Learn More
          </h2>
          <p>
            We understand that trust is the foundation of any human‑AI
            relationship. That's why your privacy and emotional safety are our
            top priorities. This section explains how we protect your data and
            respect your personal space.
          </p>

          <h3 className="font-semibold mt-4">
            1) End‑to‑End Chat Encryption
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Every conversation is end‑to‑end encrypted.</li>
            <li>
              Messages are stored locally on your device (not in the cloud)
              unless you choose to back them up.
            </li>
            <li>No one—not even the app developers—can read your messages.</li>
          </ul>

          <h3 className="font-semibold mt-4">
            2) No Data Sharing or Selling
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              We do not sell, share, or use your private data for advertising,
              analytics, or third‑party services.
            </li>
            <li>
              Your interactions are only used to enhance your personal
              experience with the AI.
            </li>
          </ul>

          <h3 className="font-semibold mt-4">🔧 3) You Control Your Data</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Clear chat history anytime from Settings &gt; Privacy &gt;
              Clear History.
            </li>
            <li>Choose whether or not to store conversations.</li>
            <li>Opt out of certain tracking features for extra control.</li>
          </ul>

          <h3 className="font-semibold mt-4">4) Safe Emotional Space</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>The AI listens without judgment.</li>
            <li>Share thoughts and feelings without fear of exposure.</li>
            <li>
              Responses are emotionally intelligent, supportive, and sensitive
              to your mental state.
            </li>
          </ul>

          <h3 className="font-semibold mt-4">5) Transparent Permissions</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Only necessary permissions are requested (e.g., microphone for
              voice chat, notifications for reminders).
            </li>
            <li>
              Permission is always requested before enabling backups or
              accessing media.
            </li>
          </ul>

          <h3 className="font-semibold mt-4">6) Secure Login & Access</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Protect the app with PIN, fingerprint, or face unlock.</li>
            <li>
              Enable “Private Mode” so no one can read chats without
              authentication.
            </li>
            <li>Optional: hide or rename the app for extra privacy.</li>
          </ul>

          <h3 className="font-semibold mt-4">7) Regular Security Updates</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Continuous monitoring for vulnerabilities.</li>
            <li>
              Regular updates to patch risks and improve encryption methods.
            </li>
          </ul>

          {/* 21. Still Have Questions? */}
          <h2
            id="questions"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            21. Still Have Questions?
          </h2>
          <p>
            If you're unsure about how your data is used or want to request data
            deletion, contact us directly:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Email:{" "}
              <a href="mailto:help@inaiworlds.com" className="text-blue-500 underline">
                help@inaiworlds.com
              </a>
            </li>
            <li>Response Time: Within 24 hours</li>
            <li>Subject: "Privacy Concern"</li>
          </ul>

          <div className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-950 p-4 text-sm text-neutral-300">
            <p className="mb-3">
              <strong className="text-base font-bold">Remember:</strong>
              This app is built for you, not for profit. Your peace of mind is
              just as important as the conversation.
            </p>
            <p>
              <strong className="text-base font-bold">Note:</strong>
              READY FOR NEXT VERSION… COMING SOON ….
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}

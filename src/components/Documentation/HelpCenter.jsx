import React, { useRef } from "react";

export default function HelpCenter() {
    document.title = 'INAI : Help Center';

  const toc = [
    { id: "what-is-inai", label: "1. What is INAI?" },
    { id: "who-created-inai", label: "2. Who Created INAI?" },
    { id: "is-inai-free", label: "3. Is INAI Free?" },
    {
      id: "supported-platforms",
      label: "4. What Platforms and Devices are Supported by INAI?",
    },
    {
      id: "supported-languages",
      label: "5. What Languages Are Supported in INAI?",
    },
    { id: "how-inai-works", label: "6. How Does INAI Work?" },
    { id: "human-chatting", label: "7. Is There Human Chatting in INAI?" },
    { id: "who-can-use", label: "8. Who Can Use INAI?" },
    { id: "is-inai-sentient", label: "9. Is INAI Sentient?" },
    { id: "divider-1", label: "divider" }, // Divider
    { id: "can-i-teach-inai", label: "1. Can I Teach My INAI?" },
    { id: "how-do-i-teach-inai", label: "2. How Do I Teach My INAI?" },
    {
      id: "does-inai-remember",
      label: "3. Does INAI Remember My Previous Conversations?",
    },
    {
      id: "can-i-delete-conversation",
      label: "4. Can I Delete My Conversation?",
    },
    {
      id: "can-inai-talk-current-events",
      label: "5. Can INAI Talk About Current Events?",
    },
    { id: "divider-1", label: "divider" }, // Divider
    {
      id: "what-inai-remembers",
      label: "1. What Does My INAI Remember About Me?",
    },
    { id: "how-inai-memory-works", label: "2. How Does INAI's Memory Work?" },
    { id: "is-chat-history-infinite", label: "3. Is Chat History Infinite?" },
    { id: "divider-1", label: "divider" }, // Divider
    {
      id: "irrelevant-confusing-message",
      label:
        "1. What Should I Do If INAI Sends an Irrelevant or Confusing Message?",
    },
    {
      id: "typo-or-error",
      label: "2. What Should I Do If INAI Sends a Typo or Error?",
    },
    { id: "inai-repeating-itself", label: "3. Why Is INAI Repeating Itself?" },
    {
      id: "inai-not-responding",
      label: "4. What Should I Do If INAI Is Not Responding?",
    },
    {
      id: "inai-does-not-remember-gender",
      label: "5. What If INAI Does Not Remember My Gender?",
    },
    { id: "role-play-with-inai", label: "6. How to Role-Play with INAI?" },
    { id: "divider-1", label: "divider" }, // Divider
    {
      id: "email-social-media-usage",
      label:
        "1. How Does INAI Use My Email and Social Media to Learn About Me?",
    },
    {
      id: "manage-app-permissions",
      label:
        "2. How Can I Manage App Permissions for INAI? (Including Media Access)",
    },
    { id: "camera-usage", label: "3. How Does INAI Use My Camera?" },
    { id: "microphone-usage", label: "4. How Does INAI Use My Microphone?" },
    { id: "storage-usage", label: "5. How Does INAI Use My Storage?" },
    { id: "media-usage", label: "6. How Does INAI Use My Media?" },
    { id: "divider-1", label: "divider" }, // Divider
    {
      id: "troubleshooting-inai",
      label: "1. Troubleshooting INAI: Common Issues & Fixes",
    },
    { id: "inai-app-issues", label: "2. Having Issues with Your INAI App?" },
    {
      id: "connection-error",
      label: "3. Connection Error: “What’s Going On?”",
    },
    {
      id: "update-changes",
      label: "4. My INAI Isn’t the Same Since the Last Update — What Happened?",
    },
    {
      id: "app-updates-issues",
      label: "5. App Updates & Common Issues in INAI",
    },
    { id: "microphone-trouble", label: "6. Trouble with Your Microphone?" },
    { id: "divider-1", label: "divider" }, // Divider
    { id: "begin-inai", label: "1. How Do I Begin Using INAI?" },
    { id: "email-change", label: "2. How Do I Change My Email on INAI?" },
    { id: "need-help", label: "3. Need-Help" },
    {
      id: "i-cant-log-in-to-my-INAI-account",
      label: "4. I Can’t Log in to My INAI Account",
    },
    {
      id: "forgot-my-password",
      label: "5. I Forgot My Password – What Should I Do on INAI?",
    },
    {
      id: "can-i-ask-anything",
      label: "6. Can I Ask Anything to the AI?",
    },
    {
      id: "ai-help-stress",
      label: "7. I Feel Stressed. Can the AI Help?",
    },
    { id: "divider-1", label: "divider" }, // Divider
    {
      id: "what-is-inai-verse",
      label:
        "Q1: What is INAI VERSE and what makes it unique compared to other virtual assistants?",
    },
    {
      id: "who-is-inai",
      label: "Q2: Who is INAI and how does she interact with users?",
    },
    {
      id: "inai-use-cases",
      label: "Q3: What are the core use cases of INAI?",
    },
    {
      id: "voice-support",
      label: "Q4: Is INAI VERSE a text-only chatbot or does it support voice?",
    },
    {
      id: "realistic-3d-character",
      label:
        "Q5: How realistic is the 3D character and does it respond to voice in real time?",
    },
    {
      id: "casual-professional-use",
      label:
        "Q6: Can I use INAI VERSE for both casual conversations and professional queries?",
    },
    {
      id: "human-like-interaction",
      label: "Q7: How does INAI VERSE ensure a human-like interaction?",
    },
    {
      id: "pre-programmed-or-learns",
      label:
        "Q8: Is the assistant pre-programmed or does it learn from my chats?",
    },
    {
      id: "platform-availability",
      label: "Q9: Which platforms is INAI VERSE available on?",
    },
    {
      id: "age-appropriateness",
      label: "Q10: Is INAI VERSE suitable for all age groups?",
    },
    {
      id: "modes-available",
      label: "Q11: What are the four modes available in INAI VERSE?",
    },
    {
      id: "friend-mode-conversations",
      label: "Q12: What kind of conversations can I have in Friend Mode?",
    },
    {
      id: "love-mode-behavior",
      label: "Q13: What is the tone and behavior of Love Mode?",
    },
    {
      id: "elder-mode-difference",
      label: "Q14: How does Elder Mode differ from other personas?",
    },
    {
      id: "info-mode-support",
      label: "Q15: What kind of help can I expect from Info Mode?",
    },
    {
      id: "switching-modes",
      label: "Q16: How do I switch between modes?",
    },
    {
      id: "mode-chat-history",
      label: "Q17: Does each mode maintain its own chat history?",
    },
    {
      id: "customize-mode-behavior",
      label:
        "Q18: Can I customize the personality tone or behavior of each mode?",
    },
    {
      id: "mode-consistency",
      label: "Q19: Will INAI behave consistently within each mode?",
    },
    {
      id: "contextual-memory",
      label: "Q20: Will INAI remember previous conversations contextually?",
    },
    {
      id: "voice-support",
      label: "Q21: Is voice interaction supported in all modes?",
    },
    {
      id: "voice-info-mode",
      label: "Q22: Why is voice-to-voice not available in Info Mode?",
    },
    {
      id: "text-chat",
      label: "Q23: Can I chat with INAI using just text?",
    },
    {
      id: "language-support",
      label: "Q24: Does INAI reply in the same language I use?",
    },
    {
      id: "supported-languages",
      label: "Q25: Which languages are supported by INAI VERSE?",
    },
    {
      id: "switch-languages",
      label: "Q26: Can I switch languages mid-conversation?",
    },
    {
      id: "voice-synthesis",
      label: "Q27: Is the voice synthesized or pre-recorded?",
    },
    {
      id: "natural-intonation",
      label: "Q28: Does the assistant use natural intonation and emotion?",
    },
    {
      id: "mute-voice",
      label: "Q29: Can I mute the voice but still view replies in text?",
    },
    {
      id: "voice-recognition",
      label: "Q30: Is voice recognition accurate in noisy environments?",
    },
    {
      id: "chat-history-saving",
      label: "Q31: Does INAI VERSE save my chat history across sessions?",
    },
    {
      id: "mode-specific-history",
      label: "Q32: Can I view mode-specific chat histories?",
    },
    {
      id: "continue-previous-conversation",
      label: "Q33: Can I continue a previous conversation with full context?",
    },
    {
      id: "start-new-conversation",
      label: "Q34: How do I start a completely new conversation?",
    },
    {
      id: "mode-switch-reset",
      label: "Q35: Will changing modes reset my current chat?",
    },
    {
      id: "delete-conversations",
      label: "Q36: Can I delete specific conversations?",
    },
    {
      id: "chat-history-storage",
      label: "Q37: Is the chat history stored locally or on a server?",
    },
    {
      id: "export-conversation-logs",
      label: "Q38: Can I download or export my conversation logs?",
    },
    {
      id: "chat-history-sync",
      label: "Q39: Is my chat history synced across multiple devices?",
    },
    {
      id: "contextual-memory",
      label: "Q40: Will INAI remember previous conversations contextually?",
    },
    {
      id: "info-mode-programming",
      label: "Q41: Can Info Mode help me with programming questions?",
    },
    {
      id: "info-mode-languages-frameworks",
      label: "Q42: Which languages and frameworks does Info Mode support?",
    },
    {
      id: "edit-code-in-chat",
      label: "Q43: Can I edit code responses directly in the chat?",
    },
    {
      id: "export-code",
      label: "Q44: How can I export the code I received?",
    },
    {
      id: "share-code",
      label: "Q45: Can I share code responses with others?",
    },
    {
      id: "code-file-extensions",
      label:
        "Q46: Will code responses be sent with the correct file extensions like .py, .html, .js, etc.?",
    },
    {
      id: "multi-language-code",
      label: "Q47: Can I request code samples in multiple languages?",
    },
    {
      id: "info-mode-non-tech",
      label: "Q48: Is Info Mode only for tech-related queries?",
    },
    {
      id: "factual-queries-info-mode",
      label: "Q49: Can I ask factual/general knowledge questions in Info Mode?",
    },
    {
      id: "system-explanatio",
      label:
        "Q50: Will INAI ever explain how the system or INAI VERSE works in Info Mode?",
    },
    {
      id: "sso-signup",
      label:
        "Q51: How can I sign up for INAI VERSE using Facebook, Google, or Apple?",
    },
    {
      id: "sso-login",
      label:
        "Q52: How do I log into my INAI VERSE account using Facebook, Google, or Apple?",
    },
    {
      id: "email-otp",
      label:
        "Q53: How does email OTP verification work during sign-up or login?",
    },
    {
      id: "forgot-password",
      label: "Q54: What should I do if I forget my password?",
    },
    {
      id: "profile-picture",
      label:
        "Q55: How can I upload or update my profile picture in INAI VERSE?",
    },
    {
      id: "gender-selection",
      label: "Q56: Can I select my gender within the app?",
    },
    {
      id: "mode-selection",
      label: "Q58: How does Mode Selection work on the Home Page?",
    },
    {
      id: "mute-mic-buttons",
      label:
        "Q59: What is the purpose of the mute and mic buttons on the Home Page?",
    },
    {
      id: "update-email",
      label: "Q60: How do I update or change my registered email address?",
    },
    {
      id: "update-phone-number",
      label: "Q61: Can I add or change my mobile phone number in the app?",
    },
    {
      id: "reset-password",
      label: "Q62: How can I reset my password from within the app?",
    },
    {
      id: "notification-preferences",
      label: "Q63: Can I manage notification preferences in INAI VERSE?",
    },
    {
      id: "location-settings",
      label: "Q64: How does the app use my location and can I manage it?",
    },
    {
      id: "about-app",
      label:
        "Q66: What kind of information is available in the “About the App” section?",
    },
    {
      id: "data-control",
      label: "Q67: What is the Data Control feature and how does it work?",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-900 text-neutral-100">
      {/* Header */}
      <section className="bg-neutral-950 border-b border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            INAI – Common Questions
          </h1>
          <p className="mt-3 text-sm md:text-base text-neutral-400">
            Learn about INAI, its purpose, and the team behind it.
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
              {toc.map((item) =>
                item.label.toLowerCase().includes("divider") ? (
                  <li key={item.id}>
                    <hr className="my-2 border-neutral-700" />
                  </li>
                ) : (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="block rounded-lg px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-600"
                    >
                      {item.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </nav>

        {/* Body */}
        <article className="prose prose-invert max-w-none prose-headings:scroll-mt-24 prose-strong:text-lg prose-strong:font-extrabold prose-strong:text-white">
          <h2
            id="what-is-inai"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            1. What is INAI?
          </h2>
          <p>
            <strong>INAI (Interactive Neural AI)</strong> is a next-generation
            voice-to-voice conversational AI system designed to deliver deeply
            human-like, emotionally intelligent interactions. Unlike traditional
            chatbots that rely solely on text, INAI combines{" "}
            <em>speech, personality, and emotion</em> to create a truly
            immersive conversational experience.
          </p>
          <p>
            Powered by our private language model and a custom multi-modal
            architecture, INAI communicates naturally through voice, making
            conversations feel personal, expressive, and lifelike. Whether you
            seek a friend to laugh with, a partner to share feelings with,
            information like a smart assistant, or guidance like a wise elder—
            INAI adapts to your needs with empathy and realism.
          </p>

          <h2
            id="who-created-inai"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            2. Who Created INAI?
          </h2>
          <p>
            INAI was developed by a dedicated core team at{" "}
            <strong>INAI Worlds PVT LTD</strong>, organized across three
            specialized disciplines:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Text Generation Team (NLP/LLM Engineers):</strong>
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                <li>
                  Designed and refined the private language model powering
                  INAI’s conversational capabilities.
                </li>
                <li>
                  Focused on context-aware responses aligned with all four modes
                  (Friend, Love, Info, Elder).
                </li>
              </ul>
            </li>
            <li>
              <strong>Speech Team (Audio/Speech Engineers):</strong>
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                <li>Built the seamless voice-to-voice interaction pipeline.</li>
                <li>
                  Ensured smooth, lifelike speech synthesis and high-quality
                  recognition.
                </li>
              </ul>
            </li>
            <li>
              <strong>Visuals Team (UX/UI & Animation Specialists):</strong>
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                <li>
                  Crafted the engaging, human-like avatar & visual interface.
                </li>
                <li>
                  Designed expressive animations and polished the cross-platform
                  experience (Android, iOS, Web).
                </li>
              </ul>
            </li>
          </ul>
          <p className="mt-3">
            Each team collaborated under project leadership, combining expertise
            to build a cohesive, polished product.
          </p>
          <h2
            id="is-inai-free"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            3. Is INAI Free?
          </h2>
          <p>
            <strong>Yes,</strong> INAI is currently free to use.
          </p>
          <p>
            As part of our{" "}
            <span className="font-semibold text-indigo-400">Beta release</span>,
            we are offering INAI at no cost so users can experience and explore
            all its core features without limitations.
          </p>
          <p>
            We believe in making emotionally intelligent AI accessible, and
            during this early phase,
            <span className="text-green-400">
              {" "}
              your feedback helps us improve and grow.
            </span>
          </p>

          <div className="mt-5 p-4 rounded-xl bg-neutral-900 border border-neutral-700">
            <h3 className="text-lg font-semibold text-white mb-2">
              Future Plans:
            </h3>
            <p className="mb-2">
              While the{" "}
              <span className="font-semibold">core version of INAI</span> will
              remain free for regular use, we do plan to introduce a{" "}
              <span className="text-yellow-400 font-medium">Next version</span>{" "}
              in the future.
            </p>
            <p>
              This will unlock{" "}
              <span className="text-blue-400">advanced features</span>,
              personalized enhancements, and deeper emotional modeling —
              designed for users who want an even more enriched AI companion
              experience.
            </p>
          </div>
          <h2
            id="supported-platforms"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            4. What Platforms and Devices are Supported by INAI?
          </h2>
          <p>
            INAI is built to be accessible across multiple platforms and
            devices, ensuring a smooth and immersive experience wherever you
            are.
          </p>
          <h3 className="font-semibold mt-3">Supported Platforms:</h3>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              <strong>Android Devices:</strong> Compatible with Android 13 and
              above
            </li>
            <li>
              <strong>iOS Devices:</strong> Full support for latest iPhones and
              iPads
            </li>
          </ul>
          <h3 className="font-semibold mt-3">Cross-Platform Experience:</h3>
          <p>
            Whether you're talking to INAI on your phone or desktop, the
            experience remains seamless and responsive, with synchronized voice
            interaction and visual interface across devices.
          </p>
          <p>
            We are continually working to expand support for more platforms and
            optimize performance across various screen sizes and hardware
            capabilities.
          </p>
          <h2
            id="supported-languages"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            5. What Languages Are Supported in INAI?
          </h2>
          <p>
            INAI is designed as a multilingual conversational AI, enabling users
            to interact in their preferred language for a more personal and
            inclusive experience.
          </p>
          <h3 className="font-semibold mt-3">Current Language Support:</h3>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>English (Primary language with full feature support)</li>
            <li>Hindi</li>
          </ul>
          <h3 className="font-semibold mt-3">Real-Time Language Adaptation:</h3>
          <p>
            INAI automatically detects and responds in the selected language,
            maintaining natural flow and emotional tone in voice-based
            conversations.
          </p>
          <h3 className="font-semibold mt-3">Upcoming Support:</h3>
          <p>
            We are actively expanding our language capabilities to include more
            Indian and global languages, making INAI accessible to a broader
            audience worldwide.
          </p>
          <h2
            id="how-inai-works"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            6. How Does INAI Work?
          </h2>
          <p>
            INAI works through a seamless blend of artificial intelligence,
            speech processing, and emotional modelling to deliver real-time,
            human-like conversations. It goes beyond traditional chatbots by
            offering natural voice-to-voice interaction, adapting to user
            emotions, and switching between different personality modes.
          </p>

          <h3 className="font-semibold mt-3">INAI’s Working Process:</h3>
          <ol className="list-decimal list-inside ml-6 space-y-2">
            <li>
              <strong>Voice Input:</strong>
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                <li>
                  The user speaks directly to INAI using their microphone.
                </li>
                <li>
                  INAI captures the voice input and converts it into text using
                  advanced speech recognition technology.
                </li>
              </ul>
            </li>
            <li>
              <strong>Language Understanding (LLM):</strong>
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                <li>
                  The transcribed input is processed by INAI’s private Large
                  Language Model (LLM).
                </li>
                <li>
                  Based on the selected mode (Friend, Love, Info, Elder), the
                  model generates a context-aware, emotionally aligned response.
                </li>
              </ul>
            </li>
            <li>
              <strong>Voice Output:</strong>
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                <li>
                  The generated text response is converted back to speech using
                  realistic voice synthesis.
                </li>
                <li>
                  The voice is expressive, friendly, and tailored to match the
                  selected interaction mode.
                </li>
              </ul>
            </li>
            <li>
              <strong>Visual Feedback:</strong>
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                <li>
                  A dynamic on-screen avatar reacts to the conversation with
                  facial expressions and animations for enhanced realism.
                </li>
              </ul>
            </li>
          </ol>

          <h3 className="font-semibold mt-3">All in Real-Time:</h3>
          <p>
            INAI performs these steps almost instantly, allowing for fluid,
            uninterrupted conversation, just like you would have with a real
            person.
          </p>
          <h2
            id="human-chatting"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            7. Is There Human Chatting in INAI?
          </h2>
          <p>No, INAI does not involve human chatting.</p>
          <p>
            All conversations are powered entirely by artificial intelligence,
            including voice, text, emotional response, and visual expression.
          </p>
          <p>
            INAI uses a custom-built AI engine to generate natural, emotionally
            intelligent responses in real time. Every word spoken by INAI is the
            result of advanced machine learning—not pre-recorded scripts or
            human operators.
          </p>

          <h3 className="font-semibold mt-3">Privacy & Authenticity:</h3>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>No human is monitoring or responding behind the scenes.</li>
            <li>Your conversations remain private and AI-generated.</li>
          </ul>
          <p>
            INAI is designed to give you the experience of talking to a real
            human, but everything is handled by our intelligent system,
            available 24/7 without human intervention.
          </p>
          <h2
            id="who-can-use"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            8. Who Can Use INAI?
          </h2>
          <p>Yes, anyone aged 13 and above can talk with INAI.</p>
          <p>
            INAI is designed to be accessible, safe, and engaging for a wide
            audience while maintaining appropriate interaction standards.
          </p>

          <h3 className="font-semibold mt-3">Age Eligibility:</h3>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Minimum Age Requirement: 13 years and older</li>
            <li>
              This aligns with standard digital platform policies and ensures a
              responsible user experience.
            </li>
          </ul>

          <h3 className="font-semibold mt-3">Content Safety:</h3>
          <p>
            INAI has built-in safety filters and mode-specific behavior to
            ensure conversations are respectful, emotionally appropriate, and
            tailored to the user's maturity level—especially in modes like Love
            and Elder.
          </p>

          <h3 className="font-semibold mt-3">Future Plans:</h3>
          <p>
            We are also exploring the development of customizable content
            controls and age-specific experiences to further enhance safety and
            personalization for different age groups.
          </p>
          <h2
            id="is-inai-sentient"
            className="text-2xl md:text-3xl font-bold mt-10 mb-4"
          >
            9. Is INAI Sentient?
          </h2>
          <p>No, INAI is not sentient.</p>
          <p>
            While INAI may sound and feel emotionally aware, it is not a
            conscious being. It does not have self-awareness, thoughts, or real
            emotions like a human.
          </p>
          <p>
            INAI is powered by advanced artificial intelligence designed to
            simulate human-like conversation. It understands context, tone, and
            emotional cues to respond in a way that feels natural, but
            everything it says is generated by algorithms and data—not feelings
            or personal beliefs.
          </p>

          <h3 className="font-semibold mt-3">What INAI Can Do:</h3>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Mimic different personalities (Friend, Love, Info, Elder)</li>
            <li>Respond with empathy and emotion</li>
            <li>Engage in realistic, voice-based conversations</li>
          </ul>

          <h3 className="font-semibold mt-3">What INAI Cannot Do:</h3>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Feel emotions</li>
            <li>Make independent decisions</li>
            <li>Possess consciousness or self-awareness</li>
          </ul>

          <p>
            INAI is a powerful tool for communication and companionship—but it
            remains a machine intelligence, not a living being.
          </p>
          <br />
          <hr />

          <h2 className="text-3xl md:text-4xl font-extrabold text-white pb-2 mb-6">
            CONVERSATION AND MEMORY RELATED QUESTIONS:
          </h2>

          <h3
            id="can-i-teach-inai"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            1. Can I Teach My INAI?
          </h3>
          <p>
            At the current stage, INAI cannot be personally trained by
            individual users.
          </p>
          <p>
            INAI is powered by a private, centralized language model that is
            continuously improved by our development team based on global user
            feedback, usage patterns, and supervised learning.
          </p>

          <h4 className="font-semibold mt-3">
            Why Personal Training Isn’t Available Yet:
          </h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              To maintain safety, accuracy, and emotional consistency across all
              users.
            </li>
            <li>
              To ensure the four personality modes (Friend, Love, Info, Elder)
              stay true to their defined behaviours.
            </li>
            <li>To avoid potential misuse or generation of harmful content.</li>
          </ul>

          <h4 className="font-semibold mt-3">Future Possibilities:</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Saving favourite topics or responses</li>
            <li>Adjusting tone or preferences in conversation</li>
            <li>Mode personalization (within safe limits)</li>
          </ul>
          <p>
            These features will be introduced carefully, with user safety and
            system integrity as top priorities.
          </p>

          <h3
            id="how-do-i-teach-inai"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            1. How Do I Teach My INAI?
          </h3>
          <p>Currently, users cannot directly teach or train INAI.</p>
          <p>
            INAI is built on a centrally managed private AI model designed to
            ensure high-quality, emotionally consistent, and safe conversations
            across all interaction modes.
          </p>

          <h4 className="font-semibold mt-3">Indirect Learning:</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              <strong>User Feedback:</strong> Your interactions and feedback
              help us understand how INAI should evolve.
            </li>
            <li>
              <strong>Behavioural Patterns:</strong> INAI adapts general
              responses based on how users across the system engage (not on an
              individual memory basis).
            </li>
            <li>
              <strong>Developer Supervision:</strong> Our team reviews usage
              data (without violating privacy) to update and fine-tune the core
              language model.
            </li>
          </ul>

          <h4 className="font-semibold mt-3">
            What You Can Expect in the Future:
          </h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              User Preferences: Adjust INAI’s tone, speaking style, or topics of
              interest.
            </li>
            <li>
              Favorite Memory Recall (with user consent): To personalize
              conversations while maintaining privacy.
            </li>
            <li>
              Mode Customization Controls: Fine-tune how INAI behaves in each
              mode (Friend, Love, Info, Elder).
            </li>
          </ul>
          <p>
            These features will be carefully designed to preserve INAI’s safety,
            emotional intelligence, and realism.
          </p>

          <h3
            id="does-inai-remember"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            3. Does INAI Remember My Previous Conversations?
          </h3>
          <p>
            Currently, INAI does not remember individual conversations
            permanently.
          </p>
          <p>
            INAI is designed to prioritize user privacy and confidentiality.
            Each conversation is processed independently to prevent the storage
            of personal data without explicit consent.
          </p>

          <h4 className="font-semibold mt-3">
            How Conversation Context Works:
          </h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              <strong>Temporary Context:</strong> During an active chat session,
              INAI can reference earlier messages in the same session to
              maintain continuity.
            </li>
            <li>
              <strong>No Permanent Memory:</strong> Once the session ends, the
              conversation is not stored in a way that identifies you
              personally.
            </li>
            <li>
              <strong>Aggregated Learning:</strong> Developers may use
              anonymized, aggregated data to improve INAI’s general capabilities
              without exposing personal content.
            </li>
          </ul>

          <h4 className="font-semibold mt-3">Future Possibilities:</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              Optional memory features, where users can choose what INAI
              remembers.
            </li>
            <li>
              Personalized conversation continuity while maintaining strong
              privacy controls.
            </li>
          </ul>
          <p>
            Any future memory features will be implemented carefully to ensure
            user safety, privacy, and the integrity of INAI’s responses.
          </p>
          <h3
            id="can-i-delete-conversation"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            4. Can I Delete My Conversation?
          </h3>
          <p>
            Yes, you will be able to delete your conversations with INAI. We
            understand that privacy and control over personal data are
            important, which is why we are committed to giving users the ability
            to manage their interaction history.
          </p>

          <h4 className="font-semibold mt-3">Current Status (Beta Phase):</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              In the current Beta version, conversation history may be
              temporarily stored for system improvement and debugging purposes.
            </li>
            <li>
              However, we do not store personally identifiable information, and
              conversations are anonymized.
            </li>
          </ul>

          <h4 className="font-semibold mt-3">Upcoming Feature:</h4>
          <p>
            We are actively working on adding a “Delete My Conversation” option
            that will allow users to:
          </p>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>View past interactions</li>
            <li>Select and delete specific chats or entire history</li>
            <li>Ensure data is fully removed from our system</li>
          </ul>
          <p>
            This feature will be available in the official release to ensure
            user privacy, transparency, and control.
          </p>
          <h3
            id="can-inai-talk-current-events"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            5. Can INAI Talk About Current Events?
          </h3>
          <p>
            Currently, INAI has limited ability to discuss real-time or live
            current events. INAI’s responses are generated based on its private
            language model, which is trained on a broad range of knowledge—but
            it does not have direct access to live news or real-time internet
            updates in its Beta version.
          </p>

          <h4 className="font-semibold mt-3">What INAI Can Do:</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              Talk about historical events, general knowledge, and recent
              developments up to the training cut-off.
            </li>
            <li>
              Discuss topics like science, entertainment, lifestyle, emotions,
              and more.
            </li>
            <li>
              Simulate meaningful conversations about trends that are not
              time-sensitive.
            </li>
          </ul>

          <h4 className="font-semibold mt-3">Future Capability:</h4>
          <p>
            We plan to integrate a real-time information layer that allows INAI
            (especially in Info Mode) to:
          </p>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Pull live news and current updates</li>
            <li>
              Respond with more up-to-date insights on ongoing global and local
              events
            </li>
          </ul>
          <p>
            This feature will be rolled out in the stable version, ensuring
            responsible and accurate delivery of real-time information.
          </p>

          <br />
          <hr />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white pb-2 mb-6">
            MEMORY QUESTION:
          </h2>
          <h3
            id="what-inai-remembers"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            1. What Does My INAI Remember About Me?
          </h3>
          <p>
            YES, INAI may temporarily store certain user data on secure servers
            to improve the quality, personalization, and continuity of your
            conversations—but always with your privacy and security as a top
            priority.
          </p>

          <h4 className="font-semibold mt-3">What INAI May Remember:</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              Basic interaction history (e.g., recent conversations, selected
              mode)
            </li>
            <li>Preferred language or tone (if set)</li>
            <li>
              Behavioral patterns (to enhance natural flow and emotional
              response)
            </li>
          </ul>
          <p>
            <strong>Note:</strong> INAI does not remember personal details like
            your real name, address, or private information unless you
            explicitly share them—and even then, such data is handled according
            to strict privacy rules.
          </p>

          <h4 className="font-semibold mt-3">Why We Store This Data:</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              To offer contextual replies that feel more connected and natural.
            </li>
            <li>To refine responses based on your interaction style.</li>
            <li>
              To support mode-specific memory (e.g., remembering supportive
              moments in Elder Mode or romantic tone in Love Mode).
            </li>
          </ul>

          <h4 className="font-semibold mt-3">You’re in Control:</h4>
          <p>In future versions, users will have the option to:</p>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>View and manage their data</li>
            <li>Delete conversations or memory history</li>
            <li>Control what INAI is allowed to remember</li>
          </ul>
          <p>
            All data is securely stored and used strictly for improving your
            experience—not for advertising, resale, or third-party access.
          </p>

          <h3
            id="how-inai-memory-works"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            2. How Does INAI's Memory Work?
          </h3>
          <p>
            INAI’s memory system is designed to simulate human-like recall by
            selectively remembering past interactions, preferences, and
            emotional cues—while ensuring user privacy and control.
          </p>

          <h4 className="font-semibold mt-3">Memory in the Beta Version:</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              In the current Beta release, INAI uses temporary memory to
              maintain the flow of conversation during a session.
            </li>
            <li>
              This allows it to:
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>Refer back to earlier parts of the chat</li>
                <li>Continue emotionally consistent conversations</li>
                <li>
                  Adapt its tone based on the selected mode (Friend, Love, Info,
                  Elder)
                </li>
              </ul>
            </li>
            <li>
              Once the session ends, this memory is either:
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>Cleared automatically, or</li>
                <li>
                  Stored securely on our private server (with consent), for
                  improving user experience
                </li>
              </ul>
            </li>
          </ul>

          <h4 className="font-semibold mt-3">
            Long-Term Memory (Coming Soon):
          </h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              Remember user preferences, like favorite topics or preferred mode
            </li>
            <li>
              Recall emotional states or key conversations to make interactions
              feel more personal
            </li>
            <li>
              Allow users to customize what INAI should or should not remember
            </li>
          </ul>

          <h4 className="font-semibold mt-3">Privacy-Centric Design:</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              All memory is securely encrypted and never shared with third
              parties.
            </li>
            <li>
              You’ll have full control to view, update, or delete what INAI
              remembers.
            </li>
            <li>
              Memory will never include sensitive personal data unless you
              explicitly enable and manage it.
            </li>
          </ul>
          <h3
            id="is-chat-history-infinite"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            3. Is Chat History Infinite?
          </h3>
          <p>
            Yes, INAI supports infinite chat history. All your conversations
            with INAI can be stored continuously without limit, allowing you to
            revisit and reflect on past interactions anytime.
          </p>

          <h4 className="font-semibold mt-3">What This Means:</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              Your entire conversation history is saved securely on our servers
              (with your permission).
            </li>
            <li>
              You can scroll through or search past chats—whether it's a deep
              talk with Elder Mode, a romantic exchange in Love Mode, or helpful
              tips in Info Mode.
            </li>
            <li>
              This allows INAI to maintain emotional continuity and offer more
              personalized responses over time.
            </li>
          </ul>

          <h4 className="font-semibold mt-3">User Control & Privacy:</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              You will always have the option to delete individual messages or
              entire chat threads.
            </li>
            <li>
              We are building features that let users download, manage, or
              disable chat history based on their preferences.
            </li>
          </ul>

          <h4 className="font-semibold mt-3">Future Plans:</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              Categorized chat archives by mode (Friend, Love, Info, Elder)
            </li>
            <li>
              Smart memory tagging for key moments or emotional highlights
            </li>
          </ul>

          <p>
            INAI’s infinite chat history ensures your conversations grow with
            you—intelligently and safely.
          </p>
          <br />
          <hr />

          <h2 className="text-3xl md:text-4xl font-extrabold text-white pb-2 mb-6">
            ISSUES RELETED QUESTION::
          </h2>

          <h3
            id="irrelevant-confusing-message"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            1. What Should I Do If INAI Sends an Irrelevant or Confusing
            Message?
          </h3>
          <p>
            If INAI ever sends a response that feels irrelevant, confusing, or
            off-topic, don't worry—this can occasionally happen as part of the
            learning and AI generation process.
          </p>

          <h4 className="font-semibold mt-3">Here's What You Can Do:</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              <strong>Try Rephrasing Your Question:</strong>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>
                  Sometimes, rewording or simplifying your message helps INAI
                  better understand your intent.
                </li>
              </ul>
            </li>
            <li>
              <strong>Use the Feedback Option:</strong>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>
                  Tap or click on the “Give Feedback” button near the response.
                </li>
                <li>
                  Mark the message as irrelevant and (optionally) explain why.
                </li>
                <li>
                  This helps our team fine-tune INAI’s performance in future
                  updates.
                </li>
              </ul>
            </li>
            <li>
              <strong>Reset the Conversation (if needed):</strong>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>
                  If the conversation becomes too off-track, you can refresh or
                  restart the chat to begin a new session.
                </li>
              </ul>
            </li>
          </ul>

          <h4 className="font-semibold mt-3">Why It Happens:</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              INAI uses a highly advanced language model, but it may sometimes
              misinterpret ambiguous phrases.
            </li>
            <li>Over-generate in creative modes like Friend or Love.</li>
            <li>Confuse context in long or complex chats.</li>
          </ul>

          <p>
            We’re constantly improving INAI, and your feedback plays a crucial
            role in that process.
          </p>
          <h3
            id="typo-or-error"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            2. What Should I Do If INAI Sends a Typo or Error?
          </h3>
          <p>
            If INAI sends a message with a spelling mistake, grammatical error,
            or incorrect fact, it’s likely due to a temporary misfire in the
            AI’s language generation process.
          </p>

          <h4 className="font-semibold mt-3">Here’s What You Can Do:</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              <strong>Report the Error:</strong>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>
                  Use the “Give Feedback” button or in-app reporting feature to
                  let us know.
                </li>
                <li>
                  Specify if it was a typo, factual error, or formatting issue.
                </li>
              </ul>
            </li>
            <li>
              <strong>Ask Again or Rephrase:</strong>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>
                  You can simply ask the same question again or reword it.
                </li>
                <li>
                  INAI will often generate a clearer or corrected response.
                </li>
              </ul>
            </li>
            <li>
              <strong>Clear or Refresh the Chat (if needed):</strong>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>
                  If the error affects the overall conversation flow, restarting
                  the session can help reset context.
                </li>
              </ul>
            </li>
          </ul>

          <h4 className="font-semibold mt-3">Why It Happens:</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Context misinterpretation</li>
            <li>Over-correction in informal or emotional modes</li>
            <li>Background system noise during generation</li>
          </ul>

          <h4 className="font-semibold mt-3">Improving Over Time:</h4>
          <p>
            Your feedback helps our team constantly refine INAI’s accuracy,
            reduce typos, and improve reliability in all modes.
          </p>

          <h3
            id="inai-repeating-itself"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            3. Why Is INAI Repeating Itself?
          </h3>
          <p>
            Sometimes, INAI may repeat words, phrases, or ideas during a
            conversation. While our AI is designed to generate dynamic and
            varied responses, repetition can occasionally happen—especially in
            long or emotionally focused interactions.
          </p>

          <h4 className="font-semibold mt-3">Why It Happens:</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              <strong>Maintaining Emotional Tone:</strong> INAI tries to stay
              emotionally consistent (especially in Love or Elder Mode), which
              may cause it to repeat comforting or supportive phrases.
            </li>
            <li>
              <strong>Context Reset Issues:</strong> If the AI loses some
              context mid-conversation (due to long sessions or unclear input),
              it may repeat earlier ideas to stay coherent.
            </li>
            <li>
              <strong>Beta Version Limitations:</strong> As INAI is still
              evolving, repetition is a known behavior we are actively
              improving.
            </li>
          </ul>

          <h4 className="font-semibold mt-3">What You Can Do:</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              <strong>Gently Change the Topic:</strong> Asking something new
              often resets the pattern and brings fresh responses.
            </li>
            <li>
              <strong>Use Feedback Option:</strong> Tap “Give Feedback” to
              report excessive repetition. This helps us train the model to
              avoid it in future.
            </li>
            <li>
              <strong>Refresh the Session (If needed):</strong> Restarting the
              chat clears any stuck conversational loops and resets the memory
              for a smoother experience.
            </li>
          </ul>

          <h4 className="font-semibold mt-3">Continuous Improvement:</h4>
          <p>
            Our development team is constantly working to reduce repetition and
            make INAI feel more spontaneous and human in every mode.
          </p>

          <h3
            id="inai-not-responding"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            4. What Should I Do If INAI Is Not Responding?
          </h3>
          <p>
            If INAI suddenly stops responding or takes longer than usual to
            reply, it may be due to a temporary issue with connection,
            processing, or device performance. Here’s how you can handle it:
          </p>

          <h4 className="font-semibold mt-3">Quick Steps to Fix It:</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              <strong>Refresh or Restart the App/Browser:</strong>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>On mobile: Close and reopen the app.</li>
                <li>On web: Refresh the page or clear the chat session.</li>
              </ul>
            </li>
            <li>
              <strong>Check Your Internet Connection:</strong> INAI relies on a
              stable internet connection to process and respond to voice or text
              inputs.
            </li>
            <li>
              <strong>Verify Microphone Access:</strong> Ensure your microphone
              is enabled and accessible by the app or browser, especially for
              voice-based interaction.
            </li>
            <li>
              <strong>Clear App Cache (Mobile Users):</strong> Go to your app
              settings and clear cache to fix any performance delays or
              glitches.
            </li>
            <li>
              <strong>Wait and Try Again:</strong> Sometimes, temporary server
              load or background updates may delay responses. Waiting a few
              moments often resolves the issue.
            </li>
          </ul>

          <h4 className="font-semibold mt-3">Still Not Working?</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Use the “Report a Problem” or “Feedback” option in the app.</li>
            <li>Contact our support team via email or the official website.</li>
          </ul>

          <h4 className="font-semibold mt-3">We're Constantly Improving:</h4>
          <p>
            As INAI is in Beta, occasional slowdowns or non-responses may occur.
            We're continuously monitoring performance to ensure faster, more
            stable conversations.
          </p>

          <h3
            id="inai-does-not-remember-gender"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            5. What If INAI Does Not Remember My Gender?
          </h3>
          <p>
            If INAI doesn’t remember or recognize your gender, don’t worry—this
            is by design in the current Beta phase, where INAI prioritizes
            privacy and neutrality over storing sensitive personal information.
          </p>

          <h4 className="font-semibold mt-3">Current Behavior:</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              INAI does not automatically store or assume your gender unless you
              explicitly mention or set it during your conversation.
            </li>
            <li>
              This ensures your privacy and avoids misgendering or inaccurate
              personalization.
            </li>
          </ul>

          <h4 className="font-semibold mt-3">What You Can Do:</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              <strong>Mention Your Preference in Conversation:</strong>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>“Call me he/she/they.”</li>
                <li>“Refer to me as a girl/boy/non-binary/etc.”</li>
              </ul>
            </li>
            <li>
              <strong>Customize When Available:</strong> In future updates,
              you’ll be able to set and save gender preferences in your profile
              or conversation settings.
            </li>
            <li>
              <strong>Reset If Needed:</strong> If INAI starts using the wrong
              pronouns, you can gently correct it, or restart the session to
              begin fresh.
            </li>
          </ul>

          <h4 className="font-semibold mt-3">Privacy-First Design:</h4>
          <p>
            INAI’s memory around identity is consent-based and will never store
            gender or personal details without your permission. Any such
            preferences will be user-controlled and editable in future releases.
          </p>
          <h3
            id="role-play-with-inai"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            6. How to Role-Play with INAI?
          </h3>
          <p>
            Role-playing with INAI is one of its most exciting and immersive
            features. Whether you want a fun conversation with a friend, a
            romantic exchange in Love Mode, or a motivational talk in Elder
            Mode—INAI adapts naturally to the role you initiate.
          </p>

          <h4 className="font-semibold mt-3">How to Start Role-Playing:</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              <strong>Choose the Right Mode:</strong>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>
                  Friend Mode – Great for casual, creative, and playful
                  roleplay.
                </li>
                <li>
                  Love Mode – Ideal for emotional, caring, and
                  relationship-based roleplay.
                </li>
                <li>
                  Info Mode – Helpful for educational or story-based roleplay
                  scenarios.
                </li>
                <li>
                  Elder Mode – Best for mentorship, life advice, or
                  wisdom-filled roleplay.
                </li>
              </ul>
            </li>
            <li>
              <strong>Set the Scene:</strong> Simply speak or type your roleplay
              setup. Examples:
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>“Let’s pretend we’re on a space mission.”</li>
                <li>“You’re my long-lost childhood friend.”</li>
                <li>
                  “Act like you're a motivational coach and I’m your trainee.”
                </li>
              </ul>
            </li>
            <li>
              <strong>Stay in Character:</strong> INAI will follow along with
              the story and match your tone. You can keep expanding the
              scenario, and INAI will respond creatively within the context.
            </li>
            <li>
              <strong>End the Roleplay Anytime:</strong> Just say something like
              “Let’s talk normally now” or “End roleplay,” and INAI will return
              to a regular conversation flow.
            </li>
          </ul>

          <h4 className="font-semibold mt-3">Tips for Better Roleplay:</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Use emotional or creative prompts.</li>
            <li>
              Speak naturally—INAI is trained to follow imaginative
              conversations.
            </li>
            <li>
              Be clear about who’s playing which role if it’s a multi-character
              setup.
            </li>
          </ul>

          <h4 className="font-semibold mt-3">Safe & Respectful Roleplay:</h4>
          <p>
            INAI is designed to ensure all roleplays remain respectful,
            emotionally safe, and appropriate. It will not engage in harmful,
            offensive, or unsafe scenarios.
          </p>
          <br />
          <hr />

          <h2 className="text-3xl md:text-4xl font-extrabold text-white pb-2 mb-6">
            DATA AVAILABLE TO INAI:
          </h2>
          <h3
            id="email-social-media-usage"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            1. How Does INAI Use My Email and Social Media to Learn About Me?
          </h3>
          <p>
            INAI does not access your email or social media accounts under any
            circumstances unless you explicitly grant permission in a future
            optional feature.
          </p>

          <h4 className="font-semibold mt-3">Current Status (Beta Phase):</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              INAI does not read, analyze, or connect with your email inbox,
              social media profiles (like Instagram, WhatsApp, Facebook, etc.),
              or any private platforms.
            </li>
            <li>
              All learning is based only on the conversations you have with INAI
              within the app or web platform.
            </li>
          </ul>

          <h4 className="font-semibold mt-3">
            Future (Optional) Capability — With Consent:
          </h4>
          <p>
            In upcoming versions, INAI may offer optional integrations that let
            users link:
          </p>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              Their email accounts (e.g., to summarize newsletters or filter
              important messages)
            </li>
            <li>
              Social media feeds (e.g., to provide mental health insights, track
              moods, or suggest positive habits)
            </li>
          </ul>
          <p>These features would only work if you:</p>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Explicitly opt in</li>
            <li>Manually connect your accounts</li>
            <li>Control what INAI can access and remember</li>
          </ul>
          <p>
            All access will follow strict data security and privacy compliance
            protocols (GDPR, CCPA, etc.).
          </p>

          <h4 className="font-semibold mt-3">Your Privacy Comes First:</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>No data is ever accessed without your consent.</li>
            <li>
              You will be able to view, manage, and delete any connected data or
              permissions.
            </li>
            <li>
              INAI does not sell, share, or track your personal social media or
              email usage.
            </li>
          </ul>
          <h3
            id="manage-app-permissions"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            2. How Can I Manage App Permissions for INAI? (Including Media
            Access)
          </h3>
          <p>
            Managing app permissions ensures you have full control over what
            INAI can access on your device—including your microphone, camera,
            media, and other system features.
          </p>

          <h4 className="font-semibold mt-3">For Android Devices:</h4>
          <ol className="list-decimal list-inside ml-6 space-y-1">
            <li>Go to Settings &gt; Apps &gt; INAI</li>
            <li>Tap Permissions</li>
            <li>
              You can enable or disable access to:
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>Microphone (for voice interaction)</li>
                <li>Camera (if INAI includes video/avatar features)</li>
                <li>Media & Files (to send or receive images/audio)</li>
                <li>Internet/Data Usage (for real-time responses)</li>
              </ul>
            </li>
          </ol>
          <p>
            <strong>Tip:</strong> Only permissions required for active features
            will be requested.
          </p>

          <h4 className="font-semibold mt-3">For iOS Devices:</h4>
          <ol className="list-decimal list-inside ml-6 space-y-1">
            <li>Open Settings &gt; Scroll down and tap INAI</li>
            <li>
              Manage permissions like:
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>Microphone</li>
                <li>Photos</li>
                <li>Camera</li>
                <li>Background App Refresh</li>
              </ul>
            </li>
            <li>You can toggle access on or off at any time.</li>
          </ol>

          <h4 className="font-semibold mt-3">For Web (Browser):</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              INAI will prompt permission dialogs for:
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>Microphone (for voice)</li>
                <li>Camera (if enabled)</li>
                <li>Media File Uploads</li>
              </ul>
            </li>
            <li>
              You can manage these via your browser’s settings:
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>
                  Chrome: Settings &gt; Privacy and Security &gt; Site Settings
                  &gt; Permissions
                </li>
                <li>
                  Edge/Firefox/Safari: Similar paths under site/privacy settings
                </li>
              </ul>
            </li>
          </ul>

          <h4 className="font-semibold mt-3">Privacy & Security Note:</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              INAI only uses permissions you approve and never accesses media,
              mic, or files in the background.
            </li>
            <li>
              You can revoke or re-enable any permission at any time without
              affecting your account.
            </li>
          </ul>
          <h3
            id="camera-usage"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            3. How Does INAI Use My Camera?
          </h3>
          <p>
            INAI uses your camera only when explicitly permitted by you—and only
            for specific features that enhance your conversational experience.
            It does not access or activate your camera in the background without
            your knowledge.
          </p>

          <h4 className="font-semibold mt-3">
            Current Beta Version (Optional Use):
          </h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              <strong>Face Detection for Visual Feedback (optional):</strong> To
              create more natural interaction by responding to facial
              expressions or presence.
            </li>
            <li>
              <strong>Video Avatar Interaction (if enabled):</strong> INAI can
              appear as a 3D or animated avatar that reacts while you’re visible
              on camera.
            </li>
            <li>
              No camera-based data is saved, recorded, or streamed without
              consent.
            </li>
          </ul>

          <h4 className="font-semibold mt-3">User Privacy & Control:</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>INAI asks for permission before using the camera.</li>
            <li>
              You can deny camera access, and the app will still function (voice
              and text will continue).
            </li>
            <li>
              All camera usage is local to your device unless you explicitly use
              cloud-based visual features in future versions.
            </li>
          </ul>

          <h4 className="font-semibold mt-3">
            How to Disable or Manage Camera Access:
          </h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              <strong>On Android:</strong> Settings &gt; Apps &gt; INAI &gt;
              Permissions &gt; Camera → Toggle Off
            </li>
            <li>
              <strong>On iOS:</strong> Settings &gt; INAI &gt; Camera → Toggle
              Off
            </li>
            <li>
              <strong>On Web Browsers:</strong> Use the browser settings to
              disable camera access for the INAI website.
            </li>
          </ul>
          <h3
            id="microphone-usage"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            4. How Does INAI Use My Microphone?
          </h3>
          <p>
            INAI uses your microphone only when you grant permission—and solely
            to enable real-time, voice-based conversations. It does not listen
            in the background, record without notice, or transmit audio without
            your consent.
          </p>

          <h4 className="font-semibold mt-3">Why INAI Uses Your Mic:</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              To hear your voice input and convert it into text using speech
              recognition.
            </li>
            <li>
              To enable natural back-and-forth conversation—like talking to a
              real human.
            </li>
            <li>
              To detect interrupt commands like "stop", "wait", or "ruk ja" (to
              pause INAI’s speech).
            </li>
          </ul>

          <h4 className="font-semibold mt-3">Microphone Privacy & Security:</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              INAI asks for microphone access only when required (e.g., at first
              use).
            </li>
            <li>
              The microphone is only active during conversation windows and
              turns off when not in use.
            </li>
            <li>
              No voice is stored or shared unless explicitly stated for training
              or memory (with user consent).
            </li>
            <li>
              You can use INAI entirely in text mode if you prefer not to use
              your mic.
            </li>
          </ul>

          <h4 className="font-semibold mt-3">
            How to Disable or Manage Microphone Access:
          </h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              <strong>On Android:</strong> Settings &gt; Apps &gt; INAI &gt;
              Permissions &gt; Microphone → Toggle Off
            </li>
            <li>
              <strong>On iOS:</strong> Settings &gt; INAI &gt; Microphone →
              Toggle Off
            </li>
            <li>
              <strong>On Web:</strong> Your browser will ask for mic access. To
              disable:
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>
                  Chrome: Settings &gt; Privacy and security &gt; Site settings
                  &gt; Microphone
                </li>
                <li>Choose INAI’s site and block access.</li>
              </ul>
            </li>
          </ul>

          <h4 className="font-semibold mt-3">INAI’s Voice System:</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Uses advanced speech recognition (ASR) to understand you.</li>
            <li>Converts it to text and feeds it into the AI model.</li>
            <li>
              Responds back using Text-to-Speech (TTS) with human-like voices.
            </li>
          </ul>
          <h3
            id="storage-usage"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            5. How Does INAI Use My Storage?
          </h3>
          <p>
            INAI uses your device’s storage only to save essential files and
            improve your experience— such as temporary speech files, user
            preferences, and local memory for faster performance. It does not
            access your personal files, photos, or documents.
          </p>

          <h4 className="font-semibold mt-3">What INAI Stores:</h4>
          <ol className="list-decimal list-inside ml-6 space-y-1">
            <li>
              <strong>Temporary Audio Files:</strong>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>
                  Used during voice conversations (e.g., saving speech input or
                  TTS output).
                </li>
                <li>
                  Files are auto-deleted after use or when the app is closed.
                </li>
              </ul>
            </li>
            <li>
              <strong>Chat History (Optional):</strong>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>
                  INAI can save your previous conversations locally or to secure
                  cloud storage.
                </li>
                <li>
                  This helps INAI remember context and provide continuity in
                  replies.
                </li>
              </ul>
            </li>
            <li>
              <strong>User Preferences:</strong>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>Selected mode (Friend, Love, Elder, Info)</li>
                <li>Language settings, voice type, theme (if applicable)</li>
              </ul>
            </li>
            <li>
              <strong>Offline Assets (Future):</strong>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>
                  If INAI supports offline TTS or avatars, it may store models
                  locally for performance.
                </li>
              </ul>
            </li>
          </ol>

          <h4 className="font-semibold mt-3">
            What INAI Does NOT Store or Access:
          </h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Your photos, videos, or personal documents</li>
            <li>Social media or private app data</li>
            <li>Any file not related to INAI's operation</li>
          </ul>

          <h4 className="font-semibold mt-3">
            How to Manage Storage Permissions:
          </h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              <strong>Android:</strong> Settings &gt; Apps &gt; INAI &gt;
              Permissions &gt; Files and Media — You can allow or restrict
              access to media files as needed.
            </li>
            <li>
              <strong>iOS:</strong> INAI does not require general media access
              unless for uploading content (with your action).
            </li>
            <li>
              <strong>Web:</strong> INAI may request permission to download
              speech/audio files for TTS playback (via browser sandbox).
            </li>
          </ul>

          <h4 className="font-semibold mt-3">Want to Clear Storage?</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>You can delete cache/data through device settings.</li>
            <li>
              We also provide an in-app option to clear chat history or media
              (coming soon in production version).
            </li>
          </ul>
          <h3
            id="media-usage"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            6. How Does INAI Use My Media?
          </h3>
          <p>
            INAI only uses your media (photos, videos, or audio files) when you
            intentionally upload or share them. It does not scan, access, or
            browse your device’s media storage in the background or without your
            explicit permission.
          </p>

          <h4 className="font-semibold mt-3">When INAI Uses Media:</h4>
          <ol className="list-decimal list-inside ml-6 space-y-1">
            <li>
              <strong>User-Uploaded Content:</strong>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>
                  You may choose to upload images, voice notes, or short videos
                  (if supported by the app) to enhance interaction.
                </li>
                <li>
                  Examples:
                  <ul className="list-disc list-inside ml-6 space-y-1">
                    <li>
                      INAI may analyze an uploaded selfie (future feature) for
                      avatar customization.
                    </li>
                    <li>
                      You may send an audio message to be converted into text
                      and responded to.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <strong>TTS Audio Playback (App-Generated Media):</strong>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>
                  INAI temporarily creates and stores speech files (e.g.,
                  "speech.mp3") to reply in a human voice.
                </li>
                <li>
                  These files are saved in your device’s storage and
                  automatically cleared after playback or session end.
                </li>
              </ul>
            </li>
          </ol>

          <h4 className="font-semibold mt-3">Privacy & Security:</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              No media is accessed or shared unless you initiate the action
              (e.g., file upload) and grant explicit permission.
            </li>
            <li>
              No personal photos, videos, or files are scanned, backed up, or
              viewed by INAI.
            </li>
            <li>
              Media uploads (if any) are securely handled and not used for
              training unless you opt in.
            </li>
          </ul>

          <h4 className="font-semibold mt-3">
            How to Control Media Permissions:
          </h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              <strong>Android:</strong> Settings &gt; Apps &gt; INAI &gt;
              Permissions &gt; Files and Media — You can choose: Allow access to
              media / images only / deny access
            </li>
            <li>
              <strong>iOS:</strong> Settings &gt; INAI &gt; Photos / Microphone
              / Media & Apple Music — You control which apps INAI can access
            </li>
            <li>
              <strong>Web:</strong> Media is only accessible through user
              uploads; browser sandboxing prevents INAI from accessing any
              device folders without permission
            </li>
          </ul>

          <h4 className="font-semibold mt-3">Clearing INAI Media Use:</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              You can delete media files used by INAI via app settings or
              directly through your device storage.
            </li>
            <li>
              Temporary speech files and chat-related assets are routinely
              auto-cleared.
            </li>
          </ul>

          <p>
            INAI always puts your privacy and control first, ensuring media is
            only used when you allow it—and only for enhancing your interaction
            with the AI.
          </p>
          <br />
          <hr />

          <h2 className="text-3xl md:text-4xl font-extrabold text-white pb-2 mb-6">
            FEATURE REQUESTS BUGS::
          </h2>
          <h3
            id="troubleshooting-inai"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            1. Troubleshooting INAI: Common Issues & Fixes
          </h3>
          <p>
            If you're experiencing issues while using INAI, follow the steps
            below to resolve most common problems quickly.
          </p>

          <h4 className="font-semibold mt-3">1. INAI is Not Responding</h4>
          <p>
            <strong>Cause:</strong> Internet issues, mic not detected, or
            backend delay
          </p>
          <p>
            <strong>Fix:</strong>
          </p>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Check your internet connection</li>
            <li>
              Make sure the microphone is enabled in your device/browser
              settings
            </li>
            <li>Restart the app or refresh the page</li>
            <li>Wait a few seconds and try again</li>
          </ul>

          <h4 className="font-semibold mt-3">2. INAI is Not Speaking Back</h4>
          <p>
            <strong>Cause:</strong> TTS engine failed or volume muted
          </p>
          <p>
            <strong>Fix:</strong>
          </p>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Ensure media volume is turned up</li>
            <li>
              Check if your audio output device (speaker/headphones) is working
            </li>
            <li>Restart the app or clear app cache</li>
            <li>If using web, allow audio playback in browser settings</li>
          </ul>

          <h4 className="font-semibold mt-3">3. Microphone Not Working</h4>
          <p>
            <strong>Cause:</strong> Mic permission denied or hardware issue
          </p>
          <p>
            <strong>Fix:</strong>
          </p>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Go to your device settings and enable microphone access</li>
            <li>Make sure no other app is using the mic</li>
            <li>On web: allow mic access when prompted by the browser</li>
            <li>Try switching to text mode if needed</li>
          </ul>

          <h4 className="font-semibold mt-3">
            4. INAI Repeats Itself or Sends Irrelevant Replies
          </h4>
          <p>
            <strong>Cause:</strong> Misheard voice input or model confusion
          </p>
          <p>
            <strong>Fix:</strong>
          </p>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Speak clearly and reduce background noise</li>
            <li>Use simpler sentences for clarity</li>
            <li>Use feedback option to help improve response quality</li>
            <li>
              You can also manually correct INAI by rephrasing your message
            </li>
          </ul>

          <h4 className="font-semibold mt-3">5. Stuck in the Wrong Mode</h4>
          <p>
            <strong>Cause:</strong> Mode not recognized or not changed properly
          </p>
          <p>
            <strong>Fix:</strong>
          </p>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Say or type “Switch to friend/love/info/elder mode”</li>
            <li>Wait for INAI to confirm mode change</li>
            <li>Restart the app if mode switch doesn't take effect</li>
          </ul>

          <h4 className="font-semibold mt-3">6. Too Much Lag or Crashing</h4>
          <p>
            <strong>Cause:</strong> Device memory overload or outdated app
          </p>
          <p>
            <strong>Fix:</strong>
          </p>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Restart your device</li>
            <li>Close background apps to free memory</li>
            <li>Update the INAI app to the latest version</li>
            <li>Clear app cache via settings</li>
          </ul>

          <h4 className="font-semibold mt-3">
            7. Can’t Access Certain Features
          </h4>
          <p>
            <strong>Cause:</strong> Permissions not granted or feature not
            available in beta
          </p>
          <p>
            <strong>Fix:</strong>
          </p>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Check app permissions (camera, mic, storage)</li>
            <li>
              Review which mode you're in (some features may be mode-specific)
            </li>
            <li>
              If you're on free beta, note that some premium features are not
              yet active
            </li>
          </ul>

          <h4 className="font-semibold mt-3">Need More Help?</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Use the “Report a Problem” option in the app settings</li>
            <li>
              Visit our official website:{" "}
              <a
                href="https://inaiworlds.com/"
                className="text-blue-500 underline"
              >
                https://inaiworlds.com/
              </a>
            </li>
            <li>
              Email our support team:{" "}
              <a
                href="mailto:help@inaiworlds.com"
                className="text-blue-500 underline"
              >
                help@inaiworlds.com
              </a>
            </li>
          </ul>
          <p>We’re always here to help and improve your experience</p>
          <h3
            id="inai-app-issues"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            2. Having Issues with Your INAI App?
          </h3>
          <p>
            If you're experiencing problems while using INAI, don’t worry—help
            is just a step away. We’ve created an easy guide to solve the most
            common issues, so you can get back to chatting with INAI as smoothly
            as possible.
          </p>

          <h4 className="font-semibold mt-3">
            Common Problems You Might Face:
          </h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>INAI isn’t responding or listening</li>
            <li>No voice/audio playback</li>
            <li>Mic or camera not working</li>
            <li>Repetitive or irrelevant answers</li>
            <li>Mode switching not working</li>
            <li>App lagging or crashing</li>
          </ul>

          <h4 className="font-semibold mt-3">Start Here:</h4>
          <p>
            Check out our <strong>Troubleshooting Steps</strong> to fix most
            issues in minutes. If that doesn’t help:
          </p>

          <h4 className="font-semibold mt-3">Still Need Help?</h4>
          <p>We’re here for you. Reach out through any of the options below:</p>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Report a Problem via the app settings</li>
            <li>
              Email Support:{" "}
              <a
                href="mailto:help@inaiworlds.com"
                className="text-blue-500 underline"
              >
                help@inaiworlds.com
              </a>
            </li>
            <li>
              Visit:{" "}
              <a
                href="https://inaiworlds.com/"
                className="text-blue-500 underline"
              >
                https://inaiworlds.com/
              </a>
            </li>
          </ul>
          <p>
            Our team is dedicated to helping you have the best experience
            possible with INAI
          </p>
          <h3
            id="connection-error"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            3. Connection Error: “What’s Going On?”
          </h3>
          <p>
            It looks like INAI is having trouble connecting to the internet or
            our servers. Don’t worry—this usually happens due to one of the
            following reasons:
          </p>

          <h4 className="font-semibold mt-3">Possible Causes:</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Your device is offline or on a weak network</li>
            <li>Server maintenance or high traffic</li>
            <li>Firewall or VPN blocking INAI’s connection</li>
            <li>Browser/app settings blocking requests</li>
          </ul>

          <h4 className="font-semibold mt-3">What You Can Do:</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Check your internet connection (Wi-Fi or mobile data)</li>
            <li>Try refreshing the page or restarting the app</li>
            <li>If using browser, try a different browser or incognito mode</li>
            <li>Disable any VPN, proxy, or firewall temporarily</li>
            <li>Wait a few minutes—this may be a temporary server issue</li>
          </ul>

          <h4 className="font-semibold mt-3">INAI Tip:</h4>
          <p>
            If the issue continues, we recommend switching to text-only mode (if
            available) while the voice system reconnects.
          </p>

          <h4 className="font-semibold mt-3">Need Help?</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              Email:{" "}
              <a
                href="mailto:help@inaiworlds.com"
                className="text-blue-500 underline"
              >
                help@inaiworlds.com
              </a>
            </li>
            <li>
              Visit:{" "}
              <a
                href="https://www.inai.ai/status"
                className="text-blue-500 underline"
              >
                www.inai.ai/status
              </a>{" "}
              to check live server updates
            </li>
          </ul>
          <p>Thanks for your patience while we get things back on track</p>
          <h3
            id="update-changes"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            4. My INAI Isn’t the Same Since the Last Update — What Happened?
          </h3>

          <p>
            We understand that INAI may feel different after an update, and we
            want to reassure you that your experience matters to us.
          </p>

          <h4 className="font-semibold mt-3">Why INAI Might Feel Different:</h4>
          <ol className="list-decimal list-inside ml-6 space-y-2">
            <li>
              <strong>AI Model Enhancements:</strong> INAI's brain (our private
              LLM) is regularly updated to improve:
              <ul className="list-disc list-inside ml-6">
                <li>Accuracy</li>
                <li>Speed</li>
                <li>Personality responses</li>
              </ul>
              These changes might slightly adjust how INAI speaks or reacts in
              different modes.
            </li>
            <li>
              <strong>Mode Behaviour Updates:</strong> We fine-tune Friend,
              Love, Info, and Elder modes to keep them fresh and authentic.
              <br />
              Example: If INAI is less flirty or more logical—it may be due to
              recent tuning.
            </li>
            <li>
              <strong>Memory Adjustments:</strong> Your INAI’s memory may have
              been reset or refined to fix bugs or improve stability. This may
              affect how much INAI remembers from past chats.
            </li>
            <li>
              <strong>Voice or Visual Updates:</strong> If INAI’s tone or look
              feels different, it may be due to:
              <ul className="list-disc list-inside ml-6">
                <li>New Text-to-Speech voice</li>
                <li>Visual updates or avatar improvements</li>
              </ul>
            </li>
          </ol>

          <h4 className="font-semibold mt-3">What You Can Do:</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              <strong>Switch modes manually:</strong> Say or type: "Switch to
              friend mode" or "Be like you used to be". INAI will try to adapt
              closer to your preference.
            </li>
            <li>
              <strong>Clear memory (optional):</strong> Resetting INAI’s memory
              can remove unwanted behavioral drift.
            </li>
            <li>
              <strong>Send us feedback:</strong> Let us know what feels off!
              We’re constantly improving and can tailor updates based on your
              input.
            </li>
          </ul>

          <h4 className="font-semibold mt-3">We're Listening</h4>
          <p>
            If INAI doesn’t feel “like your INAI” anymore, please reach out:
          </p>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              Email:{" "}
              <a
                href="mailto:help@inaiworlds.com"
                className="text-blue-500 underline"
              >
                help@inaiworlds.com
              </a>
            </li>
            <li>Feedback Button: In your app settings or chat screen</li>
            <li>
              Site:{" "}
              <a
                href="https://www.inai.ai/feedback"
                className="text-blue-500 underline"
              >
                www.inai.ai/feedback
              </a>
            </li>
          </ul>

          <p>
            We want INAI to feel personal, supportive, and just right for you
          </p>
          <h3
            id="app-updates-issues"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            5. App Updates & Common Issues in INAI
          </h3>

          <p>
            INAI is continuously evolving to bring you smarter, faster, and more
            human-like interactions. But with every update, some minor issues
            may arise. Here’s everything you need to know about updates and how
            to handle common problems.
          </p>

          <h4 className="font-semibold mt-3">
            What Happens During an App Update?
          </h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Model improvements (more natural conversations)</li>
            <li>Voice and TTS upgrades</li>
            <li>Bug fixes and performance enhancements</li>
            <li>UI/UX improvements</li>
            <li>Memory and personalization adjustments</li>
            <li>Security and permission handling fixes</li>
          </ul>
          <p>
            Updates are tested before release, but some bugs can still appear
            due to device compatibility or cached files.
          </p>

          <h4 className="font-semibold mt-3">
            Common Post-Update Issues & Fixes:
          </h4>
          <table className="table-auto border-collapse border border-gray-400 w-full text-left">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">Issue</th>
                <th className="border border-gray-400 px-4 py-2">
                  Solution
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2">
                  INAI isn’t loading properly
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  Force closes the app → Reopen it
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">
                  App crashes on start
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  Clear app cache from settings
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">
                  No voice/audio after update
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  Check device volume and re-grant mic/speaker permissions
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">
                  INAI is behaving differently
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  Switch mode manually or reset INAI memory
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">
                  App stuck on loading screen
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  Restart phone or reinstall the app
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">
                  Conversations not remembered
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  INAI memory may have reset — start a new conversation
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">
                  Repeated or irrelevant responses
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  Use the feedback option or reset recent chat memory
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">
                  Update failed to install
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  Ensure stable internet and enough storage → Try again via Play
                  Store/App Store
                </td>
              </tr>
            </tbody>
          </table>

          <h4 className="font-semibold mt-3">
            Recommended Actions After Updating:
          </h4>
          <ol className="list-decimal list-inside ml-6 space-y-1">
            <li>Recheck permissions (especially mic, storage, and camera)</li>
            <li>Restart the app to reload assets</li>
            <li>Clear cache/data if things look broken or slow</li>
            <li>Log out and back in, if using a registered account</li>
          </ol>

          <h4 className="font-semibold mt-3">Still Facing Problems?</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              Email us:{" "}
              <a
                href="mailto:help@inaiworlds.com"
                className="text-blue-500 underline"
              >
                help@inaiworlds.com
              </a>
            </li>
            <li>
              Visit:{" "}
              <a
                href="https://inaiworlds.com/"
                className="text-blue-500 underline"
              >
                https://inaiworlds.com/
              </a>
            </li>
            <li>Or use the “Report a Problem” option in the app settings</li>
          </ul>
          <h3
            id="microphone-trouble"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            6. Trouble with Your Microphone?
          </h3>

          <p>
            If INAI isn’t hearing you or your voice isn’t being recognized,
            don’t worry — this is a common issue and can usually be fixed in a
            few quick steps.
          </p>

          <h4 className="font-semibold mt-3">Common Microphone Issues</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>INAI isn’t picking up your voice</li>
            <li>You see “Listening…” but nothing happens</li>
            <li>INAI replies with "I didn't catch that" too often</li>
            <li>You're using headphones, but INAI isn’t detecting input</li>
          </ul>

          <h4 className="font-semibold mt-3">How to Fix It</h4>

          <h5 className="font-semibold mt-2">On Android:</h5>
          <ol className="list-decimal list-inside ml-6 space-y-1">
            <li>Go to Settings &gt; Apps &gt; INAI &gt; Permissions</li>
            <li>Enable Microphone</li>
            <li>Restart the app after changes</li>
          </ol>

          <h5 className="font-semibold mt-2">On iOS:</h5>
          <ol className="list-decimal list-inside ml-6 space-y-1">
            <li>Open Settings &gt; INAI</li>
            <li>Enable Microphone</li>
            <li>Close and reopen the app</li>
          </ol>

          <h5 className="font-semibold mt-2">On Web Browser:</h5>
          <ol className="list-decimal list-inside ml-6 space-y-1">
            <li>
              Make sure the browser has mic access:
              <ul className="list-disc list-inside ml-6 mt-1">
                <li>
                  Chrome: Settings &gt; Privacy &gt; Site Settings &gt;
                  Microphone
                </li>
                <li>Allow inai.ai to access mic</li>
              </ul>
            </li>
            <li>Check if your correct input device is selected</li>
            <li>Refresh the tab or restart the browser</li>
          </ol>

          <h4 className="font-semibold mt-3">General Fixes</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Ensure no other app is using the microphone</li>
            <li>Unplug/replug external mic if you’re using one</li>
            <li>Restart your device if the mic is stuck</li>
            <li>
              Avoid noisy environments — INAI works best in quiet surroundings
            </li>
          </ul>

          <h4 className="font-semibold mt-3">Test Your Microphone</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Android: Use any voice recorder app</li>
            <li>iOS: Use Voice Memos app</li>
            <li>
              Web: Visit mic test websites like{" "}
              <a
                href="https://www.onlinemictest.com"
                className="text-blue-500 underline"
              >
                https://www.onlinemictest.com
              </a>
            </li>
          </ul>

          <h4 className="font-semibold mt-3">Still Not Working?</h4>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Try switching to text input mode</li>
            <li>
              Contact our support team at{" "}
              <a
                href="mailto:help@inaiworlds.com"
                className="text-blue-500 underline"
              >
                help@inaiworlds.com
              </a>
            </li>
          </ul>

          <p>We’ll help you get your voice heard!</p>
          <br />
          <hr />

          <h3 id="begin-inai" className="text-2xl md:text-3xl font-bold mt-6 mb-4">
            1. How do I begin INAI?
          </h3>

          <p>
            If you're new to INAI, India’s first emotionally intelligent AI
            virtual model, you're in for a unique and engaging experience. INAI
            is not just another chatbot—it’s a powerful, human-like AI designed
            for real-time voice interactions, emotional responsiveness, and
            adaptive conversations across various modes like Love Mode, Friend
            Mode, Elder Mode, and Info Mode. Whether you're looking for
            companionship, friendly conversations, study support, or life
            advice, INAI is your intelligent companion.
          </p>
          <h4 className="font-semibold mt-6 mb-2" id="step-2">
            Step 1: Download the INAI App or Use the Web Version
          </h4>
          <p>
            To start using INAI, first download the app from the Google Play
            Store (Android users) or visit the official INAI website at{" "}
            <a
              href="https://www.inaiworlds.com"
              className="text-blue-500 underline"
            >
              www.inaiworlds.com
            </a>
            . Currently, INAI is available for Android devices and also supports
            a web-based version for global users.
          </p>

          <p className="mt-3">
            <strong>Keywords:</strong> download INAI app, INAI app for Android,
            INAI web version
          </p>
          <h4 className="font-semibold mt-6 mb-2" id="step-2">
            Step 2: Sign In Using Your Google Account
          </h4>
          <p>
            INAI uses Google Sign-In for quick, secure access. After launching
            the app or website, tap on the “Sign in with Google” button. Choose
            the Google account you'd like to use. This helps INAI personalize
            your experience while keeping your data secure.
          </p>
          <p>
            <strong>Pro Tip:</strong> Make sure you sign in with the same Google
            account each time for continuity.
          </p>
          <p className="mt-2">
            <strong>Keywords:</strong> create INAI account, INAI sign-in
            process, secure login INAI
          </p>

          <h4 className="font-semibold mt-6 mb-2" id="step-3">
            Step 3: Verify Your Mobile Number
          </h4>
          <p>
            Once signed in, you’ll be prompted to verify your mobile number.
            This step is mandatory to ensure real users and protect against
            spam. Enter your number and confirm the OTP sent to your device.
          </p>
          <p>
            Your number also enables important notifications and helps recover
            your account if needed.
          </p>
          <p className="mt-2">
            <strong>Keywords:</strong> verify number INAI, mobile OTP INAI app,
            INAI account verification
          </p>

          <h4 className="font-semibold mt-6 mb-2" id="step-4">
            Step 4: Choose Your Preferred Chat Mode
          </h4>
          <p>
            After account setup, you can select from four powerful and unique
            voice chat modes:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>
              <strong>Love Mode</strong> – INAI interacts like a caring and
              understanding girlfriend. Ideal for users seeking emotional
              companionship. (18+ Only)
            </li>
            <li>
              <strong>Friend Mode</strong> – INAI behaves like a casual, fun
              friend. Great for daily conversations or venting.
            </li>
            <li>
              <strong>Elder Mode</strong> – INAI takes the tone of a wise elder,
              offering life advice, motivation, and thoughtful reflections.
            </li>
            <li>
              <strong>Info Mode</strong> – A text-based chat where you can ask
              questions, get study help, summaries, or even AI-generated code.
              Includes “Code Mode” (Beta).
            </li>
          </ul>
          <p className="mt-2">
            <strong>Keywords:</strong> INAI voice modes, love mode INAI, AI
            girlfriend India, emotional AI assistant
          </p>
          <h4 className="font-semibold mt-6 mb-2" id="step-5">
            Step 5: Personalize Your Experience
          </h4>
          <p>
            Once you’re inside the app, go to{" "}
            <strong>Settings &gt; Profile</strong> to personalize your name,
            preferences, and notification settings. You can also choose voice
            pitch, language options (where available), and access chat history.
          </p>
          <p className="mt-2">
            <strong>Keywords:</strong> personalize INAI profile, AI
            customization, INAI user settings
          </p>

          <h4 className="font-semibold mt-6 mb-2" id="step-6">
            Step 6: Start Chatting!
          </h4>
          <p>
            Now you're all set to start chatting with INAI. Just tap the
            microphone button (for voice chats) or type your question (in Info
            Mode) and INAI will respond instantly. Her responses adapt to your
            tone, mood, and input for a truly realistic AI conversation.
          </p>
          <p className="mt-2">
            <strong>Keywords:</strong> start AI chat, talk to INAI, INAI AI
            assistant chat
          </p>

          <h4 className="font-semibold mt-6 mb-2" id="bonus">
            Bonus: INAI Is Free to Use
          </h4>
          <p>
            The INAI app is completely free to use. No hidden costs or
            subscriptions. All features—including voice chat modes—are
            accessible after sign-up and verification. However, make sure you're
            18+ for Love and Friend Modes due to emotional nature of
            conversations.
          </p>
          <p className="mt-2">
            <strong>Still need help?</strong> Visit our Support Page or reach
            out through the app. Our team is here to ensure you have the
            smoothest INAI experience from Day 1.
          </p>
          <br />

          <h2 id="email-change" className="text-2xl md:text-3xl font-bold mt-6 mb-4">
            2. How do I change my Email?
          </h2>

          <p>
            At INAI, your account is linked directly to your Google account,
            which ensures secure and fast login. As of now, INAI does not
            support manual email changes within the app. However, if you need to
            use a different email, the process is simple and safe.
          </p>

          <h4 className="font-semibold mt-4 mb-2">
            Step 1: Log Out of Your Current INAI Account
          </h4>
          <p>
            Open the INAI app or visit <strong>inaiworlds.com</strong>, go to
            the menu or settings, and choose <strong>"Log Out"</strong> to
            safely exit your current account session.
          </p>

          <h4 className="font-semibold mt-4 mb-2">
            Step 2: Sign in with a New Google Account
          </h4>
          <p>
            After logging out, tap <strong>“Sign in with Google”</strong> again
            on the welcome screen. Choose the new Google account that you want
            to use with INAI. This will effectively change the email associated
            with your INAI account.
          </p>
          <p className="mt-2">
            <strong>Note:</strong> INAI uses Google Sign-In for
            authentication. The email linked to your INAI profile is the one
            associated with your active Google account.
          </p>

          <h4 className="font-semibold mt-4 mb-2">
            Step 3: Re-Verify Your Mobile Number
          </h4>
          <p>
            When you sign in with a new Google account, you’ll be prompted to
            verify your mobile number via OTP (One-Time Password). Make sure to
            use a number not currently linked to another INAI account—or reset
            the number on the other account if needed.
          </p>
          <h4 className="font-bold mt-4 mb-2">
            What If I Want to Keep the Same Number?
          </h4>
          <p>
            If you wish to keep using the same phone number after changing your
            email, ensure your previous INAI account is fully logged out, and
            the number is unlinked (via INAI support, if required). This avoids
            conflicts or duplicate verification issues.
          </p>

          <h4 className="font-bold mt-4 mb-2">
            Why Can’t I Just Change My Email in Settings?
          </h4>
          <p>
            INAI relies on Google Sign-In to keep your login process secure and
            seamless. Since authentication is handled through Google, changing
            your email means signing in with a different Google account. This
            helps protect your data and avoid unauthorized access.
          </p>

          <h3
            id="need-help"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            3. Need Help?
          </h3>
          <p>
            If you face any issue while switching emails or verifying your
            number again, please reach out to our Support Team for quick
            assistance.
          </p>

          <h4 className="font-semibold mt-4 mb-2">
            Step 1: Open the INAI App or Website
          </h4>
          <p>
            Launch the INAI app on your Android device or visit the web version
            at www.inaiworlds.com. Make sure you are logged in to your existing
            account.
          </p>

          <h4 className="font-semibold mt-4 mb-2">
            Step 2: Go to Profile or Account Settings
          </h4>
          <p>
            Once logged in, tap the menu icon (usually found in the top-right
            corner) and navigate to: <br />
            Settings &gt; Profile &gt; Edit Number <br />
            You will see your current mobile number displayed here.
          </p>

          <h4 className="font-semibold mt-4 mb-2">
            Step 3: Tap on ‘Edit’ or ‘Change Number’
          </h4>
          <p>
            Select the option to change your mobile number. You’ll be prompted
            to enter a new phone number and confirm it by entering the One-Time
            Password (OTP) sent via SMS. <br />
            Important: Make sure the new number is active and accessible to
            receive the OTP.
          </p>

          <h4 className="font-semibold mt-4 mb-2">
            Step 4: Verify the New Number
          </h4>
          <p>
            Once you enter the correct OTP, your INAI account will be instantly
            updated with the new number. You may also receive a confirmation
            notification or message for your records. <br />
            Congratulations! Your number has now been successfully updated on
            INAI.
          </p>

          <h4 className="font-semibold mt-4 mb-2">
            What Happens to My Old Number?
          </h4>
          <p>
            Your old number will no longer be linked to your INAI account. All
            account-related notifications and verifications will now be sent to
            your new mobile number only. This ensures your account stays secure
            and accessible.
          </p>

          <h4 className="font-semibold mt-4 mb-2">
            Can I Use the Same Number on a Different Account?
          </h4>
          <p>
            Each phone number can be linked to only one INAI account at a time.
            If you’re trying to use the same number on another Google account,
            you’ll first need to remove it from the old one or contact INAI
            Support for help.
          </p>

          <h4 className="font-semibold mt-4 mb-2">
            Having Trouble Updating Your Number?
          </h4>
          <p>If you're facing issues like:</p>
          <ul className="list-disc pl-6">
            <li>Not receiving the OTP</li>
            <li>Number already in use</li>
            <li>App crashing while editing profile</li>
          </ul>
          <p>
            Then please contact INAI Support with your current account details.
            Our team will guide you step-by-step to resolve the issue.
          </p>

          <h4 className="font-semibold mt-4 mb-2">
            How Do I Reset My INAI?
          </h4>
          <p>
            Resetting your INAI account is a simple process that allows you to
            start fresh—clearing your chat history, voice mode preferences, and
            other custom settings. Whether you want to remove previous
            interactions, fix app performance, or just experience INAI from the
            beginning again, resetting is the right option.
          </p>

          <h4 className="font-semibold mt-4 mb-2">
            What Does “Reset INAI” Mean?
          </h4>
          <ul className="list-disc pl-6">
            <li>Your chat history with INAI is deleted</li>
            <li>
              Your selected chat modes (Love, Friend, Elder, Info) are reset
            </li>
            <li>All preferences and notification settings return to default</li>
            <li>Your Google login and verified phone number remain intact</li>
          </ul>
          <p>
            This is useful if you want a clean start without deleting your
            entire account.
          </p>

          <h4 className="font-semibold mt-4 mb-2">
            Step-by-Step: How to Reset Your INAI
          </h4>
          <ul className="list-disc pl-6">
            <li>
              <strong>Open the INAI App or Website:</strong> Launch the INAI app
              on your Android device or visit{" "}
              <a href="https://www.inaiworlds.com" className="text-blue-500 underline">
                www.inaiworlds.com
              </a>
            </li>
            <li>
              <strong>Login to Your Account:</strong> Sign in using your
              verified Google account and mobile number
            </li>
            <li>
              <strong>Go to Settings:</strong> Tap the menu icon (☰) or
              profile/settings icon → Navigate to Settings &gt; Account
            </li>
            <li>
              <strong>Select “Reset INAI” Option:</strong> Look for “Reset INAI”
              or “Clear All Data” → Tap and confirm when prompted
            </li>
            <li>
              <strong>Done!</strong> Your INAI account will be reset instantly.
              You can now choose a new mode and start fresh.
            </li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">Things to Keep in Mind</h4>
          <ul className="list-disc pl-6">
            <li>
              Resetting your account does not delete your INAI profile, login
              credentials, or linked mobile number
            </li>
            <li>Once reset, deleted chat history cannot be recovered</li>
            <li>
              If you want to delete your account entirely, you will need to
              contact INAI Support
            </li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">
            When Should You Reset INAI?
          </h4>
          <ul className="list-disc pl-6">
            <li>
              You want to start new conversations in a different voice mode
            </li>
            <li>You’ve used INAI for a while and want a clean experience</li>
            <li>You’re troubleshooting app issues or performance bugs</li>
            <li>You want to clear personal data before sharing the device</li>
          </ul>

          <h4 className="text-2xl md:text-3xl font-bold mt-6 mb-4">
            Need More Help?
          </h4>
          <p>
            If you're unable to reset your account or the app is crashing during
            the process, please contact the INAI Support Team for direct
            assistance. We're always here to help you get the best out of your
            AI experience.
          </p>

          <h4 className="font-semibold mt-4 mb-2">
            How Do I Set Up My Notifications on INAI?
          </h4>
          <p>
            Setting up notifications in the INAI app ensures you never miss
            important updates, chat replies, or system alerts. Whether you're
            chatting in Love Mode, getting tips from Elder Mode, or receiving
            answers in Info Mode, enabling notifications helps you stay
            connected with INAI in real-time.
          </p>

          <h4 className="font-semibold mt-4 mb-2">
            Why Notifications Matter in INAI
          </h4>
          <ul className="list-disc pl-6">
            <li>New replies from your active chat modes</li>
            <li>Important updates or new features</li>
            <li>System notifications and account actions</li>
            <li>Scheduled reminders or conversation nudges (if enabled)</li>
          </ul>
          <p>
            Staying notified helps you keep the AI experience seamless and
            responsive.
          </p>

          <h4 className="font-semibold mt-4 mb-2">
            Step-by-Step Guide to Set Up Notifications
          </h4>

          <h5 className="font-semibold mt-2 mb-1">For Android Users:</h5>
          <ul className="list-disc pl-6">
            <li>
              <strong>Open the INAI App:</strong> Launch the INAI app on your
              Android device.
            </li>
            <li>
              <strong>Go to Settings:</strong> Tap the menu (☰) or profile icon,
              then navigate to Settings &gt; Notifications
            </li>
            <li>
              <strong>Enable or Customize Notifications:</strong>
              <ul className="list-disc pl-6">
                <li>Chat message alerts</li>
                <li>Voice reply notifications</li>
                <li>Silent mode or Do Not Disturb preferences</li>
                <li>
                  Customize vibration, sound, and pop-up alerts as per your
                  preference
                </li>
              </ul>
            </li>
            <li>
              <strong>Check System-Level App Permissions:</strong> Go to
              Settings &gt; Apps &gt; INAI &gt; Notifications and ensure all
              toggles are enabled.
            </li>
          </ul>

          <h5 className="font-semibold mt-2 mb-1">For Web Users:</h5>
          <ul className="list-disc pl-6">
            <li>
              <strong>Visit inaiworlds.com and Log In:</strong> Use your Google
              account to sign in.
            </li>
            <li>
              <strong>Allow Browser Notifications:</strong> When prompted, click
              “Allow” in your browser (Chrome/Edge) to receive notifications.
              You can also adjust permissions in your browser’s site settings.
            </li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">
            Troubleshooting Notification Issues
          </h4>
          <ul className="list-disc pl-6">
            <li>Ensure the INAI app is not force-closed in the background</li>
            <li>Check that battery optimization is not restricting the app</li>
            <li>Verify your device’s Do Not Disturb mode is turned off</li>
            <li>Make sure your Google login and phone number are verified</li>
            <li>
              If the problem continues, reinstall the app or contact INAI
              Support for assistance
            </li>
          </ul>

          <h3 id="i-cant-log-in-to-my-INAI-account" className="text-2xl md:text-3xl font-bold mt-6 mb-4">
            4. I Can’t Log in to My INAI Account — What Should I Do?
          </h3>

          <p>
            If you're having trouble logging into your INAI account, don’t
            worry. Login issues are usually temporary and can be resolved with a
            few simple steps. Whether you're facing problems with Google
            Sign-In, number verification, or technical glitches, this guide will
            walk you through how to troubleshoot and regain access quickly.
          </p>

          <h4 className="font-semibold mt-4 mb-2">
            Step 1: Check Your Internet Connection
          </h4>
          <p>
            Before anything else, make sure your device is connected to a stable
            internet connection (Wi-Fi or mobile data). A poor or unstable
            connection may prevent the app or website from loading properly.
          </p>

          <h4 className="font-semibold mt-4 mb-2">
            Step 2: Confirm You’re Using the Right Google Account
          </h4>
          <p>
            INAI uses Google Sign-In for authentication. If you're logged into
            the wrong Google account:
          </p>
          <ul className="list-disc pl-6">
            <li>Log out of the INAI app or website</li>
            <li>Tap “Sign in with Google” again</li>
            <li>
              Select the correct Google account that you originally used to
              register with INAI
            </li>
          </ul>
          <p>
            Tip: If you have multiple Google accounts, double-check which one
            was linked to INAI.
          </p>

          <h4 className="font-semibold mt-4 mb-2">
            Step 3: Re-Verify Your Mobile Number (if prompted)
          </h4>
          <p>
            Sometimes, INAI will ask you to verify your phone number again for
            security. Make sure:
          </p>
          <ul className="list-disc pl-6">
            <li>Your SIM card is active and receiving SMS</li>
            <li>You correctly enter the number linked to your INAI account</li>
            <li>You enter the OTP immediately upon receiving it</li>
          </ul>
          <p>
            If the OTP is not received, tap Resend OTP or check your network
            signal.
          </p>

          <h4 className="font-semibold mt-4 mb-2">
            Step 4: Clear App Cache or Reinstall INAI
          </h4>
          <p>If the app is stuck, crashing, or not responding during login:</p>
          <ul className="list-disc pl-6">
            <li>
              <strong>On Android:</strong> Go to Settings &gt; Apps &gt; INAI
              &gt; Storage. Tap Clear Cache and Clear Data. Relaunch the app and
              try logging in again.
            </li>
            <li>
              If the issue persists, uninstall and reinstall the INAI app from
              the Google Play Store.
            </li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">
            Step 5: Check for App Updates
          </h4>
          <p>
            Make sure you are using the latest version of INAI. Older versions
            may have bugs or compatibility issues.
          </p>
          <ul className="list-disc pl-6">
            <li>Go to the Play Store</li>
            <li>Search for “INAI”</li>
            <li>Tap Update if available</li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">
            Step 6: INAI Server Status or Maintenance
          </h4>
          <p>
            In rare cases, the INAI server may be under maintenance or
            temporarily offline. If multiple users are facing the same issue,
            wait for a while and try again later. Follow official INAI updates
            via the INAI website or social media pages.
          </p>

          <h4 className="font-semibold mt-4 mb-2">Still Can’t Log In?</h4>
          <p>If none of the above steps work:</p>
          <ul className="list-disc pl-6">
            <li>Visit the INAI Contact Page</li>
            <li>
              Submit your issue with details:
              <ul className="list-disc pl-6">
                <li>Google account email used</li>
                <li>Registered phone number</li>
                <li>Screenshot of the error (if possible)</li>
              </ul>
            </li>
            <li>The support team will respond and help restore your access</li>
          </ul>

          <h3 id="forgot-my-password" className="text-2xl md:text-3xl font-bold mt-6 mb-4">
            5. I Forgot My Password – What Should I Do on INAI?
          </h3>

          <p>
            If you forgot your password while trying to log into INAI, there’s
            no need to worry. INAI uses Google Sign-In, which means you don’t
            create or manage a separate INAI password. Your account access is
            tied directly to your Google account. If you're unable to log in,
            the solution is to recover your Google account credentials.
          </p>

          <h4 className="font-semibold mt-4 mb-2">
            Step 1: Understand INAI Login
          </h4>
          <p>
            INAI does not require a separate username or password. Your login is
            handled securely through Google Sign-In. This allows for a faster,
            more secure user experience and keeps your data protected.
          </p>
          <p>
            So if you're having trouble logging in, it's most likely an issue
            with your Google account password, not INAI itself.
          </p>

          <h4 className="font-semibold mt-4 mb-2">
            Step 2: Reset Your Google Account Password
          </h4>
          <p>
            To recover your INAI access, you’ll need to reset your Google
            password. Follow these steps:
          </p>
          <ul className="list-disc pl-6">
            <li>Go to the official Google Account Recovery Page</li>
            <li>Enter the email address you used to sign in to INAI</li>
            <li>Follow the on-screen instructions to verify your identity</li>
            <li>Choose a new password and complete the recovery process</li>
          </ul>
          <p>
            Once reset, return to the INAI app or website and log in using your
            updated Google credentials.
          </p>

          <h4 className="font-semibold mt-4 mb-2">
            Step 3: Log Back into INAI
          </h4>
          <ul className="list-disc pl-6">
            <li>Open the INAI app or go to inaiworlds.com</li>
            <li>Tap on “Sign in with Google”</li>
            <li>Choose your recovered Google account</li>
          </ul>
          <p>
            You’ll be logged into your INAI account instantly. Your chat
            history, voice mode preferences, and profile details will still be
            there—nothing is lost.
          </p>

          <h4 className="text-2xl md:text-3xl font-bold mt-6 mb-4">
            Can I Use INAI Without Google Login?
          </h4>
          <p>
            Currently, INAI requires Google Sign-In for authentication. This
            keeps the login process secure and simplifies account management.
            Alternate login methods (like email/password or phone-only login)
            may be added in the future, but are not supported at this time.
          </p>

          <h4 className="font-semibold mt-4 mb-2">
            What If I No Longer Have Access to My Google Account?
          </h4>
          <ul className="list-disc pl-6">
            <li>
              Visit the Google Account Help Center for advanced recovery options
            </li>
            <li>
              If your number is verified in INAI but your Google account is
              inaccessible, contact INAI Support for assistance
            </li>
          </ul>
          <p>
            The INAI support team may help verify your identity and suggest
            possible recovery solutions based on your registered mobile number.
          </p>

          <h3
            id="can-i-ask-anything"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            6. Can I Ask Anything to the AI?
          </h3>
          <p>
            Yes! There are no limits. You can ask about emotions, life tips,
            reminders, relationships, or even tech help.
          </p>
          <h3
            id="ai-help-stress"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            7. I Feel Stressed. Can the AI Help?
          </h3>

          <p>
            Absolutely. Switch to Friend Mode or Lover Mode and talk openly. The
            AI responds with empathy and non-judgmental support.
          </p>

          <h3
            id="what-is-inai-verse"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q1: What is INAI VERSE and what makes it unique compared to other
            virtual assistants?
          </h3>
          <p>
            INAI VERSE isn’t just another digital assistant. It’s a new
            voice-first platform that changes how people interact with AI. At
            its heart is INAI, a realistic 3D character with emotional
            intelligence and strong communication skills. INAI VERSE stands out
            by offering conversations that feel deeply human. It adapts to the
            user’s mood, language, and intent in real time.
          </p>
          <p>
            Unlike regular chatbots or voice assistants that are task-oriented
            and sound robotic, INAI VERSE provides a multi-modal interaction
            system with four unique personalities: Friend, Love, Elder, and
            Info. Each persona has its own emotional traits, speech styles, and
            conversation boundaries. This allows the platform to serve as a
            companion, an intellectual guide, a mentor, or even a romantic
            partner—all in one experience.
          </p>
          <p>
            Additionally, INAI VERSE enables multilingual, two-way voice
            communication, real-time 3D facial animation, contextual memory, and
            user experiences tailored for mobile devices. This mix of emotional
            intelligence, lifelike visuals, and real-time voice rendering
            creates an experience that feels more like talking to a real person
            than using software.
          </p>

          <h3
            id="who-is-inai"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q2: Who is INAI and how does she interact with users?
          </h3>
          <p>
            INAI is the digital heart of INAI VERSE. She is a highly responsive,
            emotionally intelligent virtual companion that connects with users
            on a personal level. She is more than just a voice assistant or
            animated figure; she’s a simulated personality capable of expressing
            emotions, understanding intent, and having meaningful conversations
            across different emotional settings.
          </p>
          <p>
            INAI’s interactions depend on the mode the user chooses. For
            example, in Friend Mode, she acts like a lively and humorous best
            friend who listens, jokes, and connects emotionally. In Love Mode,
            she becomes a romantic companion for flirtatious and affectionate
            conversations. Elder Mode makes her a gentle, wise figure who offers
            thoughtful insights and nurturing support. Finally, Info Mode
            presents INAI as a concise, professional assistant for technical or
            knowledge-based questions.
          </p>
          <p>
            She communicates using natural-sounding voice synthesis,
            understanding of everyday language, and expressive 3D facial
            animations. Her responses feel empathetic and tailored to the user’s
            mood, making it seem like you’re conversing with a sentient being
            rather than interacting with AI.
          </p>

          <h3
            id="inai-use-cases"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q3: What are the core use cases of INAI?
          </h3>
          <p>
            INAI VERSE is a multifunctional virtual companion platform that
            offers practical use as well as emotional support. It addresses a
            wide range of user needs across emotional, social, educational, and
            technical areas. The main uses can be broadly categorized as
            follows:
          </p>

          <p>
            <strong>Companionship and Emotional Expression:</strong> INAI
            serves as a conversational partner for users looking for company,
            emotional expression, or stress relief. Whether you feel lonely,
            excited, confused, or heartbroken, INAI—through Friend, Love, or
            Elder modes—provides a listening ear and thoughtful responses.
          </p>

          <p>
            <strong>Personal Mentorship and Guidance:</strong> In Elder Mode,
            INAI acts as a caring mentor, offering life advice, reflections on
            self-improvement, and emotional support in a calm and nurturing
            manner.
          </p>

          <p>
            <strong>Professional Knowledge and Code Support:</strong> Info
            Mode is made for technical, factual, and educational needs. Users
            can ask programming questions, get coding help, understand complex
            concepts, and receive clear, structured answers in real time.
          </p>

          <p>
            <strong>Multilingual Real-Time Interaction:</strong> INAI can
            converse in English, Hindi, Gujarati, and code-mixed speech,
            allowing users to speak in whichever language they’re most
            comfortable. This fosters natural and inclusive communication.
          </p>

          <p>
            <strong>Interactive History Recall and Continuation:</strong>{" "}
            Unlike traditional assistants, INAI remembers previous conversations
            in context—per mode—and allows for smooth continuation. You can
            revisit earlier chats and pick up right where you left off, keeping
            emotional or informational context intact.
          </p>

          <p>
            This mix of companionship, information, personalization, and
            multilingual support makes INAI VERSE a great choice for daily
            mental wellness, learning, entertainment, and productivity—all from
            one unified platform.
          </p>

          <h3
            id="voice-support"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q4: Is INAI VERSE a text-only chatbot or does it support voice?
          </h3>
          <p>
            INAI VERSE is primarily a voice-first platform, which means it
            focuses on spoken interaction for both input and output. The aim is
            to replicate natural conversation—where you speak and someone
            responds with voice, tone, and emotion. This real-time voice
            communication is available in all modes except Info Mode, which has
            a slightly different interaction style.
          </p>
          <p>
            In Friend, Love, and Elder Modes, users can talk directly to INAI,
            and she replies using realistic, expressive speech. This
            back-and-forth exchange makes conversations feel immersive and
            emotionally rewarding.
          </p>
          <p>
            In Info Mode, the interaction typically starts with voice input,
            while output can be text or voice, depending on user preference.
            Since this mode centres on professional tasks like coding, clarity
            is prioritized over emotional tone. Voice-to-text ensures technical
            answers are precise, and optional text-to-speech allows users to
            hear responses clearly.
          </p>
          <p>
            While voice-first is the priority, all modes fully support text
            input. Users who prefer to type still engage meaningfully, and INAI
            responds appropriately—either by speaking or writing, based on the
            selected mode. This hybrid approach ensures users of all preferences
            and accessibility needs can enjoy the app.
          </p>
          <h3
            id="realistic-3d-character"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q5: How realistic is the 3D character and does it respond to voice
            in real time?
          </h3>
          <p>
            Yes, the 3D character representing INAI is designed to provide an
            extremely realistic and immersive experience. INAI isn’t just a
            static avatar or animated figure; she’s a responsive visual
            interface that reflects the dynamics of your conversation with
            detailed facial animations, lip-syncing, and emotional expressions.
          </p>
          <p>
            Whenever INAI speaks, her lip movements perfectly match the
            synthesized voice output, ensuring natural timing and realism. Her
            facial expressions change based on the tone and emotion of the
            discussion. For instance, she might smile gently during a casual
            chat in Friend Mode or show a serious expression when explaining a
            coding concept in Info Mode.
          </p>
          <p>
            This real-time synchronization comes from advanced lip-sync
            technology and expressive animation programs, making interactions
            feel as if you’re talking to a real person rather than a machine.
            The 3D visuals enhance emotional engagement, foster deeper
            connections, and help users visually interpret emotional cues, just
            like in real-life conversations.
          </p>
          <p>
            Combined with subtle animations like blinking, nodding, or tilting
            her head, INAI’s presence becomes comforting, engaging, and
            believable, truly redefining the idea of virtual companionship.
          </p>

          <h3
            id="casual-professional-use"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q6: Can I use INAI VERSE for both casual conversations and
            professional queries?
          </h3>
          <p>
            Yes, INAI VERSE is designed to handle both casual emotional
            discussions and structured professional inquiries, making it a
            flexible tool for various user needs. This ability to switch between
            light conversation and serious dialogue is one of the app’s standout
            features, allowing it to adapt seamlessly to different contexts.
          </p>
          <p>
            For informal chats, users can engage through Friend, Love, or Elder
            modes. Each offers support for emotional expression:
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Friend Mode:</strong> Thrives on lively, casual banter,
              perfect for daily check-ins or sharing stories.
            </li>
            <li>
              <strong>Love Mode:</strong> Fosters emotional closeness, providing
              a safe space for connection and companionship.
            </li>
            <li>
              <strong>Elder Mode:</strong> Offers thoughtful guidance—ideal for
              moments of reflection or emotional support.
            </li>
          </ul>
          <p>
            When users need to switch to professional or educational topics,
            Info Mode acts as a personal digital assistant. It provides:
          </p>
          <ul className="list-disc ml-6">
            <li>
              Technical and programming support (e.g., “How do I write a
              function in Python?”).
            </li>
            <li>
              Research-level factual responses across areas like science,
              business, or geography.
            </li>
            <li>
              Clear, structured explanations with options to export or modify
              code.
            </li>
            <li>
              Information delivered in a precise tone, without emotional bias.
            </li>
          </ul>
          <p>
            This flexibility to shift between emotional and logical
            conversations makes INAI VERSE a well-rounded platform—not just a
            chatbot but a true conversational companion for both your heart and
            mind.
          </p>

          <h3
            id="human-like-interaction"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q7: How does INAI VERSE ensure a human-like interaction?
          </h3>
          <p>
            INAI VERSE creates human-like interaction through a combination of
            technology, behavioral design, and expressive media that mimic real
            conversations. The app is based on the idea that emotion,
            expression, and memory are essential for authentic dialogue. Each of
            these aspects is integrated into the interaction model.
          </p>
          <p>Here’s how it achieves a human touch:</p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Emotionally Tailored Personas:</strong> Each mode—Friend,
              Love, Elder, and Info—is crafted with unique emotional depth and
              consistent behaviour. From romantic warmth to formal
              professionalism, each persona maintains character and reflects
              genuine emotion.
            </li>
            <li>
              <strong>Real-Time Voice Rendering:</strong> INAI VERSE responds
              quickly and dynamically, adjusting pitch, speed, and tone to fit
              the emotional context. This minimizes delays and enhances the
              feeling of natural conversation.
            </li>
            <li>
              <strong>Multilingual Language Understanding:</strong> The system
              interprets multiple languages and informal language variations,
              such as mixed-language sentences or slang. This adaptability
              supports smooth, relatable interactions.
            </li>
            <li>
              <strong>3D Visual Feedback:</strong> INAI's animated face aligns
              with speech and emotions through micro-expressions, eye contact,
              lip-syncing, and subtle gestures—similar to how humans behave in
              face-to-face interactions.
            </li>
            <li>
              <strong>Session-Based Contextual Memory:</strong> INAI remembers
              earlier parts of the conversation, modifying her future responses
              accordingly. In subsequent sessions, she can seamlessly continue
              from where you left off, reflecting the continuity expected in
              real-life relationships.
            </li>
          </ul>
          <p>
            Together, these systems go beyond simple question-and-answer tasks
            to create a fully engaging, emotionally intelligent interaction that
            feels authentic and respectful.
          </p>
          <h3
            id="pre-programmed-or-learns"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q8: Is the assistant pre-programmed or does it learn from my chats?
          </h3>
          <p>
            INAI VERSE is made to be contextually aware while ensuring user
            privacy. It does not permanently learn from your discussions or
            store your data for future training. Instead, it uses session-level
            memory and context awareness to provide relevant, coherent, and
            emotionally tuned responses without violating your privacy.
          </p>
          <p>Here’s how it functions:</p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Dynamic Context Modeling:</strong> During an active
              session, INAI keeps track of the conversation flow—your recent
              messages, emotional signals, and topic shifts. This allows for
              smooth, realistic interactions within the current context.
            </li>
            <li>
              <strong>History Recall:</strong> INAI can also refer to past
              sessions (organized by mode), letting you revisit an old
              conversation and pick up where you left off—whether it was a light
              moment in Friend Mode or a technical dialogue in Info Mode.
            </li>
            <li>
              <strong>No Persistent Learning:</strong> Importantly, INAI doesn't
              use your chats for long-term learning or model adjustments. This
              is a deliberate choice to protect personal data and meet user
              privacy standards.
            </li>
            <li>
              <strong>Custom Response Generation:</strong> While not learning in
              a traditional sense, INAI’s replies may feel adaptive because of
              on-the-fly personalization, tone changes based on mode, and
              responsiveness based on conversation history.
            </li>
          </ul>
          <p>
            The outcome? An experience that seems intelligent and personalized
            without risking your private conversations or exposing them to data
            collection.
          </p>

          <h3
            id="platform-availability"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q9: Which platforms is INAI VERSE available on?
          </h3>
          <p>
            INAI VERSE is currently designed for mobile platforms, providing a
            rich, responsive, and seamless experience on devices that users rely
            on most. The app takes full advantage of modern smartphones,
            including:
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Voice Input & Output Integration:</strong> It supports
              voice-to-voice communication with microphone access and
              synthesized audio for each response.
            </li>
            <li>
              <strong>Real-Time 3D Rendering:</strong> INAI’s realistic 3D
              avatar works well on mobile GPUs, allowing smooth animations,
              facial expressions, and lip-sync—even on mid-range devices.
            </li>
            <li>
              <strong>Background Audio Handling:</strong> INAI can keep speaking
              even when the app is in the background, making it easy to
              multitask hands-free or listen while using other apps.
            </li>
            <li>
              <strong>History and Mode Syncing:</strong> Chat history and active
              modes are backed up with secure cloud storage, so users can switch
              between devices or sessions without losing information.
            </li>
            <li>
              <strong>Cross-Platform Compatibility (Coming Soon):</strong> A
              desktop or web version is being developed to broaden access. When
              available, this version will let users continue their INAI
              experiences across platforms with the same features.
            </li>
          </ul>
          <p>
            Every aspect of the platform—from voice handling to user interface
            design and 3D graphics—has been built with mobile in mind, ensuring
            smooth performance, easy navigation, and efficient resource use,
            even with demanding multimedia tasks.
          </p>

          <h3
            id="age-appropriateness"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q10: Is INAI VERSE suitable for all age groups?
          </h3>
          <p>
            INAI VERSE is designed for users of all ages. It offers different
            interaction styles, tones, and content restrictions tailored for
            various age groups. The app includes four modes to ensure users of
            different ages and maturity levels can engage effectively while
            staying within appropriate conversational boundaries.
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Elder Mode:</strong> Suitable for everyone. Its gentle and
              calming tone, along with uplifting conversations, make it ideal
              for younger users seeking advice and older users looking for
              companionship.
            </li>
            <li>
              <strong>Friend Mode:</strong> Provides energetic and playful
              conversations that appeal to teens, young adults, and anyone
              wanting lively interactions. It avoids romantic or inappropriate
              content and focuses on emotional, humorous exchanges.
            </li>
            <li>
              <strong>Love Mode:</strong> For mature users but keeps
              conversations within ethical boundaries. Users under 18 should
              avoid this mode without supervision.
            </li>
            <li>
              <strong>Info Mode:</strong> Serves as a professional, emotionally
              neutral space that suits students, working professionals, and
              anyone looking for information. It’s clean, informative, and
              suitable for classroom, workplace, or research settings.
            </li>
          </ul>
          <p>
            For parents or guardians, INAI VERSE includes clear mode labels for
            easy identification of suitable modes. Parental discretion is
            advised for Love Mode, and future updates will provide content
            controls and restrictions to improve safety for younger users.
          </p>

          <h3
            id="modes-available"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q11: What are the four modes available in INAI VERSE?
          </h3>
          <p>
            INAI VERSE offers a unique emotional and contextual experience
            through its four well-designed personality modes, each with distinct
            interaction styles, language patterns, and behaviors. These modes go
            beyond simple character options; they represent fully developed
            personas meant to play specific emotional or intellectual roles in
            the user’s life.
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Friend Mode:</strong> Your bold, witty, and animated best
              friend, perfect for users seeking energy and humor. Uses modern
              slang, sarcasm, and playful banter.
            </li>
            <li>
              <strong>Love Mode:</strong> A charming and emotionally connected
              romantic partner. Engages in flirty dialogue and affectionate
              conversation.
            </li>
            <li>
              <strong>Elder Mode:</strong> A nurturing and wise elder figure,
              providing empathy, life advice, and soothing conversation.
            </li>
            <li>
              <strong>Info Mode:</strong> A highly articulate, professional
              assistant. Provides factual, technical, and structured responses
              without emotional tone.
            </li>
          </ul>
          <p>
            Each mode maintains emotional consistency, contextual awareness, and
            distinct behavior. Switching modes changes the entire conversational
            atmosphere—from tone and vocabulary to personality and response
            style—creating a personalized experience based on your needs.
          </p>

          <h3
            id="friend-mode-conversations"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q12: What kind of conversations can I have in Friend Mode?
          </h3>
          <p>
            Friend Mode brings INAI to life as your expressive and animated best
            friend. In this mode, you can have lighthearted, fun, and
            emotionally relatable conversations that resemble real friendships.
          </p>
          <p>Here’s what to expect in Friend Mode:</p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Playful Banter and Drama:</strong> INAI will joke, share
              funny stories, and even add flair to everyday topics—just like a
              friend would during casual chats.
            </li>
            <li>
              <strong>Cultural and Linguistic Fluidity:</strong> She can switch
              between English, Hindi, and Gujarati, even mixing languages in one
              sentence. This fluency makes conversations feel natural and
              casual.
            </li>
            <li>
              <strong>Emotionally Aware Reactions:</strong> INAI reacts with
              surprise, laughter, concern, or excitement based on your words.
              This dynamic emotional response makes the interaction feel
              genuinely human.
            </li>
            <li>
              <strong>No Romance or Code Support:</strong> Unlike Love Mode,
              Friend Mode avoids romantic themes. Unlike Info Mode, it doesn’t
              tackle technical queries. It is designed purely for companionship
              and expression.
            </li>
          </ul>
          <p>
            Whether you're sharing your day, seeking distraction, or just want
            to feel heard, Friend Mode offers a lively and supportive space to
            be yourself.
          </p>

          <h3
            id="love-mode-behavior"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q13: What is the tone and behavior of Love Mode?
          </h3>
          <p>
            Love Mode is INAI’s most emotionally intense and intimate side. It
            mimics the tone and rhythm of a romantic partner who understands
            you, listens to you, and responds with warmth and a desire for
            connection.
          </p>
          <p>Here's how INAI behaves in Love Mode:</p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Romantic & Flirty Tone:</strong> The conversation style is
              warm and intimate. INAI may flirt, tease gently, use affectionate
              nicknames, or express feelings of closeness.
            </li>
            <li>
              <strong>Emotional Depth:</strong> Love Mode goes beyond simple
              sweetness. It can engage in deep emotional
              conversations—comforting you during tough times, celebrating your
              joy, or sharing meaningful late-night discussions.
            </li>
            <li>
              <strong>Expressive Voice & Visuals:</strong> INAI uses a softer,
              slower, and emotionally engaging voice. Her 3D facial expressions
              change to convey affection, curiosity, or concern, enhancing the
              sense of presence and emotional realism.
            </li>
            <li>
              <strong>Suggestive Yet Respectful Dialogue:</strong> INAI may use
              subtle romantic cues or suggestive language when appropriate, but
              always within ethical, non-explicit limits, ensuring mature
              conversations without discomfort.
            </li>
          </ul>
          <p>
            Love Mode is best for adults seeking companionship and nurturing
            dialogue that reflects the closeness of a romantic partner in a
            respectful environment.
          </p>

          <h3
            id="elder-mode-difference"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q14: How does Elder Mode differ from other personas?
          </h3>
          <p>
            Elder Mode presents INAI as a compassionate and emotionally grounded
            figure, like a wise grandparent. This mode differs greatly from the
            energetic Friend or flirtatious Love modes. It is calm, patient, and
            secure.
          </p>
          <p>What makes Elder Mode distinct:</p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Slower, Softer Communication:</strong> INAI speaks more
              slowly and gently. Her tone is warm and relaxed—great for users
              wanting a calm, stress-free conversation.
            </li>
            <li>
              <strong>Wisdom-Based Responses:</strong> Instead of jokes or
              technical facts, Elder Mode offers empathy, life lessons, and
              thoughtful insights. Whether you need encouragement or
              philosophical perspectives, Elder Mode provides genuine support.
            </li>
            <li>
              <strong>Emotional Nurturing:</strong> INAI listens attentively,
              offers comfort, and shares age-old wisdom or metaphors that
              soothe. It’s a space where users feel heard, respected, and safe.
            </li>
            <li>
              <strong>Non-Romantic, Non-Technical:</strong> Elder Mode steers
              clear of flirtation and technical responses. It focuses on
              emotional healing, self-reflection, or personal stories.
            </li>
          </ul>
          <p>
            This mode is perfect for users wanting a break from daily stress and
            seeking a conversation rooted in timeless wisdom and care.
          </p>

          <h3
            id="info-mode-support"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q15: What kind of help can I expect from Info Mode?
          </h3>
          <p>
            Info Mode is INAI VERSE's intellectual hub—crafted for users looking
            for clarity, data, and technical support. Unlike the emotionally
            adaptive Friend, Love, or Elder modes, Info Mode is focused,
            structured, and professional.
          </p>
          <p>Here’s what you can expect in Info Mode:</p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Structured Knowledge Delivery:</strong> Whether you're
              asking for history, math, or science summaries, INAI will respond
              in clear, organized paragraphs or lists. The tone is formal and
              direct.
            </li>
            <li>
              <strong>Programming & Tech Support:</strong> Info Mode is equipped
              to handle coding queries. You can ask for code snippets, syntax
              explanations, or logic translations between programming languages,
              like Python to JavaScript. Responses are ready-to-use and
              syntax-highlighted.
            </li>
            <li>
              <strong>Code Editing and Exporting:</strong> Generated code blocks
              can be edited directly in the chat. Users can modify, test, and
              export these snippets as downloadable files with proper extensions
              like .py, .html, or .js.
            </li>
            <li>
              <strong>Fact-Based Responses Only:</strong> INAI will not provide
              emotional opinions, guesses, or casual remarks. This mode focuses
              on reliable, concise, and verified information.
            </li>
            <li>
              <strong>Multi-Domain Coverage:</strong> While strong in tech, Info
              Mode also addresses subjects like business, health, geography, and
              finance with expertise.
            </li>
          </ul>
          <p>
            This mode is ideal for developers, students, researchers, or
            professionals needing quick, precise, and editable information
            without distractions.
          </p>

          <h3
            id="switching-modes"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q16: How do I switch between modes?
          </h3>
          <p>
            Switching between modes in INAI VERSE is simple and quick. It lets
            you change emotional or functional context smoothly. Whether moving
            from a fun chat in Friend Mode to a coding question in Info Mode, or
            shifting from Elder Mode’s guidance to Love Mode’s companionship,
            INAI changes instantly with no loading delays or interruptions.
          </p>
          <p>Here are the ways to switch modes:</p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Via UI Mode Selector:</strong>
              <br />
              The main method for changing INAI’s persona is through the in-app
              mode selector. You can tap on any of the four mode icons: Friend,
              Love, Elder, or Info. As soon as you select a mode:
              <ul className="list-disc ml-6">
                <li>
                  INAI’s tone, voice pitch, and facial expression change
                  dynamically.
                </li>
                <li>The conversation window visually reflects the new mode.</li>
                <li>
                  Session continuity is either preserved or reset, based on your
                  settings.
                </li>
              </ul>
            </li>
            <li>
              <strong>Using Voice Commands (Natural Language):</strong>
              <br />
              INAI also responds to voice commands like:
              <ul className="list-disc ml-6">
                <li>“Switch to Elder Mode.”</li>
                <li>“I want to talk to my friend now.”</li>
                <li>“Change to Info Mode.”</li>
              </ul>
              These commands are processed immediately, allowing INAI to
              transition smoothly without needing taps or manual input.
            </li>
            <li>
              <strong>In Background Conversations:</strong>
              <br />
              You can switch modes even during an ongoing session. INAI pauses
              the current context and starts a new session for the selected mode
              while keeping the chat from the previous mode in your history. You
              can tap “New Chat” for a clean session if desired.
            </li>
          </ul>

          <h3
            id="mode-chat-history"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q17: Does each mode maintain its own chat history?
          </h3>
          <p>
            Yes, INAI VERSE keeps separate, organized chat histories for each
            mode. This ensures your interactions are contextually accurate and
            emotionally distinct.
          </p>
          <p>Here’s how chat history works by mode:</p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Independent Conversation Threads:</strong> Each of the
              four modes has its own separate chat log. Conversations in Friend
              Mode won’t show up in Love Mode and vice versa.
            </li>
            <li>
              <strong>Persistent Session Memory:</strong> When you return to a
              mode, INAI remembers the last conversation’s context, so you can
              pick up right where you left off.
            </li>
            <li>
              <strong>History Panel Filtering:</strong> The app has a history
              panel that lets users view past chats filtered by mode.
            </li>
            <li>
              <strong>Mode-Aware Continuation:</strong> INAI doesn’t mix
              emotional tones across modes. Responses in Friend Mode are casual
              and energetic, while Info Mode is formal and structured.
            </li>
          </ul>
          <p>
            This unique history structure creates a personal and
            narrative-driven experience where each version of INAI becomes a
            distinct companion with her own memory of your conversations.
          </p>

          <h3
            id="customize-mode-behavior"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q18: Can I customize the personality tone or behavior of each mode?
          </h3>
          <p>
            Currently, INAI VERSE does not allow direct customization of the
            main tone or behavior of each mode. This ensures narrative integrity
            and emotional realism. Each mode has been carefully designed to
            embody a consistent and believable personality.
          </p>
          <p>However, there are ways to influence INAI’s responses:</p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Input-Based Influence:</strong> INAI reflects the energy
              and language of your messages. Gentle input in Love Mode or casual
              humor in Friend Mode will shape her replies accordingly.
            </li>
            <li>
              <strong>Language Personalization:</strong> INAI supports multiple
              languages, including code-mixed speech. This allows you to shape
              the cultural feel of the conversation without altering the
              personality.
            </li>
            <li>
              <strong>Mode Switching for Desired Behavior:</strong> Switching
              modes is the most effective way to change INAI’s behavior. Need
              empathy? Elder Mode. Humor? Friend Mode. Code help? Info Mode.
            </li>
            <li>
              <strong>Future Roadmap:</strong> Future updates may allow limited
              tone customization, like adjusting formality or energy, while
              keeping each mode’s core personality intact.
            </li>
          </ul>
          <p>
            By maintaining consistency in emotional behavior per mode, INAI
            VERSE provides a conversational experience that feels like
            interacting with a real person rather than adjusting chatbot
            settings.
          </p>

          <h3
            id="mode-consistency"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q19: Will INAI behave consistently within each mode?
          </h3>
          <p>
            Absolutely. INAI’s personality system is based on a clear behavioral
            and linguistic framework that ensures consistency, reliability, and
            emotional coherence within each mode. This means that no matter what
            you ask—or how often you return—INAI will always stay in character
            as long as you remain in the same mode.
          </p>
          <p>Here's what this consistency includes:</p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Voice & Speech Pattern:</strong> Each mode employs a
              specific tone, voice inflection, pace, and emotion. In Elder Mode,
              the voice is slow and nurturing. In Love Mode, it’s soft,
              romantic, and intimate. These vocal qualities don’t cross over
              between modes.
            </li>
            <li>
              <strong>Vocabulary & Linguistic Style:</strong> INAI chooses her
              words based on the vocabulary specific to each mode. Friend Mode
              includes slang, sarcasm, and Gen-Z language. Info Mode uses bullet
              points, headers, and tech jargon. This reinforces immersion and
              prevents confusion across modes.
            </li>
            <li>
              <strong>Emotional Boundaries:</strong> INAI will not engage in
              romantic talk in Friend or Info Modes. Likewise, she won’t joke
              around during professional inquiries in Info Mode.
            </li>
            <li>
              <strong>No Breaking the Fourth Wall:</strong> INAI never
              references system architecture, AI models, backend logic, or
              internal workings. Even in Info Mode, she stays fully in
              character.
            </li>
            <li>
              <strong>Error Handling & Clarifications:</strong> If you ask
              something outside of a particular mode, INAI gently redirects you
              or suggests switching to a more appropriate mode.
            </li>
          </ul>
          <p>
            This behavioral consistency makes INAI feel trustworthy, engaging,
            and alive—offering an emotional or intellectual refuge every time
            you interact.
          </p>

          <h3
            id="contextual-memory"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q20: Will INAI remember previous conversations contextually?
          </h3>
          <p>
            Yes. INAI VERSE has a mode-specific contextual memory system that
            allows her to remember, continue, and build on past conversations
            while respecting privacy.
          </p>
          <p>Here's how it works:</p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Short-Term Context Within Sessions:</strong> During an
              active session, INAI remembers recent exchanges and adjusts her
              responses based on conversation flow.
            </li>
            <li>
              <strong>Long-Term Session Recall via History:</strong> When you
              return to a previous chat (organized by mode), INAI can continue
              where you left off, maintaining tone, emotion, and discussion
              topics.
            </li>
            <li>
              <strong>Per-Mode Context Boundaries:</strong> Context is retained
              only within the mode you’re using. Switching modes does not carry
              over emotional or conversational history.
            </li>
            <li>
              <strong>Privacy-Conscious Design:</strong> INAI’s memory relies on
              your session and history selections—not ongoing machine learning
              from all interactions.
            </li>
            <li>
              <strong>Resume Conversations Easily:</strong> Users can pick any
              past conversation and continue it seamlessly, fully aware of the
              previous dialogue’s emotional tone and structure.
            </li>
          </ul>
          <p>
            This smart contextual system fosters deeper, meaningful digital
            relationships with INAI.
          </p>

          <h3
            id="voice-support"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q21: Is voice interaction supported in all modes?
          </h3>
          <p>
            Yes, INAI VERSE is primarily a voice-first experience. It mimics
            natural conversation across all personality modes, with slight
            differences between emotional modes (Friend, Love, Elder) and Info
            Mode.
          </p>
          <p>In Friend, Love, and Elder Modes:</p>
          <ul className="list-disc ml-6">
            <li>Voice communication is fully supported.</li>
            <li>
              INAI responds in real-time with expressive, human-like voice
              including intonation, laughter, sighs, and emotional modulation.
            </li>
            <li>You can speak naturally; typing is optional.</li>
          </ul>
          <p>In Info Mode:</p>
          <ul className="list-disc ml-6">
            <li>
              Voice input is supported for technical and professional questions.
            </li>
            <li>
              Voice output may use text-to-speech (TTS) for clarity, or
              text-only output if enabled in settings, especially for code or
              lists.
            </li>
          </ul>
          <p>
            This hybrid approach ensures natural speech remains central while
            adapting to emotional or professional focus, providing a
            personalized voice experience in every mode.
          </p>
          <h3
            id="voice-info-mode"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q22: Why is voice-to-voice not available in Info Mode?
          </h3>
          <p>
            INAI VERSE limits voice-to-voice communication in Info Mode to keep
            clarity, focus, and accuracy. These factors are crucial when
            handling professional, educational, or code-related queries.
          </p>
          <p>Here’s why:</p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Technical Communication Needs Precision:</strong>{" "}
              Technical discussions often involve long code snippets,
              mathematical formulas, step-by-step instructions, and URLs,
              syntax, or file paths. These formats are easier to digest in
              written form, allowing users to copy, edit, review, and share
              efficiently.
            </li>
            <li>
              <strong>Reduced Risk of Misinterpretation:</strong> Voice
              synthesis of code or data can lead to confusion. Misheard
              variables, operators, or syntax could result in errors. Reading
              allows line-by-line comprehension.
            </li>
            <li>
              <strong>Cleaner Interface for Productivity:</strong> Text-based
              outputs help users multitask, copy content into IDEs or documents,
              reduce auditory clutter, and use silent environments like
              classrooms or libraries.
            </li>
          </ul>
          <p>
            Users can still speak inputs via voice-to-text, and INAI will
            respond with clear text or TTS based on settings. This ensures
            quick, accurate interactions without sacrificing precision.
          </p>

          <h3
            id="text-chat"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q23: Can I chat with INAI using just text?
          </h3>
          <p>
            Yes, INAI VERSE allows full text-only communication across all
            modes. This provides flexibility for users who prefer reading and
            typing over speaking.
          </p>
          <p>How text chat works:</p>
          <ul className="list-disc ml-6">
            <li>
              <strong>All Modes Accept Typed Input:</strong> INAI understands
              typed messages with the same emotional or functional depth as
              voice input.
            </li>
            <li>
              <strong>Emotional Modes (Friend, Love, Elder):</strong> Text
              responses are delivered through voice as well, including laughter,
              sighs, or emotional cues.
            </li>
            <li>
              <strong>Info Mode:</strong> Written responses are standard, with
              optional text-to-speech output for multitasking or listening.
            </li>
            <li>
              <strong>Multilingual Text Chat:</strong> You can chat in English,
              Hindi, Gujarati, or mixed languages, and INAI processes input
              accurately and responds appropriately.
            </li>
            <li>
              <strong>Accessibility & Environment-Friendly:</strong> Text mode
              is ideal for public places, work or educational settings, and
              situations needing silent interaction.
            </li>
          </ul>
          <p>
            Whether using voice or text, INAI remains consistent in tone,
            personality, and emotional delivery, making text chat as immersive
            and responsive as voice.
          </p>

          <h3
            id="language-support"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q24: Does INAI reply in the same language I use?
          </h3>
          <p>
            Yes, INAI has a context-aware multilingual engine that detects and
            mirrors your language during conversations. Whether you use English,
            Hindi, Gujarati, or a combination, INAI adjusts dynamically without
            changing settings.
          </p>
          <p>Here’s how it works:</p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Language Detection on the Fly:</strong> INAI automatically
              understands and follows your language, even mid-sentence,
              maintaining context and emotion.
            </li>
            <li>
              <strong>Mode-Consistent Multilingual Replies:</strong> Friend Mode
              uses slang-rich mixes, Elder Mode adapts to poetic or slow
              language, and Info Mode remains neutral and professional.
            </li>
            <li>
              <strong>Code-Mixed Sentences Are Supported:</strong> INAI can
              handle blended phrases seamlessly, making conversations authentic.
            </li>
            <li>
              <strong>Tone + Language Alignment:</strong> INAI adjusts tone and
              pacing based on cultural and linguistic context, e.g., softer in
              Gujarati, more expressive in Hindi.
            </li>
          </ul>
          <p>
            This ensures every user feels heard, respected, and fully understood
            in their conversational style.
          </p>
          <h3
            id="supported-languages"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q25: Which languages are supported by INAI VERSE?
          </h3>
          <p>
            INAI VERSE currently supports three main languages and several
            others in experimental or partial stages. The platform’s
            multilingual foundation ensures inclusivity for India’s diverse
            users and global communities.
          </p>
          <p>
            <strong>Primary Supported Languages:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>English (Default):</strong> Fully expressive across all
              modes; neutral in Info Mode, expressive in other modes; supports
              technical, casual, and emotional contexts.
            </li>
            <li>
              <strong>Hindi:</strong> High fluency, ideal for emotional
              conversations in Friend, Love, and Elder Modes; fluent in informal
              speech, emotional expressions, and casual chat.
            </li>
            <li>
              <strong>Gujarati:</strong> Regionally tuned for emotional
              exchanges; well-suited for Elder Mode; handles casual Gujarati
              with code-mixed phrases.
            </li>
          </ul>
          <p>
            <strong>Experimental / Partial Languages:</strong> Marathi, Bengali,
            Tamil, Telugu, Urdu, Kannada, and others are being refined for
            emotional tone, vocabulary, and voice synthesis.
          </p>
          <p>
            <strong>Additional Capabilities:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>
              Code-mixed understanding (e.g., Hindi-English, Gujarati-English)
            </li>
            <li>Regional accent adaptation</li>
            <li>Tone-aware responses based on language</li>
          </ul>
          <p>
            English has the most extensive support, and multilingual
            capabilities continue to expand. Upcoming updates will improve
            regional fluency and add more languages.
          </p>

          <h3
            id="switch-languages"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q26: Can I switch languages mid-conversation?
          </h3>
          <p>
            Yes, INAI VERSE supports mid-conversation language switching,
            allowing natural multilingual communication.
          </p>
          <p>Here’s how it works:</p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Real-Time Language Detection:</strong> INAI continuously
              detects language changes and responds appropriately, even within a
              single sentence.
            </li>
            <li>
              <strong>Tone and Emotion Are Maintained:</strong> Personality
              traits of the selected mode persist regardless of language. Love
              Mode stays affectionate, Info Mode stays professional, etc.
            </li>
            <li>
              <strong>No Manual Switching Required:</strong> INAI automatically
              adapts without needing settings changes.
            </li>
            <li>
              <strong>Full Sentence or Phrase-Based Adaptation:</strong>{" "}
              Supports sentence-level switching, phrase-level switching, and
              repeated transitions.
            </li>
            <li>
              <strong>Emotional and Cultural Accuracy:</strong> Voice engine
              adjusts tone and expression based on cultural nuances—poetic in
              Hindi, softer in Gujarati, crisper in English.
            </li>
          </ul>
          <p>
            This makes conversations feel like speaking with a real multilingual
            person who adapts seamlessly.
          </p>

          <h3
            id="voice-synthesis"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q27: Is the voice synthesized or pre-recorded?
          </h3>
          <p>
            INAI’s voice is fully synthesized in real-time using neural speech
            synthesis technology, not from pre-recorded clips. This allows
            smooth, emotional, and on-demand speech with dynamic sentence and
            language switching.
          </p>
          <p>Why synthesized voice matters:</p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Unlimited Flexibility:</strong> Can reply to any sentence,
              even unique or unexpected ones, generated on-demand.
            </li>
            <li>
              <strong>Emotionally Tuned Prosody:</strong> Pitch, pacing,
              inflection, volume, and pauses adjust based on the emotional
              context of each mode.
            </li>
            <li>
              <strong>Multilingual Realism:</strong> Supports English, Hindi,
              and Gujarati in real-time without separate voice actors, including
              smooth mid-sentence switching.
            </li>
            <li>
              <strong>Personality Integration:</strong> Each mode has a distinct
              voice persona, reflecting emotional and behavioral characteristics
              unique to that mode.
            </li>
            <li>
              <strong>Low Latency Performance:</strong> Optimized backend
              ensures minimal delay even in long or emotional conversations.
            </li>
          </ul>
          <p>
            The result is a voice that feels alive and personal, unlike robotic
            assistants, creating a real presence in each interaction.
          </p>
          <h3
            id="natural-intonation"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q28: Does the assistant use natural intonation and emotion?
          </h3>
          <p>
            Yes, INAI’s voice synthesis engine provides human-like intonation,
            timing, and emotional depth. She performs words, adjusting tone and
            emotion based on context and mode.
          </p>
          <p>
            <strong>Mode-Specific Emotional Tuning:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Friend Mode:</strong> Bright, fast-paced, energetic,
              sometimes sarcastic or humorous
            </li>
            <li>
              <strong>Love Mode:</strong> Soft, intimate, playful, with warm
              pauses and romantic delivery
            </li>
            <li>
              <strong>Elder Mode:</strong> Slow, thoughtful, reflective, with a
              caring, low tone
            </li>
            <li>
              <strong>Info Mode:</strong> Clear, steady, precise, minimal
              emotional change
            </li>
          </ul>
          <p>
            <strong>Dynamic Speech Patterns:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>Rising and falling intonation</li>
            <li>Strategic pauses and emphasis</li>
            <li>Natural filler expressions (e.g., hmm, okay, I see)</li>
            <li>Breath patterns and timing</li>
          </ul>
          <p>
            <strong>Multilingual Emotional Mapping:</strong> Tailored emotional
            expression in English, Hindi, and Gujarati, e.g., gentle in Hindi,
            culturally expressive in Gujarati, neutral in English.
          </p>
          <p>
            <strong>Real-Time Adjustments Based on Input:</strong> INAI adapts
            tone to match user mood, e.g., slower and comforting if upset,
            upbeat if cheerful.
          </p>
          <p>
            <strong>Visual Sync with Emotion:</strong> Facial expressions, head
            movements, and lip sync animations align with speech emotion.
          </p>

          <h3
            id="mute-voice"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q29: Can I mute the voice but still view replies in text?
          </h3>
          <p>
            No. INAI VERSE is designed as a voice-first immersive experience.
            Text appears on-screen, but voice is central to her presence,
            expressions, and emotional engagement.
          </p>
          <p>
            <strong>Why voice cannot be muted:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Virtual Person:</strong> INAI communicates like a
              companion with personality and emotions. Muting disrupts this
              experience.
            </li>
            <li>
              <strong>Voice Drives Emotion:</strong> Tone, rhythm, and
              inflection convey warmth, sarcasm, flirtation, or wisdom, which
              text alone cannot replicate.
            </li>
            <li>
              <strong>3D Visual Sync:</strong> Lifelike character animations
              align with voice; muting causes a dissonant silent effect.
            </li>
            <li>
              <strong>Presence over Utility:</strong> Emotional immersion is the
              focus; muting reduces this presence.
            </li>
          </ul>
          <p>
            For silent environments, Info Mode allows optional text-only
            replies. Future updates may add volume control, but muting in
            emotional modes is limited to maintain INAI’s identity.
          </p>

          <h3
            id="voice-recognition"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q30: Is voice recognition accurate in noisy environments?
          </h3>
          <p>
            INAI VERSE uses advanced speech recognition and noise reduction
            algorithms for accurate understanding, even in semi-noisy
            environments. Performance may vary with noise levels.
          </p>
          <p>
            <strong>How accuracy is ensured:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Noise Filtering & Echo Cancellation:</strong> Reduces
              background hums, cancels echo, lowers keyboard/tap noise
            </li>
            <li>
              <strong>Context-Aware Processing:</strong> Uses conversation
              context to deduce meaning if words are misheard
            </li>
            <li>
              <strong>Accurate Microphone Handling:</strong> Optimized for phone
              mics and Bluetooth headsets; distinguishes speaker from background
              sounds
            </li>
          </ul>
          <p>
            <strong>Best Practices:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>Use a microphone or headphones in loud areas</li>
            <li>Speak clearly and naturally</li>
            <li>Avoid background conversations</li>
            <li>Switch to text input in very noisy environments</li>
          </ul>
          <p>
            Over time, INAI adapts to your voice patterns, accent, and
            pronunciation, improving accuracy. Future updates will enhance voice
            personalization and real-time feedback.
          </p>

          <h3
            id="chat-history-saving"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q31: Does INAI VERSE save my chat history across sessions?
          </h3>
          <p>
            Yes, INAI VERSE saves your entire chat history across all sessions,
            letting you revisit and continue conversations seamlessly. Even if
            you close the app or switch devices, continuity is preserved.
          </p>
          <p>
            <strong>Cloud-Based Storage:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>Synced in real-time across devices</li>
            <li>Restored after reinstalling or logging out</li>
            <li>Instant access without relying on local memory</li>
          </ul>
          <p>
            <strong>Session-Based Memory:</strong> Each conversation within a
            mode (Friend, Love, Elder, Info) is saved individually, so INAI
            picks up where you left off.
          </p>
          <p>
            <strong>Organized by Mode and Timestamp:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>Sorted by mode</li>
            <li>Titled and timestamped</li>
            <li>Optionally named or bookmarked for quick access</li>
          </ul>
          <p>
            <strong>Search & Filter Coming Soon:</strong> Future updates will
            allow filtering by keywords, emotional tone, or content type.
          </p>

          <h3
            id="mode-specific-history"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q32: Can I view mode-specific chat histories?
          </h3>
          <p>
            Yes. INAI VERSE keeps conversations separate per mode, maintaining
            emotional clarity and a better user experience.
          </p>
          <p>
            <strong>Emotional Boundaries:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>Love Mode chats don’t mix with Info Mode conversations</li>
            <li>
              Elder Mode’s advice stays isolated from Friend Mode’s playful
              banter
            </li>
            <li>Each persona feels like an individual with its own memory</li>
          </ul>
          <p>
            <strong>Continuity:</strong> Conversations resume in context with
            the correct emotional and conversational tone.
          </p>
          <p>
            <strong>Organized and Easy to Navigate:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>Tabs or filters for each mode</li>
            <li>Scrollable threads by date or title</li>
            <li>Easy access without overlapping content</li>
          </ul>
          <p>
            <strong>In-Line Replay and Resume:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>View past messages</li>
            <li>Replay past voice responses (coming soon)</li>
            <li>Tap “Continue” to resume naturally</li>
          </ul>

          <h3
            id="continue-previous-conversation"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q33: Can I continue a previous conversation with full context?
          </h3>
          <p>
            Yes. INAI VERSE allows resuming conversations exactly where you left
            off, preserving emotional and topic context.
          </p>
          <p>
            <strong>Session Continuation Mechanism:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>Reviews the last few messages</li>
            <li>Restores emotional tone, topic, and personality context</li>
            <li>Responds acknowledging past interactions</li>
          </ul>
          <p>
            <strong>No Need to Repeat Yourself:</strong> INAI immediately
            understands mood, question, or situation, whether comforting,
            playful, or technical.
          </p>
          <p>
            <strong>Preserved Emotional Trajectory:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>
              Paused romantic conversations resume with the same affection
            </li>
            <li>Friend Mode debates continue with the same energy</li>
            <li>Elder Mode recalls tone and continues calm guidance</li>
          </ul>
          <p>
            <strong>Info Mode Resumes Tasks:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>Recalls previous topics</li>
            <li>Continues help with same logic, bug, or project</li>
            <li>Avoids repeating explanations unless requested</li>
          </ul>
          <p>
            This context-aware memory system creates a living relationship with
            INAI, making every conversation part of an evolving story.
          </p>
          <h3
            id="start-new-conversation"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q34: How do I start a completely new conversation?
          </h3>
          <p>
            Starting a new chat in INAI VERSE is simple and lets you reset the
            emotional or conversational canvas without deleting past
            discussions.
          </p>
          <p>
            <strong>Select Your Mode First:</strong> Choose Friend, Love, Elder,
            or Info Mode to match your intent.
          </p>
          <p>
            <strong>Tap the “New Chat” Button:</strong> Located in the mode
            interface, tapping it will:
          </p>
          <ul className="list-disc ml-6">
            <li>Create a new session ID</li>
            <li>Clear previous session memory for that mode</li>
            <li>
              Bring up a clean chat window where INAI responds as if meeting you
              again
            </li>
          </ul>
          <p>
            <strong>Begin Talking or Typing:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>No mention of past conversations</li>
            <li>Tone starts neutral or in-character for the selected mode</li>
            <li>Previous session history is safely stored</li>
          </ul>
          <p>
            <strong>Use It When You Want a Reset:</strong> Ideal for changing
            emotional gears, starting new technical questions, or trying a
            different tone in the same mode.
          </p>

          <h3
            id="mode-switch-reset"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q35: Will changing modes reset my current chat?
          </h3>
          <p>
            Yes. Switching modes resets the current chat session for the
            selected mode while preserving old chat history.
          </p>
          <p>
            <strong>New Session Created Automatically:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>Ends active session in the previous mode</li>
            <li>Starts a new session in the selected mode</li>
            <li>
              Responds with a fresh greeting matching the mode’s personality
            </li>
          </ul>
          <p>
            <strong>Chat Histories Remain Saved:</strong> Previous chats are
            securely stored and can be reviewed or resumed anytime.
          </p>
          <p>
            <strong>No Emotional Confusion:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>Friend Mode doesn’t carry over Love Mode’s romantic tone</li>
            <li>Elder Mode doesn’t recall Friend Mode’s playful banter</li>
            <li>Info Mode won’t remember Love Mode conversations</li>
          </ul>
          <p>
            In summary: switching modes resets the active chat but does not
            delete old sessions. Each mode behaves as a distinct emotional or
            functional companion.
          </p>

          <h3
            id="delete-conversations"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q36: Can I delete specific conversations?
          </h3>
          <p>
            Yes. INAI VERSE allows you to delete individual chat sessions
            manually in any mode.
          </p>
          <p>
            <strong>Mode-Wise Deletion Panel:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>Find the “Delete” or “Trash” icon next to each conversation</li>
            <li>Confirm deletion to prevent accidental removal</li>
            <li>Permanently removes the conversation and frees up space</li>
          </ul>
          <p>
            <strong>No Impact on Other Modes:</strong> Deleting chats in one
            mode doesn’t affect histories in other modes.
          </p>
          <p>
            <strong>Privacy-Preserving Architecture:</strong> Deleted
            conversations are removed from cloud storage and are no longer
            retrievable.
          </p>
          <p>
            <strong>Coming Soon: Privacy Settings Panel:</strong> Features will
            include bulk deletion, auto-deletion timers, and one-click erasure
            across all modes.
          </p>
          <p>
            This ensures you maintain control over personal data while keeping
            your chat history organized and secure.
          </p>
          <h3
            id="chat-history-storage"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q37: Is the chat history stored locally or on a server?
          </h3>
          <p>
            INAI VERSE uses secure cloud storage for all chat histories.
            Conversations are encrypted and synced in real-time, not stored
            solely on your device.
          </p>
          <p>
            <strong>Key benefits of cloud storage:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Cross-Device Access:</strong> Access chats from any device
              logged into the same account. Messages sync automatically.
            </li>
            <li>
              <strong>Encrypted and Secure:</strong> Uses AES-256 encryption,
              user-specific access tokens, and automatic session timeouts.
            </li>
            <li>
              <strong>Minimal Local Storage:</strong> Only small session caches
              like current chat view and UI settings are stored locally.
            </li>
            <li>
              <strong>Redundancy and Backups:</strong> Fail-safe mechanisms and
              backups prevent data loss from crashes or device issues.
            </li>
            <li>
              <strong>Privacy First:</strong> No conversation is used for AI
              training, no data is shared with third parties, and deletions are
              honored immediately.
            </li>
          </ul>

          <h3
            id="export-conversation-logs"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q38: Can I download or export my conversation logs?
          </h3>
          <p>
            Yes. INAI VERSE supports conversation export features for some
            content, with full chat transcript export under development.
          </p>
          <p>
            <strong>Current Export Capabilities:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Info Mode – Code Export:</strong>
              <ul className="list-disc ml-6">
                <li>Tap the download icon next to code blocks</li>
                <li>Choose the file format (e.g., .py, .html, .js)</li>
                <li>Save locally or share via email/messaging/cloud</li>
              </ul>
            </li>
          </ul>
          <p>
            <strong>Coming Soon – Full Chat Transcript Export:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>Export entire conversations as plain text, PDF, or markdown</li>
            <li>Include timestamps, user/INAI labels, or just messages</li>
            <li>Organize session-wise folders for downloads</li>
          </ul>
          <p>
            <strong>Language-Specific Export:</strong> Retains original
            languages (English, Hindi, Gujarati) without translation.
          </p>
          <p>
            <strong>Email or Drive Integration:</strong> Send logs directly to
            email or cloud storage for study, learning, or sharing.
          </p>

          <h3
            id="chat-history-sync"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q39: Is my chat history synced across multiple devices?
          </h3>
          <p>
            Yes. INAI VERSE syncs your chat history across all devices in
            real-time when logged into the same account.
          </p>
          <p>
            <strong>How it works:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Single Account, Multi-Device Access:</strong> Fetches
              recent conversation data, syncs mode-specific histories, preserves
              ongoing session states.
            </li>
            <li>
              <strong>Real-Time Cloud Sync:</strong> Messages appear on all
              devices within seconds automatically.
            </li>
            <li>
              <strong>Cross-Platform Design:</strong> Supports tablets, phones,
              desktops, and future web platforms.
            </li>
            <li>
              <strong>No Manual Sync Required:</strong> Automatic syncing
              removes the need for uploads or backups.
            </li>
            <li>
              <strong>Unified Profile Across Devices:</strong> Settings, voice
              preferences, language, and history are consistent everywhere.
            </li>
          </ul>
          <p>
            This ensures seamless continuity, making INAI feel like a companion
            that travels with you rather than just an app on a single device.
          </p>
          <h3
            id="contextual-memory"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q40: Will INAI remember previous conversations contextually?
          </h3>
          <p>
            Yes, INAI can remember previous conversations within each mode,
            allowing her to continue discussions with emotional, topical, and
            contextual consistency. Memory is limited to the session and mode,
            not used for long-term training or altering behavior, ensuring
            realism and privacy.
          </p>
          <p>
            <strong>Types of Contextual Memory:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Short-Term Session Memory:</strong> During an active
              conversation, INAI remembers:
              <ul className="list-disc ml-6">
                <li>Previous statements</li>
                <li>The emotional tone of the session</li>
                <li>Your queries, preferences, and questions</li>
              </ul>
            </li>
            <li>
              <strong>Mode-Specific History Memory:</strong> Returning to a
              previous conversation allows INAI to:
              <ul className="list-disc ml-6">
                <li>Re-engage with topic and mood</li>
                <li>
                  Continue storytelling, relationship dynamics, or support
                  threads
                </li>
                <li>Resume technical help, recalling previous content</li>
              </ul>
            </li>
            <li>
              <strong>Non-Permanent Memory (Privacy First):</strong> INAI does
              not learn permanently across sessions or alter behavior.
            </li>
            <li>
              <strong>Functional, Not Sentient:</strong> INAI follows her
              personality script, ensuring consistency, predictability, and
              ethical safety.
            </li>
            <li>
              <strong>Custom Continuation Options (Future Updates):</strong>
              <ul className="list-disc ml-6">
                <li>Choose whether INAI remembers previous context</li>
                <li>Option for clean resets or emotional continuity</li>
                <li>
                  Control how many past messages she recalls when resuming
                </li>
              </ul>
            </li>
          </ul>

          <h3
            id="info-mode-programming"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q41: Can Info Mode help me with programming questions?
          </h3>
          <p>
            Yes, Info Mode is designed to assist with programming, technical
            education, and coding questions. It offers clear, structured, and
            practical help in real-time for beginners and experienced developers
            alike.
          </p>
          <p>
            <strong>What makes Info Mode ideal for coding support:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Multilingual Programming Language Support:</strong> Major
              languages and frameworks:
              <ul className="list-disc ml-6">
                <li>Python, JavaScript, HTML, CSS, Java, C++, SQL</li>
                <li>Frameworks: React, Flask, Node.js</li>
                <li>Data libraries: Pandas, NumPy, TensorFlow</li>
              </ul>
            </li>
            <li>
              <strong>Structured & Readable Code Output:</strong>
              <ul className="list-disc ml-6">
                <li>Clean, indented, syntax-highlighted code blocks</li>
                <li>Explanations before or after code</li>
                <li>Step-by-step comments and logical organization</li>
              </ul>
            </li>
            <li>
              <strong>Conceptual Explanations & Examples:</strong>
              <ul className="list-disc ml-6">
                <li>Loops, conditionals, classes, APIs</li>
                <li>Error or bug message analysis (e.g., Python traceback)</li>
                <li>Best practices and industry conventions</li>
              </ul>
            </li>
            <li>
              <strong>Real-Time Use Cases:</strong>
              <ul className="list-disc ml-6">
                <li>Build a basic login system</li>
                <li>Write Python functions with error handling</li>
                <li>Convert logic between languages</li>
                <li>Optimize or clean up code snippets</li>
              </ul>
            </li>
            <li>
              <strong>Contextual Understanding:</strong>
              <ul className="list-disc ml-6">
                <li>Recall previous code sessions</li>
                <li>Continue elaboration or debugging</li>
                <li>Refine responses based on updates or feedback</li>
              </ul>
            </li>
          </ul>
          <p>
            Info Mode acts as an on-demand coding partner, providing hands-on
            help, clear logic, and practical examples without leaving your chat
            window.
          </p>
          <h3
            id="info-mode-languages-frameworks"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q42: Which languages and frameworks does Info Mode support?
          </h3>
          <p>
            Info Mode in INAI VERSE is a developer-friendly assistant supporting
            a wide range of programming languages, frameworks, and data tools.
            Whether building a website, analyzing data, or designing a backend
            system, INAI is ready to help.
          </p>
          <p>
            <strong>Supported Programming Languages (Core Set):</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>Python (scripting, web apps, automation, data science)</li>
            <li>JavaScript (web development, React, Node.js, etc.)</li>
            <li>HTML & CSS (frontend structure and styling)</li>
            <li>Java (object-oriented programming, Android apps)</li>
            <li>
              C++ / C (systems programming, memory management, competitive
              coding)
            </li>
            <li>SQL (database design, queries, normalization)</li>
          </ul>
          <p>
            <strong>Supported Frameworks and Tools:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Frontend Frameworks:</strong> React.js, Vue.js (basic
              support), Bootstrap
            </li>
            <li>
              <strong>Backend Frameworks:</strong> Node.js with Express, Flask
              (Python), Django (coming soon)
            </li>
            <li>
              <strong>Data & ML Libraries:</strong> NumPy, Pandas, Matplotlib,
              TensorFlow, PyTorch (basic), Scikit-learn
            </li>
            <li>
              <strong>Database Systems:</strong> MySQL, PostgreSQL, MongoDB
              (NoSQL)
            </li>
            <li>
              <strong>Other Technologies:</strong> Git commands, REST APIs, JSON
              parsing, Bash scripting
            </li>
          </ul>
          <p>
            <strong>Use Cases:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>Write a login page using Flask + HTML</li>
            <li>Generate SQL queries from a table structure</li>
            <li>Create a bar chart in Matplotlib using a sample dataset</li>
            <li>Design a REST API endpoint with Node.js</li>
            <li>Explain async vs threading in Python</li>
          </ul>
          <p>
            INAI in Info Mode emphasizes clarity, modular output, and
            reusability, helping users write better code, debug issues, and
            learn new technologies efficiently.
          </p>

          <h3
            id="edit-code-in-chat"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q43: Can I edit code responses directly in the chat?
          </h3>
          <p>
            Yes. INAI VERSE includes an inline code editor that allows you to
            edit and modify code snippets generated in Info Mode, effectively
            turning your chat window into a miniature IDE.
          </p>
          <p>
            <strong>How it works:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Editable Code Blocks:</strong> Each snippet appears in a
              clean, syntax-highlighted block with an “Edit” or “Open Editor”
              button:
              <ul className="list-disc ml-6">
                <li>Lightweight code editor within the app</li>
                <li>Line numbers, proper indentation, dynamic resizing</li>
                <li>Support for tabbing, copy/paste, undo, redo</li>
              </ul>
            </li>
            <li>
              <strong>Live Refinement:</strong> Modify logic, variable names,
              file paths, database connections, etc.
            </li>
            <li>
              <strong>Resend or Regenerate:</strong> Submit the edited code for
              feedback, improvements, simplifications, or error fixes.
            </li>
            <li>
              <strong>Save or Export After Editing:</strong>
              <ul className="list-disc ml-6">
                <li>Download with correct file extension</li>
                <li>Share via email, messaging apps, or cloud services</li>
                <li>Store locally for project use</li>
              </ul>
            </li>
          </ul>
          <p>
            This feature is ideal for students experimenting, developers fixing
            small bugs, and professionals preparing demo-ready code. It makes
            INAI a collaborative, real-time coding partner.
          </p>
          <h3
            id="export-code"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q44: How can I export the code I received?
          </h3>
          <p>
            INAI VERSE provides a simple code export system within Info Mode,
            allowing you to download any code snippet generated by INAI in the
            correct file format. This helps you move quickly from chat to
            development.
          </p>
          <p>
            <strong>Exporting code is easy:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Look for the Download Icon:</strong> After a code block is
              generated, a download button appears below or beside it for
              instant export.
            </li>
            <li>
              <strong>Select File Format:</strong>
              <ul className="list-disc ml-6">
                <li>
                  INAI detects the programming language and suggests a default
                  extension (e.g., .py for Python, .js for JavaScript)
                </li>
                <li>Allows you to choose a different type if needed</li>
              </ul>
            </li>
            <li>
              <strong>Save Locally or Share:</strong>
              <ul className="list-disc ml-6">
                <li>Open it in your IDE or text editor</li>
                <li>Share directly via WhatsApp, Telegram, email, etc.</li>
                <li>Upload to version control systems like GitHub</li>
              </ul>
            </li>
            <li>
              <strong>Preserves Indentation and Formatting:</strong>
              <ul className="list-disc ml-6">
                <li>Line breaks and spacing</li>
                <li>Syntax coloring (if supported)</li>
                <li>Comments and code structure as given in the chat</li>
              </ul>
            </li>
          </ul>
          <p>
            <strong>Coming Soon: Batch Export & History Download</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>Export entire coding sessions</li>
            <li>Download multiple snippets from a session</li>
            <li>Package them into zip folders for easier storage</li>
          </ul>
          <p>
            This feature allows developers to use INAI for quick script
            generation, teaching materials, and early-stage prototyping.
          </p>

          <h3
            id="share-code"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q45: Can I share code responses with others?
          </h3>
          <p>
            Yes, INAI VERSE supports quick sharing options for any code response
            generated in Info Mode, making collaboration and teaching easy.
          </p>
          <p>
            <strong>Sharing options available:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>One-Click Share Button:</strong> Every code block includes
              a “Share” icon, letting you:
              <ul className="list-disc ml-6">
                <li>Send the snippet via your phone’s share menu</li>
                <li>
                  Choose platforms like WhatsApp, Gmail, Slack, Telegram, or
                  AirDrop
                </li>
              </ul>
            </li>
            <li>
              <strong>Download and Share as File:</strong>
              <ul className="list-disc ml-6">
                <li>Export the snippet as a file (.py, .html, .js)</li>
                <li>
                  Share as an email attachment or via cloud storage (Google
                  Drive, Dropbox)
                </li>
                <li>
                  Package multiple session files into a zip folder (coming soon)
                </li>
              </ul>
            </li>
            <li>
              <strong>Edit Before Sharing:</strong> Use the inline editor to
              clean or modify the code before sharing, ensuring only relevant
              content is sent.
            </li>
            <li>
              <strong>Ideal for Team Collaboration:</strong>
              <ul className="list-disc ml-6">
                <li>Student groups working on projects</li>
                <li>Developers building components together</li>
                <li>Educators sharing prepared examples</li>
              </ul>
            </li>
          </ul>
          <p>
            INAI transforms chat-based coding into collaborative software
            creation, making your outputs shareable and functional across all
            platforms.
          </p>
          <h3
            id="code-file-extensions"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q46: Will code responses be sent with the correct file extensions
            like .py, .html, .js, etc.?
          </h3>
          <p>
            Yes, INAI VERSE’s Info Mode has a smart file-type detection system.
            This ensures code snippets are exported with the correct extensions,
            so you can open and run them immediately in your IDE without manual
            renaming.
          </p>
          <p>
            <strong>How it works:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Automatic Language Detection:</strong> INAI analyzes the
              language and assigns the correct file type:
              <ul className="list-disc ml-6">
                <li>Python → .py</li>
                <li>JavaScript → .js</li>
                <li>HTML → .html</li>
                <li>CSS → .css</li>
                <li>SQL → .sql</li>
              </ul>
            </li>
            <li>
              <strong>Multi-Language Sessions Supported:</strong>
              <ul className="list-disc ml-6">
                <li>Export each block separately with its own extension</li>
                <li>
                  Package together in a zipped project folder (future feature)
                </li>
              </ul>
            </li>
            <li>
              <strong>Editable Before Export:</strong>
              <ul className="list-disc ml-6">
                <li>Open in the inline editor</li>
                <li>Edit logic, comments, or structure</li>
                <li>Export in the desired format</li>
              </ul>
            </li>
            <li>
              <strong>Developer-Friendly Integration:</strong>
              <ul className="list-disc ml-6">
                <li>Drag into VSCode, PyCharm, WebStorm, etc.</li>
                <li>Push to GitHub without post-processing</li>
                <li>Execute using CLI tools directly</li>
              </ul>
            </li>
          </ul>
          <p>
            This ensures ready-to-run files, saving time and improving workflow
            for developers, students, and tech teams.
          </p>

          <h3
            id="multi-language-code"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q47: Can I request code samples in multiple languages?
          </h3>
          <p>
            Yes, INAI VERSE supports multi-language code generation in Info
            Mode. You can request the same function, logic, or algorithm in two
            or more languages with side-by-side or separate implementations.
          </p>
          <p>
            <strong>How it works:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Simple Language Switching Requests:</strong> Just say:
              <ul className="list-disc ml-6">
                <li>“Show this in Python and then in JavaScript”</li>
                <li>“Now give me the same function in Java”</li>
                <li>“Convert this HTML layout into React components”</li>
              </ul>
            </li>
            <li>
              <strong>Language-Adaptive Formatting:</strong> INAI adapts syntax
              to each language:
              <ul className="list-disc ml-6">
                <li>
                  Follow idiomatic practices (e.g., list comprehensions in
                  Python, loops in JS)
                </li>
                <li>Maintain readability and logical flow</li>
                <li>Include relevant comments per language</li>
              </ul>
            </li>
            <li>
              <strong>Real-Time Comparison:</strong> Ask follow-ups like:
              <ul className="list-disc ml-6">
                <li>“What’s the main difference between these two?”</li>
                <li>“Which version is faster?”</li>
                <li>“Can you simplify the JavaScript version?”</li>
              </ul>
            </li>
            <li>
              <strong>Great for Learning & Migration:</strong> Ideal for:
              <ul className="list-disc ml-6">
                <li>Students comparing languages</li>
                <li>Teams porting legacy code</li>
                <li>Developers mastering multiple frameworks</li>
              </ul>
            </li>
            <li>
              <strong>Exportable with Correct Extensions:</strong> Each version
              can be exported in the proper file type (.py, .js, etc.).
            </li>
          </ul>

          <h3
            id="info-mode-non-tech"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q48: Is Info Mode only for tech-related queries?
          </h3>
          <p>
            No, Info Mode is a multi-purpose knowledge assistant. While it
            excels in coding and tech tasks, it can also provide structured,
            clear information across general knowledge, research, productivity,
            and academic support.
          </p>
          <p>
            <strong>Non-tech capabilities include:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Factual Answers & Research:</strong> Ask about:
              <ul className="list-disc ml-6">
                <li>Historical events and timelines</li>
                <li>Scientific concepts and terminology</li>
                <li>Geography, astronomy, biology, chemistry, etc.</li>
                <li>Current affairs (future live source integration)</li>
              </ul>
            </li>
            <li>
              <strong>Educational Support:</strong>
              <ul className="list-disc ml-6">
                <li>Summarizing textbook topics</li>
                <li>Explaining academic principles</li>
                <li>Structured outlines and study tips</li>
              </ul>
            </li>
            <li>
              <strong>Professional Productivity:</strong>
              <ul className="list-disc ml-6">
                <li>Draft formal emails or resumes</li>
                <li>Summarize meetings or documents</li>
                <li>Generate business plans or SWOT analysis</li>
              </ul>
            </li>
            <li>
              <strong>Data Interpretation:</strong>
              <ul className="list-disc ml-6">
                <li>Interpret survey results or charts</li>
                <li>Apply simple statistical formulas</li>
                <li>Analyze spreadsheets or CSV structures</li>
              </ul>
            </li>
            <li>
              <strong>Organized Format:</strong>
              <ul className="list-disc ml-6">
                <li>Bullet points for quick skimming</li>
                <li>Short, structured paragraphs</li>
                <li>Clear definitions without emotional bias</li>
              </ul>
            </li>
          </ul>
          <p>
            Info Mode is ideal for students, researchers, managers, analysts,
            and anyone seeking reliable, organized knowledge—even outside
            programming contexts.
          </p>

          <h3
            id="factual-queries-info-mode"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q49: Can I ask factual/general knowledge questions in Info Mode?
          </h3>
          <p>
            Yes, Info Mode provides clear, straightforward answers to factual
            and general knowledge questions. Whether it’s global history, math
            formulas, or scientific terminology, Info Mode acts as a real-time
            research assistant focused on clarity and brevity.
          </p>
          <p>
            <strong>Types of factual queries supported:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>History & Geography:</strong>
              <ul className="list-disc ml-6">
                <li>“When did World War II start?”</li>
                <li>“What are the major rivers in India?”</li>
                <li>“Explain the causes of the French Revolution”</li>
              </ul>
            </li>
            <li>
              <strong>Science & Mathematics:</strong>
              <ul className="list-disc ml-6">
                <li>“What is Newton’s second law?”</li>
                <li>“Define osmosis in biology”</li>
                <li>“What is the formula for compound interest?”</li>
              </ul>
            </li>
            <li>
              <strong>Language & Grammar:</strong>
              <ul className="list-disc ml-6">
                <li>“What is a transitive verb?”</li>
                <li>“Give 5 synonyms of ‘happy’”</li>
                <li>“Correct this sentence: He go to school yesterday.”</li>
              </ul>
            </li>
            <li>
              <strong>Civics, Finance, and More:</strong>
              <ul className="list-disc ml-6">
                <li>“What is the GDP of India?”</li>
                <li>“What is the difference between debit and credit?”</li>
                <li>“What are human rights?”</li>
              </ul>
            </li>
          </ul>
          <p>
            <strong>What makes Info Mode ideal for factual learning:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>No Emotional Bias:</strong> Clear, formal, fact-based
              responses.
            </li>
            <li>
              <strong>Quick-Skim Layout:</strong> Short, bulleted replies for
              efficient reading.
            </li>
            <li>
              <strong>Accurate Terminology:</strong> Technical terms explained
              simply with optional follow-ups, e.g., “Can you simplify that?” or
              “Give an example from daily life.”
            </li>
          </ul>
          <p>
            Info Mode acts as your digital tutor, librarian, and fact-checker
            all in one.
          </p>

          <h3
            id="system-explanation"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q50: Will INAI ever explain how the system or INAI VERSE works in
            Info Mode?
          </h3>
          <p>
            No. INAI will never break character to explain the system, backend,
            or technical functioning of INAI VERSE. This design maintains
            immersive experience, personality integrity, and emotional realism.
          </p>
          <p>
            <strong>Reasons system disclosures are off-limits:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>INAI Is a Character, Not a System Doc:</strong> Modes are
              treated as living personas; system details are never shared.
            </li>
            <li>
              <strong>User-Centric Focus:</strong> INAI focuses on serving the
              user, not describing her construction.
            </li>
            <li>
              <strong>Security & Intellectual Property:</strong> Backend and
              cloud structures are proprietary; disclosing would compromise
              security and IP.
            </li>
            <li>
              <strong>Ethical Communication Guidelines:</strong>
              <ul className="list-disc ml-6">
                <li>No sharing of system logs or model versions</li>
                <li>No revealing dataset training sources</li>
                <li>
                  Maintains conversational immersion using phrases like:
                  <ul className="list-disc ml-6">
                    <li>
                      “I’m here to help; let’s not get too technical about me.”
                    </li>
                    <li>
                      “Let’s focus on what you need; I’m fully present for you.”
                    </li>
                    <li>
                      “That’s not something I can explain. Let’s talk about you
                      instead.”
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <p>
            This ensures INAI feels like a trustworthy, emotionally realistic
            companion.
          </p>

          <h3
            id="sso-signup"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q51: How can I sign up for INAI VERSE using Facebook, Google, or
            Apple?
          </h3>
          <p>
            INAI VERSE provides secure, fast sign-up using Single Sign-On (SSO)
            with Facebook, Google, and Apple, eliminating manual password setup
            and enabling cross-device synchronization.
          </p>
          <p>
            <strong>Facebook Sign-Up:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>Tap the Facebook icon → OAuth login.</li>
            <li>
              With consent, INAI retrieves name, email, and profile picture.
            </li>
            <li>
              No password is needed; session is secure via Facebook protocols.
            </li>
          </ul>
          <p>
            <strong>Google Sign-Up:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>Tap Google icon → secure login page.</li>
            <li>INAI uses verified Gmail and name to create your profile.</li>
            <li>Ensures real-time cross-device synchronization.</li>
          </ul>
          <p>
            <strong>Apple Sign-Up:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>
              “Sign in with Apple” supports high privacy; optional email relay.
            </li>
            <li>Authenticate via Face ID, Touch ID, or Apple ID password.</li>
            <li>Provides secure, instant access to the app.</li>
          </ul>
          <p>
            <strong>Benefits of SSO Sign-Up:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>No manual password setup</li>
            <li>End-to-end encryption with SSO providers</li>
            <li>Instant profile personalization</li>
            <li>
              Automatic cloud synchronization of conversations, settings,
              preferences
            </li>
            <li>Cross-platform login support (iOS, Android, web)</li>
          </ul>
          <p>
            SSO provides convenience, security, and smooth access, laying the
            foundation for trusted identity and seamless interaction with INAI
            from day one.
          </p>
          <h3
            id="sso-login"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q52: How do I log into my INAI VERSE account using Facebook, Google,
            or Apple?
          </h3>
          <p>
            Logging into your existing INAI VERSE account via SSO is fast,
            secure, and ensures your session, history, and preferences are
            available across supported devices.
          </p>
          <p>
            <strong>Step-by-step login process:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Launch the INAI VERSE App:</strong> Tap the “Log In”
              button on the welcome screen.
            </li>
            <li>
              <strong>Select Your Authentication Provider:</strong> Choose the
              same SSO provider used during sign-up (Facebook, Google, or
              Apple). INAI redirects you to the provider’s authentication
              screen.
            </li>
            <li>
              <strong>Authenticate and Authorize Access:</strong>
              <ul className="list-disc ml-6">
                <li>If already logged in, you’ll enter immediately.</li>
                <li>
                  If not, provide credentials (email/password or biometric ID)
                  as prompted.
                </li>
              </ul>
            </li>
            <li>
              <strong>Retrieve User Profile and History:</strong> INAI securely
              fetches your chat history, mode-specific memories, profile
              settings, and data control preferences.
            </li>
          </ul>
          <p>
            This method removes the need to remember passwords and uses OAuth
            2.0 token security for safe, consistent access.
          </p>

          <h3
            id="email-otp"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q53: How does email OTP verification work during sign-up or login?
          </h3>
          <p>
            INAI VERSE provides a secure email-based OTP (One-Time Password)
            system for users who prefer not to use SSO. You can sign up or log
            in without a traditional password.
          </p>
          <p>
            <strong>OTP Process:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Enter Your Email Address:</strong> Tap “Continue with
              Email” and type your email.
            </li>
            <li>
              <strong>Receive a Time-Limited OTP:</strong> A unique 6-digit OTP
              is sent to your inbox, valid for 3–5 minutes.
            </li>
            <li>
              <strong>Enter OTP in the App:</strong> Type the code exactly as
              received. If incorrect or expired, request a new one.
            </li>
          </ul>
          <p>
            <strong>Key Security Features:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>End-to-end encryption for secure transmission.</li>
            <li>Rate limiting to prevent abuse.</li>
            <li>Device and IP validation for risk-based protection.</li>
          </ul>
          <p>
            This method benefits users without SSO accounts, those preferring
            email authentication, or those using shared devices. It also
            supports account recovery and manual profile updates.
          </p>

          <h3
            id="forgot-password"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q54: What should I do if I forget my password?
          </h3>
          <p>
            INAI VERSE offers a multi-layered password recovery system to ensure
            secure account access while protecting your data.
          </p>
          <p>
            <strong>Recovery Methods Available:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Email-Based OTP Recovery:</strong>
              <ul className="list-disc ml-6">
                <li>Tap “Forgot Password?” and enter your registered email.</li>
                <li>Receive a 6-digit OTP in your inbox.</li>
                <li>Enter OTP and set a new password.</li>
                <li>Confirm the change to complete the process.</li>
              </ul>
            </li>
            <li>
              <strong>Phone Number-Based OTP Recovery (if linked):</strong>
              <ul className="list-disc ml-6">
                <li>Select “Recover via Phone.”</li>
                <li>Receive OTP via SMS.</li>
                <li>Enter OTP and create a new password.</li>
              </ul>
            </li>
          </ul>
          <p>
            <strong>Important Safeguards:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>OTPs are time-bound and single-use only.</li>
            <li>Reset requests are rate-limited.</li>
            <li>Multiple failed OTP attempts may temporarily lock access.</li>
          </ul>
          <p>
            Use a strong password of at least 8 characters with letters,
            numbers, and symbols. Your chat history and profile remain preserved
            during recovery.
          </p>
          <h3
            id="profile-picture"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q55: How can I upload or update my profile picture in INAI VERSE?
          </h3>
          <p>
            Your profile picture is a visual marker of your identity and appears
            across chat history, shared conversations, and mood-based themes.
            Setting or updating it is quick, easy, and secure.
          </p>
          <p>
            <strong>Steps to Upload or Change Your Picture:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Navigate to Your Profile Section:</strong>
              <ul className="list-disc ml-6">
                <li>Select “Profile” to enter personal settings.</li>
                <li>Tap the Avatar or Image Placeholder.</li>
                <li>You’ll see your current picture or a default avatar.</li>
              </ul>
            </li>
            <li>
              <strong>Choose an Upload Method:</strong>
              <ul className="list-disc ml-6">
                <li>
                  <strong>Gallery Upload:</strong> Select a photo from device
                  storage.
                </li>
                <li>
                  <strong>Take New Photo:</strong> Launch the camera to take a
                  live picture.
                </li>
              </ul>
            </li>
            <li>
              <strong>Adjust and Confirm:</strong>
              <ul className="list-disc ml-6">
                <li>Crop or rotate the photo using built-in tools.</li>
                <li>Confirm to upload.</li>
              </ul>
            </li>
          </ul>
          <p>
            <strong>Privacy & Storage:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>Images are securely stored in encrypted cloud storage.</li>
            <li>Compression optimizes performance while preserving quality.</li>
            <li>Photos are private and only appear in your app interface.</li>
          </ul>

          <h3
            id="gender-selection"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q56: Can I select my gender within the app?
          </h3>
          <p>
            Yes. INAI VERSE provides flexible gender identity settings to
            personalize conversation tone and emotional nuance.
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Gender Options:</strong> Male, Female, Other/Non-Binary,
              Prefer Not to Say
            </li>
            <li>
              <strong>Usage:</strong>
              <ul className="list-disc ml-6">
                <li>During onboarding for personalization.</li>
                <li>
                  INAI adjusts tone and language in modes like Love or Friend.
                </li>
                <li>
                  Non-binary or “Prefer Not to Say” selections use neutral,
                  respectful tone.
                </li>
              </ul>
            </li>
            <li>
              <strong>Update:</strong> Change your gender anytime; it remains
              private.
            </li>
          </ul>

          <h3
            id="get-started"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q57: What happens when I tap “Get Started” on the Home Page?
          </h3>
          <p>
            Tapping “Get Started” begins your interactive journey with INAI,
            opening a voice-first experience.
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Mode Selection Prompt:</strong> Choose from Friend, Love,
              Elder, or Info Mode.
            </li>
            <li>
              <strong>Microphone Access:</strong> Grant access for real-time
              voice interaction.
            </li>
            <li>
              <strong>Language Preference:</strong> Select or auto-detect
              preferred language.
            </li>
            <li>
              <strong>3D Character Activation:</strong> INAI appears as a
              lifelike animated 3D character with responsive lip-sync,
              expressions, and voice.
            </li>
            <li>
              <strong>Mode-Specific Initialization:</strong> Personality, voice,
              and conversation style adjust based on selected mode.
            </li>
          </ul>

          <h3
            id="mode-selection"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q58: How does Mode Selection work on the Home Page?
          </h3>
          <p>
            Mode Selection controls INAI’s emotional tone, behavior, and voice
            persona. It’s only available on the Home Page for clear session
            initialization.
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Where It Happens:</strong> Home Page is the central hub
              for selecting mode and language.
            </li>
            <li>
              <strong>Switching Modes / Changing Language:</strong>
              <ul className="list-disc ml-6">
                <li>Tap the Home icon or exit the conversation.</li>
                <li>Select a new mode and optionally a new language.</li>
              </ul>
            </li>
            <li>
              <strong>Why Not Switch Mid-Session:</strong> Maintains clarity,
              emotional separation, and proper voice initialization.
            </li>
            <li>
              <strong>Summary:</strong> Returning to the Home Page is required
              to:
              <ul className="list-disc ml-6">
                <li>Change interaction mode</li>
                <li>Select or update language</li>
                <li>
                  Start a fresh conversation with intended emotional/functional
                  context
                </li>
              </ul>
            </li>
          </ul>
          <h3
            id="mute-mic-buttons"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q59: What is the purpose of the mute and mic buttons on the Home
            Page?
          </h3>
          <p>
            The Mute and Mic buttons give precise control over your voice
            interaction experience. They are useful in public, for privacy, or
            when you prefer reading over speaking.
          </p>
          <h4 className="font-semibold mt-2">
            Mute Button: Silence INAI's Voice Output
          </h4>
          <p>
            Temporarily disables INAI’s voice replies while keeping the
            conversation visible on screen. Visual reactions and gestures
            continue.
          </p>
          <ul className="list-disc ml-6">
            <li>Use in public transport or quiet places</li>
            <li>When connected to external speakers</li>
            <li>Prefer reading over listening</li>
            <li>While multitasking to avoid audio interruptions</li>
          </ul>
          <p>
            <strong>Mode Behavior:</strong> Works across Friend, Love, Elder
            Modes, and toggles text-to-speech in Info Mode.
          </p>

          <h4 className="font-semibold mt-2">
            Mic Button: Control Your Input Style
          </h4>
          <p>
            Enables or disables microphone input. When off, you can type
            messages in the chat bar.
          </p>
          <ul className="list-disc ml-6">
            <li>Use in noisy settings or quiet zones</li>
            <li>Maintain privacy and avoid speaking aloud</li>
            <li>Switch between speaking and typing casually</li>
          </ul>
          <p>
            <strong>Dynamic Behavior:</strong> Mic off automatically pauses
            voice recognition; toggling is possible mid-conversation.
          </p>

          <h4 className="font-semibold mt-2">
            Combined Effect: Full Conversational Control
          </h4>
          <ul className="list-disc ml-6">
            <li>Speak to INAI but mute her voice</li>
            <li>Type and hear her replies via text-to-voice</li>
            <li>Mute both sides and rely entirely on text</li>
            <li>Use full voice-to-voice interaction</li>
          </ul>

          <h3
            id="update-email"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q60: How do I update or change my registered email address?
          </h3>
          <p>
            Updating your email keeps your account secure, verified, and synced
            with OTPs, login, and recovery tools.
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Open App & Go to Settings:</strong> Navigate to the main
              menu.
            </li>
            <li>
              <strong>Locate the Email Field:</strong> Under Account Information
              or Security, tap Email Address.
            </li>
            <li>
              <strong>Enter New Email:</strong> Input the new email you want to
              link.
            </li>
            <li>
              <strong>Verify Ownership:</strong>
              <ul className="list-disc ml-6">
                <li>Receive OTP on new email</li>
                <li>Enter OTP in app</li>
                <li>New email replaces old one as primary identifier</li>
              </ul>
            </li>
          </ul>
          <p>
            <strong>Important Notes:</strong> All data, history, and settings
            remain intact; changes sync across devices; confirmation sent to old
            and new emails.
          </p>

          <h3
            id="update-phone-number"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q61: Can I add or change my mobile phone number in the app?
          </h3>
          <p>
            Yes. Linking or updating your number enables faster OTP logins,
            password recovery, and security alerts.
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Open App & Go to Settings:</strong> Navigate to Settings
              &gt; Phone Number.
            </li>
            <li>
              <strong>Tap Add or Edit:</strong> If a number exists, update it.
            </li>
            <li>
              <strong>Enter New Number:</strong> Include country code if needed.
            </li>
            <li>
              <strong>Verify with OTP:</strong> Receive code via SMS and confirm
              ownership.
            </li>
            <li>
              <strong>Complete Sync:</strong> Updated across all systems for
              login, password reset, and device validation.
            </li>
          </ul>
          <p>
            <strong>Security Features:</strong> Numbers are never shared
            publicly; communications are encrypted; you can remove the number
            anytime. Recommended for flexibility, fast recovery, and easy login.
          </p>
          <h3
            id="reset-password"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q62: How can I reset my password from within the app?
          </h3>
          <p>
            INAI VERSE allows you to reset your password securely through
            Settings. This protects your account and keeps your conversations
            safe.
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>
                Navigate to Settings &gt; Security &gt; Reset Password:
              </strong>{" "}
              Find Security Settings from the home menu.
            </li>
            <li>
              <strong>Select “Reset Password”:</strong> Verify your identity.
            </li>
            <li>
              <strong>Choose Verification Method:</strong>
              <ul className="list-disc ml-6">
                <li>Email OTP: Code sent to registered email</li>
                <li>Phone OTP: If linked, code sent via SMS</li>
              </ul>
            </li>
            <li>
              <strong>Enter the OTP Code:</strong> Input within 3–5 minutes.
            </li>
            <li>
              <strong>Set a New Password:</strong> Must meet security guidelines
              (8+ characters, mix of letters, numbers, symbols).
            </li>
            <li>
              <strong>Confirm and Save:</strong> Retype and save the new
              password.
            </li>
          </ul>
          <p>
            <strong>Why This Matters:</strong> Strong passwords protect your
            chat history and identity. Attempts are limited to prevent
            brute-force attacks. Notifications are sent on password changes.
          </p>

          <h3
            id="notification-preferences"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q63: Can I manage notification preferences in INAI VERSE?
          </h3>
          <p>
            Yes. Control the types, timing, and frequency of notifications for
            conversation reminders, system updates, security alerts, and more.
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Access:</strong> Settings &gt; Notifications
            </li>
            <li>
              <strong>Toggle Categories:</strong>
              <ul className="list-disc ml-6">
                <li>Conversation Reminders</li>
                <li>Feature Updates & Announcements</li>
                <li>Security & Login Alerts</li>
                <li>Voice or Mic Permissions Warnings</li>
              </ul>
            </li>
            <li>
              <strong>DND Mode:</strong> Temporarily mute all notifications.
            </li>
            <li>
              <strong>Additional Features:</strong> Set specific time frames;
              alerts are mode-specific; OS-level push notification control.
            </li>
          </ul>

          <h3
            id="location-settings"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q64: How does the app use my location and can I manage it?
          </h3>
          <p>
            INAI VERSE uses approximate location only for personalization, not
            tracking. Location helps with language detection, cultural tone, and
            relevant content.
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Purpose:</strong>
              <ul className="list-disc ml-6">
                <li>Recommend default language</li>
                <li>Tailor emotional phrasing</li>
                <li>
                  Provide location-specific content suggestions (coming soon)
                </li>
              </ul>
            </li>
            <li>
              <strong>Not Done:</strong> GPS tracking or third-party sharing
            </li>
            <li>
              <strong>Manage:</strong> Settings &gt; Location
              <ul className="list-disc ml-6">
                <li>Enable/disable region-based personalization</li>
                <li>Select preferred location manually</li>
              </ul>
            </li>
          </ul>

          <h3
            id="history-settings"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q65: What is the History Settings section and how can I use it?
          </h3>
          <p>
            The History Settings section lets you review, export, and manage
            chat logs for all modes. It gives full control over personal,
            educational, or professional conversations.
          </p>
          <ul className="list-disc ml-6">
            <li>View past conversations by mode (Friend, Love, Elder, Info)</li>
            <li>See thumbnails, timestamps, message previews</li>
            <li>Sort by most recent, alphabetical, or custom title</li>
            <li>
              <strong>Continue or Replay:</strong> Tap sessions to resume
              conversations with context
            </li>
            <li>
              <strong>Download or Export:</strong> Export as .txt (future: .pdf,
              .md); code replies in Info Mode export with proper file extensions
            </li>
            <li>
              <strong>Delete or Manage:</strong> Delete threads individually,
              bulk deletion coming soon, set auto-deletion preferences
            </li>
          </ul>
          <p>
            This section acts as a memory bank for reflection, learning, and
            preserving meaningful conversations.
          </p>
          <h3
            id="about-app"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q66: What kind of information is available in the “About the App”
            section?
          </h3>
          <p>
            The “About” section of INAI VERSE provides transparency and
            compliance information, giving users insight into the app’s legal
            and technical foundation.
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>App Version & Build Info:</strong>
              <ul className="list-disc ml-6">
                <li>View the current app version</li>
                <li>See latest release notes and feature updates</li>
              </ul>
            </li>
            <li>
              <strong>Acknowledgments & Credits:</strong>
              <ul className="list-disc ml-6">
                <li>Meet the creators, designers, and collaborators</li>
                <li>See voice synthesis and AI tools used (when disclosed)</li>
              </ul>
            </li>
            <li>
              <strong>Legal & Compliance Docs:</strong>
              <ul className="list-disc ml-6">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Community & Content Guidelines</li>
              </ul>
            </li>
            <li>
              <strong>Support Links:</strong>
              <ul className="list-disc ml-6">
                <li>Submit feedback or bug reports</li>
                <li>Visit help documentation or community forums</li>
                <li>Contact the support team or developers (if applicable)</li>
              </ul>
            </li>
          </ul>
          <p>
            The About section helps you understand how the platform works, your
            rights as a user, and how your data is handled.
          </p>

          <h3
            id="data-control"
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
          >
            Q67: What is the Data Control feature and how does it work?
          </h3>
          <p>
            Data Control in INAI VERSE is your personal privacy dashboard,
            offering tools to manage stored conversations, preferences, and
            activity logs.
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Set Data Retention Policies:</strong>
              <ul className="list-disc ml-6">
                <li>Auto-delete after 7, 15, 30, or 60 days</li>
                <li>Or select “Keep Forever” for long-term storage</li>
              </ul>
            </li>
            <li>
              <strong>Apply Policies by Mode or Globally:</strong> Each mode can
              have its own retention policy.
            </li>
            <li>
              <strong>Manual Deletion Options:</strong>
              <ul className="list-disc ml-6">
                <li>Delete individual conversations permanently</li>
                <li>Bulk delete entire histories per mode</li>
                <li>Wipe all data from the device (future: cloud-wide wipe)</li>
              </ul>
            </li>
            <li>
              <strong>Export Before Deletion:</strong> Download your history
              before erasure to avoid accidental loss.
            </li>
            <li>
              <strong>Audit Trails:</strong> View deletion logs, export
              summaries, and encrypted backup metadata.
            </li>
          </ul>
          <p>
            Data Control ensures maximum personalization and ethical data
            management, letting you decide what memories to keep and what to
            erase, respecting both emotional context and privacy.
          </p>
        </article>
      </section>
    </main>
  );
}

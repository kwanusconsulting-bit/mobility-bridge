import React from "react";

const HOPLINK =
  "https://8d0d4b7-qhziz47yifxxqx4te0.hop.clickbank.net/?traffic_source=facebook&campaign=ak1&creative=c1";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-12 md:py-16">
      <article 
        className="w-full max-w-3xl bg-white shadow-sm rounded-lg p-8 md:p-10 space-y-8"
        style={{ maxWidth: "720px", lineHeight: "1.6" }}
      >
        
        {/* Headline */}
        <section className="space-y-3 pb-6 border-b border-gray-200">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Why Are So Many Adults Noticing Stiffness After 45 —
            <br />
            And Why Some Specialists Are Questioning "Just Aging"
          </h1>
          <div className="text-sm text-gray-500 space-y-1">
            <p className="italic">An independent look at what may actually be happening inside the joints.</p>
            <p>Updated March 2026</p>
            <p>By Health &amp; Mobility Research Team</p>
          </div>
        </section>

        {/* Section 1 — Relatable Scenario */}
        <section className="space-y-4 pb-6 border-b border-gray-200">
          <p className="text-lg text-gray-800">
            If you've ever:
          </p>
          <ul className="space-y-2 text-base text-gray-700 pl-4">
            <li>• Taken the stairs slower than you used to</li>
            <li>• Needed a moment before standing up</li>
            <li>• Felt tighter in the mornings than you remember</li>
          </ul>
          <p className="text-lg text-gray-800 font-semibold">
            You're not alone.
          </p>
          <p className="text-base text-gray-700">
            Millions of adults report similar changes over time.
          </p>
        </section>

        {/* Section 2 — Tension */}
        <section className="space-y-4 pb-6 border-b border-gray-200">
          <p className="text-lg text-gray-800">
            For years, most people were told:
          </p>
          <p className="text-lg text-gray-700 italic pl-4 border-l-2 border-gray-300">
            "It's just age."
          </p>
          <p className="text-base text-gray-700">
            But emerging mobility discussions suggest that <span className="font-semibold">reduced circulation and under-stimulated stabilizing muscles</span> may play a larger role than previously thought.
          </p>
          <p className="text-base text-gray-800 font-semibold">
            And that shifts the conversation entirely.
          </p>
        </section>

        {/* Section 3 — Authority Shift */}
        <section className="space-y-4 pb-6 border-b border-gray-200">
          <p className="text-base text-gray-700">
            For many adults, the most frustrating part isn&apos;t discomfort.
          </p>
          <p className="text-base text-gray-700">
            It&apos;s the quiet loss of confidence in movement.
          </p>
          <p className="text-base text-gray-700">
            The hesitation before taking stairs.
            <br />
            The subtle shift in how freely you move compared to years ago.
          </p>
          <p className="text-base text-gray-700 font-semibold">
            That change is what many specialists are now examining more closely.
          </p>
          <p className="text-base text-gray-700">
            Instead of high-impact workouts, intense stretching routines, or extreme measures…
          </p>
          <p className="text-lg text-gray-800 font-semibold">
            Some specialists are focusing on something much simpler:
          </p>
          <ul className="space-y-2 text-base text-gray-700 pl-4">
            <li>• Gentle seated activation movements</li>
            <li>• Targeted circulation support</li>
            <li>• Low-strain muscle engagement</li>
          </ul>
          <p className="text-base text-gray-700">
            Movements that take roughly <span className="font-semibold">7 minutes per day.</span>
          </p>
        </section>

        {/* Section 4 — Curiosity Mechanism */}
        <section className="space-y-4 pb-6 border-b border-gray-200">
          <p className="text-base text-gray-700">
            This approach isn't about pushing harder.
          </p>
          <p className="text-base text-gray-700">
            It's about <span className="font-semibold">reactivating support muscles</span> that often go unused over time.
          </p>
          <p className="text-base text-gray-700">
            When those areas begin engaging again, movement can feel smoother and more supported.
          </p>
          <p className="text-lg text-gray-800 font-semibold">
            That's what has caught attention.
          </p>
        </section>

        {/* Section 5 — Social Validation */}
        <section className="space-y-4 pb-6">
          <p className="text-base text-gray-700">
            Thousands of adults have already watched the short explanation outlining how this 7-minute approach works.
          </p>
          <div className="space-y-2 text-base text-gray-700 pl-4">
            <p>It's educational.</p>
            <p>It's calm.</p>
            <p>And it's designed specifically for adults over 45.</p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center space-y-6 pt-4">
          <a
            href={HOPLINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-700 hover:bg-emerald-800 hover:shadow-lg text-white font-semibold py-4 px-10 text-lg rounded transition-all duration-200"
          >
            Watch The Short 7-Minute Explanation
          </a>
        </section>

        {/* Disclaimer */}
        <section className="text-xs text-gray-500 text-center pt-8 border-t border-gray-200">
          <p>
            This content is provided for informational purposes only and is not medical advice. Individual experiences may vary.
          </p>
        </section>

      </article>
    </main>
  );
}

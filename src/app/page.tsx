const HOPLINK =
  "https://8d0d4b7-qhziz47yifxxqx4te0.hop.clickbank.net/?traffic_source=facebook&campaign=ak1&creative=c1";

function CtaButton({ label = "Yes — Show Me the 7-Minute Method →" }: { label?: string }) {
  return (
    <div className="text-center space-y-3">
      <a
        href={HOPLINK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold py-4 px-10 text-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
      >
        {label}
      </a>
      <p className="text-xs text-gray-400">Free to watch. No equipment needed.</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-10 md:py-14">
      <article
        className="w-full bg-white shadow-sm rounded-xl p-8 md:p-12 space-y-8"
        style={{ maxWidth: "700px", lineHeight: "1.75" }}
      >

        {/* Headline */}
        <section className="space-y-3 pb-6 border-b border-gray-200">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
            Health &amp; Mobility Research — Updated March 2026
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Doctors Used to Call It "Just Aging" —
            <br className="hidden md:block" />
            But New Research Points to a Surprising Root Cause of Stiffness After 45
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            A simple 7-minute daily routine is helping thousands of adults move freely again — without intense exercise, painful stretching, or any equipment.
          </p>
          <p className="text-sm text-gray-400 italic">By the Health &amp; Mobility Research Team</p>
        </section>

        {/* Section 1 — Pain / Identification */}
        <section className="space-y-4 pb-6 border-b border-gray-200">
          <p className="text-base text-gray-700">
            Be honest with yourself for a second.
          </p>
          <p className="text-base text-gray-700">
            When was the last time you stood up from a chair without bracing yourself — even just a little?
          </p>
          <p className="text-base text-gray-700">
            Or took the stairs without thinking about it first?
          </p>
          <p className="text-base text-gray-700">
            Or woke up and just… moved — without that familiar tightness waiting for you?
          </p>
          <p className="text-lg text-gray-800 font-semibold">
            If you can&apos;t remember, you&apos;re not alone. And it&apos;s not your fault.
          </p>
          <p className="text-base text-gray-700">
            Over 63 million adults in the U.S. report declining mobility after age 45. Most of them were told the same thing you probably were:
          </p>
          <p className="text-lg text-gray-700 italic pl-5 border-l-4 border-emerald-400 bg-emerald-50 py-3 pr-3 rounded">
            "This is just what happens as you get older. Learn to live with it."
          </p>
          <p className="text-base text-gray-700 font-semibold">
            But what if that&apos;s not the full story?
          </p>
        </section>

        {/* Section 2 — Reframe / Mechanism */}
        <section className="space-y-4 pb-6 border-b border-gray-200">
          <p className="text-base text-gray-700">
            A growing body of mobility research now points to a different cause — one that has nothing to do with age itself.
          </p>
          <p className="text-base text-gray-700">
            The real culprit? <span className="font-bold text-gray-900">Dormant stabilizing muscles.</span>
          </p>
          <p className="text-base text-gray-700">
            As adults become more sedentary — more desk time, less varied movement — certain deep support muscles around the hips, knees, and spine essentially go offline. They stop firing the way they&apos;re supposed to.
          </p>
          <p className="text-base text-gray-700">
            When those muscles aren&apos;t doing their job, your joints take on stress they weren&apos;t designed to handle. Blood flow to surrounding tissue drops. Morning stiffness sets in. Movement starts to feel like work.
          </p>
          <p className="text-base text-gray-800 font-bold text-lg">
            It&apos;s not aging. It&apos;s muscle dormancy — and it&apos;s reversible.
          </p>
        </section>

        {/* Section 3 — The Solution */}
        <section className="space-y-4 pb-6 border-b border-gray-200">
          <p className="text-base text-gray-700">
            This is exactly why a specific approach called <span className="font-bold">gentle joint activation</span> has been getting attention from mobility specialists.
          </p>
          <p className="text-base text-gray-700">
            Instead of pushing through pain or grinding out hard workouts, the focus is on:
          </p>
          <ul className="space-y-3 text-base text-gray-700 pl-2">
            <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold mt-0.5">✓</span><span><span className="font-semibold">Seated micro-activation movements</span> — gentle enough to do from a chair, powerful enough to wake up dormant muscles</span></li>
            <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold mt-0.5">✓</span><span><span className="font-semibold">Targeted circulation sequences</span> — restoring blood flow to stiff, underworked areas</span></li>
            <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold mt-0.5">✓</span><span><span className="font-semibold">Low-load stabilizer engagement</span> — designed specifically for adults over 45</span></li>
          </ul>
          <p className="text-base text-gray-700">
            The entire routine takes <span className="font-bold">7 minutes a day.</span> No gym. No equipment. You can do it from your living room.
          </p>
          <p className="text-base text-gray-700">
            And many people who try it report noticing a difference within the first week.
          </p>
        </section>

        {/* Mid-page CTA */}
        <section className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 space-y-4">
          <p className="text-center text-base font-semibold text-gray-800">
            There&apos;s a free short video that walks through exactly how this works — and who it&apos;s designed for.
          </p>
          <CtaButton label="Show Me the 7-Minute Method →" />
        </section>

        {/* Section 4 — Testimonials */}
        <section className="space-y-5 pb-6 border-b border-gray-200">
          <p className="text-base font-semibold text-gray-800">Here&apos;s what people are saying after watching the video:</p>

          <blockquote className="bg-gray-50 border-l-4 border-emerald-400 pl-4 pr-3 py-4 rounded-r-lg space-y-1">
            <p className="text-base text-gray-700 italic">"I was skeptical because I've tried everything. But after the first week, getting up from my couch stopped being a whole production. My husband actually noticed before I said anything."</p>
            <footer className="text-sm text-gray-500 font-medium">— Sandra R., 61 &bull; Retired teacher, Arizona</footer>
          </blockquote>

          <blockquote className="bg-gray-50 border-l-4 border-emerald-400 pl-4 pr-3 py-4 rounded-r-lg space-y-1">
            <p className="text-base text-gray-700 italic">"I've had knee issues for years and just assumed it was permanent. Three weeks in and I walked through the airport without that grinding feeling. That was huge for me."</p>
            <footer className="text-sm text-gray-500 font-medium">— David M., 58 &bull; Sales manager, Ohio</footer>
          </blockquote>

          <blockquote className="bg-gray-50 border-l-4 border-emerald-400 pl-4 pr-3 py-4 rounded-r-lg space-y-1">
            <p className="text-base text-gray-700 italic">"I do it right after I wake up. Takes 7 minutes, and I feel like I actually own my body again in the mornings. It&apos;s the only thing I&apos;ve stuck with consistently."</p>
            <footer className="text-sm text-gray-500 font-medium">— Patricia N., 54 &bull; Nurse, North Carolina</footer>
          </blockquote>
        </section>

        {/* Section 5 — Pre-CTA emotional close */}
        <section className="space-y-4 pb-4">
          <p className="text-base text-gray-700">
            If you&apos;ve felt that quiet frustration of watching yourself move less freely than you used to — that small hesitation that wasn&apos;t there five years ago — this video was made for you.
          </p>
          <p className="text-base text-gray-700">
            It&apos;s not a sales pitch. It&apos;s a clear explanation of what&apos;s happening in your body, why conventional advice misses it, and exactly what to do about it.
          </p>
          <p className="text-base text-gray-800 font-semibold">
            It&apos;s currently available to watch at no cost — but that may not always be the case.
          </p>
        </section>

        {/* Bottom CTA */}
        <section className="space-y-3 pt-2">
          <CtaButton label="Yes — Show Me the 7-Minute Method →" />
          <p className="text-center text-sm text-gray-500">
            Watched by over 84,000 adults. Designed for ages 45+.
          </p>
        </section>

        {/* Disclaimer */}
        <section className="text-xs text-gray-400 text-center pt-6 border-t border-gray-200 space-y-1">
          <p>
            This content is for informational and educational purposes only and does not constitute medical advice.
          </p>
          <p>
            Individual results vary. Consult a qualified healthcare provider before beginning any new exercise routine.
          </p>
          <p>This page may contain affiliate links. We may earn a commission if you purchase through our link.</p>
        </section>

      </article>
    </main>
  );
}

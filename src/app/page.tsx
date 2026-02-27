import React from "react";

const HOPLINK =
  "https://8d0d4b7-qhziz47yifxxqx4te0.hop.clickbank.net/?traffic_source=facebook&campaign=ak1&creative=c1";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center px-4 py-10 md:py-16">
      <div className="w-full max-w-3xl">
        <section className="text-center space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Why Knees Feel Stiffer After 45 —
            <br />
            And Why It’s Not Just “Getting Older”
          </h1>

          <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto">
            If mornings feel tighter…
            <br />
            If stairs feel more annoying…
            <br />
            If getting up from a chair feels slower than it used to…
            <br />
            <br />
            You’re not alone.
          </p>

          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Most adults are told it’s just aging.
            <br />
            <br />
            But many are discovering that daily stiffness often comes from reduced circulation and underused joint-support muscles — not “damage.”
            <br />
            <br />
            A short, gentle 7-minute seated routine is helping many adults support mobility from home without expensive programs, injections, or complicated equipment.
          </p>

          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto italic">
            Before considering drastic steps…
            <br />
            It may be worth watching this short explanation.
          </p>

          <div className="mt-6 flex justify-center">
            <a
              href={HOPLINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3 text-sm md:text-base font-semibold text-neutral-900 shadow-lg shadow-emerald-500/30 hover:bg-emerald-300 transition"
            >
              Watch The 7-Minute Routine
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

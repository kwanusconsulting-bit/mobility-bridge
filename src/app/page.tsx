import React from "react";

const HOPLINK =
  "https://8d0d4b7-qhziz47yifxxqx4te0.hop.clickbank.net/?traffic_source=facebook&campaign=ak1&creative=c1";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col items-center px-4 py-10 md:py-16">
      {/* Shell */}
      <div className="w-full max-w-3xl">
        {/* Top Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center rounded-full bg-emerald-900/40 border border-emerald-500/40 px-3 py-1 text-xs font-medium text-emerald-200">
            For adults 45+ who want easier movement
          </span>
        </div>

        {/* Hero */}
        <section className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            Simple 7-Minute Daily Routine{" "}
            <span className="text-emerald-300">To Support Easier Movement After 45</span>
          </h1>

          <p className="text-sm md:text-base text-neutral-300 max-w-2xl mx-auto">
            No intense workouts. No complicated equipment. Just a short,
            seated routine many adults are using to feel more comfortable
            with daily stairs, walks, and getting up from chairs.
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

          <p className="mt-2 text-[11px] md:text-xs text-neutral-500">
            You&apos;ll be taken to a short video that explains the routine
            step-by-step.
          </p>
        </section>

        {/* Divider */}
        <div className="mt-10 h-px w-full bg-neutral-800/70" />

        {/* Symptoms / Relatability */}
        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-lg md:text-xl font-semibold">Does any of this sound familiar?</h2>
            <ul className="text-sm text-neutral-300 space-y-2">
              <li>• Stiff knees in the morning or after sitting</li>
              <li>• Avoiding stairs when you can</li>
              <li>• Feeling slower or less steady on walks</li>
              <li>• Getting up from chairs takes more effort</li>
            </ul>
          </div>

          <div className="space-y-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4 md:p-5">
            <h3 className="text-sm font-semibold text-emerald-200">What this routine is:</h3>
            <ul className="text-xs md:text-sm text-neutral-300 space-y-1.5">
              <li>• Short, seated movements you can do at home</li>
              <li>• Designed for adults 45+ with real-life joint concerns</li>
              <li>• Focused on supporting strength and stability</li>
              <li>• Explained clearly in a follow-along video</li>
            </ul>

            <h3 className="mt-4 text-sm font-semibold text-rose-200">What it is NOT:</h3>
            <ul className="text-xs md:text-sm text-neutral-300 space-y-1.5">
              <li>• Not a “magic cure” or medical treatment</li>
              <li>• Not an extreme workout program</li>
              <li>• Not advice from your doctor or therapist</li>
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section className="mt-10 space-y-4">
          <h2 className="text-lg md:text-xl font-semibold text-center">How It Works In 3 Simple Steps</h2>

          <div className="grid gap-4 md:grid-cols-3 text-sm text-neutral-300">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4 space-y-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-neutral-900">1</span>
              <p className="font-semibold text-white">Watch the short video</p>
              <p className="text-xs">Learn how the routine is structured and why it focuses on seated movements.</p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4 space-y-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-neutral-900">2</span>
              <p className="font-semibold text-white">Follow along at home</p>
              <p className="text-xs">Use a chair and a small amount of space. Most people start with just 7 minutes a day.</p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4 space-y-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-neutral-900">3</span>
              <p className="font-semibold text-white">Build a simple habit</p>
              <p className="text-xs">Over time, this can help you feel more confident with everyday movement like stairs and walks.</p>
            </div>
          </div>

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

        {/* Soft credibility / disclaimer */}
        <section className="mt-10 text-[11px] md:text-xs text-neutral-500 space-y-2">
          <p>
            This page is for educational and informational purposes only and is not medical advice. Always speak with your healthcare provider before starting any new exercise or mobility routine, especially if you have existing conditions or concerns.
          </p>
          <p>
            As an affiliate, we may receive a commission if you choose to purchase after watching the video. There is no extra cost to you.
          </p>
          <p className="text-center text-neutral-600 mt-4">This site is not a part of Facebook or Meta Platforms, Inc.</p>
        </section>
      </div>
    </main>
  );
}


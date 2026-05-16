import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Links from "@/components/Links";
import BlackHole from "@/components/BlackHole";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white relative overflow-hidden flex flex-col justify-center">
      <BlackHole />

      <div className="relative max-w-6xl mx-auto px-4 py-10 sm:px-8 sm:py-16">

        {/* Corner brackets */}
        <div className="absolute inset-y-4 left-4 w-16 border-l border-t border-b border-neutral-700/70 hidden sm:block" />
        <div className="absolute inset-y-4 right-4 w-16 border-r border-t border-b border-neutral-700/70 hidden sm:block" />

        <div className="flex flex-col gap-10 items-start md:flex-row md:gap-0">

          {/* Left sidebar — profile */}
          <aside className="w-full md:w-72 md:shrink-0 md:sticky md:top-16 md:pr-10">
            <Hero />
          </aside>

          {/* Vertical divider with dot */}
          <div className="hidden md:flex flex-col items-center self-stretch shrink-0">
            <div className="w-px flex-1 bg-gradient-to-b from-transparent via-neutral-700 to-neutral-800/30" />
            <div className="w-1.5 h-1.5 rounded-full border border-neutral-600 bg-neutral-900 my-3 shrink-0" />
            <div className="w-px flex-1 bg-gradient-to-b from-neutral-800/30 via-neutral-700 to-transparent" />
          </div>

          {/* Right content — projects & links */}
          <div className="flex-1 flex flex-col gap-10 sm:gap-16 min-w-0 w-full md:pl-10">
            <Projects />
            <div className="border-t border-neutral-800" />
            <Links />
          </div>

        </div>
      </div>
    </main>
  );
}

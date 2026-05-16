import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Links from "@/components/Links";
import BlackHole from "@/components/BlackHole";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white relative overflow-hidden">
      <BlackHole />

      <div className="relative max-w-6xl mx-auto px-4 py-10 sm:px-8 sm:py-16">
        <div className="flex flex-col gap-10 items-start md:flex-row md:gap-16">

          {/* Left sidebar — profile */}
          <aside className="w-full md:w-72 md:shrink-0 md:sticky md:top-16">
            <Hero />
          </aside>

          {/* Right content — projects & links */}
          <div className="flex-1 flex flex-col gap-10 sm:gap-16 min-w-0 w-full">
            <Projects />
            <div className="border-t border-neutral-800" />
            <Links />
          </div>

        </div>
      </div>
    </main>
  );
}

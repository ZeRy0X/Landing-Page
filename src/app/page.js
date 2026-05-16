import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Links from "@/components/Links";
import BlackHole from "@/components/BlackHole";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white relative overflow-hidden">
      <BlackHole />

      <div className="relative max-w-6xl mx-auto px-8 py-16">
        <div className="flex gap-16 items-start">

          {/* Left sidebar — profile */}
          <aside className="w-72 shrink-0 sticky top-16">
            <Hero />
          </aside>

          {/* Right content — projects & links */}
          <div className="flex-1 flex flex-col gap-16 min-w-0">
            <Projects />
            <div className="border-t border-neutral-800" />
            <Links />
          </div>

        </div>
      </div>
    </main>
  );
}

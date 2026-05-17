import Image from "next/image";
import DiscordPresence from "./DiscordPresence";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center gap-7">
      {/* Avatar */}
      <div className="relative">
        <div className="w-28 h-28 rounded-full p-[2px] bg-gradient-to-br from-sky-400 to-violet-500">
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              src="/profile.png"
              alt="Profile"
              fill
              sizes="112px"
              className="object-cover"
            />
          </div>
        </div>

      </div>

      {/* Name & Role */}
      <div className="space-y-1.5">
        <h1 className="text-2xl font-bold tracking-tight text-white">Alessandro Fiesoli</h1>
        <p className="text-neutral-400 text-sm font-medium">Full Stack Developer</p>
      </div>

      {/* Bio */}
      <p className="text-neutral-500 text-sm leading-relaxed">
        I build modern web applications with a focus on performance, clean code,
        and great user experiences.
      </p>

      {/* Divider */}
      <div className="w-full border-t border-neutral-800" />

      {/* Bio */}
      <p className="text-neutral-500 text-sm leading-relaxed">
        I'm currently studying Computer Science with a particular
        interest in cybersecurity and software development.
      </p>

      {/* Divider */}
      <div className="w-full border-t border-neutral-800" />

      {/* Quick stats */}
      <div className="w-full grid grid-cols-3 gap-2 text-center">
        <div>
          <p className="text-white font-semibold text-lg">2</p>
          <p className="text-neutral-600 text-xs">Projects</p>
        </div>
        <div>
          <p className="text-white font-semibold text-lg">5+</p>
          <p className="text-neutral-600 text-xs">Years exp.</p>
        </div>
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
            <path d="M10 9.41721C9.16169 8.57524 8.20668 8 7 8C4.79086 8 3 9.79086 3 12C3 14.2091 4.79086 16 7 16C11.5 16 12.5 8 17 8C19.2091 8 21 9.79086 21 12C21 14.2091 19.2091 16 17 16C15.7933 16 14.8383 15.4248 14 14.5828" />
          </svg>
          <p className="text-neutral-600 text-xs">Coffee</p>
        </div>
      </div>

      {/* Discord presence */}
      <DiscordPresence />

      {/* Copyright */}
      <p className="text-neutral-700 text-xs">
        © {new Date().getFullYear()} Alessandro Fiesoli
      </p>
    </section>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-all"
    >
      {children}
    </a>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}


const projects = [
  {
    title: "MoneySaver",
    description:
      "A web application with the intent to help you manage your finances effectively.",
    tags: ["Next.js", "MUI"],
    github: null,
    live: "https://github.com/ZeRy0X/MoneySaver-Release",
    comingSoon: false,
  },
  {
    title: "Amethyx",
    description:
      "A full-stack web application to simulate the stock market and test trading strategies in a risk-free environment.",
    tags: ["Next.js", "MUI", "PostgreSQL"],
    github: null,
    live: null,
    comingSoon: true,
  },
];

export default function Projects() {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-semibold text-white">Projects</h2>
        <span className="text-xs text-neutral-500 bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded-full">
          {projects.length}
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 flex flex-col gap-4 hover:border-neutral-600 transition-all group"
          >
            <div className="flex-1 space-y-2">
              <h3 className="font-semibold text-white group-hover:text-sky-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-2 border-t border-neutral-800">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-500 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <GitHubMiniIcon />
                  Code
                </a>
              )}
              {project.comingSoon && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  Coming soon
                </span>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-500 hover:text-white transition-colors flex items-center gap-1.5 ml-auto"
                >
                  Live
                  <ExternalLinkIcon />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function GitHubMiniIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3.5 h-3.5"
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="flex flex-col gap-6 py-24">
      <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
        Hi, I&apos;m
      </p>
      <h1 className="text-5xl font-semibold tracking-tight text-black dark:text-zinc-50">
        Jada Ihekwoaba
      </h1>
      <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Computer Science student who loves building useful software with TypeScript, Vue, and Flutter.
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          View projects
        </a>
        <a
          href="#contact"
          className="rounded-full border border-black/[.08] px-5 py-3 text-sm font-medium transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
        >
          Contact me
        </a>
      </div>
    </section>
  );
}

import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-8 py-16">
      <h2 className="text-3xl font-semibold tracking-tight">Projects</h2>
      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col overflow-hidden rounded-2xl border border-black/[.08] dark:border-white/[.145]"
          >
            <div className="relative aspect-video bg-zinc-100 dark:bg-zinc-900">
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-contain"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400">{project.description}</p>
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-black/[.06] px-3 py-1 text-xs dark:bg-white/[.08]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex gap-4 pt-2 text-sm font-medium">
                {project.href && (
                  <a href={project.href} target="_blank" rel="noopener noreferrer" className="underline">
                    Live site
                  </a>
                )}
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="underline">
                    Code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

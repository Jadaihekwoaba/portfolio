import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="flex flex-col gap-8 py-16">
      <h2 className="text-3xl font-semibold tracking-tight">Skills</h2>
      <ul className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <li
            key={skill.category}
            className="rounded-full border border-black/[.08] px-4 py-2 text-sm dark:border-white/[.145]"
          >
            <span className="font-medium">{skill.category}</span>: {skill.items.join(", ")}
          </li>
        ))}
      </ul>
    </section>
  );
}

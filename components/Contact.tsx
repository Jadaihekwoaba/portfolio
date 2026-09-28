const links = [
  { label: "Email", href: "mailto:jadaihekwoaba@gmail.com" },
  { label: "GitHub", href: "https://github.com/Jadaihekwoaba" },
  { label: "LinkedIn", href: "http://www.linkedin.com/in/jada-ihekwoaba" },
];

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col gap-6 py-16">
      <h2 className="text-3xl font-semibold tracking-tight">Contact</h2>
      <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
        I&apos;m looking for internship and new grad opportunities. Feel free to reach out!
      </p>
      <ul className="flex flex-wrap gap-6 font-medium">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} target="_blank" rel="noopener noreferrer" className="underline">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

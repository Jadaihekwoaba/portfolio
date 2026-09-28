export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
  title: "DiseaseQuest",
  description: "AI-driven clinical case simulation platform that helps medical students build clinical reasoning through interactive patient scenarios. Built as my senior capstone.",
  image: "/diseasequest.png",
  tags: ["Nuxt", "Vue", "TypeScript", "Supabase", "OpenAI"],
  href: "",
  repo: "",
  },
{
  title: "Quiz App",
  description: "Cross-platform Flutter quiz app with multiple-choice questions and a results screen that reviews each answer.",
  image: "/quiz.png",
  tags: ["Flutter", "Dart"],
  href: "",
  repo: "https://github.com/Jadaihekwoaba/quiz",
}
];

import { PageHeader } from "../_components/page-header";

const techStack = ["Next.js", "Flutter", "Node.js", "React", "Tailwind CSS"];
const tools = ["Git", "GitHub", "Postman", "Figma", "VS Code"];
const languages = ["JavaScript", "TypeScript", "Python", "Dart", "SQL"];

export default function SkillsPage() {
  return (
    <main className="flex flex-1 flex-col gap-8 pb-10">
      <PageHeader
        eyebrow="Skills"
        title="Tech stack, tools, and languages in one clean place."
        description="This page is set up for the actual technologies you use across web, mobile, tooling, and programming languages."
      />

      <section className="space-y-6">
        <div className="rounded-[0.7rem] border border-[rgba(125,186,125,0.12)] bg-[rgba(4,10,4,0.82)] p-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#7dba7d]">
            Tech Stack
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {techStack.map((item) => (
              <span
                key={item}
                className="rounded-[0.45rem] border border-[rgba(125,186,125,0.14)] bg-[rgba(125,186,125,0.07)] px-4 py-2 font-mono text-sm text-[rgba(216,245,216,0.78)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[0.7rem] border border-[rgba(125,186,125,0.12)] bg-[rgba(4,10,4,0.82)] p-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#7dba7d]">
            Tools
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {tools.map((item) => (
              <span
                key={item}
                className="rounded-[0.45rem] border border-[rgba(125,186,125,0.14)] bg-[rgba(125,186,125,0.07)] px-4 py-2 font-mono text-sm text-[rgba(216,245,216,0.78)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[0.7rem] border border-[rgba(125,186,125,0.12)] bg-[rgba(4,10,4,0.82)] p-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#7dba7d]">
            Languages
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {languages.map((item) => (
              <span
                key={item}
                className="rounded-[0.45rem] border border-[rgba(125,186,125,0.14)] bg-[rgba(125,186,125,0.07)] px-4 py-2 font-mono text-sm text-[rgba(216,245,216,0.78)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

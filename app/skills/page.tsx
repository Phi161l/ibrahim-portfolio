import { PageHeader } from "../_components/page-header";

const languages = ["JavaScript", "TypeScript", "Python"];
const frontend = [
  "React",
  "Next.js",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Flutter",
];
const backend = ["Node.js", "Express.js"];
const databases = ["MongoDB", "PostgreSQL", "Firebase"];
const tools = ["Git", "GitHub", "VS Code", "Postman", "Docker", "Vercel"];

export default function SkillsPage() {
  return (
    <main className="flex flex-1 flex-col gap-8 pb-10">
      <PageHeader
        eyebrow="Skills"
        title="Stack, tools, and languages."
        description="The technologies I use across web, mobile, and day-to-day development."
      />

      <section className="space-y-6">
        <div className="rounded-[0.7rem] border border-[rgba(125,186,125,0.12)] bg-[rgba(4,10,4,0.82)] p-6 transition duration-300 hover:border-[rgba(125,186,125,0.88)] hover:bg-[rgba(8,18,8,0.9)] hover:shadow-[0_0_35px_rgba(125,186,125,0.18)]">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#7dba7d]">
            Languages
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {languages.map((item) => (
              <span
                key={item}
                className="rounded-[0.45rem] border border-[rgba(125,186,125,0.14)] bg-[rgba(125,186,125,0.07)] px-4 py-2 font-mono text-sm text-[rgba(216,245,216,0.78)] transition duration-300 hover:border-[rgba(125,186,125,0.88)] hover:bg-[rgba(125,186,125,0.1)] hover:text-[rgba(238,252,238,0.9)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[0.7rem] border border-[rgba(125,186,125,0.12)] bg-[rgba(4,10,4,0.82)] p-6 transition duration-300 hover:border-[rgba(125,186,125,0.88)] hover:bg-[rgba(8,18,8,0.9)] hover:shadow-[0_0_35px_rgba(125,186,125,0.18)]">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#7dba7d]">
            Frontend
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {frontend.map((item) => (
              <span
                key={item}
                className="rounded-[0.45rem] border border-[rgba(125,186,125,0.14)] bg-[rgba(125,186,125,0.07)] px-4 py-2 font-mono text-sm text-[rgba(216,245,216,0.78)] transition duration-300 hover:border-[rgba(125,186,125,0.88)] hover:bg-[rgba(125,186,125,0.1)] hover:text-[rgba(238,252,238,0.9)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[0.7rem] border border-[rgba(125,186,125,0.12)] bg-[rgba(4,10,4,0.82)] p-6 transition duration-300 hover:border-[rgba(125,186,125,0.88)] hover:bg-[rgba(8,18,8,0.9)] hover:shadow-[0_0_35px_rgba(125,186,125,0.18)]">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#7dba7d]">
            Backend
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {backend.map((item) => (
              <span
                key={item}
                className="rounded-[0.45rem] border border-[rgba(125,186,125,0.14)] bg-[rgba(125,186,125,0.07)] px-4 py-2 font-mono text-sm text-[rgba(216,245,216,0.78)] transition duration-300 hover:border-[rgba(125,186,125,0.88)] hover:bg-[rgba(125,186,125,0.1)] hover:text-[rgba(238,252,238,0.9)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[0.7rem] border border-[rgba(125,186,125,0.12)] bg-[rgba(4,10,4,0.82)] p-6 transition duration-300 hover:border-[rgba(125,186,125,0.88)] hover:bg-[rgba(8,18,8,0.9)] hover:shadow-[0_0_35px_rgba(125,186,125,0.18)]">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#7dba7d]">
            Databases
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {databases.map((item) => (
              <span
                key={item}
                className="rounded-[0.45rem] border border-[rgba(125,186,125,0.14)] bg-[rgba(125,186,125,0.07)] px-4 py-2 font-mono text-sm text-[rgba(216,245,216,0.78)] transition duration-300 hover:border-[rgba(125,186,125,0.88)] hover:bg-[rgba(125,186,125,0.1)] hover:text-[rgba(238,252,238,0.9)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[0.7rem] border border-[rgba(125,186,125,0.12)] bg-[rgba(4,10,4,0.82)] p-6 transition duration-300 hover:border-[rgba(125,186,125,0.88)] hover:bg-[rgba(8,18,8,0.9)] hover:shadow-[0_0_35px_rgba(125,186,125,0.18)]">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#7dba7d]">
            Tools
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {tools.map((item) => (
              <span
                key={item}
                className="rounded-[0.45rem] border border-[rgba(125,186,125,0.14)] bg-[rgba(125,186,125,0.07)] px-4 py-2 font-mono text-sm text-[rgba(216,245,216,0.78)] transition duration-300 hover:border-[rgba(125,186,125,0.88)] hover:bg-[rgba(125,186,125,0.1)] hover:text-[rgba(238,252,238,0.9)]"
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

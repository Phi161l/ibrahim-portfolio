import Link from "next/link";
import { RotatingRole } from "./_components/rotating-role";

const projects = [
  {
    name: "Project Alpha",
    type: "Full-stack platform",
    summary:
      "A placeholder case study for your main web product, admin tools, and backend architecture.",
  },
  {
    name: "Project Pulse",
    type: "Flutter mobile app",
    summary:
      "A mobile-focused project slot for the app that best shows your cross-platform product thinking.",
  },
  {
    name: "Project Node",
    type: "Backend system",
    summary:
      "A clean space for an API, dashboard, or automation product that highlights performance and scale.",
  },
];

const experience = [
  {
    role: "Full-Stack Developer",
    period: "Current Focus",
    summary:
      "Building complete products from interface to backend logic with a focus on clean UX and solid architecture.",
  },
  {
    role: "Flutter Mobile Developer",
    period: "Cross-platform",
    summary:
      "Creating mobile apps with polished flows, reusable UI, and connected backend experiences.",
  },
  {
    role: "Creative Problem Solver",
    period: "Always On",
    summary:
      "Blending technical thinking with visual direction so products feel both sharp and memorable.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col gap-8 pb-10">
      <section className="flex min-h-[calc(100vh-8rem)] items-center justify-center">
        <div className="w-full min-h-[32rem] rounded-[0.7rem] border border-[rgba(125,186,125,0.14)] bg-[linear-gradient(180deg,rgba(6,16,6,0.96),rgba(2,7,2,0.96))] p-6 text-center shadow-[0_0_50px_rgba(125,186,125,0.1)] sm:min-h-[36rem] sm:p-8">
          <div className="mb-8 flex items-center justify-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#7dba7d]" />
            <span className="h-3 w-3 rounded-full bg-[#4f7a4f]" />
            <span className="h-3 w-3 rounded-full bg-[#243824]" />
          </div>

          <div className="mx-auto flex max-w-4xl flex-col items-center justify-center py-8 sm:py-12">
            <p className="font-mono text-sm uppercase tracking-[0.32em] text-[#7dba7d]">
              Hello, I&apos;m
            </p>
            <h2 className="mt-5 text-5xl font-semibold leading-none text-[rgba(241,255,241,0.46)] sm:text-6xl">
              Mike Imi
            </h2>
            <p className="mt-4 text-2xl font-medium text-[rgba(125,186,125,0.84)] sm:text-3xl">
              <RotatingRole />
            </p>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[rgba(155,201,155,0.78)] sm:text-lg">
              I build scalable web applications, dashboards, and ecommerce
              platforms using modern JavaScript technologies. Focused on
              performance, architecture, and beautiful user interfaces.
            </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="rounded-[0.45rem] border border-[rgba(125,186,125,0.24)] bg-[#7dba7d] px-6 py-3 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:border-[#96d096] hover:bg-[#96d096]"
              href="/#projects"
            >
              View Projects
            </Link>
            <Link
              className="rounded-[0.45rem] border border-[rgba(125,186,125,0.24)] bg-[rgba(125,186,125,0.04)] px-6 py-3 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-[rgba(213,246,213,0.78)] transition hover:border-[#7dba7d] hover:bg-[rgba(125,186,125,0.08)] hover:text-[#f3fff3]"
              href="/#experience"
            >
              Experience
            </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="scroll-mt-28 rounded-[0.7rem] border border-[rgba(125,186,125,0.12)] bg-[rgba(4,10,4,0.82)] p-6 sm:p-8"
      >
        <div className="mb-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#7dba7d]">
            Projects
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-[rgba(242,255,242,0.82)]">
            Featured work
          </h3>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((item, index) => (
            <article
              key={item.name}
              className="rounded-[0.55rem] border border-[rgba(125,186,125,0.12)] bg-[linear-gradient(180deg,rgba(10,22,10,0.92),rgba(4,10,4,0.92))] p-5 transition duration-300 hover:-translate-y-1 hover:border-[rgba(125,186,125,0.88)] hover:bg-[linear-gradient(180deg,rgba(32,74,32,0.98),rgba(13,36,13,0.98))] hover:shadow-[0_0_35px_rgba(125,186,125,0.28)]"
            >
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#7dba7d]">
                0{index + 1}
              </p>
              <h4 className="mt-4 text-xl font-semibold text-[rgba(242,255,242,0.82)]">
                {item.name}
              </h4>
              <p className="mt-2 font-mono text-sm text-[rgba(125,186,125,0.84)]">
                {item.type}
              </p>
              <p className="mt-4 leading-7 text-[rgba(181,214,181,0.72)]">
                {item.summary}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="scroll-mt-28 rounded-[0.7rem] border border-[rgba(125,186,125,0.12)] bg-[rgba(4,10,4,0.82)] p-6 sm:p-8"
      >
        <div className="mb-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#7dba7d]">
            Experience
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-[rgba(242,255,242,0.82)]">
            What I bring
          </h3>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {experience.map((item) => (
            <article
              key={item.role}
              className="rounded-[0.55rem] border border-[rgba(125,186,125,0.12)] bg-[linear-gradient(180deg,rgba(10,22,10,0.92),rgba(4,10,4,0.92))] p-5 transition duration-300 hover:-translate-y-1 hover:border-[rgba(125,186,125,0.88)] hover:bg-[linear-gradient(180deg,rgba(32,74,32,0.98),rgba(13,36,13,0.98))] hover:shadow-[0_0_35px_rgba(125,186,125,0.28)]"
            >
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[rgba(125,186,125,0.84)]">
                {item.period}
              </p>
              <h4 className="mt-4 text-xl font-semibold text-[rgba(242,255,242,0.82)]">
                {item.role}
              </h4>
              <p className="mt-4 leading-7 text-[rgba(181,214,181,0.72)]">
                {item.summary}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

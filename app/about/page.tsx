import Image from "next/image";
import { PageHeader } from "../_components/page-header";

const highlights = [
  "Full-stack product thinking",
  "Flutter cross-platform development",
  "Performance-focused interfaces",
  "Competitive programming mindset",
];

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col gap-8 pb-10">
      <PageHeader
        eyebrow="About"
        title="Developer, builder, and problem solver."
        description="I build practical digital products across web and mobile, with a focus on clean experiences, strong implementation, and continuous growth."
      />

      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[0.7rem] border border-[rgba(125,186,125,0.12)] bg-[linear-gradient(180deg,rgba(9,18,9,0.9),rgba(4,10,4,0.88))] p-6 transition duration-300 hover:border-[rgba(125,186,125,0.88)] hover:bg-[linear-gradient(180deg,rgba(18,38,18,0.94),rgba(7,18,7,0.92))] hover:shadow-[0_0_35px_rgba(125,186,125,0.18)] sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#7dba7d]">
            Profile
          </p>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-[rgba(214,240,214,0.72)]">
            I enjoy taking ideas from concept to working product, shaping them
            into interfaces and systems that feel modern, responsive, and
            useful in real-world use.
          </p>
          <p className="mt-4 max-w-4xl leading-8 text-[rgba(181,214,181,0.68)]">
            Alongside product building, I keep sharpening my thinking through
            consistent coding practice and problem solving, which helps me
            approach development with both creativity and discipline.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-[0.55rem] border border-[rgba(125,186,125,0.12)] bg-[rgba(125,186,125,0.04)] px-4 py-4 font-mono text-sm text-[rgba(216,245,216,0.78)] transition duration-300 hover:border-[rgba(125,186,125,0.88)] hover:bg-[rgba(125,186,125,0.1)] hover:text-[rgba(238,252,238,0.9)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[0.7rem] border border-[rgba(125,186,125,0.12)] bg-[linear-gradient(180deg,rgba(10,22,10,0.92),rgba(4,10,4,0.92))] p-6 transition duration-300 hover:border-[rgba(125,186,125,0.88)] hover:bg-[linear-gradient(180deg,rgba(20,44,20,0.94),rgba(7,18,7,0.92))] hover:shadow-[0_0_35px_rgba(125,186,125,0.18)]">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#7dba7d]">
              Snapshot
            </p>
            <div className="mt-5 space-y-4 font-mono text-sm text-[rgba(183,221,183,0.68)]">
              <div className="flex items-center justify-between border-b border-[rgba(125,186,125,0.08)] pb-3">
                <span>Focus</span>
                <span className="text-[rgba(238,252,238,0.8)]">Web + Mobile</span>
              </div>
              <div className="flex items-center justify-between border-b border-[rgba(125,186,125,0.08)] pb-3">
                <span>Stack</span>
                <span className="text-[rgba(238,252,238,0.8)]">TypeScript + Flutter</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Style</span>
                <span className="text-[rgba(238,252,238,0.8)]">Clean + practical</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[0.7rem] border border-[rgba(125,186,125,0.12)] bg-[rgba(4,10,4,0.82)] p-6 transition duration-300 hover:border-[rgba(125,186,125,0.88)] hover:bg-[rgba(8,18,8,0.9)] hover:shadow-[0_0_35px_rgba(125,186,125,0.18)] sm:p-8">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#7dba7d]">
          GitHub Graph
        </p>
        <div className="relative mt-5 overflow-hidden rounded-[0.55rem] border border-[rgba(125,186,125,0.14)] bg-[rgba(2,6,2,0.92)] p-3">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(125,186,125,0.08),rgba(125,186,125,0.03))]" />
          <Image
            src="/github.png"
            alt="GitHub contribution graph"
            width={757}
            height={197}
            className="relative h-auto w-full rounded-[0.4rem] border border-[rgba(125,186,125,0.08)] opacity-92 contrast-110 saturate-[0.65] brightness-[0.92]"
          />
        </div>
      </section>

      <section className="rounded-[0.7rem] border border-[rgba(125,186,125,0.12)] bg-[rgba(4,10,4,0.82)] p-6 transition duration-300 hover:border-[rgba(125,186,125,0.88)] hover:bg-[rgba(8,18,8,0.9)] hover:shadow-[0_0_35px_rgba(125,186,125,0.18)] sm:p-8">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#7dba7d]">
          LeetCode Graph
        </p>
        <div className="relative mt-5 overflow-hidden rounded-[0.55rem] border border-[rgba(125,186,125,0.14)] bg-[rgba(2,6,2,0.92)] p-3">
          <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(125,186,125,0.14),rgba(125,186,125,0.05))] mix-blend-screen" />
          <Image
            src="/leetcode.png"
            alt="LeetCode activity graph"
            width={840}
            height={188}
            className="relative h-auto w-full rounded-[0.4rem] border border-[rgba(125,186,125,0.08)] opacity-92 contrast-[1.08] saturate-[0.45] brightness-[0.82] sepia-[0.18]"
          />
        </div>
      </section>
    </main>
  );
}

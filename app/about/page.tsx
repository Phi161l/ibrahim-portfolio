import { PageHeader } from "../_components/page-header";

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col gap-8 pb-10">
      <PageHeader
        eyebrow="About"
        title="A sharper space for your story."
        description="This page is now separated so your background, approach, and developer identity can breathe, and it also gives you a better place for GitHub and LeetCode graphs."
      />

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[0.7rem] border border-[rgba(125,186,125,0.12)] bg-[rgba(4,10,4,0.82)] p-6 sm:p-8">
          <p className="max-w-4xl text-lg leading-8 text-[rgba(214,240,214,0.74)]">
            You can use this page to describe who you are, what kind of products
            you like building, and how you combine full-stack development with
            Flutter mobile work. The layout is intentionally simple so we can add
            your real personal story next.
          </p>
        </div>

        <div className="space-y-6">
          <div className="rounded-[0.7rem] border border-[rgba(125,186,125,0.12)] bg-[rgba(4,10,4,0.82)] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#7dba7d]">
              GitHub Graph
            </p>
            <p className="mt-4 leading-7 text-[rgba(181,214,181,0.72)]">
              This card is ready for your GitHub contribution graph or activity
              embed.
            </p>
          </div>

          <div className="rounded-[0.7rem] border border-[rgba(125,186,125,0.12)] bg-[rgba(4,10,4,0.82)] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#7dba7d]">
              LeetCode Graph
            </p>
            <p className="mt-4 leading-7 text-[rgba(181,214,181,0.72)]">
              This card is ready for your LeetCode stats graph or coding
              progress visual.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

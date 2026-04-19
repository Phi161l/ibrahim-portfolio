import { PageHeader } from "../_components/page-header";

const contactItems = [
  "Email",
  "GitHub",
  "LinkedIn",
  "LeetCode",
  "WhatsApp",
  "CV / Resume",
];

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col gap-8 pb-10">
      <PageHeader
        eyebrow="Contact"
        title="A cleaner place for all your links."
        description="This page is ready for your actual contact details and social profiles, with enough room to add GitHub, LeetCode, LinkedIn, email, and your CV without crowding the rest of the site."
      />

      <section className="rounded-[0.7rem] border border-[rgba(125,186,125,0.12)] bg-[rgba(4,10,4,0.82)] p-6 sm:p-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactItems.map((item) => (
            <div
              key={item}
              className="rounded-[0.55rem] border border-[rgba(125,186,125,0.12)] bg-[rgba(125,186,125,0.05)] p-5"
            >
              <p className="font-mono text-sm uppercase tracking-[0.24em] text-[rgba(125,186,125,0.84)]">
                {item}
              </p>
              <p className="mt-3 leading-7 text-[rgba(181,214,181,0.72)]">
                Replace this with your real {item.toLowerCase()} details.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

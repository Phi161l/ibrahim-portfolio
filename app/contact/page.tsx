import { PageHeader } from "../_components/page-header";

const contactItems = [
  {
    label: "Email",
    value: "ibrahimnaik91@gmail.com",
    href: "mailto:ibrahimnaik91@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/Phi161l",
    href: "https://github.com/Phi161l",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ibrahim-muhaba-6126572b7",
    href: "https://www.linkedin.com/in/ibrahim-muhaba-6126572b7/",
  },
  {
    label: "LeetCode",
    value: "leetcode.com/u/codenija_2020",
    href: "https://leetcode.com/u/codenija_2020/",
  },
];

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col gap-8 pb-10">
      <PageHeader
        eyebrow="Contact"
        title="Links and contact."
        description="The places to reach me and the profiles that support my work."
      />

      <section className="rounded-[0.7rem] border border-[rgba(125,186,125,0.12)] bg-[rgba(4,10,4,0.82)] p-6 sm:p-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-[0.55rem] border border-[rgba(125,186,125,0.12)] bg-[rgba(125,186,125,0.05)] p-5 transition duration-300 hover:-translate-y-1 hover:border-[rgba(125,186,125,0.88)] hover:shadow-[0_0_35px_rgba(125,186,125,0.18)]"
            >
              <p className="font-mono text-sm uppercase tracking-[0.24em] text-[rgba(125,186,125,0.84)]">
                {item.label}
              </p>
              <p className="mt-3 leading-7 text-[rgba(181,214,181,0.72)]">
                {item.value}
              </p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

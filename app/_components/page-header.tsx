type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageHeader({
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <section className="pt-6 sm:pt-8">
      <div className="rounded-[0.7rem] border border-[rgba(125,186,125,0.12)] bg-[linear-gradient(180deg,rgba(6,16,6,0.96),rgba(2,7,2,0.96))] p-5 shadow-[0_0_36px_rgba(125,186,125,0.08)] sm:p-6">
        <div className="mb-5 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#7dba7d]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#4f7a4f]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#243824]" />
        </div>

        <p className="font-mono text-xs uppercase tracking-[0.32em] text-[#7dba7d]">
          {eyebrow}
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-[rgba(241,255,241,0.86)] sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[rgba(155,201,155,0.74)] sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}

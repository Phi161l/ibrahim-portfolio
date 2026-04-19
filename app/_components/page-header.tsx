type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <section className="rounded-[0.7rem] border border-[rgba(125,186,125,0.14)] bg-[linear-gradient(180deg,rgba(6,16,6,0.96),rgba(2,7,2,0.96))] p-6 shadow-[0_0_50px_rgba(125,186,125,0.1)] sm:p-8">
      <div className="mb-8 flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-[#7dba7d]" />
        <span className="h-3 w-3 rounded-full bg-[#4f7a4f]" />
        <span className="h-3 w-3 rounded-full bg-[#243824]" />
      </div>

      <p className="font-mono text-sm uppercase tracking-[0.32em] text-[#7dba7d]">
        {eyebrow}
      </p>
      <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-[rgba(241,255,241,0.86)] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-6 max-w-2xl text-base leading-8 text-[rgba(155,201,155,0.78)] sm:text-lg">
        {description}
      </p>
    </section>
  );
}

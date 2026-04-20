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
    <section className="pt-5 pb-2 sm:pt-6 sm:pb-3">
      <div className="relative overflow-hidden rounded-[0.7rem] border border-[rgba(125,186,125,0.09)] bg-[linear-gradient(180deg,rgba(7,14,7,0.72),rgba(3,7,3,0.54))] px-4 py-4 shadow-[0_0_24px_rgba(125,186,125,0.04)] sm:px-5 sm:py-5">
        <div className="absolute inset-y-0 left-0 w-px bg-[rgba(125,186,125,0.32)]" />
        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-8 bg-[rgba(125,186,125,0.4)]" />
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-[#7dba7d]">
            {eyebrow}
          </p>
        </div>

        <h2 className="max-w-3xl text-2xl font-semibold leading-tight text-[rgba(241,255,241,0.86)] sm:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[rgba(155,201,155,0.72)] sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}

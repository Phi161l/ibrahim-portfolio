import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex-1 overflow-hidden">
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(125,186,125,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(125,186,125,0.12)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pt-24 pb-8 sm:px-10 sm:pt-24 lg:px-12">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(125,186,125,0.12)] bg-[rgba(4,10,4,0.9)] backdrop-blur">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-4 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-[#7dba7d]">
              Portfolio.exe
            </p>
            <h1 className="mt-1 text-base font-semibold text-[rgba(232,255,232,0.82)] sm:text-lg">
              Creative developer terminal
            </h1>
          </div>

          <nav className="flex flex-wrap gap-2 font-mono text-sm text-[rgba(125,186,125,0.78)]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                className="rounded-[0.4rem] border border-transparent px-3 py-1.5 transition hover:border-[rgba(125,186,125,0.16)] hover:text-[#e6f8e6]"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          </div>
        </header>

        {children}
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RotatingRole } from "./rotating-role";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

const headerRoles = [
  "Full-Stack Developer",
  "Flutter Developer",
  "Competitive Programmer",
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative flex-1 overflow-hidden">
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(125,186,125,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(125,186,125,0.12)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 pt-24 pb-8 sm:px-10 sm:pt-24 lg:px-12">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(125,186,125,0.12)] bg-[rgba(4,10,4,0.9)] backdrop-blur">
          <div className="mx-auto flex w-full max-w-7xl flex-col px-5 py-3 sm:px-10 md:flex-row md:items-center md:justify-between md:py-4 lg:px-12">
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="truncate font-mono text-[11px] uppercase tracking-[0.32em] text-[#7dba7d] sm:text-xs">
                  Ibrahim Muhaba
                </p>
                <h1 className="mt-1 text-sm font-semibold text-[rgba(232,255,232,0.82)] sm:text-lg">
                  <RotatingRole
                    roles={headerRoles}
                    className="min-w-[14ch] sm:min-w-[24ch]"
                  />
                </h1>
              </div>

              <button
                type="button"
                aria-expanded={menuOpen}
                aria-label="Toggle navigation menu"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[0.45rem] border border-[rgba(125,186,125,0.14)] bg-[rgba(125,186,125,0.05)] text-[#dff7df] transition hover:border-[rgba(125,186,125,0.4)] hover:bg-[rgba(125,186,125,0.1)] md:hidden"
                onClick={() => setMenuOpen((open) => !open)}
              >
                <span className="flex flex-col gap-1.5">
                  <span className="block h-px w-4 bg-current" />
                  <span className="block h-px w-4 bg-current" />
                  <span className="block h-px w-4 bg-current" />
                </span>
              </button>
            </div>

            <nav className="mt-4 hidden flex-wrap gap-2 font-mono text-sm text-[rgba(125,186,125,0.78)] md:mt-0 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  className={`rounded-[0.4rem] border px-3 py-1.5 transition hover:border-[rgba(125,186,125,0.24)] hover:text-[#e6f8e6] ${
                    pathname === item.href
                      ? "border-[rgba(125,186,125,0.28)] bg-[rgba(125,186,125,0.08)] text-[#efffef]"
                      : "border-transparent"
                  }`}
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {menuOpen ? (
              <nav className="mt-4 grid gap-2 border-t border-[rgba(125,186,125,0.1)] pt-4 md:hidden">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    className={`rounded-[0.55rem] border px-4 py-3 font-mono text-sm transition ${
                      pathname === item.href
                        ? "border-[rgba(125,186,125,0.28)] bg-[rgba(125,186,125,0.08)] text-[#efffef]"
                        : "border-[rgba(125,186,125,0.12)] bg-[rgba(125,186,125,0.04)] text-[rgba(125,186,125,0.82)]"
                    }`}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            ) : null}
          </div>
        </header>

        {children}
      </div>
    </div>
  );
}

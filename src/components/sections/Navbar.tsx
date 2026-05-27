"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "@/components/ui/icons";
import { n7Assets } from "@/data/n7Assets";
import { links } from "@/data/links";
import { navLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:px-6 md:pt-5">
      <div className="w-full max-w-[1280px]">
        <nav
          className={cn(
            "nav-pill relative flex h-[52px] w-full items-center rounded-full px-5",
            "lg:mx-auto lg:max-w-[920px] lg:px-8",
          )}
          aria-label="Main navigation"
        >
          <Link href="/" className="relative z-10 flex shrink-0 items-center gap-2">
            <Image
              src={n7Assets.logo}
              alt=""
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
              aria-hidden
            />
            <span className="text-[22px] font-bold leading-none tracking-tight text-white">N7</span>
          </Link>

          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex xl:gap-9">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[11px] font-medium tracking-[0.12em] text-white transition hover:text-white/90"
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown className="mt-px h-3 w-3 shrink-0 text-white" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="ml-auto hidden lg:block">
            <Link
              href={links.requestDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/90 px-5 py-[7px] text-[10px] font-semibold leading-none tracking-[0.14em] text-white transition hover:bg-white/5"
            >
              REQUEST DEMO
            </Link>
          </div>

          <div className="ml-auto flex items-center lg:hidden">
            <button
              type="button"
              className="flex h-8 w-8 shrink-0 flex-col items-center justify-center gap-1 lg:hidden"
              aria-expanded={open}
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
            >
              <span
                className={cn("h-0.5 w-5 bg-white transition", open && "translate-y-2 rotate-45")}
              />
              <span className={cn("h-0.5 w-5 bg-white transition", open && "opacity-0")} />
              <span
                className={cn("h-0.5 w-5 bg-white transition", open && "-translate-y-2 -rotate-45")}
              />
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#1c1c1c] lg:hidden"
            >
              <ul className="flex flex-col p-4">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-between py-3 text-xs font-medium tracking-widest text-white"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                      {link.hasDropdown && <ChevronDown />}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Link
                    href={links.requestDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center rounded-full border border-white px-4 py-2 text-[10px] font-semibold tracking-[0.14em] text-white"
                    onClick={() => setOpen(false)}
                  >
                    REQUEST DEMO
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

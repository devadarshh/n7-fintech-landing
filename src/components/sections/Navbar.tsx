"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ChevronDown } from "@/components/ui/icons";
import { navLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 md:pt-6">
      <Container>
        <nav
          className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl md:px-6"
          aria-label="Main navigation"
        >
          <Link href="/" className="text-xl font-bold tracking-tight text-white">
            N7
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  type="button"
                  className="flex items-center gap-1 text-xs font-semibold tracking-widest text-white/90 transition hover:text-white"
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown />}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button variant="ghost" className="!py-2.5 !px-5 !text-xs">
              REQUEST DEMO
            </Button>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            <span className={cn("h-0.5 w-6 bg-white transition", open && "translate-y-2 rotate-45")} />
            <span className={cn("h-0.5 w-6 bg-white transition", open && "opacity-0")} />
            <span className={cn("h-0.5 w-6 bg-white transition", open && "-translate-y-2 -rotate-45")} />
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-bg-dark-elevated md:hidden"
            >
              <ul className="flex flex-col p-4">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-3 text-sm font-semibold tracking-wider text-white"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                      {link.hasDropdown && <ChevronDown />}
                    </button>
                  </li>
                ))}
                <li className="pt-2">
                  <Button variant="ghost" className="w-full">
                    REQUEST DEMO
                  </Button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}

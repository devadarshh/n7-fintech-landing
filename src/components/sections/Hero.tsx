"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { BalanceCard, ActivityCard } from "@/components/ui/GlassCard";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { trustedLogos } from "@/data/trustedBy";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="pointer-events-none absolute -right-32 top-20 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-3xl" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              The new foundation of modern banking
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 max-w-lg text-base leading-relaxed text-text-muted md:text-lg"
            >
              We drive innovation and growth, provide seamless customer experience and operational
              excellence for financial institutions worldwide.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="primary">REQUEST DEMO</Button>
              <Button variant="ghost">CONTACT US</Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none"
          >
            <div className="relative h-full min-h-[400px] overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Professional using banking app on laptop and phone"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent" />
            </div>
            <ActivityCard className="absolute left-2 top-6 z-10 scale-90 sm:scale-100 md:left-4" />
            <BalanceCard className="absolute bottom-6 right-2 z-10 scale-90 sm:scale-100 md:right-4" />
          </motion.div>
        </div>

        <SectionReveal className="mt-16 border-t border-white/10 pt-10 md:mt-20">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-text-muted">
            Trusted By:
          </p>
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            {trustedLogos.map((logo) => (
              <span
                key={logo}
                className="text-sm font-semibold tracking-wide text-white/30 transition hover:text-white/50 md:text-base"
              >
                {logo}
              </span>
            ))}
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}

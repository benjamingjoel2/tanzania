"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { ImageAsset } from "@/data/types";
import { SmartImage } from "./SmartImage";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Image "wipe" reveal: the frame slides in one way while the photo slides the
 * other and settles from a slight zoom.
 */
export function ImageReveal({
  image,
  className,
  sizes = "100vw",
  priority,
  imgClassName,
  from = "left",
}: {
  image: ImageAsset;
  className?: string;
  sizes?: string;
  priority?: boolean;
  imgClassName?: string;
  from?: "left" | "bottom";
}) {
  const reduce = useReducedMotion();
  const axis = from === "left" ? "x" : "y";
  return (
    <div className={cn("relative overflow-hidden bg-sand", className)}>
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={reduce ? false : { [axis]: "-50%", opacity: 0 }}
        whileInView={{ [axis]: "0%", opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={{ duration: 1.1, ease }}
      >
        <motion.div
          className="absolute inset-0"
          initial={reduce ? false : { [axis]: "50%", scale: 1.2 }}
          whileInView={{ [axis]: "0%", scale: 1 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 1.1, ease }}
        >
          <SmartImage image={image} fill sizes={sizes} priority={priority} className={cn("object-cover", imgClassName)} />
        </motion.div>
      </motion.div>
    </div>
  );
}

/** Heading that reveals word by word from behind a mask. */
export function SplitReveal({
  text,
  as: Tag = "h2",
  className,
  delay = 0,
  animateOnMount = false,
}: {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  animateOnMount?: boolean;
}) {
  const words = text.split(" ");
  if (animateOnMount) {
    // Above the fold: animate with CSS so the text paints without waiting for JS.
    const Plain = Tag;
    return (
      <Plain className={className} aria-label={text}>
        {words.map((w, i) => (
          <span key={`${w}-${i}`} aria-hidden className="inline-block overflow-hidden pb-[0.08em] align-bottom">
            <span className="inline-block animate-word-rise" style={{ animationDelay: `${delay + i * 0.06}s` }}>
              {w}
              {i < words.length - 1 ? "\u00a0" : ""}
            </span>
          </span>
        ))}
      </Plain>
    );
  }
  const MotionTag = motion[Tag];
  const trigger = { initial: "hidden", whileInView: "show", viewport: { once: true, margin: "0px 0px -10% 0px" } };
  return (
    <MotionTag
      className={className}
      aria-label={text}
      {...trigger}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: delay } } }}
    >
      {words.map((w, i) => (
        <span key={`${w}-${i}`} aria-hidden className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className="inline-block"
            variants={{ hidden: { y: "105%" }, show: { y: "0%", transition: { duration: 0.9, ease } } }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

/** Hairline that draws in from the left when it enters view. */
export { Reveal } from "./Reveal";

export function LineDraw({ className, dark }: { className?: string; dark?: boolean }) {
  return (
    <motion.span
      aria-hidden
      className={cn("block h-px w-full origin-left", dark ? "bg-white/20" : "bg-charcoal/15", className)}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease }}
    />
  );
}

/** Banner image that slowly zooms as the page scrolls past it. */
export function ZoomOnScroll({
  image,
  className,
  to = 1.15,
  priority,
  sizes = "100vw",
}: {
  image: ImageAsset;
  className?: string;
  to?: number;
  priority?: boolean;
  sizes?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, to]);
  return (
    <div ref={ref} className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
      <motion.div style={{ scale }} className="absolute inset-0">
        <SmartImage image={image} fill priority={priority} sizes={sizes} className="object-cover" />
      </motion.div>
    </div>
  );
}

/** Figure that grows from a framed 80% to full width as it scrolls into view. */
export function ZoomToFill({ image, children, className }: { image: ImageAsset; children?: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  return (
    <div ref={ref} className={cn("relative h-[85svh] overflow-hidden md:h-[100svh]", className)}>
      <motion.div style={{ scale }} className="absolute inset-0 origin-center">
        <SmartImage image={image} fill sizes="100vw" className="object-cover" />
        <div aria-hidden className="absolute inset-0 bg-black/25" />
      </motion.div>
      {children && <div className="relative z-10 grid h-full place-items-center">{children}</div>}
    </div>
  );
}

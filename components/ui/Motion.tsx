import type { ImageAsset } from "@/data/types";
import { SmartImage } from "./SmartImage";
import { cn } from "@/lib/utils";

/*
 * Scroll-triggered effects as server-rendered markup. The animation lives in CSS
 * (globals.css, "Scroll effects") and starts when the shared RevealObserver marks
 * the element with [data-in]. Scroll-linked zooms are in ./ScrollZoom (client).
 */

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
  return (
    <div data-wipe={from === "left" ? "x" : "y"} className={cn("relative overflow-hidden bg-sand", className)}>
      <div className="wipe-frame absolute inset-0 overflow-hidden">
        <div className="wipe-photo absolute inset-0">
          <SmartImage image={image} fill sizes={sizes} priority={priority} className={cn("object-cover", imgClassName)} />
        </div>
      </div>
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
    return (
      <Tag className={className} aria-label={text}>
        {words.map((w, i) => (
          <span key={`${w}-${i}`} aria-hidden className="inline-block overflow-hidden pb-[0.08em] align-bottom">
            <span className="inline-block animate-word-rise" style={{ animationDelay: `${delay + i * 0.06}s` }}>
              {w}
              {i < words.length - 1 ? " " : ""}
            </span>
          </span>
        ))}
      </Tag>
    );
  }
  return (
    <Tag className={className} aria-label={text} data-split="">
      {words.map((w, i) => (
        <span key={`${w}-${i}`} aria-hidden className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <span className="split-word inline-block" style={{ transitionDelay: `${delay + i * 0.06}s` }}>
            {w}
            {i < words.length - 1 ? "\u00a0" : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}

export { Reveal } from "./Reveal";
export { ZoomOnScroll, ZoomToFill } from "./ScrollZoom";

/** Hairline that draws in from the left when it enters view. */
export function LineDraw({ className, dark }: { className?: string; dark?: boolean }) {
  return (
    <span
      aria-hidden
      data-line=""
      className={cn("block h-px w-full origin-left", dark ? "bg-white/20" : "bg-charcoal/15", className)}
    />
  );
}

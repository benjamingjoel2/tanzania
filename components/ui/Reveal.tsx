/**
 * Scroll reveals as plain server-rendered markup: CSS transitions in globals.css,
 * triggered by one shared observer (components/layout/RevealObserver.tsx). No JS ships per element.
 */
type DivProps = React.HTMLAttributes<HTMLDivElement>;

interface RevealProps extends DivProps {
  delay?: number;
  y?: number;
}

/** Fades and lifts content into view once, as it enters the viewport. */
export function Reveal({ delay = 0, y = 28, style, children, ...props }: RevealProps) {
  return (
    <div
      data-rv=""
      style={{ ...style, ["--rv-y" as string]: `${y}px`, ...(delay ? { ["--rv-d" as string]: `${delay}s` } : {}) }}
      {...props}
    >
      {children}
    </div>
  );
}

/** Parent for staggered children; pair with <RevealItem>. */
export function RevealGroup({ children, stagger = 0.08, ...props }: DivProps & { stagger?: number }) {
  return (
    <div data-rv-group={stagger} {...props}>
      {children}
    </div>
  );
}

export function RevealItem({ children, ...props }: DivProps) {
  return (
    <div data-rv-item="" {...props}>
      {children}
    </div>
  );
}

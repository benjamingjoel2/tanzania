import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "dark" | "light" | "outline" | "outline-light" | "link";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-[background-color,color,border-color,transform] duration-300 ease-out-soft disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-savanna text-charcoal hover:bg-savanna-light",
  dark: "bg-charcoal text-snow hover:bg-acacia",
  light: "bg-snow text-charcoal hover:bg-white",
  outline: "border border-charcoal/25 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-snow",
  "outline-light": "border border-white/40 text-white hover:bg-white hover:text-charcoal",
  link: "px-0! py-0! rounded-none text-charcoal underline-offset-[6px] hover:underline",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-[0.95rem]",
  lg: "px-7 py-4 text-base",
};

export function buttonClasses(variant: ButtonVariant = "primary", size: ButtonSize = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <ArrowRight
      aria-hidden
      className={cn("size-4 transition-transform duration-300 ease-out-soft group-hover/btn:translate-x-1", className)}
    />
  );
}

interface ButtonLinkProps extends Omit<React.ComponentProps<typeof Link>, "className"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: boolean;
  className?: string;
}

export function ButtonLink({ variant, size, arrow, className, children, ...props }: ButtonLinkProps) {
  return (
    <Link className={buttonClasses(variant, size, className)} {...props}>
      {children}
      {arrow && <ArrowIcon />}
    </Link>
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: boolean;
}

export function Button({ variant, size, arrow, className, children, type = "button", ...props }: ButtonProps) {
  return (
    <button type={type} className={buttonClasses(variant, size, className)} {...props}>
      {children}
      {arrow && <ArrowIcon />}
    </button>
  );
}

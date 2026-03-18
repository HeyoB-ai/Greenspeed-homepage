import { ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "white";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gs-teal text-white hover:bg-gs-teal-dark border-2 border-gs-teal hover:border-gs-teal-dark",
  secondary:
    "bg-transparent text-gs-teal border-2 border-gs-teal hover:bg-gs-teal hover:text-white",
  white:
    "bg-white text-gs-teal border-2 border-white hover:bg-gs-teal-light",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold font-dm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gs-teal focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}

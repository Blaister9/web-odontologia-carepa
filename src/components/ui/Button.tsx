import { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "emergency";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  target,
  rel,
  ...props
}: ButtonProps) {
  const classes = [
    "button",
    `button--${variant}`,
    `button--${size}`,
    fullWidth ? "button--full" : "",
    className ?? ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      className={classes}
      target={target}
      rel={target === "_blank" ? rel ?? "noreferrer" : rel}
      {...props}
    >
      {children}
    </a>
  );
}

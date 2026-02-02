import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-neutral-200 bg-white p-6 ${
        hover ? "transition-shadow hover:shadow-lg" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

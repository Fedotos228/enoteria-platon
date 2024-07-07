import { cn } from "@/lib/utils";
import React from "react";

export default function Grid({
  children,
  gridSize = 4,
  className
}: {
  children: React.ReactNode;
  gridSize?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(`grid gap-4 md:gap-5`, className)}
      style={{ gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))` }}
    >
      {children}
    </div>
  );
}

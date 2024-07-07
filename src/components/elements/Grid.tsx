import React from "react";

export default function Grid({
  children,
  gridSize = 4,
}: {
  children: React.ReactNode;
  gridSize?: number;
}) {
  return (
    <div
      className={`grid gap-4 md:gap-5`}
      style={{ gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))` }}
    >
      {children}
    </div>
  );
}

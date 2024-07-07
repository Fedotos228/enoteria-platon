import React from "react";

export default function Grid({
  children,
  gridSize = 4,
}: {
  children: React.ReactNode;
  gridSize?: number;
}) {
  return (
    <div className={`grid grid-cols-${gridSize} gap-4 md:gap-5`}>
      {children}
    </div>
  );
}

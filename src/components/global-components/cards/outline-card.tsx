import React, { ReactNode } from "react";

interface OutlineCardProps {
  title: string;
  children: ReactNode;
}

function OutlineCard({ title, children }: OutlineCardProps) {
  return (
    <div className="border border-border rounded-md overflow-hidden text-white h-full w-full flex flex-col">
      <div className="px-6 py-4 font-semibold text-base bg-background-1">
        {title}
      </div>
      <div className="p-6 bg-background h-full">
        {children}
      </div>
    </div>
  );
}

export default OutlineCard;

import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

function GlobalTooltip({
  tooltip,
  children,
}: {
  tooltip: string;
  children: any;
}) {
  return (
    <Tooltip>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent className="p-2 rounded-md text-background text-sm font-normal">
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
}

export default GlobalTooltip;

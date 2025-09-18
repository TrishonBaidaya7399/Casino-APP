import React from "react";
import type { ReactNode } from "react";
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface GlobalModalProps {
  title?: ReactNode;
  children: ReactNode;
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

const GlobalModal: React.FC<GlobalModalProps> = ({
  title,
  children,
  open,
  onOpenChange,
  className,
}) => {
  const contentStyles = cn(
    "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-fit rounded-lg bg-background p-0 shadow-lg",
    `${className}`
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm" />
        <DialogContent className={contentStyles}>
          <DialogHeader className="flex flex-row justify-between h-fit items-center border-b p-6 bg-sidebar rounded-tr-lg rounded-tl-lg">
            <DialogTitle className="text-lg font-semibold text-foreground">
              {title}
            </DialogTitle>
            <DialogClose className="text-foreground-muted hover:text-foreground">
              <X
                size={20}
                className="border border-foreground-muted rounded-full p-[0.25rem]"
              />
            </DialogClose>
          </DialogHeader>
          <div className="text-foreground p-6 overflow-y-auto custom-scrollbar h-full !max-h-[80vh]">
            {children}
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default GlobalModal;

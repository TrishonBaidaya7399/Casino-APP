"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  initialDate?: Date | undefined;
  control?: any; // Optional control prop to bypass useFormContext
}

export function DatePicker({
  name,
  label,
  placeholder,
  className = "",
  initialDate,
  control: externalControl, // Allow external control prop
}: DatePickerProps) {
  // Use external control if provided, otherwise use context
  const context = useFormContext();
  const control = externalControl || (context ? context.control : null);

  if (!control) {
    throw new Error(
      "DatePicker must be used within a FormProvider or provide a control prop"
    );
  }

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={initialDate?.toISOString().split("T")[0] || ""}
      render={({ field: { onChange, value } }) => {
        const dateValue = value ? new Date(value) : undefined;

        return (
          <div className={`flex flex-col gap-3 ${className}`}>
            {label && (
              <Label htmlFor={name} className="px-1">
                {label}
              </Label>
            )}
            <Popover>
              <PopoverTrigger asChild >
                <Button
                  variant="outline"
                  id={name}
                  className="w-full justify-between font-normal bg-sidebar !h-12 border-none"
                >
                  {dateValue ? dateValue.toLocaleDateString() : placeholder || "Select date"}
                  <ChevronDown />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="center"
              >
                <Calendar
                  mode="single"
                  selected={dateValue}
                  captionLayout="dropdown"
                  onSelect={(d) => {
                    onChange(d?.toISOString().split("T")[0] || "");
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
        );
      }}
    />
  );
}

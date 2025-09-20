"use client";

import { useState } from "react";
import { Command, CommandInput, CommandList, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";

const currencies = [
  { value: "BTC", label: "Bitcoin", icon: "₿" },
  { value: "USDT", label: "USD Tether", icon: "₮" },
  { value: "ETH", label: "Ethereum", icon: "Ξ" },
  { value: "LTC", label: "Litecoin", icon: "Ł" },
  { value: "TRY", label: "Turkish Lira", icon: "₺" },
];

export default function GlobalCurrencySelect({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const [open, setOpen] = useState(false);
  const selectedCurrency = currencies.find((c) => c.value === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" className="w-full justify-between">
          {selectedCurrency ? (
            <div className="flex items-center gap-2">
              <span>{selectedCurrency.icon}</span>
              <span>{selectedCurrency.label}</span>
            </div>
          ) : (
            "Select currency..."
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search currencies..." />
          <CommandList>
            {currencies.map((currency) => (
              <CommandItem
                key={currency.value}
                value={currency.value}
                onSelect={(currentValue : string) => {
                  onChange(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <div className="flex items-center gap-2">
                  <span>{currency.icon}</span>
                  <span>{currency.label}</span>
                </div>
                <Check
                  className={`ml-auto h-4 w-4 ${value === currency.value ? "opacity-100" : "opacity-0"}`}
                />
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
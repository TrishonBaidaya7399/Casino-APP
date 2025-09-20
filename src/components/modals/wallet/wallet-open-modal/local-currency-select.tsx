"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const localCurrencies = [
  {
    value: "TRY",
    label: "Turkish Lira",
    icon: (
      <Image
        src="/icons/turkey-flag.svg"
        alt="pointer"
        height={16}
        width={16}
      />
    ),
    amount: "0.00",
    usdEquivalent: "$0.00 USD",
  },
  {
    value: "USD",
    label: "US Dollar",
    icon: (
      <Image src="/icons/us-flag.svg" alt="pointer" height={16} width={16} />
    ),
    amount: "0.00",
    usdEquivalent: "$0.00 USD",
  },
];

export default function LocalCurrencySelect({
  onCurrencySelect,
  value,
}: {
  value?: string;
  onCurrencySelect: (currency: string) => void;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(
    searchParams.get("currency") || value || localCurrencies[0].value
  );

//   useEffect(() => {
//     onCurrencySelect(selectedCurrency || "");
//   }, [selectedCurrency, onCurrencySelect]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className="w-full h-fit border rounded-lg hover:bg-foreground/55 p-0"
          onClick={() => setOpen(true)}
        >
          <div className="w-full bg-sidebar p-4 rounded-lg flex flex-row items-center justify-between gap-6">
            <div className="left flex flex-row gap-2 items-center">
              {selectedCurrency &&
                localCurrencies.find((c) => c.value === selectedCurrency)?.icon}
              <div className="flex flex-col gap-1">
                <div className="text-base font-semibold text-foreground">
                  {selectedCurrency &&
                    localCurrencies.find((c) => c.value === selectedCurrency)
                      ?.value}
                </div>
                <div className="text-sm font-normal text-foreground/55">
                  {selectedCurrency &&
                    localCurrencies.find((c) => c.value === selectedCurrency)
                      ?.label}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <div className="text-base font-semibold text-foreground">
                {selectedCurrency &&
                  localCurrencies.find((c) => c.value === selectedCurrency)
                    ?.amount}
              </div>
              <div className="text-sm font-normal text-foreground/55">
                {selectedCurrency &&
                  localCurrencies.find((c) => c.value === selectedCurrency)
                    ?.usdEquivalent}
              </div>
            </div>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 bg-background">
        <Command>
          <CommandInput
            placeholder="Search local currencies..."
            className="text-foreground placeholder:text-foreground-muted h-10 text-sm"
          />
          <CommandList>
            {localCurrencies.map((currency) => (
              <CommandItem
                key={currency.value}
                value={currency.value}
                onSelect={(currentValue) => {
                  setSelectedCurrency(currentValue);
                  setOpen(false);
                  const params = new URLSearchParams(searchParams.toString());
                  params.set("currency", currentValue);
                  router.push(`?${params.toString()}`, { scroll: false });
                  onCurrencySelect(currentValue);
                }}
              >
                <div className="flex items-center justify-between w-full p-2">
                  <div className="flex items-center gap-2">
                    <span>{currency.icon}</span>
                    <span>{currency.value}</span>
                  </div>
                  <span className="text-foreground/55">{currency.amount}</span>
                </div>
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

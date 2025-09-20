"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSidebarStore } from "@/store/sidebar-store";
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown } from "lucide-react";
import Image from "next/image";

const currencies = [
  {
    value: "BTC",
    label: "Bitcoin",
    icon: (
      <Image
        src="/icons/bit-coin-svg.svg"
        alt="pointer"
        height={16}
        width={16}
      />
    ),
    amount: "0.00000033",
  },
  {
    value: "USDT",
    label: "USD Tether",
    icon: (
      <Image src="/icons/usdt-svg.svg" alt="pointer" height={16} width={16} />
    ),
    amount: "0.00000033",
  },
  {
    value: "ETH",
    label: "Ethereum",
    icon: (
      <Image
        src="/icons/ethereum-svg.svg"
        alt="pointer"
        height={16}
        width={16}
      />
    ),
    amount: "0.00000033",
  },
  {
    value: "LTC",
    label: "Litecoin",
    icon: (
      <Image src="/icons/ltc-svg.svg" alt="pointer" height={16} width={16} />
    ),
    amount: "0.00000033",
  },
];

export default function GlobalWalletCurrencySelect() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toggleWalletOpenModalOpen } = useSidebarStore();
  const [open, setOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(
    searchParams.get("currency") || currencies[0].value
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className="w-fit hover:bg-foreground/15"
          onClick={() => setOpen(true)}
        >
          <span className="text-foreground/55 ml-2 flex flex-row items-center gap-2 flex-nowrap">
            {selectedCurrency &&
              currencies.find((c) => c.value === selectedCurrency)?.amount}{" "}
            {selectedCurrency &&
              currencies.find((c) => c.value === selectedCurrency)?.icon}
            {selectedCurrency &&
              currencies.find((c) => c.value === selectedCurrency)?.value}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit p-0">
        <Command>
          <CommandInput
            placeholder="Search currencies..."
            className="text-foreground placeholder:text-foreground/55"
          />
          <CommandList>
            {currencies.map((currency) => (
              <CommandItem
                key={currency.value}
                value={currency.value}
                onSelect={(currentValue) => {
                  setSelectedCurrency(currentValue);
                  setOpen(false);
                  const params = new URLSearchParams(searchParams.toString());
                  params.set("currency", currentValue);
                  params.set("step", "1");
                  router.push(`?${params.toString()}`, { scroll: false });
                  toggleWalletOpenModalOpen(); 
                }}
                className="text-foreground"
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

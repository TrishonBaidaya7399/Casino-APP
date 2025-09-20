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
import Image from "next/image";

const cryptoCurrencies = [
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
    usdEquivalent: "$0.00 USD",
  },
  {
    value: "USDT",
    label: "USD Tether",
    icon: (
      <Image src="/icons/usdt-svg.svg" alt="pointer" height={16} width={16} />
    ),
    amount: "0.00000033",
    usdEquivalent: "$0.00 USD",
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
    usdEquivalent: "$0.00 USD",
  },
  {
    value: "LTC",
    label: "Litecoin",
    icon: (
      <Image src="/icons/ltc-svg.svg" alt="pointer" height={16} width={16} />
    ),
    amount: "0.00000033",
    usdEquivalent: "$0.00 USD",
  },
];


export default function WalletCurrencySelect({
  onCurrencySelect,
  value,
}: {
  value?: string;
  onCurrencySelect: (currency: string) => void;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setWalletOpenModalOpen } = useSidebarStore();
  const [open, setOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(
    searchParams.get("currency") || value || cryptoCurrencies[0].value
  );

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
                cryptoCurrencies.find((c) => c.value === selectedCurrency)
                  ?.icon}
              <div className="flex flex-col gap-1">
                <div className="text-base font-semibold text-foreground">
                  {selectedCurrency &&
                    cryptoCurrencies.find((c) => c.value === selectedCurrency)
                      ?.value}
                </div>
                <div className="text-sm font-normal text-foreground/55">
                  {selectedCurrency &&
                    cryptoCurrencies.find((c) => c.value === selectedCurrency)
                      ?.label}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <div className="text-base font-semibold text-foreground">
                {selectedCurrency &&
                  cryptoCurrencies.find((c) => c.value === selectedCurrency)
                    ?.amount}
              </div>
              <div className="text-sm font-normal text-foreground/55">
                {selectedCurrency &&
                  cryptoCurrencies.find((c) => c.value === selectedCurrency)
                    ?.usdEquivalent}
              </div>
            </div>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 bg-background">
        <Command>
          <CommandInput
            placeholder="Search currencies..."
            className="text-foreground placeholder:text-foreground-muted h-10 text-sm"
          />
          <CommandList>
            {cryptoCurrencies.map((currency) => (
              <CommandItem
                key={currency.value}
                value={currency.value}
                onSelect={(currentValue) => {
                  setSelectedCurrency(currentValue);
                  setOpen(false);
                  const params = new URLSearchParams(searchParams.toString());
                  params.set("currency", currentValue);
                  router.push(`?${params.toString()}`, { scroll: false });
                  setWalletOpenModalOpen(true);
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

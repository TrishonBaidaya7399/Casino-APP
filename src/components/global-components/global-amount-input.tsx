"use client";

import { Input } from "@/components/ui/input";
import GlobalCurrencySelect from "./global-currency-select";

export default function GlobalAmountInput({
  value,
  onChange,
  currency,
  onCurrencyChange,
}: {
  value: string;
  onChange: (value: string) => void;
  currency: string;
  onCurrencyChange: (value: string) => void;
}) {
  return (
    <div className="relative w-full">
      <Input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="0"
        className="pr-16"
      />
      <div className="absolute right-0 top-0 h-full flex items-center pr-2">
        <GlobalCurrencySelect value={currency} onChange={onCurrencyChange} />
      </div>
    </div>
  );
}

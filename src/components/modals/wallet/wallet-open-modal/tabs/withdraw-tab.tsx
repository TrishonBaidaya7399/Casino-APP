"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { GlobalTabs } from "@/components/global-components/GlobalTabs";
import WalletCurrencySelect from "../currency-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import Image from "next/image";
import CopySvg from "@/components/common/svg_icons/copy-svg";
import { useSearchParams } from "next/navigation";
import LocalCurrencySelect from "../local-currency-select";

const formSchema = z.object({
  amount: z
    .string()
    .min(1, "Amount is required")
    .regex(/^\d*\.?\d+$/, "Amount must be a valid number"),
  address: z.string().min(1, "Address is required"),
  currency: z.string().min(1, "Currency is required"),
});

type FormData = z.infer<typeof formSchema>;

export default function WithdrawTab() {
  const [copied, setCopied] = useState(false);
  const searchParams = useSearchParams();
  const [selectedTab, setSelectedTab] = useState<string | null>(
    searchParams.get("subtab") || "crypto"
  );
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "0.00000000",
      address: "",
      currency: "ETH",
    },
    mode: "onChange",
  });

  const handleSubmit = async (data: FormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      toast.success("Withdrawal successful!");
      form.reset();
    } catch (error: any) {
      toast.error(error.message as string);
    }
  };

  const handleCopyAddress = () => {
    const address = form.getValues("address");
    if (address) {
      navigator.clipboard.writeText(address);
      setCopied(true);
      toast.success("Address copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleMaxAmount = () => {
    form.setValue("amount", "1000.00000000");
    form.trigger("amount");
  };

  const handleCurrencySelect = (currency: string) => {
    form.setValue("currency", currency);
    form.trigger("currency");
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <GlobalTabs
        data={[
          { value: "crypto", label: "Crypto" },
          { value: "local", label: "Local Currency" },
        ]}
        tabName="subtab"
        tabButtonFull
        onTabChange={(value) => setSelectedTab(value)}
      />
      {selectedTab === "crypto" ? (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4 w-full"
          >
            <WalletCurrencySelect onCurrencySelect={handleCurrencySelect} />
            <FormField
              control={form.control}
              name="currency"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-sm font-medium text-foreground/55">
                    Network
                  </FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full rounded-lg">
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ETH">ETH</SelectItem>
                        <SelectItem value="BTC">BTC</SelectItem>
                        <SelectItem value="USDT">USDT</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage className="text-xs text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-sm font-medium text-foreground/55">
                    Amount*
                  </FormLabel>
                  <FormControl className="bg-sidebar h-full">
                    <div className="relative flex items-center rounded-lg bg-sidebar pr-2">
                      <Input
                        {...field}
                        type="text"
                        className="w-full h-12 border-none focus:ring-0 text-sm"
                        placeholder="Enter amount"
                      />
                      <Image
                        src="/icons/bit-coin-svg.svg"
                        alt="pointer"
                        height={16}
                        width={16}
                      />
                      <Button
                        type="button"
                        variant="gray"
                        className="w-15 h-8 text-white rounded-[6px] text-sm ml-2.5"
                        onClick={handleMaxAmount}
                      >
                        Max
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-xs text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-sm font-medium text-foreground/55">
                    Address*
                  </FormLabel>
                  <FormControl className="bg-sidebar h-full">
                    <div className="relative flex items-center border rounded-lg pr-2">
                      <Input
                        {...field}
                        type="text"
                        className="w-full h-12 border-none focus:ring-0 text-sm"
                        placeholder="Enter wallet address"
                      />
                      <Button
                        type="button"
                        variant="gray"
                        className={`h-8 w-8 p-1 ${
                          copied ? "text-chart-1" : "text-foreground"
                        } rounded-[6px] text-sm ml-2.5`}
                        onClick={handleCopyAddress}
                      >
                        <CopySvg />
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-xs text-red-500" />
                </FormItem>
              )}
            />
            <div className="flex flex-col px-2">
              <p className="text-sm flex flex-row items-center gap-6 justify-between text-foreground/55">
                Minimum Withdrawal{" "}
                <span className="text-foreground flex flex-row gap-2">
                  2.50000000{" "}
                  <Image
                    src="/icons/binance-svg.svg"
                    alt="pointer"
                    height={16}
                    width={16}
                  />
                </span>
              </p>
              <p className="text-sm flex flex-row items-center gap-6 justify-between text-foreground/55">
                Transaction Fee{" "}
                <span className="text-foreground flex flex-row gap-2">
                  1.00000000{" "}
                  <Image
                    src="/icons/binance-svg.svg"
                    alt="pointer"
                    height={16}
                    width={16}
                  />
                </span>
              </p>
            </div>
            <Button
              type="submit"
              variant="orangeGradient"
              className="w-full h-12"
              disabled={!form.formState.isValid}
            >
              Withdraw
            </Button>
          </form>
        </Form>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4 w-full"
          >
            <FormLabel className="text-sm font-medium text-foreground/55">
              Wallet
            </FormLabel>
            <LocalCurrencySelect onCurrencySelect={handleCurrencySelect} />

            <Button
              type="submit"
              variant="orangeGradient"
              className="w-full h-12"
              disabled={!form.formState.isValid}
            >
              Withdraw
            </Button>
          </form>
        </Form>
      )}
      <div className="mt-14">
        <Button variant="gray" className="w-full h-12">
          Enable 2FA
        </Button>
        <p className="text-xs text-foreground/55 mt-2.5 text-center">
          Improve your account security with Two-Factor Authentication
        </p>
      </div>
    </div>
  );
}

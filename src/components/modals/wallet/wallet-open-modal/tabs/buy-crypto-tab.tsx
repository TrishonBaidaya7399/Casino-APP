"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import WalletCurrencySelect from "../currency-select";

const formSchema = z.object({
  amount: z.string().min(1, "Amount is required"),
  provider: z.string().min(1, "Provider is required").optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function BuyCryptoTab() {
  const [step, setStep] = useState("initial");
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { amount: "0.00000000", provider: "" },
  });

  const handleSubmit = (data: FormData) => {
    console.log(data);
    toast.success("Purchase successful!");
  };

  const handleCurrencySelect = (currency: string) => {
    form.setValue("amount", currency);
    form.trigger("amount");
  };

  return (
    <div className="p-6 flex flex-col gap-4">
      {step === "initial" && (
        <>
          <WalletCurrencySelect onCurrencySelect={handleCurrencySelect} />
          <div className="w-[280px] h-[40px] border border-gray-300 rounded-[8px] flex items-center px-[10px]">
            <input
              {...form.register("amount")}
              className="w-[200px] text-[14px] outline-none"
              defaultValue="0.00000000"
            />
            <button className="w-[60px] h-[30px] bg-orange-500 text-white rounded-[6px] ml-[10px]">
              Max
            </button>
            <span className="text-[14px] ml-[10px]">$0.00</span>
          </div>
          <Button
            onClick={() => setStep("provider")}
            className="w-full h-[40px] bg-orange-500 text-white rounded-[8px] mt-[20px] text-[14px] font-medium"
          >
            Buy
          </Button>
        </>
      )}
      {step === "provider" && (
        <>
          <select
            {...form.register("provider")}
            className="w-[300px] h-[40px] border border-gray-300 rounded-[8px] text-[14px]"
          >
            <option>Provider 1</option>
            <option>Provider 2</option>
          </select>
          <Button
            onClick={form.handleSubmit(handleSubmit)}
            className="w-full h-[40px] bg-orange-500 text-white rounded-[8px] mt-[20px] text-[14px] font-medium"
          >
            Buy
          </Button>
        </>
      )}
      <div className="mt-[10px]">
        <Button className="w-full h-[40px] bg-gray-200 text-gray-700 rounded-[8px] mt-[10px] text-[14px] font-medium">
          Enable 2FA
        </Button>
        <p className="text-[12px] text-gray-500 mt-[10px] text-center">
          Improve your account security with Two-Factor Authentication
        </p>
      </div>
    </div>
  );
}

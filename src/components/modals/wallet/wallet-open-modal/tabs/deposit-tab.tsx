"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import QRCode from "react-qr-code";
import { toast } from "sonner";
import { GlobalTabs } from "@/components/global-components/GlobalTabs";
import WalletCurrencySelect from "../currency-select";

const formSchema = z.object({
  amount: z.string().min(1, "Amount is required"),
  address: z.string().min(1, "Address is required").optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function DepositTab() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "0.00000000",
      address: "H2NT6Z6FJRGYEYRFKFBE3TCLYUHY3MGU2HGM3S0BS0QJS6QKA",
    },
  });

  const handleSubmit = (data: FormData) => {
    console.log(data);
    if (
      form.getValues("address") ===
      "H2NT6Z6FJRGYEYRFKFBE3TCLYUHY3MGU2HGM3S0BS0QJS6QKA"
    ) {
      toast.success("Deposit successful!");
    } else {
      toast.success("Local deposit set successfully!");
    }
  };

  return (
    <div className="p-6 flex flex-col gap-4">
      <GlobalTabs
        data={[
          { value: "crypto", label: "Crypto" },
          { value: "local", label: "Local Currency" },
        ]}
        tabName="subtab"
      />
      {form.formState.isSubmitted && !form.formState.isValid && (
        <p className="text-red-500 text-[12px]">
          Please fill all required fields.
        </p>
      )}
      {form.formState.isSubmitted && form.formState.errors.amount && (
        <p className="text-red-500 text-[12px]">
          {form.formState.errors.amount.message}
        </p>
      )}
      {form.formState.isSubmitted && form.formState.errors.address && (
        <p className="text-red-500 text-[12px]">
          {form.formState.errors.address.message}
        </p>
      )}
      <WalletCurrencySelect />
      <select className="w-[150px] h-[40px] border border-gray-300 rounded-[8px] text-[14px]">
        <option>ETH</option>
      </select>
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
      <div className="w-[280px] h-[40px] border border-gray-300 rounded-[8px] flex items-center px-[10px]">
        <input
          {...form.register("address")}
          className="w-[250px] text-[14px] outline-none"
          defaultValue="H2NT6Z6FJRGYEYRFKFBE3TCLYUHY3MGU2HGM3S0BS0QJS6QKA"
        />
        <span className="w-[20px] h-[20px] ml-[5px]">📋</span>
      </div>
      <QRCode
        value="H2NT6Z6FJRGYEYRFKFBE3TCLYUHY3MGU2HGM3S0BS0QJS6QKA"
        className="w-[100px] h-[100px] mt-[10px]"
      />
      <p className="text-[14px] mt-[10px]">
        Minimum Deposit: 2.50000000 <span className="text-yellow-500">₿</span>
      </p>
      <p className="text-[14px] mt-[5px]">
        Transaction Fee: 1.00000000 <span className="text-yellow-500">₿</span>
      </p>
      <Button
        onClick={form.handleSubmit(handleSubmit)}
        className="w-full h-[40px] bg-orange-500 text-white rounded-[8px] mt-[20px] text-[14px] font-medium"
      >
        Deposit
      </Button>
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

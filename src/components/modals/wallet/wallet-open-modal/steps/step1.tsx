// components/steps/Step1.tsx
"use client";

import GlobalAmountInput from "@/components/global-components/global-amount-input";
import GlobalCurrencySelect from "@/components/global-components/global-currency-select";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";

export default function Step1({ form }: { form: any }) {
  return (
    <Form {...form}>
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="currency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Buy</FormLabel>
              <FormControl>
                <GlobalCurrencySelect
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount*</FormLabel>
              <FormControl>
                <GlobalAmountInput
                  value={field.value}
                  onChange={field.onChange}
                  currency={form.watch("currency")}
                  onCurrencyChange={() => {}}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
    </Form>
  );
}

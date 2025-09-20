// components/steps/Step3.tsx
"use client";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Step3({ form }: { form: any }) {
  return (
    <Form {...form}>
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="provider"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Payment Provider</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Swapped.com" id="swapped" />
                    <label htmlFor="swapped">Swapped.com</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="MoonPay" id="moonpay" />
                    <label htmlFor="moonpay">MoonPay</label>
                    <span className="ml-auto text-foreground/55">
                      You get 0.023 BNB
                    </span>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="text-foreground/55 text-center">
          Disclaimer: Ut incididunt ac lorem sit amet fermentum. Vivamus
          eleifend vitae magna at posuere. Vivamus sit amet blandit sapien, nec
          interdum augue. Aliquam maximus risus non lacinia, a dapibus turpis
          malesuada.
        </div>
      </div>
    </Form>
  );
}

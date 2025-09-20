"use client";

import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import  QRCode  from "react-qr-code";

export default function Step2({ form }: { form: any }) {
  return (
    <Form {...form}>
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  value={field.value || "H2NT6Z6FJRGYEYRFKFBE3TCLYUHY3MGU2HGM3S0BS0QJS6QKA"}
                  readOnly
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <QRCode value={form.watch("address") || "H2NT6Z6FJRGYEYRFKFBE3TCLYUHY3MGU2HGM3S0BS0QJS6QKA"} />
        </div>
        <div className="text-center text-foreground/55">Credited</div>
        <div className="text-center text-foreground/55">1 Confirmations</div>
      </div>
    </Form>
  );
}